// import module
const getNestedObjects = require("../getNestedObjects");

// import test data --- parsed json respone for MKBHD youtube's About page
const data = require("./data.json");

// extract single match
const [channelAboutFullMetadataRenderer] = getNestedObjects(
  data,
  "channelAboutFullMetadataRenderer"
);
console.log(channelAboutFullMetadataRenderer);

// extract multiple matches
const subscriberCountText = getNestedObjects(data, "subscriberCountText");
console.log(subscriberCountText);
