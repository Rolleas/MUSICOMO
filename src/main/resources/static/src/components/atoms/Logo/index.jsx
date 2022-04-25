import "./Logo.css"
import {Link} from "react-router-dom";

export const Logo = () => {
    return (
        <Link className="logo-container" to="/">
            <div className="logo-icon">
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 30.0616V10.296L7 7.15144V32.3077L12 35.0031V4.45612L17 2.21002V37.2492L20 39.4953L23 37.2492V2.21002L28 4.45612V35.0031L33.5 32.3077V7.15144L39 10.296V30.0616" stroke="#FF6647" stroke-width="2"/>
                </svg>
            </div>
            <span className="logo-text">MUSICOMO</span>
        </Link>
    )
}