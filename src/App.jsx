import './index.css'
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav.jsx"
import Details from "./Components/Details.jsx"
import Home from "./Components/Home.jsx"
import Login from "./Components/Login.jsx"
import BluuCard from './Components/BluuCard';

function App() {
    return (
        <>
            <div>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bluucard" element={<BluuCard />} />
                </Routes>
            </div>
        </>
    );
}

export default App
