import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes'
import NavBar from '../components/NavBar';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <NavBar/>

            <Routes>
                {routes.map(({path, Component}) => <Route key={path} path={path} element={<Component/>}/>)}
            </Routes>
        </BrowserRouter>
    )
}
