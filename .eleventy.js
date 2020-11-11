const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight, {
    alwaysWrapLineHighlights: false,
  });
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/assets");
  return {
    passthroughFileCopy: true,
    templateFormats: ["html", "md", "liquid"],
    dir: {
      input: "src",
      output: "_site",
      include: "_includes",
    },
  };
};


