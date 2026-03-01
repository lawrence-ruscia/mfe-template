const deps = require('./package.json').dependencies;

export const mfConfig = {
  name: 'mfe_template',
  exposes: {},
  shared: {
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom'],
    },
  },
};
