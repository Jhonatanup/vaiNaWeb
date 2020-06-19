import axios from "axios";

let movies = [];

function fetchMovies() {
  axios({
    url:
      "https://api.themoviedb.org/3/movie/popular?api_key=674e056a0305570de7e7dea12691bb59",
    method: "get"
  })
    .then(response => {
      const list = response.data.results.map(item => {
        return {
          ...item,
          poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          backdrop_path: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
        };
      });
      movies.push(...list);

      movies.map(info => {
        let { popularity,
          vote_count,
          poster_path,
          id,
          adult,
          backdrop_path,
          genre_ids,
          original_language,
          original_tile,
          overview,
          release_date,
          title,
          video,
          vote_average
        } = info
        document.querySelector("#app").innerHTML += `
          <h2>${title}</h2>
          <img src=${poster_path} alt="poster" width="300" height="300"/>
          <p>${overview}</>
          <span>${popularity}</span>

        `;
        console.log(info);
      });
    })
    .catch(err => {
      console.log(err);
    });
}
fetchMovies();
