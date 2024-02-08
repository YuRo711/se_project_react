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


export const defaultClothingItems = [
    {
      _id: 0,
      name: "Cap",
      weather: "hot",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
    },
    {
      _id: 1,
      name: "Hoodie",
      weather: "warm",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
    },
    {
      _id: 2,
      name: "Jacket",
      weather: "cold",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
    },
    {
      _id: 3,
      name: "Sneakers",
      weather: "cold",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
    },
    {
      _id: 4,
      name: "T-Shirt",
      weather: "hot",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
    },
    {
      _id: 5,
      name: "Winter coat",
      weather: "cold",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
    },
  ];

export const apiKey = "2979cfc6bd4b20d5aad1e14ac0da127a";
export const locationName = "Tel Aviv";
export const latitude = 32.109333;
export const longitude = 34.855499;

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