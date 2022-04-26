import "./ContentTitle.css"
import {Link} from "react-router-dom";

export const ContentTitle = () => {
    return (
        <div className="content-title-container">
            <div className="content-title-heading">
                <h2 className="cl default cl-heading">RELEASES</h2>
                <span className="cl-05 cl-title-02 cl upper">Enjoy some new awesome music</span>
            </div>
            <Link className="content-title-more cl-05 cv-title-01" to="/">See all
                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.94444 1.5L14 6.5M14 6.5L8.94444 11.5M14 6.5L1 6.5" stroke="#EF2F62"
                          stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Link>
        </div>
    )
}