import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import CharacterDetail from "./pages/CharacterDetail";
import Map from "./pages/Map";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Videos from "./pages/Videos";
import Commitment from "./pages/Commitment";
import GraphicNovelStatus from "./pages/GraphicNovelStatus";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <div className="pt-20">
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/comics"} component={Comics} />
          <Route path={"/characters"} component={Characters} />
          <Route path={"/characters/:id"} component={CharacterDetail} />
          <Route path={"/map"} component={Map} />
          <Route path={"/about"} component={About} />
          <Route path={"/faq"} component={FAQ} />
          <Route path={"/videos"} component={Videos} />
          <Route path={"/status"} component={GraphicNovelStatus} />
          <Route path={"/commitment"} component={Commitment} />
          <Route path={"/404"} component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
