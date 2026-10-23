import { build } from 'esbuild';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const temp = await mkdtemp(join(tmpdir(), 'driving-tests-'));
try {
  const result = await build({ entryPoints: ['tests/theory.test.mjs'], bundle: true, platform: 'node', format: 'esm', write: false });
  const file = join(temp, 'test.mjs');
  await writeFile(file, result.outputFiles[0].text);
  await import(pathToFileURL(file).href);
} finally {
  await rm(temp, { recursive: true, force: true });
}
