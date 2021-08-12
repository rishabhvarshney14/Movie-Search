const AUTH_KEY = "0d6cae18032ea5cf56fbd56942590784";

const baseApiURL = "https://api.themoviedb.org/3";
const baseImageURL = "https://image.tmdb.org/t/p";

// convert spaces in string to %20
export const getURLfriendlyQuery = (query) => {
  const newQuery = query.split(" ");
  return newQuery.join("%20");
};

export const getURL = {
  baseApiURL: baseApiURL,
  baseImageURL: baseImageURL,
  search: (query) =>
    `${baseApiURL}/search/movie?api_key=${AUTH_KEY}&query=${getURLfriendlyQuery(
      query
    )}`,
  searchPage: (query, page) =>
    `${baseApiURL}/search/movie?api_key=${AUTH_KEY}&query=${getURLfriendlyQuery(
      query
    )}&page=${page}`,
  imageURL: (file_path) => `${baseImageURL}/original${file_path}`,
};
