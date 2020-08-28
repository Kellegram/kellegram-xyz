module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
<<<<<<< HEAD
  eleventyConfig.addPassthroughCopy("styles");
=======
  eleventyConfig.addPassthroughCopy("src/styles");
>>>>>>> 6c9af9b18e13fa470d62b3a9e07ec444ff38dc46
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
