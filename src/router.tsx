import { createBrowserRouter } from 'react-router-dom'
import GuestLayout from './Layout/Guest'
import LandingPage from './Pages/Landing'

export default createBrowserRouter([

    {
        path: '',
        element: <GuestLayout/>,
        children: [
            {
                path: '',
                element: <LandingPage/>
            }
        ]
    }
])

