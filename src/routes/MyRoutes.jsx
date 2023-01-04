import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Principal from '../pages/Principal';
export default function MyRoutes() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Principal />}></Route>
                    <Route path="#" element=""></Route>
                </Routes>
            </Router>
        </>

    );
}