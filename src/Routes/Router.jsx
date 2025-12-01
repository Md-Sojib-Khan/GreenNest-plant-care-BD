import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/HomePage";
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
                path:'/',
                Component: HomePage,
                loader: () => fetch('/plants.json'),
                hydrateFallbackElement: <p className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner loading-xl"></span></p>
            }
        ]
    },
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                path: '/plants',
                Component: PlantsPage,
                loader: () => fetch('/plants.json'),
                hydrateFallbackElement: <p className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner loading-xl"></span></p>
            },
            {
                path: '/plants/:id',
                element: <PlantDetails></PlantDetails>,
                loader: () => fetch('/plants.json'),
                hydrateFallbackElement: <p className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner loading-xl"></span></p>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <ProfilePage></ProfilePage>
                </PrivateRoute>
            }
        ]
    }
])

export default router