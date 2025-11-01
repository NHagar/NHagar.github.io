import yaml from "js-yaml";

export default function (eleventyConfig) {
  // Add YAML data file support
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  eleventyConfig.addPassthroughCopy({ "src/styles": "styles" });
  eleventyConfig.addWatchTarget("src/styles");
  eleventyConfig.addPassthroughCopy({ public: "." });

  const longDateFormatter = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  eleventyConfig.addFilter("readableDate", (value) => {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return longDateFormatter.format(date);
  });

  eleventyConfig.addFilter("sortByDateDesc", (collection, key = "date") => {
    if (!Array.isArray(collection)) return [];
    return [...collection].sort((a, b) => {
      const aDate = new Date(a?.[key] ?? a);
      const bDate = new Date(b?.[key] ?? b);
      return bDate.getTime() - aDate.getTime();
    });
  });

  eleventyConfig.addFilter("head", (array, count) => {
    if (!Array.isArray(array) || count === 0) return [];
    if (count < 0) {
      return array.slice(count);
    }
    return array.slice(0, count);
  });

  eleventyConfig.addFilter("ensureArray", (value) => {
    if (Array.isArray(value)) return value;
    if (value === undefined || value === null || value === "") return [];
    return [value];
  });

  eleventyConfig.addShortcode("currentYear", () => new Date().getFullYear());

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
