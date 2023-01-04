import React from 'react';

// componentes
import Header from './components/Header';
import Footer from './components/Footer';

import MyRoutes from './routes/MyRoutes';

export default function App() {
    return (
        <>
            <Header/>
            <MyRoutes />
            <Footer />
        </>
    );

}
