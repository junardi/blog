module.exports = function(eleventyConfig) {
 
   eleventyConfig.addPassthroughCopy('./style.css');
   eleventyConfig.addPassthroughCopy('./blog-style.css');
   eleventyConfig.addPassthroughCopy('./assets');
   eleventyConfig.addPassthroughCopy('./css');
   eleventyConfig.addPassthroughCopy('./js');
   eleventyConfig.addPassthroughCopy('./images');

};