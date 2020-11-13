const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const CleanCSS = require("clean-css");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const pluginTOC = require("eleventy-plugin-nesting-toc");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(syntaxHighlight, {
    alwaysWrapLineHighlights: false,
  });
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.setLibrary("md",
      markdownIt({
          html: true,
          linkify: true,
          typographer: true,
      }).use(markdownItAnchor, {})
  );
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginTOC);
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