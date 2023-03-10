import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreateImage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="flex w-full items-center justify-between border-b border-b-[#e6ebf4] bg-white px-4 py-4 sm:px-8">
        <Link to="/">
          <img src={logo} alt={logo} className="w-28 object-contain" />
        </Link>
        <Link
          to="https://github.com/Guccifer808"
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-[#6469ff] px-4 py-2 font-inter font-medium text-white hover:scale-105"
        >
          Github
        </Link>
      </header>
      <main className="min-h-[calc(100vh-73px)] w-full bg-[#f9fafe] px-4 py-8 sm:p-8">
        <Routes>
          <Route path="/" element={<CreateImage />} />
          {/* <Route path="/create-post" element={<CreateImage />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
