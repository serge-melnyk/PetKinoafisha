import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Helmet } from "react-helmet";
import { BigHeaderAd } from "@Components/shared/BigHeaderAd"
import { TopSidebarAd } from "@Components/shared/TopSidebarAd";
import { HomeRotationContainer } from "@Components/shared/HomeRotationContainer";
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
            
            <div className="container">
                <div className="row">
                    <div className="">
                        <div className="floatLeft">
                            <div className="main-teaser">
                                <BigHeaderAd></BigHeaderAd>
                                <div>
                                    <HomeRotationContainer></HomeRotationContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden-md hidden-sm hidden-xs">
                        <div className="floatLeft">
                            <TopSidebarAd></TopSidebarAd>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>;
    }
}