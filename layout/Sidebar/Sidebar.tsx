import styles from './Sidebar.module.css';
import {SidebarProps} from "./Sidebar.props";
import React from "react";
import {Menu} from "../Menu/Menu";

export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            <Menu />
        </div>
    )
};