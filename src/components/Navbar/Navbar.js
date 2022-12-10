import React from 'react'
/* import './styles.css' */
import { Link } from 'react-router-dom'
import logo from './favicon.png'
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg py-3 shadow-sm" id="mainNav">
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
						<div className="">
							<Link className="btn btn-outline-dark " to="/login">
								Login
							</Link>
							<Link className="btn btn-outline-dark " to="/register">
								Register
							</Link>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
