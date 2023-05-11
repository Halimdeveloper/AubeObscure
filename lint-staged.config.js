// eslint-disable-next-line no-undef
module.exports = {
  // Type check TypeScript files
  '**/*.ts?(x)': () => 'npx tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    'npx eslint --fix ' +
      filenames.map((filename) => `"${filename}"`).join(' '),
    'npx prettier --write ' +
      filenames.map((filename) => `"${filename}"`).join(' '),
  ],

  // Format MarkDown and JSON
  '**/*.+(md|json)': (filenames) =>
    'npx prettier --write ' +
    filenames.map((filename) => `"${filename}"`).join(' '),
}
