import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { LegalPage } from "./pages/LegalPage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>
      <Footer />
    </>
  );
}
