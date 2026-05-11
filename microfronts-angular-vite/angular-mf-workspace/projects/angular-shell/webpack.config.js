const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    shoppingMf: "http://localhost:4201/remoteEntry.js",
    paymentMf: "http://localhost:4202/remoteEntry.js",
    cleanArch: "http://localhost:4203/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  sharedMappings: ["@commons-lib"]
});
