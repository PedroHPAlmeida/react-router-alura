import styles from "./MenuLink.module.css";
import { NavLink } from "react-router-dom";

const MenuLink = ({children, to}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => 
            [styles.link, isActive ? styles.linkDestacado : ""].join(" ")
            }
        >
            {children}
        </NavLink>
    );
}

export default MenuLink;
