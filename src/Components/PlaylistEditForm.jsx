import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;


const PlaylistEditForm = () => {
  let { id } = useParams()
  const navigate = useNavigate()

  const [playlist, setPlaylist] = useState({
    name: "",
    description: "",
  })

  const handleTextChange = (event) => {
    setPlaylist({ ...playlist, [event.target.id]: event.target.value })
  }

  const updatePlaylist = () => {
    fetch(`${API}/playlists/${id}`, {
      method: "PUT", 
      body: JSON.stringify(playlist),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(() => navigate(`/playlists/${id}`))
    .catch((error) => console.error(error))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updatePlaylist()

  }

  useEffect(() => {
    fetch(`${API}/playlists/${id}`)
    .then((res) => res.json())
    .then((data) => setPlaylist(data))
    .catch((error) => console.error(error))
  }, [id])
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
          <button type="submit">Submit</button>
          <Link to={`/playlists/${id}`}>
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default PlaylistEditForm