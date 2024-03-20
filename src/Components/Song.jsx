import { useState } from 'react'
import SongForm from "./SongForm";

const Song = ({ song, handleDelete, handleEdit}) => {
  const [viewEditForm, setViewEditForm] = useState(false)
  const toggleView = () => {
    setViewEditForm(!viewEditForm)
  }
  return (
    <div className="Song">
      {viewEditForm ? (
        <SongForm 
        songDetails={song} 
        toggleView={toggleView} 
        handleEdit={handleEdit}
        />
      ) : (
        <div>
          {song.is_favorite ? (
            <span>&nbsp;⭐️&nbsp;</span>
          ) : (
            <span>&nbsp; &nbsp; &nbsp;</span>
          )} <span className='bold'>{song.name}</span> - {song.artist} - {song.time}
        </div>

        // <tr>
        //   <td>
        //     {song.is_favorite ? (
        //       <span>&nbsp;⭐️&nbsp;</span>
        //     ) : (
        //       <span>&nbsp; &nbsp; &nbsp;</span>
        //     )}
        //   </td>
        //   <td>{song.name}</td>
        //   <td>{song.artist}</td>
        //   <td>{song.time}</td>
        // </tr>
      )}
      <div className="song-actions">
        <button onClick={toggleView}>
          {viewEditForm ? "Cancel" : "Edit this song"}
        </button>
        <button onClick={() => handleDelete(song.id)}>Delete</button>
      </div>
    </div>
  )
}

export default Song