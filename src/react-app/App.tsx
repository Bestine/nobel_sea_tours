import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "@/react-app/components/Layout";
import HomePage from "@/react-app/pages/Home";
import ExperiencesPage from "@/react-app/pages/Experiences";
import MarketplacePage from "@/react-app/pages/Marketplace";
import BlogPage from "@/react-app/pages/Blog";
import AboutPage from "@/react-app/pages/About";
import ContactPage from "@/react-app/pages/Contact";

// -------- Experiences ----------
import WasiniDolphinTour from "@/react-app/pages/tours/WasiniDolphinTour";
import SunsetDhowCruise from "@/react-app/pages/tours/SunsetDhowCruise";

// -------- Blogs ----------
import BlogPostSustainableTourism from "@/react-app/pages/blogs/BlogPostSustainableTourism";

export default function App() {
  return (
    <Router basename="/nobel_sea_tours">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route 
            path="/experiences/wasini-dolphin" 
            element={<WasiniDolphinTour />} 
          />
          <Route 
          path="/experiences/sunset-dhow-cruise" 
          element={<SunsetDhowCruise />} 
          />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route 
          path="/blog/how-sustainable-tourism-transforming-east-africa" 
          element={<BlogPostSustainableTourism />} 
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
