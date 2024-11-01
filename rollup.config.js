import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'auto'
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true,
      clean: true,
    }),
  ],
  external: [
    'aws-sdk' // Exclude AWS SDK since it's provided by Lambda@Edge
  ]
};
