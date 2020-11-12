const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight, {
    alwaysWrapLineHighlights: false,
  });
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/assets");
  return {
    passthroughFileCopy: true,
    templateFormats: ["html", "md", "liquid", "njk"],
    dir: {
      input: "src",
      output: "_site",
      include: "_includes",
    },
  };
};


