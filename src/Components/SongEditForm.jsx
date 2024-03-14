import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

const SongEditForm = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    album: "",
    time: "",
    artist: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };


  // Update a song. Redirect to show view.
  const updateSong = () => {
    // console.log(`${API}/songs/${id}`)

    fetch(`${API}/songs/${id}`, {
      method: "PUT",
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigate(`/songs/${id}`))
      .catch((error) => console.error("catch", error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong();
  };

    // On page load, fill in the form with the song data.
    useEffect(() => {
      fetch(`${API}/songs/${id}`)
        .then((res) => res.json())
        .then((data) => setSong(data))
        .catch((error) => console.error(error))
    }, [id]);

    return (
      <div className="Edit">
        <form onSubmit={handleSubmit}>
          <div>
          <label htmlFor="name">Title:</label>
          <input
            id="name"
            value={song.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of the song"
            required
          />
          </div>
          <div>
          <label htmlFor="artist">Artist:</label>
          <input
            id="artist"
            type="text"
            required
            value={song.artist}
            onChange={handleTextChange}
          />
          </div>
          <div>
          <label htmlFor="album">Album:</label>
          <input
            id="album"
            type="text"
            name="album"
            value={song.album}
            onChange={handleTextChange}
          />
          </div>
          <div>
          <label htmlFor="time">Song Length:</label>
          <input
            id="time"
            type="text"
            name="time"
            value={song.time}
            placeholder="00:00"
            onChange={handleTextChange}
          />
          </div>
          <div>
          <label htmlFor="is_favorite">Favorite:</label>
          <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={song.is_favorite}
          />          
          </div>
          <br />
          <div className="form-buttons">
            <button type="submit">SUBMIT</button>
            <Link to={`/songs/${id}`}>
              <button>CANCEL</button>
            </Link>
          </div>
        </form>

      </div>
    );
}

export default SongEditForm;