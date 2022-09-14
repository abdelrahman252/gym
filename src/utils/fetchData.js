export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f55dac5ef3msh520622fb35e5c7bp1ebf91jsn2430ffcc9abf",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "f55dac5ef3msh520622fb35e5c7bp1ebf91jsn2430ffcc9abf",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
