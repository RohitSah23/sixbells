import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter, Routes, Route } from "react-router";
import Index from "./pages/Index";
import FullMenu from "./pages/FullMenu";
import NotFound from "./pages/NotFound";


const App = () => (
  <>
      <Sonner />
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<FullMenu />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  </>
);

export default App;
