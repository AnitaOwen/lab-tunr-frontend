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

  useEffect(() => {
    if(songDetails){
      setNewOrUpdatedSong(songDetails)
    }
  }, [songDetails])

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

  }

    // On page load, fill in the form with the song data.
    // useEffect(() => {
    //   fetch(`${API}playlists/${id}/songs/${}`)
    //     .then((res) => res.json())
    //     .then((data) => setSong(data))
    //     .catch((error) => console.error(error))
    // }, [id]);

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
          {/* <div className="form-buttons">
            <button type="submit">SUBMIT</button>
            <Link to={`/songs/${id}`}>
              <button>CANCEL</button>
            </Link>
          </div> */}
          <input type="submit" />
        </form>

      </div>
    );
}

export default SongForm;