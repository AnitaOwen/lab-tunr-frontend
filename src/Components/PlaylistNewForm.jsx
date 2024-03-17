import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

const PlaylistNewForm = () => {
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState({
    name: "",
    description: "",
  });

  const handleTextChange = (event) => {
    setPlaylist({ ...playlist, [event.target.id] : event.target.value })
  }

  const addPlaylist = () => {
    fetch(`${API}/playlists`, {
      method: "POST", 
      body: JSON.stringify(playlist),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(() => navigate('/playlists'))
    .catch((error) => console.error(error))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addPlaylist()
  }


  return (
    <div className='playlist-form'>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={playlist.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of the playlist"
          required
        />
        </div>
        <div>
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          required
          value={playlist.description}
          onChange={handleTextChange}
        />
        </div>
        <div className="form-buttons">
          <button type="submit">SUBMIT</button>
          <Link to={'/playlists'}>
            <button>CANCEL</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default PlaylistNewForm