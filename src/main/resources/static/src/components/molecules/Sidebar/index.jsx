import "./Sidebar.css"
import "../../atoms/SidebarLink/SidebarLink.css"

import {Logo} from "../../atoms/Logo";
import {SidebarLink} from "../../atoms/SidebarLink";
import Links from "../../../util/links"

import {useState} from "react";

export const Sidebar = () => {
    const [active, setActive] = useState();

    const onClick = (name) => {
        setActive(name)
    }

    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <Logo />
                <div className="sidebar-links">
                    {Links.map(link => <SidebarLink
                        name={link.name}
                        link={link.link}
                        icon={link.icon}
                        style={active === link.name ? 'sidebar-link-container-active' : 'sidebar-link-container'}
                        onClick={e => onClick(link.name)}
                    />)}
                </div>
            </div>
        </div>
    )
}