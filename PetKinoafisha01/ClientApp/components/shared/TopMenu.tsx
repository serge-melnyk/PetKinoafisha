import * as React from "react";
import { withRouter } from "react-router";
import { NavLink, Redirect } from "react-router-dom";
import Globals from "@Globals";
import AccountService from "@Services/AccountService";
import { Dropdown, Collapse } from "bootstrap3-native";
import bind from 'bind-decorator';
import logo from "@Images/logo2.png";

class TopMenu extends React.Component<{}, { logoutAction: boolean }> {

    constructor(props) {
        super(props);
        this.state = { logoutAction: false };
    }

    @bind
    async onClickSignOut(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();

        await AccountService.logout();
        this.setState({ logoutAction: true });
    }

    private elDropdown: HTMLAnchorElement;
    private elCollapseButton: HTMLButtonElement;

    componentDidMount() {
        var dropdown = new Dropdown(this.elDropdown);
        var collapse = new Collapse(this.elCollapseButton);
    }

    componentDidUpdate() {
    }

    render() {
        if (this.state.logoutAction)
            return <Redirect to="/login" />;

        return <div>
            <div className="logo">
                <a href="#">
                    <img src={logo} />
                </a>
            </div>
            <div className="top-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <button ref={x => this.elCollapseButton = x} type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div id="navbar" className="navbar-collapse collapse nav navbar-nav navbar-left">
                                <ul className="nav navbar-nav">
                                    <li><NavLink exact to={'/'} activeClassName="active">Home</NavLink></li>
                                    <li><NavLink exact to={'/example'} activeClassName="active">Example</NavLink></li>
                                    <li className="dropdown">
                                        <a href="#" ref={x => this.elDropdown = x} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                            {Globals.serviceUser.login}&nbsp;
                                <span className="caret"></span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#" onClick={this.onClickSignOut}>Sign out</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <p>kdfkl</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button ref={x => this.elCollapseButton = x} type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">RCB (TypeScript)</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse nav navbar-nav navbar-left">
                    <ul className="nav navbar-nav">
                        <li><NavLink exact to={'/'} activeClassName="active">Home</NavLink></li>
                        <li><NavLink exact to={'/example'} activeClassName="active">Example</NavLink></li>
                        <li className="dropdown">
                            <a href="#" ref={x => this.elDropdown = x} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                {Globals.serviceUser.login}&nbsp;
                                <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#" onClick={this.onClickSignOut}>Sign out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            </div>*/}
        </div>;
    }
}

export default withRouter(TopMenu as any);