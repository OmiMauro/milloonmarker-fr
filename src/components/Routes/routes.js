import AboutPage from '../../pages/AboutPage'
import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import RegisterPage from '../../pages/RegisterPage'
import ServicePage from '../../pages/ServicePage'
import Error404Page from '../../pages/Error404Page'
import ContactPage from '../../pages/ContactPage'

// private routes
import Dashboard from '../../containers/Dashboard/Dashboard'
import ProfileFormContainer from '../../containers/Profile/ProfileFormContainer'
import ProfileContainer from '../../containers/Profile/ProfileContainer'

export const routesPublics = [
	{ path: '/', element: HomePage },
	{ path: 'login', element: LoginPage },
	{ path: 'register', element: RegisterPage },
	{ path: 'about', element: AboutPage },
	{ path: 'contact', element: ContactPage },
	{ path: 'services', element: ServicePage },

	{ path: '*', element: Error404Page },
]

export const routesPrivates = [
	{
		path: '',
		element: Dashboard,
	},
	{
		path: 'profile',
		element: ProfileContainer,
	},
	{
		path: 'profile/edit/:id',
		element: ProfileFormContainer,
	},
]
