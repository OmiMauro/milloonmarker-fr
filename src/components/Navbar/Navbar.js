import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import logo from './favicon.png'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectorAuth,
	logout,
	clearState,
} from '../../redux/slices/auth-slices'

const Navbar = () => {
	const dispatch = useDispatch()
	const { auth, user } = useSelector(selectorAuth)
	return (
		<nav
			className="navbar navbar-expand-lg py-3 shadow-sm bg-white py-3"
			id="mainNav"
		>
			<div className="container">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link " to="/about">
								Nosotros
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link " to="/contact">
								Contacto
							</Link>
						</li>
					</ul>
					<Link
						className="navbar-brand fw-bold fs-4 mx-auto text-uppercase"
						to="/"
					>
						<img
							src={logo}
							alt="logo-organization "
							className="d-none d-lg-block"
						></img>{' '}
						<i className="fa fa-home d-block d-lg-none"></i>
					</Link>
					{auth ? (
						<ul className="navbar-nav">
							<Link to="/backoffice" className="btn btn-outline-dark ">
								<i className="fa fa-sign-in me-1"></i>Backoffice
							</Link>
							<button
								className="btn btn-outline-dark "
								onClick={() => dispatch(logout())}
							>
								<i className="fa fa-sign-in me-1 "></i>Cerrar Sesion
							</button>
						</ul>
					) : (
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="btn btn-outline-dark " to="/login">
									<i className="fa fa-sign-in me-1 "></i>Log In
								</Link>
							</li>
							<li className="nav-item">
								<Link className="btn btn-outline-dark " to="/register">
									<i className="fa fa-user-plus me-1 "></i>Registrarse
								</Link>
							</li>
						</ul>
					)}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
