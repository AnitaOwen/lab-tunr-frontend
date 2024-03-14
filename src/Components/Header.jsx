import { Link } from "react-router-dom";

const Header = () => {
    return (
    <div>
      <h1>TUNR</h1>
      <div className="nav-links">
        <div>
          <h2>
            <Link to="/songs">All Songs</Link>
          </h2>
        </div>
        <div>
          <Link to="/songs/new">
            <button>ADD NEW SONG</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header