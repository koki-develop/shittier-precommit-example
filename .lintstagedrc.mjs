export default {
  "**/*.js": (filenames) => filenames.map((filename) => `shittier '${filename}'`),
};
