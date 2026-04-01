import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store/appStore';
import { login as apiLogin } from '../lib/storage';

export function LoginView() {
  const { login } = useAppStore();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const sanitised = name.trim().toLowerCase().replace(/[^a-z0-9]/g, ' ').trim();
  const isValid = sanitised.length > 0 && sanitised.length <= 30 && password.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setLoading(true);
    setError('');

    const result = await apiLogin(name, password);
    setLoading(false);

    if (result.ok && result.name) {
      login(result.name);
    } else {
      setError(result.error || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          <span className="shimmer-text">Science Revision</span>
        </h1>
        <p className="text-navy-400 text-lg">GCSE Foundation Level</p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="glass-card rounded-2xl p-8"
      >
        <label className="block text-sm font-medium text-navy-300 mb-2">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); setError(''); }}
          placeholder="e.g. Amy"
          maxLength={30}
          autoFocus
          autoComplete="username"
          className="
            w-full px-4 py-3 rounded-xl bg-navy-800 border-2 border-navy-600
            text-white text-lg placeholder-navy-500
            focus:outline-none focus:border-accent
            transition-colors mb-4
          "
        />

        <label className="block text-sm font-medium text-navy-300 mb-2">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(''); }}
          placeholder="Password"
          autoComplete="current-password"
          className="
            w-full px-4 py-3 rounded-xl bg-navy-800 border-2 border-navy-600
            text-white text-lg placeholder-navy-500
            focus:outline-none focus:border-accent
            transition-colors mb-4
          "
        />

        {error && (
          <p className="text-red-400 text-sm mb-4">{error}</p>
        )}

        <button
          type="submit"
          disabled={!isValid || loading}
          className="
            w-full py-3 rounded-xl text-lg font-bold
            bg-gradient-to-r from-accent to-blue-500
            hover:from-accent-light hover:to-blue-400
            disabled:opacity-30 disabled:cursor-not-allowed
            transition-all hover:scale-[1.02] active:scale-[0.98]
          "
        >
          {loading ? 'Logging in...' : "Let's go!"}
        </button>
      </motion.form>
    </div>
  );
}
