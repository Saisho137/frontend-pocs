const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'cleanArch',

  exposes: {
    "./MainModule": "./projects/clean-architecture/src/app/UI/main/main.module.ts",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto", }),
  },

  sharedMappings: ["@commons-lib"],
});

