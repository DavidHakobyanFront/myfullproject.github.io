
import About from "../about/about";
import Home from "../home/home";
import Contacts from "../contacts/contatcs";
import Skills from "../skills/skills";
import Portfolio from "../portfolio/portfolio";
import Posts from "../posts/posts";
import Todos from "../todos/todos";
import Comments from "../comments/comments";
import Register from "../register/register";
import Login from "../login/login";
import Poster from "../poster/poster";
import Userposts from "../userposts";
import OneTodo from "../oneTodo/oneTodo";

export const HOME_PAGE="/";
export const ABOUT_PAGE="/about";
export const CONTACTS_PAGE="/contacts";
export const SKILLS_PAGE="/skills";
export const PORTFOLIO_PAGE="/portfolio";
export const POSTS_PAGE="/posts";
export const TODOS_PAGE="/todos";
export const COMMENTS_PAGE="/comments";
export const LOGIN_PAGE="/login";
export const REGISTER_PAGE="/register";
export const POST_PAGE = "/poster";
export const USERPOST_PAGE = "/userpost/";
export const COMMENT_PAGE = "/comment";
export const routes = [
    {id:1, name:"Home", path: HOME_PAGE, element:<Home />},
    {id:2, name:"About", path: ABOUT_PAGE, element:<About />},
    {id:3, name:"Contacts", path: CONTACTS_PAGE, element:<Contacts />},
    {id:4, name:"Skills", path: SKILLS_PAGE, element:<Skills />},
    {id:5, name:"Portfolio", path: PORTFOLIO_PAGE, element: <Portfolio />},
    {id:6, name:"Posts", path: POSTS_PAGE, element: <Posts />},
    {id:7, name:"Todos", path: TODOS_PAGE, element: <Todos />},
    {id:8, name:"Comments", path: COMMENTS_PAGE, element: <Comments />},
    {id:9, name:"Poster", path: `${POST_PAGE}/:id`, element: <Poster />},
    // {id:10, name:"Userpostsing", path: USERPOST_PAGE, element: <Userposts />},
    // {id:11, path:COMMENT_PAGE + '/:id', element: <OneTodo /> }

]

export const publicRoutes = [
    {id:1, name:"", path:REGISTER_PAGE, element:<Register />},
    {id:2, name:"", path: LOGIN_PAGE, element: <Login />}
]