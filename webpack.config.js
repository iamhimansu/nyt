import path from 'path';
import WebpackObfuscator from 'webpack-obfuscator';

export default {
  mode: 'production',
  entry: './src/app.ts',
  output: {
    filename: 'app.js',
    path: path.resolve('./dist'),
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new WebpackObfuscator({
      rotateStringArray: true
    }, [])
  ]
};
