// #region Image Imports
  import dayClear from "../images/day clear.svg";
  import dayClouds from "../images/day clouds.svg";
  import dayRain from "../images/day rain.svg";
  import dayStorm from "../images/day storm.svg";
  import daySnow from "../images/day snow.svg";
  import dayFog from "../images/day fog.svg";

  import nightClear from "../images/night clear.svg";
  import nightClouds from "../images/night clouds.svg";
  import nightRain from "../images/night rain.svg";
  import nightStorm from "../images/night storm.svg";
  import nightSnow from "../images/night snow.svg";
  import nightFog from "../images/night fog.svg";

// #endregion

export const apiKey = "2979cfc6bd4b20d5aad1e14ac0da127a";

export const weatherImagesDay = {
  clear: dayClear,
  clouds: dayClouds,
  rain: dayRain,
  storm: dayStorm,
  snow: daySnow,
  fog: dayFog,
};

export const weatherImagesNight = {
  clear: nightClear,
  clouds: nightClouds,
  rain: nightRain,
  storm: nightStorm,
  snow: nightSnow,
  fog: nightFog,
};

export const baseUrl = process.env.NODE_ENV === "production" 
? "https://api.wtwr.tinysun.net"
: "http://localhost:3001";
