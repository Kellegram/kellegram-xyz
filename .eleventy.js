const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const CleanCSS = require("clean-css");
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
  eleventyConfig.addPlugin(markdownItAnchor, {
    level: 1,
    // slugify: string => string,
    permalink: true,
    // renderPermalink: (slug, opts, state, permalink) => {},
    permalinkClass: 'header-anchor',
    permalinkSymbol: '¶',
    permalinkBefore: false
  });

  eleventyConfig.setLibrary("md",
      markdownIt({
          html: true,
          linkify: true,
          typographer: true,
      }).use(markdownItAnchor, {})
  );
  eleventyConfig.addPlugin(pluginTOC, {
      tags: ['h1', 'h2', 'h3'], // Which heading tags are selected (headings must each have an ID attribute)
      wrapper: 'section',       // Element to put around the root `ol`
      wrapperClass: 'toc',  // Class for the element around the root `ol`
      headingText: 'Table of Contents',      // Optional text to show in heading above the wrapper element
      headingTag: 'h1'      // Heading tag when showing heading above the wrapper element
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