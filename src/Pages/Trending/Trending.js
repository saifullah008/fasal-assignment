import axios from "axios";
import "./Trending.css";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import { useDispatch, useSelector } from "react-redux";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const { playLists } = useSelector((state) => state.playLists);
  const dispatch = useDispatch();

  const fetchTrending = async () => {
    // const { data } = await axios.get(
    //   `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    // );
    const apiKey='45cd5db7eb395f57b04103c70a29baad'
    const { data } = await axios.get(
     `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    localStorage.setItem("playLists", JSON.stringify(playLists));
    //console.log(watchlistDisabled+"::::::"+storedMovie);
  }, [playLists]);

  let storedMovie = playLists.find((o) => o.id === content.id);

  const watchlistDisabled = storedMovie ? true: false;

  const addToCart = (movie) => {
    console.log('add to cart called');
    dispatch({ type: "ADD_TO_PLAYLIST", payload: movie });
  };

  return (
    <div>
      <span className="pageTitle">Trending Today</span>
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
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
             <button  className="button" disabled={watchlistDisabled} 
            onClick={() => addToCart(c)}>
              Add to playlist
            </button>
            </div>
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
