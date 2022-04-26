import "./MusicCard.css"
import alb from "../../../assets/img.png"
import {Link} from "react-router-dom";

export const MusicCard = ({image}) => {
    return (
        <div className="col-5 col-sm-4 col-lg-2">
            <div className="music-card-box">
                <div className="music-card-img">
                    <img src={alb} />
                </div>
                <div className="music-card-title">
                    <Link className="сv-link-02 cl-01" to={""}>
                        SKINS
                    </Link>
                    <span className="cv-title-01 cl-03">XXXTentacion</span>
                    <span className="cl-04 cl-title-02">ALBUM</span>
                </div>
            </div>
        </div>
    )
}