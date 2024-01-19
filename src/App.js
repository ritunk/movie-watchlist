import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Add from "./components/Add";
import "./App.css";
// import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/movie-watchlist" element={<Watchlist />} />

            <Route path="/watched" element={<Watched />} />

            <Route path="/add" element={<Add />} />
          </Routes>
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;
