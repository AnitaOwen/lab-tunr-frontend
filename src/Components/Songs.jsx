import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
import Song from "./Song";
import SongForm from "./SongForm";

const API = import.meta.env.VITE_BASE_URL

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const { id } = useParams()
  const navigate = useNavigate()

  const fetchSongs = () => {
    fetch(`${API}/playlists/${id}/songs`)
      .then((res) => res.json())
      .then((data) => setSongs(data.songs))
      .catch((error) => console.error(error))
  }

  const handleDelete = (song_id) => {
    fetch(`${API}/playlists/${id}/songs/${song_id}`, {
    method: 'DELETE',
    })
    .then((res) => {
        const filteredSongs = songs.filter((song) => song.id !== song_id)
        setSongs(filteredSongs)
        },
        (error) => console.error(error)
    )
    .catch((error) => console.warn('catch', error))
}

const handleEdit = (updatedSong) => {
  console.log(`${API}/playlists/${id}/songs/${updatedSong.id}`)
  fetch(`${API}/playlists/${id}/songs/${updatedSong.id}`, {
    method: 'PUT', 
    body: JSON.stringify(updatedSong), 
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((res) => res.json())
  .then((data) => {
    const songsArray = [...songs]
    const updateSongIndex = songsArray.findIndex((song) => song.id === updatedSong.id)
    songsArray[updateSongIndex] = data
    setSongs(songsArray)
  })
  .catch((error) => console.error('catch', error))
}

 // Update a song. Redirect to show view.
  // const updateSong = () => {
  //   // console.log(`${API}/songs/${id}`)

  //   fetch(`${API}/songs/${id}`, {
  //     method: "PUT",
  //     body: JSON.stringify(song),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then(() => navigate(`/songs/${id}`))
  //     .catch((error) => console.error("catch", error));
  // };


const handleAdd = (newSong) => {
  fetch(`${API}/playlists/${id}/songs`, {
    method: 'POST',
    body: JSON.stringify(newSong),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then((data) => setSongs([data, ...songs]))
  .catch((error) => console.error('catch', error))
}

useEffect(() => {
    fetchSongs()
}, [id])

  return (
    <section className="Songs">
      <h3>Songs</h3>
      <SongForm handleAdd={handleAdd}>
            <h5>Add a New Song</h5>
        </SongForm>
        {/* <table>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Artist</th>
              <th>Length</th>
            </tr>
          </thead>
          <tbody> */}
            {songs.map((song) => <Song 
              key={song.id} 
              song={song} 
              handleDelete={handleDelete} 
              handleEdit={handleEdit}
              // handleAdd={handleAdd} 
              />
            )}
          {/* </tbody>
        </table> */}
    </section>
  );
}

export default Songs