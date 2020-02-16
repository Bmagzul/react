import React from 'react';
import { FontAwesomeIcon as Icono} from '@fortawesome/react-fontawesome';

class NavItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opciones: []
        }
    }

    clickHref(event) {
        event.preventDefault();
    }

    render() {
        return (
            <ul className="nav flex-column">

                        
                <li className="nav-item knavItem">
                    <a href="# " onClick={this.clickHref} className="knav-link kmenu">
                        <i className="fa-fw mr-1"></i>
                        <Icono icon="fw"/>
                        <span className="pl-1">Modulo</span>
                    </a>

                    <ul className="nav flex-column knavul khide">
                            <li className="nav-item">
                                <a href="# "
                                    onClick={this.clickHref}
                                    id="menu-1 ?>"
                                    className="knav-link kopcion"
                                >
                                    <small>
                                        <i 
                                        className="far fa-circle fa-fw" 
                                        style={{
                                            fontSize: "8px", 
                                            marginBottom: "-5px"}}
                                    ></i>
                                    </small>
                                    Modulo 1
                                </a>
                            </li>
                    </ul>
                </li>
            </ul>
        );
    }
}

export default NavItem;
