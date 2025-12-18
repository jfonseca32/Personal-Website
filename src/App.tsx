import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Projects from "./pages/projects";
import UnderConstruction from "./pages/underConstruction";
import NotFound from "./pages/notFound";
import PageWrapper from "./components/pageWrapper";
import { useTransitionDirection } from "./hooks/useDirection";
import Spotlight from "./components/spotlight";
import TabSwitcher from "./pages/TabSwitcher";
import BeetleViewer from "./pages/BeetleViewer";
import MobileHint from "./components/MobileHint";

function App() {
  const location = useLocation();
  const direction = useTransitionDirection();

  const showTabSwitcher = ["/", "/projects"].includes(location.pathname);

  return (
    <>
      {/* Only show on homepage, only once per device, for 4s (handled inside component) */}
      {location.pathname === "/" && <MobileHint />}

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
            path="/projects/beetle"
            element={
              <PageWrapper direction={direction}>
                <BeetleViewer />
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
