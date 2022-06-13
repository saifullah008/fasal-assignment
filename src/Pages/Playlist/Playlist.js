import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import './Playlist.css';

export default function Playlist() {
    const { playLists } = useSelector((state) => state.playLists);
    const dispatch=useDispatch();

    useEffect(() => {
        localStorage.setItem("playLists", JSON.stringify(playLists));
      }, [playLists]);

    const deleteFromCart = (movie) => {
        console.log('delete to cart called');
        dispatch({ type: "DELETE_FROM_PLAYLIST", payload: movie });
      };

  return (
    <div className="trending">
    {playLists &&
      playLists.map((c) => (
        <div className='box'>
        <SingleContent
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title || c.name}
          date={c.first_air_date || c.release_date}
          media_type="movie"
          vote_average={c.vote_average}
        />
        <button className='button' variant="contained" color="success" 
            onClick={() => deleteFromCart(c)}>
              Delete from Playlist
            </button>
        </div>
      ))}
  </div>
  )
}
