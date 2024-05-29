import './index.css'
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav.jsx"
import Details from "./Components/Details.jsx"
import Home from "./Components/Home.jsx"
import Login from "./Components/Login.jsx"
import Register from "./Components/Register.jsx"
import BluuCard from './Components/BluuCard';
import TablePage from './Components/TablePage.jsx'
import {CLASSROOMS, RESOURCES} from './model/TypeEnum.js'

function App() {
    return (
        <>
            <div>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bluucard" element={<BluuCard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/classrooms" element={<TablePage table={CLASSROOMS} />} />
                    <Route path="/resources" element={<TablePage table={RESOURCES} />} />
                </Routes>
            </div>
        </>
    );
}

export default App
