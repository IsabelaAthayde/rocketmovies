import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Details } from "../pages/Details";
import { HandleNote } from "../pages/HandleNote";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/HandleNote" element={<HandleNote />} />
        </Routes>
    )
}