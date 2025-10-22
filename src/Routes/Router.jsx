import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/HomePage";
import MainLayout from "../Layouts/MainLayout";
import PlantsPage from "../Pages/PlantsPage";

const router = createBrowserRouter([
    {
        path:'/',
        Component: RootLayout,
        children:[
            {
                index: true,
                Component: HomePage,
                loader: ()=>fetch('/plants.json')
            }
        ]
    },
    {
        path: '/plants',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component:PlantsPage
            }
        ]
    }
])

export default router