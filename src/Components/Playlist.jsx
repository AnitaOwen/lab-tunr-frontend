import { Link } from "react-router-dom";
const Playlist = ({ playlist }) => {
  return (
    <>
      <tr key={playlist.id}>
        {/* <td>{playlist.id}</td> */}
        <td>
          <Link to={`/playlists/${playlist.id}`}>
            {playlist.name}
          </Link>
        </td>
        <td>{playlist.description}</td>
        <td>{playlist.songs.length}</td>
      </tr>
    </>
  )
}

export default Playlist;