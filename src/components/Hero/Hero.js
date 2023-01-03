import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './styles.css'
import img from './hero-img.png'
import { getCotization, formatToNumber } from './cotization'

const Hero = () => {
	const [values, setValues] = useState({
		ars: 0,
		dolars: 0,
		priceDolar: 0,
	})
	const { ars, dolars, priceDolar } = values
	useEffect(() => {
		const fn = async () => {
			const response = await getCotization()
			setValues({
				...values,
				priceDolar: formatToNumber(response.casa.venta),
			})
		}
		fn()
	}, [])
	const handleChange = (e) => {
		let convertedDolars = e.target.value.replace(/[^0-9]/gi, '') / priceDolar
		let dolarsWithcomition = convertedDolars - convertedDolars * 0.02
		setValues({
			...values,
			ars: e.target.value.replace(/[^0-9]/gi, ''),
			dolars: dolarsWithcomition,
		})
	}
	return (
		<section id="hero" className="d-flex align-items-center">
			<div className="container">
				<div className="row">
					<div
						className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<h1>
							Te brindamos la mejor cotización del día para adquirir tus dolares
						</h1>
						<h2>Quiero comprar</h2>
						<div className="d-flex justify-content-center justify-content-lg-start">
							<form>
								<div className="form-outline mb-4">
									<input
										onChange={handleChange}
										placeholder="100000"
										required
										value={ars}
										className="form-control form-control-lg"
									/>
									<label className="form-label" htmlFor="form1Example13">
										Pagas ARS $:
									</label>
								</div>
								<div className="form-outline mb-4">
									<input
										required
										readOnly
										value={dolars}
										className="form-control form-control-lg"
									/>
									<label className="form-label" htmlFor="form1Example143">
										Recibís USD
									</label>
								</div>
							</form>
						</div>
					</div>
					<div
						className="col-lg-6 order-1 order-lg-2 hero-img"
						data-aos="zoom-in"
						data-aos-delay="200"
					>
						<img src={img} className="img-fluid animated" alt="" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
