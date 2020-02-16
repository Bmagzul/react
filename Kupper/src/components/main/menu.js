import React from 'react';
import { FontAwesomeIcon as Icono} from '@fortawesome/react-fontawesome';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    clickHref(event) {
        event.preventDefault();
    }

    render() {
        return (
            <nav className="navbar navbar-expand navbar-expand-sm navbar-dark bg-dark fixed-top">
                <a className="navbar-brand mr-1"
                    onClick={this.clickHref}
                    href="# ">

                    <span className="codeCol">
                        Col. 
                    </span>
                    <span className="nameCol">
                        Colegio
                    </span>
                </a>

                <button className="btn btn-sm text-white order-1 order-sm-0" id="menuKpp" href="# ">
                    <Icono icon="bars"/>
                </button>
                    

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown mx-1">
                        <a className="nav-link" href="# " onClick={this.clickHref} id="alertsDropdown">
                            <Icono icon="bell"/>

                            <span className="badge badge-danger">9+</span>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" 
                            href="# "
                            onClick={this.clickHref}
                            id="userDropdown" 
                            role="button" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false">
                            <Icono icon="user"/>
                        </a>

                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <a className="dropdown-item py-1" href="# " onClick={this.clickHref}>
                                <Icono icon="user-cog"/> Cuenta
                            </a>
                            <a className="dropdown-item py-1" href="# " onClick={this.clickHref}>
                                <Icono icon="unlock-alt"/> Cambiar contraseña
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item py-1" href="# " onClick={this.clickHref}>
                                <Icono icon="sign-out-alt"/> Cerrar Sesion
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Menu;
