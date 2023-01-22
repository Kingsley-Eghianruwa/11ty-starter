module.exports = function(eleventyConfig) {
  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // process the EJS and Markdown file extensions only
  eleventyConfig.addTemplateFormats([ "ejs", "md" ]);

  // sets layouts dir to any layouts directory
  eleventyConfig.addLayoutAlias("layouts/*", "**/layouts/*");
  
  // sets layouts dir to any layouts directory
  eleventyConfig.addLayoutAlias("layouts/*", "**/layout/*");
};

