// AppRouter

// Router Components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalState";
// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
// Pages
//Home - Main Movies Page
import PageHome from "../pages/PageHome";
import PageMovieDetails from "../pages/PageMovieDetails";
import PageAbout from "../pages/PageAbout";
import PageFavourites from "../pages/PageFavourites";
import PageNotFound from "../pages/PageNotFound";

function AppRouter() {
  return (
    <BrowserRouter>
    <GlobalProvider>
    <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/about" exact element={<PageAbout/>} />
            <Route path="/favourites" element={<PageFavourites />} />
            <Route
              path="/movie/:id"
              exact
              element={<PageMovieDetails />}
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </GlobalProvider>

    </BrowserRouter>
  );
}

export default AppRouter;