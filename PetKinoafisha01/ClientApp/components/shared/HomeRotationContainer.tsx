import * as React from "react";
import ad from "@Images/ads/sidebar-ad2.jpg"
import Slider from "react-slick";
import { NavLink, Redirect } from "react-router-dom";
import sonic from "@Images/ads/sonic-poster.jpg";
import badBoys from "@Images/ads/bad_boys-poster.jpg";
import jumanji from "@Images/ads/jumanji-poster.jpg";



export class HomeRotationContainer extends React.Component<{}, {}> {
    private adSrc = ad;
    private sonicSrc = sonic;
    private badGuysSrc = badBoys;
    private jumanjiSrc = jumanji;

    constructor(props) {
        super(props);
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };

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
                    <Slider {...settings}>
                        <div>
                            <div className="wrap">
                                <div className="poster">
                                    <NavLink exact to={'/example'} activeClassName="active"><img className="" src={this.jumanjiSrc} /></NavLink>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>

                </div>
            </div>
        </div>;
    }
}