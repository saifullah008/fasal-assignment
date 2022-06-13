import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";

import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";

import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import { Container } from "@material-ui/core";
import Playlist from "./Pages/Playlist/Playlist";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <ProtectedRoutes>
                  <Trending />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/movies"
              exact
              element={
                <ProtectedRoutes>
                  <Movies />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/playlist"
              exact
              element={
                <ProtectedRoutes>
                  <Playlist />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/search"
              exact
              element={
                <ProtectedRoutes>
                  <Search />
                </ProtectedRoutes>
              }
            />

            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<SignUp />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("currentUser")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
