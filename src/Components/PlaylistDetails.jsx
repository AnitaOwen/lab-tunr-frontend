import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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
                    <td>Name: {playlist.name} ({playlist.playlistSongs ? playlist.playlistSongs.length : 0} songs)</td>
                </tr>
                <tr>
                    <td>Description: {playlist.description}.</td>
                </tr>
            </tbody>
        </table>
        <table>
            {playlist.playlistSongs && playlist.playlistSongs[0] && (
                <thead>
                    <tr>
                        <th>FAV</th>
                        <th>SONG</th>
                        <th>ARTIST</th>
                        <th>ALBUM</th>
                        <th>TIME</th>
                    </tr>
                </thead>
            )}     
            <tbody>
                {!playlist.playlistSongs ? null : (
                    playlist.playlistSongs.map(({id, is_favorite, name, artist, time, album }) => (
                        <tr key={id}>
                            <td>
                                {is_favorite ? (
                                    <span>&nbsp;⭐️&nbsp;</span>
                                ) : (
                                    <span>&nbsp; &nbsp; &nbsp;</span>
                                )}
                            </td>
                            <td><Link to={`/songs/${id}`}>{name}</Link></td>
                            <td>{artist}</td>
                            <td>{album}</td>
                            <td>{time}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
        <div className="form-buttons">
            <button onClick={handleDelete}>DELETE PLAYLIST</button>
            <Link to={`/playlists/${id}/edit`}>
              <button>EDIT DETAILS</button>
            </Link>
        </div>
    </article>
  )
}

export default PlaylistDetails