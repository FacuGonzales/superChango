

import SavingsIcon from '@mui/icons-material/Savings';
import TvIcon from '@mui/icons-material/Tv';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PetsIcon from '@mui/icons-material/Pets';
import WineBarIcon from '@mui/icons-material/WineBar';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Tooltip, Fab } from '@mui/material';

import logo from '../assets/logoHeader.png'

import CardWidget from './CardWidget';

const NavBar = () => {
    return(
        <>
        <nav className="navBar">
            {/* <Link to="/"> */}
            <img src={logo} className="navBar--logo"/>
            {/* </Link> */}

            <ul className="navBar--lista">
                {/* <Link to="/ofertas"> */}
                    <Tooltip title="OFERTAS">
                        <li className="navBar--lista__opciones"><SavingsIcon className='navBar--lista__opciones--icono'/></li>
                    </Tooltip>
                {/* </Link> */}

                {/* <Link to="/electro"> */}
                    <Tooltip title="ELECTRO">
                        <li className="navBar--lista__opciones"><TvIcon className='navBar--lista__opciones--icono'/></li>
                    </Tooltip>
                    
                {/* </Link> */}

                {/* <Link to="/alimentos"> */}

                    <Tooltip title="ALIMENTOS">
                        <li className="navBar--lista__opciones"><RestaurantIcon className='navBar--lista__opciones--icono'/></li>
                    </Tooltip>
                {/* </Link> */}

                {/* <Link to="/bebidas"> */}
                    <Tooltip title="BEBIDAS">
                        <li className="navBar--lista__opciones"><WineBarIcon className='navBar--lista__opciones--icono'/></li>
                    </Tooltip>
                {/* </Link> */}

                {/* <Link to="/limpieza"> */}
                    <Tooltip title="LIMPIEZA">
                        <li className="navBar--lista__opciones"><SanitizerIcon className='navBar--lista__opciones--icono'/></li>
                    </Tooltip>
                {/* </Link> */}

                {/* <Link to="/mascotas"> */}
                    <Tooltip title="MASCOTAS">
                        <li className="navBar--lista__opciones"><PetsIcon className='navBar--lista__opciones--icono'/></li>
                    </Tooltip>
                {/* </Link> */}

                {/* <Link to="/hogar"> */}
                    <Tooltip title="HOGAR">
                        <li className="navBar--lista__opciones"><HomeIcon className='navBar--lista__opciones--icono'/></li>
                    </Tooltip>
                {/* </Link> */}

                {/* <Link to="/automotor"> */}
                    <Tooltip title="AUTOMOTOR">
                        <li className="navBar--lista__opciones"><DirectionsCarIcon className='navBar--lista__opciones--icono'/></li>
                    </Tooltip>
                {/* </Link> */}

                {/* <Link to="/carrito"> */}
                    <Tooltip title="TÚ CARRITO">
                        <li className="navBar--lista__opciones"><CardWidget/></li>
                    </Tooltip>
                {/* </Link> */}
            </ul>
        </nav>

        <nav className="navBarMobile">
            {/* <Link to="/"> */}
                <img src={logo} className="navBarMobile--logo"/>
            {/* </Link> */}

            <ul className="navBarMobile--lista">
                {/* <Link to="/ofertas"> */}
                    <Tooltip title="OFERTAS">
                        <li className="navBarMobile--lista__opciones"><SavingsIcon className='navBarMobile--lista__opciones--icono'/> Ofertas</li>
                    </Tooltip>
                {/* </Link> */}

                {/* <Link to="/electro"> */}
                    <Tooltip title="ELECTRO">
                        <li className="navBarMobile--lista__opciones"><TvIcon className='navBarMobile--lista__opciones--icono'/> Electro</li>
                    </Tooltip>

                {/* </Link> */}

                {/* <Link to="/alimentos"> */}

                    <Tooltip title="ALIMENTOS">
                        <li className="navBarMobile--lista__opciones"><RestaurantIcon className='navBarMobile--lista__opciones--icono'/> Alimentos</li>
                    </Tooltip>
                {/* </Link> */}

                {/* <Link to="/bebidas"> */}
                    <Tooltip title="BEBIDAS">
                        <li className="navBarMobile--lista__opciones"><WineBarIcon className='navBarMobile--lista__opciones--icono'/> Bebidas</li>
                    </Tooltip>
                {/* </Link> */}

                {/* <Link to="/limpieza"> */}
                    <Tooltip title="LIMPIEZA">
                        <li className="navBarMobile--lista__opciones"><SanitizerIcon className='navBarMobile--lista__opciones--icono'/> Limpieza</li>
                    </Tooltip>
                {/* </Link> */}

                {/* <Link to="/mascotas"> */}
                    <Tooltip title="MASCOTAS">
                        <li className="navBarMobile--lista__opciones"><PetsIcon className='navBarMobile--lista__opciones--icono'/> Mascotas</li>
                    </Tooltip>
                {/* </Link> */}

                {/* <Link to="/hogar"> */}
                    <Tooltip title="HOGAR">
                        <li className="navBarMobile--lista__opciones"><HomeIcon className='navBarMobile--lista__opciones--icono'/> Hogar</li>
                    </Tooltip>
                {/* </Link> */}

                {/* <Link to="/automotor"> */}
                    <Tooltip title="AUTOMOTOR">
                        <li className="navBarMobile--lista__opciones"><DirectionsCarIcon className='navBarMobile--lista__opciones--icono'/> Automotor</li>
                    </Tooltip>
                {/* </Link> */}

                {/* <Link to="/carrito"> */}
                    <Tooltip title="TÚ CARRITO">
                        <li className="navBarMobile--lista__opciones"><CardWidget/> Carrito</li>
                    </Tooltip>
                {/* </Link> */}
            </ul>
        </nav>
        </>
      );
}

export default NavBar;
