const nextBuild = require("next/dist/build");
const config = require("next/config");
nextBuild("themes/default", config).then(() => {
  console.log("build ok !");
});
