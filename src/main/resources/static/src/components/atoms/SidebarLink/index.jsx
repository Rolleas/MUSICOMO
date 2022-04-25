import "./SidebarLink.css"
import {Link} from "react-router-dom";

export const SidebarLink = ({icon, name, link}) => {
    return (
        <Link className="sidebar-link-container" to={link}>
            <div className="sidebar-link-icon">
                {icon}
            </div>
            <span className="cv-link-01 cl-02">{name}</span>
        </Link>
    )
}