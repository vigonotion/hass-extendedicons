const path = require('path');

const common = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.svg$/i,
        use: 'raw-loader'
      },
    ],
  },
}

module.exports = [
  {
    entry: './js/ei.js',
    output: {
      filename: 'custom_components/extendedicons/data/ei.js',
      path: path.resolve(__dirname)
    },
    ...common,
  }
];
