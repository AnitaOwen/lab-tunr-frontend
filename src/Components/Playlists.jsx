import { useState, useEffect } from "react";
// import Playlist from "./Playlist";

const API = import.meta.env.VITE_BASE_URL;

const Playlists = () => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        fetch(`${API}/playlists`)
          .then((res) => res.json())
          .then((data) => setPlaylists(data))
          .catch((error) => console.error(error))
      }, [])
  return (
    <div className="Playlists">
    <table>
      <thead>
        <tr>
          {/* <th>ID</th> */}
          <th>Name</th>
          <th>Description</th>
          <th>Number of Songs</th>
        </tr>
      </thead>
      <tbody>
        {playlists.map((playlist) => (
          <tr key={playlist.id}>
            {/* <td>{playlist.id}</td> */}
            <td>{playlist.name}</td>
            <td>{playlist.description}</td>
            <td>{playlist.songs.length}</td>
          </tr>
        ))}
      </tbody>
    </table>  
    </div>
  )
}

export default Playlists