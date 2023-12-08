// const API_KEY = "cf9f8552cd3937a803723a6b095363b3";

// const requests = {
//   fetchTrending:"/trending/all/week?api_key=${API_KEY}",
//   fetchNetflixOriginals:"/discover/tv?api_key=${API_KEY}&with_networks=213",
//   fetchTopRatedMovies:"/movie/top_rated?api_key=${API_KEY}&language=en-US",
//   fetchActionMovies:"/discover/movie?api_key=${API_KEY}&with_genres=28",
//   fetchComedyMovies:"/discover/movie?api_key=${API_KEY}&with_genres=35",
//   fetchHorrorMovies:"/discover/movie?api_key=${API_KEY}&with_genres=27",
//   fetchRomanceMovies:"/discover/movie?api_key=${API_KEY}&with_genres=10749",
//   fetchDocumentaries:"/discover/movie?api_key=${API_KEY}&with_genres=99",
// };

// export default requests;


const API_KEY = "221a10696c2e444cb28236779144660b";

// const baseUrl = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
