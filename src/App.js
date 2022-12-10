import HomePage from './pages/HomePage'
import LayoutPublic from './components/Layouts/LayoutPublic'
import { routesPublics } from './components/Routes/routes'
import { Routes, Route } from 'react-router-dom'
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<LayoutPublic />}>
				{routesPublics.map(({ path, element: Element }) => {
					return <Route key={path} path={path} element={<Element />}></Route>
				})}
			</Route>
		</Routes>
	)
}

export default App
