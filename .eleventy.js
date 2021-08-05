module.exports = function(eleventyConfig) {
  // Return your Object options:
  return {
    dir: {
      input: "_site",
      output: "_build",
      includes: "_includes"
    }
  }
};