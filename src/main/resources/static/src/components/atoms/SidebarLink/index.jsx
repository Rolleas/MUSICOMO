import "./SidebarLink.css"
import {Link} from "react-router-dom";

export const SidebarLink = ({style, hill, icon, name, link, ...props}) => {
    return (
        <Link className={style} to={link} {...props}>
            <div className={hill}>
            </div>
            <div className="sidebar-link-icon">
                {icon}
            </div>
            <span className="cv-link-01 cl-02">{name}</span>
        </Link>
    )
}