module.exports = function (api) {
  // api.cache.forever()
  // api.cache.never()
  // api.cache.env()
  // api.cache.async()
  // api.cache.caller()
  // api.cache.assertVersion()
  const isProduction = process.env.NODE_ENV === 'production';
  api.cache.using(() => isProduction);
  api.cache.invalidate(() => isProduction);
  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
  ];
  const plugins = [
    require("@babel/plugin-syntax-dynamic-import"),
    [require("@babel/plugin-proposal-decorators"), {
      "legacy": true
    }],
    [require("@babel/plugin-proposal-class-properties"), {
      "loose": false
    }],
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-destructuring",
    "@babel/plugin-transform-runtime",
  ];
  return {
    presets,
    plugins
  };
}

// module.exports = {
//   presets: [
//     [
//       '@babel/preset-env',
//       {
//         modules: false,
//       },
//     ],
//     '@babel/preset-react',
//   ],
//   plugins: [
//     'styled-components',
//     '@babel/plugin-proposal-class-properties',
//     '@babel/plugin-syntax-dynamic-import',
//   ],
//   env: {
//     production: {
//       only: ['app'],
//       plugins: [
//         'lodash',
//         'transform-react-remove-prop-types',
//         '@babel/plugin-transform-react-inline-elements',
//         '@babel/plugin-transform-react-constant-elements',
//       ],
//     },
//     test: {
//       plugins: [
//         '@babel/plugin-transform-modules-commonjs',
//         'dynamic-import-node',
//       ],
//     },
//   },
// };