import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import {} from 'react-fontawesome'
const Footer = () => {
	const date = new Date()
	return (
		<footer id="footer" className="mt-2">
			<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6 footer-contact">
							<h3 className="">
								<Link to="/"></Link>
								{process.env.REACT_APP_NAME}
							</h3>
							<p>
								Direccion <br />
								New York, NY 535022
								<br />
								United States <br />
								<br />
								<strong>Celular:</strong> +1 5589 55488 55
								<br />
								<strong>Correo Electronico:</strong> info@example.com
								<br />
							</p>
						</div>

						<div className="col-lg-4 col-md-6 footer-links">
							<h4>Enlaces útiles</h4>
							<ul>
								<li>
									<i className="bx bx-chevron-right"></i>{' '}
									<Link to="/">Inicio</Link>
								</li>
								<li>
									<i className="bx bx-chevron-right"></i>{' '}
									<Link to="/about">Nosotros</Link>
								</li>

								<li>
									<i className="bx bx-chevron-right"></i>
									<Link to="/about">Terminos del servicio</Link>
								</li>
								<li>
									<i className="bx bx-chevron-right"></i>
									<Link to="/about">Politicas de privacidad</Link>
								</li>
							</ul>
						</div>

						<div className="col-lg-4 col-md-6 footer-links">
							<h4>Nuestras redes sociales</h4>
							<p>Lorem ipsum</p>
							<div className="social-links mt-3">
								<a href="#" className="twitter">
									<i className="bx bxl-twitter fa-facebook"></i>
								</a>
								<a href="#" className="facebook">
									<i className="bx bxl-facebook"></i>
								</a>
								<a href="#" className="instagram">
									<i className="bx bxl-instagram"></i>
								</a>
								<a href="#" className="google-plus">
									<i className="bx bxl-skype"></i>
								</a>
								<a href="#" className="linkedin">
									<i className="bx bxl-linkedin"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container footer-bottom clearfix text-center">
				<div className="copyright ">
					&copy;{' '}
					<strong>
						<span className="text-uppercase fw-bold">
							{process.env.REACT_APP_NAME}
						</span>
					</strong>
					. All Rights Reserved - {date.getFullYear()}
				</div>
			</div>
		</footer>
	)
}

export default Footer
