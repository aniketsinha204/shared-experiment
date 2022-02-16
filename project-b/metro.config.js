// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

console.log("here", getDefaultConfig(__dirname));
const watch = { ...getDefaultConfig(__dirname), watchFolders: ["../common"] };
module.exports = watch;
