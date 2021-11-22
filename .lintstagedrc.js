module.exports = {
  '*.{js,jsx,ts,tsx,css,scss,json,md}': 'prettier --write',
  '*.{js,jsx,ts,tsx}': 'eslint --fix',
  '*.{css,scss}': 'stylelint --fix',
  '**': 'cspell --no-must-find-files',
};
