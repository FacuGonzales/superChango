import { useState } from 'react';


import SavingsIcon from '@mui/icons-material/Savings';
import TvIcon from '@mui/icons-material/Tv';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PetsIcon from '@mui/icons-material/Pets';
import WineBarIcon from '@mui/icons-material/WineBar';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

import { Tooltip, Fab, Button } from '@mui/material';

import logo from '../../assets/logoHeader.png'

import CardWidget from '../CardWidget/Index';
import { Link } from 'react-router-dom';



const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    }
    
    return(
        <nav className="navBar">
            <div className='navBar__navBarWrapper'>

                <img src={logo} className="navBar__navBarWrapper--logo"/>

                <div className="navBar__navBarWrapper--buttonBurguer">
                    { isOpen ? 
                        <CloseIcon className="navBar__navBarWrapper--buttonBurguer__iconCloseMenu" onClick={toggleOpen}></CloseIcon>
                        :
                        <DehazeIcon className="navBar__navBarWrapper--buttonBurguer__iconOpenMenu" onClick={toggleOpen}></DehazeIcon> 
                    }
                    
                </div>
                
                <ul  className={`${!isOpen ? "navBar__navBarWrapper--lista" : "navBar__navBarWrapper--lista__verMenu"}`}> 
                    <Link to="/">
                        <Tooltip title="OFERTAS">
                            <li className="navBar__navBarWrapper--lista__opciones">
                                <SavingsIcon className='navBar__navBarWrapper--lista__opciones--icono'/>
                                <span className='navBar__navBarWrapper--lista__opciones--titulo'>Ofertas</span> 
                            </li>
                        </Tooltip>
                    </Link>

                    <Link to="/electro">
                        <Tooltip title="ELECTRO">
                            <li className="navBar__navBarWrapper--lista__opciones">
                                <TvIcon className='navBar__navBarWrapper--lista__opciones--icono'/>
                                <span className='navBar__navBarWrapper--lista__opciones--titulo'>Electro</span> 
                            </li>
                        </Tooltip>

                    </Link>

                    <Link to="/alimentos">

                        <Tooltip title="ALIMENTOS">
                            <li className="navBar__navBarWrapper--lista__opciones">
                                <RestaurantIcon className='navBar__navBarWrapper--lista__opciones--icono'/>
                                <span className='navBar__navBarWrapper--lista__opciones--titulo'>Alimentos</span> 
                            </li>
                        </Tooltip>
                    </Link>

                    <Link to="/bebidas">
                        <Tooltip title="BEBIDAS">
                            <li className="navBar__navBarWrapper--lista__opciones">
                                <WineBarIcon className='navBar__navBarWrapper--lista__opciones--icono'/>
                                <span className='navBar__navBarWrapper--lista__opciones--titulo'>Bebidas</span> 
                            </li>
                        </Tooltip>
                    </Link>

                    <Link to="/limpieza">
                        <Tooltip title="LIMPIEZA">
                            <li className="navBar__navBarWrapper--lista__opciones">
                                <SanitizerIcon className='navBar__navBarWrapper--lista__opciones--icono'/>
                                <span className='navBar__navBarWrapper--lista__opciones--titulo'>Limpieza</span> 
                            </li>
                        </Tooltip>
                    </Link>

                    <Link to="/mascotas">
                        <Tooltip title="MASCOTAS">
                            <li className="navBar__navBarWrapper--lista__opciones">
                                <PetsIcon className='navBar__navBarWrapper--lista__opciones--icono'/>
                                <span className='navBar__navBarWrapper--lista__opciones--titulo'>Mascotas</span> 
                            </li>
                        </Tooltip>
                    </Link>

                    <Link to="/hogar">
                        <Tooltip title="HOGAR">
                            <li className="navBar__navBarWrapper--lista__opciones">
                                <HomeIcon className='navBar__navBarWrapper--lista__opciones--icono'/>
                                <span className='navBar__navBarWrapper--lista__opciones--titulo'>Hogar</span> 
                            </li>
                        </Tooltip>
                    </Link>

                    <Link to="/automotor">
                        <Tooltip title="AUTOMOTOR">
                            <li className="navBar__navBarWrapper--lista__opciones">
                                <DirectionsCarIcon className='navBar__navBarWrapper--lista__opciones--icono'/>
                                <span className='navBar__navBarWrapper--lista__opciones--titulo'>Automotor</span> 
                            </li>
                        </Tooltip>
                    </Link>

                    <Link to="/carrito">
                        <Tooltip title="TÚ CARRITO">
                            <li className="navBar__navBarWrapper--lista__opciones">
                                <CardWidget/>
                                <span className='navBar__navBarWrapper--lista__opciones--titulo'>Tú Carrito</span> 
                            </li>
                        </Tooltip>
                    </Link>
                </ul>
            </div>
        </nav>
       
    );

}

export default NavBar;
