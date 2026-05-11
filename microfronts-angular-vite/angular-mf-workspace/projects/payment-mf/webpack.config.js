const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'paymentMf',

  exposes: {
    "./PaymentComponent": "./projects/payment-mf/src/app/payment/payment.component.ts",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto", }),
  },

  sharedMappings: ["@commons-lib"],
});
