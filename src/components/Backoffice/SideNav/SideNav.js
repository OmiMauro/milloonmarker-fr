import { Link } from 'react-router-dom'
import { routesPrivates } from '../../Routes/routes'
import './styles.css'
import { logout, selectorAuth } from '../../../redux/slices/auth-slices'
import { useDispatch, useSelector } from 'react-redux'
import { selectorUsers } from '../../../redux/slices/user-slice'
import { linksAdmin, linksUser } from './Links'

const SideNav = () => {
	/* 	const { user } = useSelector(selectorAuth)
	let { user: userId } = useSelector(selectorUsers) */
	let user = { roleId: 2 }
	let userId = { _id: 1 }
	const dispatch = useDispatch()
	return (
		<div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
			<div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
				<Link
					to="/"
					className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
				>
					<span className="fs-5 d-none d-sm-inline">Inicio</span>
				</Link>
				{user.roleId === 2 && (
					<ul
						className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
						id="menu"
					>
						{linksAdmin.map((item, index) => {
							return <li key={index}>{item}</li>
						})}
					</ul>
				)}
				{user.roleId === 1 && (
					<ul
						className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
						id="menu"
					>
						{linksUser.map((item, index) => {
							return <li key={index}>{item}</li>
						})}
					</ul>
				)}
				<hr />
				<div className=" dropdown p-4">
					<Link
						to={`profile/${userId._id}`}
						className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
						id="dropdownUser1"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<img
							src={
								userId?.image_id?.url ||
								'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
							}
							alt="avatar"
							width="30"
							height="30"
							className="rounded-circle"
						/>
						<span className="d-none d-sm-inline mx-1">{user?.name}</span>
					</Link>
					<ul className="dropdown-menu dropdown-menu-dark text-small shadow">
						<li>
							<Link to="/backoffice/profile" className="dropdown-item">
								Perfil
							</Link>
						</li>
						<li>
							<hr className="dropdown-divider" />
						</li>
						<li>
							<button
								className="dropdown-item"
								onClick={() => {
									dispatch(logout())
								}}
							>
								Cerrar Sesion
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default SideNav

{
	/* <li>
						<Link
							to='/backoffice/organizations'
							className='nav-link align-middle px-0'>
							<i className='fs-4 bi-table'></i>{' '}
							<span className='ms-1 d-none d-sm-inline'>Organizations</span>
						</Link>
					</li>
					<li>
						<Link
							to='/backoffice/profile'
							data-bs-toggle='collapse'
							className='nav-link px-0 align-middle '>
							<i className='fs-4'></i>{' '}
							<span className='ms-1 d-none d-sm-inline'>Profile</span>
						</Link>
					</li>
					<li>
						<Link
							to='/backoffice/members'
							className='nav-link align-middle px-0'>
							<i className='fs-4 bi-grid'></i>{' '}
							<span className='ms-1 d-none d-sm-inline'>Members</span>
						</Link>
						{/* <a
							href='#submenu3'
							data-bs-toggle='collapse'
							className='nav-link px-0 align-middle'>
							<i className='fs-4 bi-grid'></i>{' '}
							<span className='ms-1 d-none d-sm-inline'>Products</span>{' '}
						</a> 
						<ul
							className='collapse nav flex-column ms-1'
							id='submenu3'
							data-bs-parent='#menu'>
							<li className='w-100'>
								<a href='#' className='nav-link px-0'>
									{' '}
									<span className='d-none d-sm-inline'>Product</span> 1
								</a>
							</li>
						</ul>
					</li>
					<li>
						<Link
							to='/backoffice/slides'
							className='nav-link align-middle px-0'>
							<i className='fs-4 bi-people'></i>{' '}
							<span className='ms-1 d-none d-sm-inline'>Slides</span>
						</Link>
					</li>
</ul> */
}
