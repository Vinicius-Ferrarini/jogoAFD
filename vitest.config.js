import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.js'],
    testTimeout: 600000,
    hookTimeout: 600000,
    pool: 'threads',
    threads: {
      singleThread: true,
    },
  },
});
