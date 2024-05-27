import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { AboutUs } from './pages/AboutUs';
import { Emails } from './pages/Emails';
import { AppHeader } from './cmps/AppHeader';
import { AppFooter } from './cmps/AppFooter';
export function App() {

    return (
        <Router>
            <section className='main-app'>
                <AppHeader />
                <main className='container'>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/aboutus" element={<AboutUs />} ></Route>
                        <Route path="/emails" element={<Emails />} ></Route>
                    </Routes>
                </main>
                <AppFooter />
            </section>
        </Router>


    )
}

