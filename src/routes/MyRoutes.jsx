import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Principal from '../pages/Principal';
import Perfil from '../components/users/Perfil';
import Registro from '../components/users/Registro';

export default function MyRoutes() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={ <Principal /> }></Route>
                    <Route path="/login" element={ <Perfil/> }></Route>
                    <Route path="/registrar" element={ <Registro/> }></Route>
                </Routes>
            </Router>
        </>

    );
}