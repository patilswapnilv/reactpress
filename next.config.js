const withPlugins = require("next-compose-plugins");
const css = require("@zeit/next-css");
const hippogriff = require("./plugins/hippogriff");
const images = require("next-images");
/**
 * Config file for next.js
 */
module.exports = withPlugins([css, hippogriff, images]);
