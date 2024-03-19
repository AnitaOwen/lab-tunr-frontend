import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Songs from "./Songs";

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
        fetch(`${API}/playlists/${id}`)
        .then((res) => res.json())
        .then((data) => setPlaylist(data))
        .catch((error) => console.error(error))
    }, [id])

  return (
    <article>
        <table>
            <tbody>
                <tr>
                    <td>Name: {playlist.name} ({playlist.songs ? playlist.songs.length : 0} songs)</td>
                </tr>
                <tr>
                    <td>Description: {playlist.description}.</td>
                </tr>
            </tbody>
        </table>
        <div className="form-buttons">
            <Link to={`/playlists`}>
                <button>Back</button>
            </Link>
            <Link to={`/playlists/${_id}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
        <Songs />
    </article>
  )
}

export default PlaylistDetails