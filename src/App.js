import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import AboutPage from "./Pages/About";
function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
      <Route path='/' element={<TodoList />} ></Route>
      <Route path="/user/:id" element={<UserDetails/>} ></Route>
      <Route path='/about' element={<AboutPage />} ></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
