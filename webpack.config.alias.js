const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  resolve: {
    modules: ['./src'],
    extensions: ['.js', '.jsx', 'ts', 'tsx', '.json'],
    plugins: [new TsconfigPathsPlugin()],
  },
};
