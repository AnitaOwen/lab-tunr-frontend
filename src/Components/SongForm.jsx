import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

const SongForm = ({ songDetails, handleEdit, handleAdd, toggleView, children }) => {
  const { id } = useParams();

  const [newOrUpdatedSong, setNewOrUpdatedSong] = useState({
    name: "",
    album: "",
    time: "",
    artist: "",
    is_favorite: false,
    playlist_id: id, 
  })

  const handleTextChange = (event) => {
    setNewOrUpdatedSong({ ...newOrUpdatedSong, [event.target.id]: event.target.value })
  }

  const handleCheckboxChange = () => {
    setNewOrUpdatedSong({ ...newOrUpdatedSong, is_favorite: !newOrUpdatedSong.is_favorite })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (songDetails) handleEdit(newOrUpdatedSong, id)
    else handleAdd(newOrUpdatedSong)

    if(songDetails) toggleView()
    setNewOrUpdatedSong({
      name: "",
      album: "",
      time: "",
      artist: "",
      is_favorite: false,
      playlist_id: id, 
  })

  useEffect(() => {
    if(songDetails){
      setNewOrUpdatedSong(songDetails)
    }
  }, [songDetails])

  }
    return (
      <div className="Edit">
        {children}
        <form onSubmit={handleSubmit}>
          <div>
          <label htmlFor="name">Title:</label>
          <input
            id="name"
            value={newOrUpdatedSong.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of the song"
            required
          />
          </div>
          <div>
          <label htmlFor="artist">Artist:</label>
          <input
            id="artist"
            type="text"
            required
            value={newOrUpdatedSong.artist}
            onChange={handleTextChange}
          />
          </div>
          <div>
          <label htmlFor="album">Album:</label>
          <input
            id="album"
            type="text"
            name="album"
            value={newOrUpdatedSong.album}
            onChange={handleTextChange}
          />
          </div>
          <div>
          <label htmlFor="time">Song Length:</label>
          <input
            id="time"
            type="text"
            name="time"
            value={newOrUpdatedSong.time}
            placeholder="0:00"
            onChange={handleTextChange}
          />
          </div>
          <div>
          <label htmlFor="is_favorite">Favorite:</label>
          <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={newOrUpdatedSong.is_favorite}
          />          
          </div>
          <br />
          <input type="submit" />
        </form>

      </div>
    );
}

export default SongForm;