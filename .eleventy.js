module.exports = eleventyConfig => {

  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.setTemplateFormats(["html", "njk", "txt", "js", "css", "xml", "json"]);

  eleventyConfig.addPassthroughCopy("src", {
		//debug: true,
		filter: [
			"**/*.css",
			"**/*.js",
		]
	});

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};