import React from 'react'
import { Outlet } from 'react-router-dom'

import SideNav from '../Dashboard/SideNav/SideNav'

const LayoutPrivate = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row flex-nowrap">
					<SideNav />
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default LayoutPrivate
