import { ROLES } from '../../constants'

import AboutPage from '../../pages/AboutPage'
import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import RegisterPage from '../../pages/RegisterPage'
import ServicePage from '../../pages/ServicePage'
import Error404Page from '../../pages/Error404Page'
import ContactPage from '../../pages/ContactPage'
import Error401Page from '../../pages/Error401Page'
// private routes
import Backoffice from '../../containers/Backoffice/Backoffice'
import ProfileFormContainer from '../../containers/Profile/ProfileFormContainer'
import ProfileContainer from '../../containers/Profile/ProfileContainer'
import AdminPanelContainer from '../../containers/AdminPanel/AdminPanelContainer'
import BuyContainer from '../../containers/Buy/BuyContainer'
import RetractContainer from '../../containers/Retract/RetractContainer'
const routesPublics = [
	{ path: '/', element: HomePage },
	{ path: 'login', element: LoginPage },
	{ path: 'register', element: RegisterPage },
	{ path: 'about', element: AboutPage },
	{ path: 'contact', element: ContactPage },
	{ path: 'unauthorized', element: Error401Page },
	/* { path: 'services', element: ServicePage },
	{ path: 'forgot-password', element: ForgotPasswordPage },
	{ path: 'reset-password/:token', element: ResetPasswordPage },
	{ path: 'confirm-email/:token', element: ConfirmEmailPage }, */
	{ path: '*', element: Error404Page },
]

const routesPrivates = [
	{
		path: '',
		element: Backoffice,
		allowedRoles: [ROLES.STANDARD, ROLES.ADMIN],
	},
	{
		path: 'profile',
		element: ProfileContainer,
		allowedRoles: [ROLES.ADMIN, ROLES.STANDARD],
	},
	{
		path: 'transactions',
		element: AdminPanelContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'comprar',
		element: BuyContainer,
		allowedRoles: [ROLES.ADMIN, ROLES.STANDARD],
	},
	{
		path: 'retirar',
		element: RetractContainer,
		allowedRoles: [ROLES.ADMIN, ROLES.STANDARD],
	},
	/* 
	{
		path: 'users',
		element: UsersListContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'users/create',
		element: UsersContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'users/edit/:id',
		element: UsersContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'organizations',
		element: OrganizationContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	{
		path: 'organizations/edit/:id',
		element: OrganizationFormContainer,
		allowedRoles: [ROLES.ADMIN],
	},
	
	{
		path: 'profile/edit/:id',
		element: ProfileFormContainer,
		allowedRoles: [ROLES.ADMIN, ROLES.STANDARD],
	}, */
]

export { routesPrivates, routesPublics }
