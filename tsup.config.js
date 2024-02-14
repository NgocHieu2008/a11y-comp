export default {
    entryPoints: ['src/index.ts'],
    format: ['esm', 'cjs'],
    splitting: true,
    minify: true,
    sourcemap: true,
    clean: true,
    outfile: 'dist/a11y-comp.js',
  };