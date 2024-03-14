import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;


const SongNewForm = () => {
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

  // Add a song. Redirect to the index view.
  const addSong = () => {
    fetch(`${API}/songs`, {
      method: "POST",
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(() => navigate('/songs'))
    .catch((error) => console.error("catch", error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong()
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Title:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of the song"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={song.artist}
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          onChange={handleTextChange}
        />
        <label htmlFor="time">Song Length:</label>
        <input
          id="time"
          type="text"
          name="time"
          value={song.time}
          placeholder="00:00"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />          
        <br />

        <button type="submit">SUBMIT</button>
      </form>
      <Link to={`/songs`}>
        <button>CANCEL</button>
      </Link>
    </div>
  );
}

export default SongNewForm