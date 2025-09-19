import { createBrowserRouter } from 'react-router-dom'
import GuestLayout from './Layout/Guest'
import LandingPage from './Pages/Landing'
import ExplorePage from './Pages/Explore'
import ViewVehiclePage from './Pages/View_Vehicle'

export default createBrowserRouter([

    {
        path: '',
        element: <GuestLayout/>,
        children: [
            {
                path: '',
                element: <LandingPage/>
            },
            {
                path: '/explore',
                element: <ExplorePage/>
            },
                        {
                path: '/vehicle',
                element: <ViewVehiclePage/>
            }
        ]
    }
])

