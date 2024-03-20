import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

import Songs from "./Songs"

const API = import.meta.env.VITE_BASE_URL;

const PlaylistDetails = () => {
    const [playlist, setPlaylist] = useState([])
    let { id } = useParams()
    const navigate = useNavigate()

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this playlist?")) {
            fetch(`${API}/playlists/${id}`, {
                method: 'DELETE',
            })
            .then(() => navigate('/playlists'))
            .catch((error) => console.error(error))
        }
    }

    useEffect(() => {
        fetch(`${API}/playlists/${id}/songs`)
        .then((res) => res.json())
        .then((data) => setPlaylist(data))
        .catch((error) => console.error(error))
    }, [id])

  return (
    <article>
        <h3>{playlist.name} ({playlist.songs ? playlist.songs.length : 0} songs)</h3>
        <h5>{playlist.description}</h5>
        <div className="form-buttons">
            <Link to={`/playlists`}>
                <button>Back</button>
            </Link>
            <Link to={`/playlists/${id}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
        <Songs />
    </article>
  )
}

export default PlaylistDetails