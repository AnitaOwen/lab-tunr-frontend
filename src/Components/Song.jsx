import { Link } from "react-router-dom";

const Song = ({ song }) => {
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