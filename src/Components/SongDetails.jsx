import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

const SongDetails = () => {
  const [song, setSong] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`${API}/songs/${id}`, {
      method: 'DELETE',
    })
      .then(() => navigate('/songs'))
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetch(`${API}/songs/${id}`)
    .then((res) => res.json())
    .then((data) => setSong(data))
    .catch((error) => console.error(error));
    }, [id]);

    return (
      <article>
        <h3>
          {song.is_favorite ? <span>⭐️</span> : null} 
        </h3>
        <h2>"{song.name}"</h2>
        <h5>Artist: <span>{song.artist}</span></h5>
        <h5>Album: <span>{song.album}</span></h5>
        <h5>Song Length: <span>{song.time}</span></h5>
        <div className="showNavigation">
          <div>
            <Link to={`/songs`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/songs/${id}/edit`}>
              <button>Edit Details</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    )
}

export default SongDetails