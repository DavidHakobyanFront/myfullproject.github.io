import React from 'react';
import css from "./menu.module.css"
import {publicRoutes, routes} from "../utils/routes";
import {Link, useLocation} from "react-router-dom";

const Menu = () => {
  const isAuth = localStorage.getItem("token")


        const {pathname} = useLocation()
        console.log(pathname)


    return (
        <ul className={css.menu}>

            {
                isAuth?

                    routes.map(({name, path}) => {
                        return <li key={path}>
                            <Link to={path}
                                  exact="true"
                                  className={pathname === path ? css.active : undefined}
                            >
                                {name}
                            </Link>
                        </li>
                    })
                    :

                    publicRoutes.map(({id, name,path}) => {
                        return <li key={id}>
                            <Link
                                to={path}
                                exact="true"
                                className={pathname === path ? css.active : undefined}
                            >
                                {name}
                            </Link>
                        </li>
                    })
            }
        </ul>
    );
};

export default Menu;