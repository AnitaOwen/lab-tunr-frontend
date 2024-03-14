import { Link } from "react-router-dom";

const Song = ({ song }) => {
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>
          <h4>"{song.name}" - <span>{song.artist}</span></h4>
        </Link>
      </td>
    </tr>
  );
}

export default Song