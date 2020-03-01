import * as React from "react";
import ad from "@Images/ads/big-ad1.jpg"

export class BigHeaderAd extends React.Component<{}, {}> {
    private adSrc = ad;
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="container">
            <img className="big-header-ad" src={this.adSrc} />
        </div>;
    }
}