import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/HomePage";
import MainLayout from "../Layouts/MainLayout";
import PlantsPage from "../Pages/PlantsPage";
import PlantDetails from "../Pages/PlantDetails";
import LoginPage from "../Pages/LoginPage";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import ProfilePage from "../Pages/ProfilePage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: HomePage,
                loader: () => fetch('/plants.json')
            }
        ]
    },
    {
        path: '/plants',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: PlantsPage,
                loader: () => fetch('/plants.json')
            },
            {
                path: '/plants/:id',
                element: <PrivateRoute>
                    <PlantDetails></PlantDetails>
                </PrivateRoute>,
                loader: () => fetch('/plants.json')
            },
            {
                path: '/plants/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/plants/signup',
                element: <Register></Register>
            },
            {
                path: '/plants/profile',
                element: <PrivateRoute>
                    <ProfilePage></ProfilePage>
                </PrivateRoute>
            }
        ]
    }
])

export default router