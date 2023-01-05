module.exports = function(eleventyConfig) {

	// Disable automatic use of your .gitignore
  eleventyiConfig.setUseGitIgnore(false);


  return {
    dir: {
      // sets layouts dir to any layouts directory
		layouts: "**/layouts"
    }
  }
};
