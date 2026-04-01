#!/usr/bin/env node
import { loadUsers, saveUsers, hashPassword } from './auth.js';

const [,, command, ...args] = process.argv;

const usage = `
Usage:
  node server/admin.js add-user <name> <password>
  node server/admin.js change-password <name> <password>
  node server/admin.js delete-user <name>
  node server/admin.js list-users
`;

function sanitiseName(raw) {
  if (!raw) return null;
  const safe = raw.toLowerCase().trim().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
  if (!safe || safe.length > 30) return null;
  return safe;
}

async function main() {
  if (!command) {
    console.log(usage);
    process.exit(1);
  }

  const users = loadUsers();

  switch (command) {
    case 'add-user': {
      const [rawName, password] = args;
      if (!rawName || !password) {
        console.error('Usage: add-user <name> <password>');
        process.exit(1);
      }
      const name = sanitiseName(rawName);
      if (!name) {
        console.error('Invalid name (letters, numbers only, max 30 chars)');
        process.exit(1);
      }
      if (users[name]) {
        console.error(`User "${name}" already exists. Use change-password instead.`);
        process.exit(1);
      }
      users[name] = { hash: await hashPassword(password), createdAt: new Date().toISOString() };
      saveUsers(users);
      console.log(`Created user: ${name}`);
      break;
    }

    case 'change-password': {
      const [rawName, password] = args;
      if (!rawName || !password) {
        console.error('Usage: change-password <name> <password>');
        process.exit(1);
      }
      const name = sanitiseName(rawName);
      if (!name || !users[name]) {
        console.error(`User "${rawName}" not found.`);
        process.exit(1);
      }
      users[name].hash = await hashPassword(password);
      saveUsers(users);
      console.log(`Password changed for: ${name}`);
      break;
    }

    case 'delete-user': {
      const [rawName] = args;
      if (!rawName) {
        console.error('Usage: delete-user <name>');
        process.exit(1);
      }
      const name = sanitiseName(rawName);
      if (!name || !users[name]) {
        console.error(`User "${rawName}" not found.`);
        process.exit(1);
      }
      delete users[name];
      saveUsers(users);
      console.log(`Deleted user: ${name}`);
      break;
    }

    case 'list-users': {
      const names = Object.keys(users);
      if (names.length === 0) {
        console.log('No users.');
      } else {
        console.log(`Users (${names.length}):`);
        for (const name of names) {
          console.log(`  - ${name} (created: ${users[name].createdAt || 'unknown'})`);
        }
      }
      break;
    }

    default:
      console.error(`Unknown command: ${command}`);
      console.log(usage);
      process.exit(1);
  }
}

main();
