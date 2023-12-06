module.exports = {
  extends: ['../../.eslintrc.js'],

  parserOptions: {
    tsconfigRootDir: __dirname,
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['@metamask/eslint-config-browser'],
      rules: {
        'jsdoc/require-description': 'off',
        'jsdoc/require-param-description': 'off',
        'jsdoc/check-param-names': 'off',
        'jsdoc/require-returns': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
      },
    },
  ],

  ignorePatterns: ['.cache/', 'public/'],
};
