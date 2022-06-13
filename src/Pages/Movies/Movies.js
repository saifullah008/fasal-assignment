import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import useGenre from "../../hooks/useGenre";
import CustomPagination from "../../components/Pagination/CustomPagination";
//import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import "./Movies.css";
const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);
  const { playLists } = useSelector((state) => state.playLists);
  const dispatch = useDispatch();
  // console.log(selectedGenres);

  const fetchMovies = async () => {
    const apiKey='45cd5db7eb395f57b04103c70a29baad'
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [genreforURL, page]);
  
  useEffect(() => {
    localStorage.setItem("playLists", JSON.stringify(playLists));
    //console.log(watchlistDisabled+"::::::"+storedMovie);
  }, [playLists]);

  let storedMovie = playLists.find((o) => o.id === content.id);

  const watchlistDisabled = storedMovie ? true: false;
  
  console.log(storedMovie+":::::::"+watchlistDisabled);

  const addToCart = (movie) => {
    console.log('add to cart called');
    dispatch({ type: "ADD_TO_PLAYLIST", payload: movie });
  };



  return (
    <div>
      <span className="pageTitle">Discover Movies</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <div className="box">
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
            <button  className="button" disabled={watchlistDisabled} 
            onClick={() => addToCart(c)}>
              Add to playlist
            </button>
            </div>
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Movies;
