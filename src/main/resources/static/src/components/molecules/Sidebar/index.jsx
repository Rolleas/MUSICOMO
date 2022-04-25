import "./Sidebar.css"
import {Logo} from "../../atoms/Logo";

export const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <Logo />
            </div>
        </div>
    )
}