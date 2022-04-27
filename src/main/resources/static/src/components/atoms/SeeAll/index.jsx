import {Link} from "react-router-dom";
import "./SeeAll.css"

export const SeeAll = () => {
    return (
        <Link className="see-all cl-05 cv-title-01" to="/">See all
            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.94444 1.5L14 6.5M14 6.5L8.94444 11.5M14 6.5L1 6.5" stroke="#EF2F62"
                      stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Link>
    )
}