import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import IngredientLibrary from './pages/ingredient-library-transparency-education';
import OurStoryPage from './pages/our-story-brand-heritage-values';
import CustomerTransformationsGallery from './pages/customer-transformations-social-proof-gallery';
import Homepage from './pages/homepage-luxury-beauty-immersive-experience';
import SignatureCollectionShowcase from './pages/signature-collection-premium-product-showcase';
import HairWellnessQuiz from './pages/hair-wellness-quiz-personalized-discovery';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/ingredient-library-transparency-education" element={<IngredientLibrary />} />
        <Route path="/our-story-brand-heritage-values" element={<OurStoryPage />} />
        <Route path="/customer-transformations-social-proof-gallery" element={<CustomerTransformationsGallery />} />
        <Route path="/homepage-luxury-beauty-immersive-experience" element={<Homepage />} />
        <Route path="/signature-collection-premium-product-showcase" element={<SignatureCollectionShowcase />} />
        <Route path="/hair-wellness-quiz-personalized-discovery" element={<HairWellnessQuiz />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
