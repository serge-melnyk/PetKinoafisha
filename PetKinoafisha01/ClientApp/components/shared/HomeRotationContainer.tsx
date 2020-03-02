import * as React from "react";
import ad from "@Images/ads/sidebar-ad2.jpg"

export class HomeRotationContainer extends React.Component<{}, {}> {
    private adSrc = ad;
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="announcements">
            <div className="rounded">
                <div className="h2"><div className="white-bg"><h1>Фильмы</h1><span className="white-bg orang">сегодня</span>в<span className="select" id="citiestop">
                    <span className="select-rounded">
                        <span className="bg-wrapper"><span className="ico" /*onclick="dsplSelect('citiestop')"*/> Киеве</span></span>
                        {/*<span className="select-drop">
                            <span className="select-drop-inner">
                                <ul className="cities-list">
                                    <li className="current" value="1"><a href="#">Киеве</a></li>
                                    <li value="49"><a href="#">Артемовске</a></li>
                                    <li value="45"><a href="#">Белой Церкви</a></li>
                                    <li value="64"><a href="#">Бердичеве</a></li>
                                    <li value="35"><a href="#">Броварах</a></li>
                                    <li value="74"><a href="#">Вараше</a></li>
                                </ul>
                                <span className="clearFix"></span>
                            </span>
                        </span>*/}
                    </span>
                </span>

                </div>
                </div>
                <div className="gallery">
                    <ul className="slick-initialized slick-slider">
                        <div className="slick-list draggable">
                            <div className="slick-track">
                                <li className="slick-slide slick-current">

                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>;
    }
}