import React from 'react';

// componentes
import Header from './components/general/Header';
import Footer from './components/general/Footer';

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
