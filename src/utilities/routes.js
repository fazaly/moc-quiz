import { createBrowserRouter } from "react-router-dom";
import Home from '../components/Home/Home';
import Topics from '../components/Topics/Topics';
import Statistics from '../components/Statistics/Statistics';
import Blog from '../components/Blog/Blog';
import Root from "../components/Root/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: async () => {return fetch("https://openapi.programming-hero.com/api/quiz")},
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/topics',
                element: <Topics></Topics>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;