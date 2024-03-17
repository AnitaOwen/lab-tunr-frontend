// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import IndexPlaylist from "./Pages/IndexPlaylist";
import NewPlaylist from "./Pages/NewPlaylist";
import ShowPlaylist from "./Pages/ShowPlaylist";
import EditPlaylist from "./Pages/EditPlaylist";

// COMPONENTS
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
            <Route exact path="/songs/:id" element={<Show />} />
            <Route path="/songs/:id/edit" element={<Edit />} />
            <Route path="/playlists" element={<IndexPlaylist />} /> 
            <Route path="/playlists/new" element={<NewPlaylist />} /> 
            <Route path="/playlists/:id" element={<ShowPlaylist/>} />
            <Route path="/playlists/:id/edit" element={<EditPlaylist />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
