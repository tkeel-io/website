module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'color-named': ['never', { ignore: ['inside-function'] }],
    'selector-list-comma-space-after': 'always-single-line',
    'no-unknown-animations': true,
  },
};
