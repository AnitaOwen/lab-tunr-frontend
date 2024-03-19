import { Link } from "react-router-dom";
import { useState } from 'react'

const Song = ({ song }) => {
  const [viewEditForm, setViewEditForm] = useState(false)
  const toggleView = () => {
    setViewEditForm(!viewEditForm)
  }
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>&nbsp;⭐️&nbsp;</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>
        {song.name}
        </Link>
      </td>
      <td>{song.artist}</td>
      <td>{song.time}</td>
    </tr>
  );
}

export default Song