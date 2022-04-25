import "./Sidebar.css"
import {Logo} from "../../atoms/Logo";
import {SidebarLink} from "../../atoms/SidebarLink";

export const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <Logo />
                <div className="sidebar-links">
                    <SidebarLink name="Home" link="/" icon={<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 22.8513C3.34315 22.8513 2 21.5082 2 19.8513V12.1874C2 11.3369 2.36096 10.5264 2.99311 9.95751L9.9931 3.65751C11.134 2.63068 12.866 2.63068 14.0069 3.65751L21.0069 9.95751C21.639 10.5264 22 11.3369 22 12.1874V19.8513C22 21.5082 20.6569 22.8513 19 22.8513H5ZM20.5 12.1874V19.8513C20.5 20.6797 19.8284 21.3513 19 21.3513H16V15.8513C16 14.1944 14.6569 12.8513 13 12.8513H11C9.34315 12.8513 8 14.1944 8 15.8513V21.3513H5C4.17157 21.3513 3.5 20.6797 3.5 19.8513V12.1874C3.5 11.7622 3.68048 11.3569 3.99655 11.0724L10.9966 4.77245C11.567 4.25904 12.433 4.25904 13.0034 4.77245L20.0034 11.0724C20.3195 11.3569 20.5 11.7622 20.5 12.1874ZM9.5 21.3513V15.8513C9.5 15.0229 10.1716 14.3513 11 14.3513H13C13.8284 14.3513 14.5 15.0229 14.5 15.8513V21.3513H9.5Z" fill="#838383"/>
                    </svg>
                    }/>
                </div>
            </div>
        </div>
    )
}