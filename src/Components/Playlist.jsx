import { Link } from "react-router-dom";


const Playlist = ({ playlist }) => {
  return (
    <div className="Playlist">
      <Link to={`/playlists/${playlist.id}`}>
            {playlist.name}  
          </Link>
      {/* <tr key={playlist.id}>
        <td>
          <Link to={`/playlists/${playlist.id}`}>
            {playlist.name}
          </Link>
        </td>
        <td>{playlist.description}</td>
      </tr> */}
    </div>
  )
}

export default Playlist;