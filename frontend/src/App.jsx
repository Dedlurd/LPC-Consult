import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";


function PlaceholderPage({ title }) {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-6 pt-28">
      <div className="text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#00B4D8]">
          LPC Careers
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight text-slate-950">
          {title}
        </h1>

        <p className="mx-auto mt-4 max-w-md text-slate-500">
          This page is part of the LPC Careers website and will be
          developed as we continue building the platform.
        </p>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />

          <Route path="/about" element={<About />} />

          <Route path="/portfolio" element={<Portfolio />} />

          <Route
            path="/resources"
            element={<PlaceholderPage title="Resources" />}
          />

          <Route
            path="/contact"
            element={<PlaceholderPage title="Contact" />}
          />

          <Route
            path="/free-review"
            element={<PlaceholderPage title="Free Career Review" />}
          />

          <Route
            path="*"
            element={<PlaceholderPage title="Page Not Found" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;