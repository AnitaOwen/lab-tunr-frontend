import { Link } from "react-router-dom";

const Header = () => {
    return (
    <div>
      <h1>TUNR</h1>
      <div className="nav-links">
        <div>
          <h2>
            <Link to="/playlists">Playlists</Link>
          </h2>
          {/* <Link to="/playlists/new">
            CREATE A NEW PLAYLIST
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Header