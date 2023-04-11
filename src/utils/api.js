import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key":
      process.env.REACT_APP_YOUTUBE_API_KEY ||
      "ce3a30aa2dmsh3efc230ed9e16b6p152111jsne099e8a2ad7a",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
