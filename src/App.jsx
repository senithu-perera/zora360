import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <footer className="footer">
          <p>&copy; 2025 Zora360. All rights reserved.</p>
          <p>
            Follow us on <a href="https://facebook.com">FaceBook</a> |{" "}
            <a href="https://instagram.com">Instagram</a> |{" "}
            <a href="https://tiktok.com">TikTok</a> |{" "}
            <a href="https://youtube.com">Youtube</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;