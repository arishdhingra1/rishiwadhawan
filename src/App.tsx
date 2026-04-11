import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { RouteSeo } from "./components/RouteSeo";
import { JsonLd } from "./components/JsonLd";
import { HomePage } from "./pages/HomePage";
import { LegalPage } from "./pages/LegalPage";
import { PaymentPage } from "./pages/PaymentPage";
import { RefundPolicyPage } from "./pages/RefundPolicyPage";

export default function App() {
  return (
    <>
      <RouteSeo />
      <JsonLd />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
      </Routes>
      <Footer />
    </>
  );
}
