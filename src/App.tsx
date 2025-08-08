import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Life from "./pages/life";
import UnderConstruction from "./pages/underConstruction";
import NotFound from "./pages/notFound";
import PageWrapper from "./components/pageWrapper";
import { useTransitionDirection } from "./hooks/useDirection";
import Spotlight from "./components/spotlight";
import TabSwitcher from "./pages/TabSwitcher";

function App() {
  const location = useLocation();
  const direction = useTransitionDirection();

  const showTabSwitcher = ["/", "/projects", "/life"].includes(
    location.pathname,
  );

  return (
    <>
      <Spotlight />
      {showTabSwitcher && <TabSwitcher />}
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper direction={direction}>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/projects"
            element={
              <PageWrapper direction={direction}>
                <Projects />
              </PageWrapper>
            }
          />
          <Route
            path="/life"
            element={
              <PageWrapper direction={direction}>
                <Life />
              </PageWrapper>
            }
          />
          <Route
            path="/under-construction"
            element={
              <PageWrapper direction={direction}>
                <UnderConstruction />
              </PageWrapper>
            }
          />
          <Route
            path="*"
            element={
              <PageWrapper direction={direction}>
                <NotFound />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
