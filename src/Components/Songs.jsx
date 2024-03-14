import { useState, useEffect } from "react";
import Song from "./Song";

const API = import.meta.env.VITE_BASE_URL;

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`${API}/songs`)
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className="Songs">
      <section>
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
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs