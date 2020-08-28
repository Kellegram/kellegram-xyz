module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
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
