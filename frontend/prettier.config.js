module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  overrides: [
    {
      files: 'content /**/*.md',
      options: {
        printWidth: 120,
        proseWrap: 'always',
      },
    },
  ],
};
