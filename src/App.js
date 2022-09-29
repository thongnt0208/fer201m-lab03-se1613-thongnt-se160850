import './App.css';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Detail from './components/Detail';
import Contact from './components/Contact';
import News from './components/News';
import About from './components/About';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Content />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
