const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', 'ts', 'tsx', '.json'],
    plugins: [new TsconfigPathsPlugin()],
  },
};
