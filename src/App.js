// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./js/login";
// import SearchDogs from "./js/SearchDogs";
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/search" element={<SearchDogs />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./jsx/login";
import DogSearch from "./jsx/DogSearch";
import "./styling/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<DogSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
