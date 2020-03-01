import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Helmet } from "react-helmet";
import { BigHeaderAd } from "@Components/shared/BigHeaderAd"
import logo from "@Images/logo.png";

type Props = RouteComponentProps<{}>;

export default class HomePage extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Helmet>
                <title>KinoAfisha - Homepage</title>
            </Helmet>
            {/* <img style={{ "margin": "0 auto", "display": "block", "width": "100%" }} src={logo} /> */}
            
            <div className="panel panel-default">
                <div className="panel-body row">
                    <div className="col-md-9">
                        <div className="container">
                            <div className="main-teaser">
                                <BigHeaderAd></BigHeaderAd>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <p>Happy coding</p>
                    </div>
                </div>
            </div>
            </div>;
    }
}