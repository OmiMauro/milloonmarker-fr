import { ROLES } from './constants'
import LayoutPublic from './components/Layouts/LayoutPublic'
import LayoutPrivate from './components/Layouts/LayoutPrivate'

import { routesPublics, routesPrivates } from './components/Routes/routes'
import ProtectedRoutes from './components/Routes/ProtectedRoutes'

import { Routes, Route } from 'react-router-dom'
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<LayoutPublic />}>
				{routesPublics.map(({ path, element: Element }) => {
					return <Route key={path} path={path} element={<Element />}></Route>
				})}
			</Route>

			<Route
				element={
					<ProtectedRoutes allowedRoles={[ROLES.ADMIN, ROLES.CUSTOMER]} />
				}
			>
				<Route path="backoffice" element={<LayoutPrivate />}>
					{routesPrivates.map(({ path, element: Element, allowedRoles }) => {
						return (
							<Route
								key={path}
								element={<ProtectedRoutes allowedRoles={allowedRoles} />}
							>
								<Route path={path} element={<Element />}></Route>
							</Route>
						)
					})}
				</Route>
			</Route>
		</Routes>
	)
}

export default App
