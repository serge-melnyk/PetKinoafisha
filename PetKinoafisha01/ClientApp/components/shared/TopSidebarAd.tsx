import * as React from "react";
import ad from "@Images/ads/sidebar-ad2.jpg"

export class TopSidebarAd extends React.Component<{}, {}> {
    private adSrc = ad;
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="">
            <img className="sidebar-header-ad" src={this.adSrc} />
        </div>;
    }
}