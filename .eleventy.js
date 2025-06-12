const siteUrl = "https://ws0.io"; // update this if you're using another domain


module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("toAbsoluteUrl", function (url) {
        if (!url) return siteUrl;
        return url.startsWith("http") ? url : siteUrl.replace(/\/$/, "") + url;
        }
    );
    eleventyConfig.addPassthroughCopy("src/includes/css/");
    eleventyConfig.addPassthroughCopy({ "static/files": "files" });
    eleventyConfig.addPassthroughCopy({ "src/_includes/images": "images" });
    
    return {
        dir: {
        input: "src",
        includes: "_includes",
        data: "_data",
        output: "_site",
        },

    };
};