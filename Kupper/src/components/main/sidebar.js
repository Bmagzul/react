import React from 'react';
import boy from './../../assets/img/boy.svg'
import { FontAwesomeIcon as Icono} from '@fortawesome/react-fontawesome';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom">
                    <div className="row m-0 pb-0">
                        <div className="col-3 p-0">
                            <img src={boy}
                                title="Bryam Magzul"
                                alt="Logo" 
                                style={{height: "50px"}}
                                className="rounded-sm"/>
                        </div>

                        <div className="col-9 pr-0 pt-2">
                            <p className="p-0 m-0" style={{lineHeight: "18px"}}>
                                <small>Bryam Magzul</small>
                            </p>
                            <p className="p-0 m-0" style={{lineHeight: "18px"}}>
                                <small>Conectado</small>
                            </p>
                            <div className="radio-online bg-success"></div>
                        </div> 
                    </div>

                    <div className="input-group mt-3">
                        <input type="text" 
                            className="form-control form-control-sm" 
                            placeholder="Buscar" 
                            aria-label="Buscar" 
                            aria-describedby="cp"/>
                        <div className="input-group-append">
                            <button className="btn btn-secondary btn-sm" type="button" id="cp">
                                <Icono icon="search" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="sidebar-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Sidebar;
