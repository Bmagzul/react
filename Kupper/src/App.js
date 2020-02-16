import React from 'react';
import Menu from './components/main/menu.js';
import NavItem from './components/main/navitem.js';
import Sidebar from './components/main/sidebar.js';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="jumbotron col-sm-6 offset-sm-3">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
        );
    }

}

class Contenido extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="contenido">

                <Menu></Menu>
                <div className="d-flex" id="wrapper">
                    <Sidebar>
                        <NavItem/>
                    </Sidebar>
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sesion: false
        };

    }

    loguear() {
        this.setState({sesion: true});
    }

    render() {
            return <Contenido/>
    }
}

export default App;
