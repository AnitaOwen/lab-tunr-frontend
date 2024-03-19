import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import Song from "./Song";

const API = import.meta.env.VITE_BASE_URL

const Songs = () => {
  const [songs, setSongs] = useState([]);
  let { id } = useParams()

  useEffect(() => {
    fetch(`${API}/playlists/${id}/songs`)
      .then((res) => res.json())
      .then((data) => setSongs(data.songs))
      .catch((error) => console.error(error))
  }, [id])

  return (
    <section className="Songs">
      <h2>Songs</h2>
        <table>
          <thead>
            <tr>
              <th>FAV</th>
              <th>SONG</th>
              <th>ARTIST</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} handleDelete={handleDelete} />;
            })}
          </tbody>
        </table>
    </section>
  );
}

export default Songs