
import css from "./main.module.css"
import {Route, Routes, Navigate} from "react-router-dom"
import {publicRoutes, routes} from "../utils/routes";
import {HOME_PAGE, LOGIN_PAGE} from "../utils/routes";


const Main = () => {
    const isAuth = localStorage.getItem("token")



    return (

            <div className={css.main} >
                <Routes>
                    {
                        isAuth?
                            routes.map(({path, element}) => {
                                return <Route
                                    key={path}
                                    path={path}
                                    element={element}
                                    exact="true"
                                />
                            })
                            :
                            publicRoutes.map(({path, element}) => {
                                return <Route
                                    key={path}
                                    path={path}
                                    element={element}
                                    exact="true"
                                />
                            })
                    }
                    <Route
                        path={"*"}
                        exact="true"
                        element={<Navigate to={isAuth ? HOME_PAGE : LOGIN_PAGE}/>}
                    />
                </Routes>
            </div>

    )
}

export default Main;