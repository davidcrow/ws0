module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/includes/css/");
    eleventyConfig.addPassthroughCopy({ "static/files": "files" });

    return {
        dir: {
        input: "src",
        includes: "_includes",
        data: "_data",
        output: "_site",
        },

    };
};