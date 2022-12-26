import React from 'react'

const Retract = () => {
	return (
		<>
			<div className="container py-5 h-100">
				<div className="row d-flex align-items-center justify-content-center h-100">
					<h1 className="fw-bold text-center text-uppercase">
						Retirar Dolares
					</h1>
					<div className="col-md-8 col-lg-7 col-xl-6">
						{/* 	<img src={img} className="img-fluid" alt="Phone image" /> */}
					</div>
					<div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1"></div>
					<form>
						<div className="form-outline mb-4">
							<input
								placeholder="250USD"
								type="text"
								required
								readOnly
								className="form-control form-control-lg"
							/>
							<label className="form-label">Disponible</label>
						</div>
						<div className="form-outline mb-4">
							<input
								placeholder="Monto a retirar"
								type="number"
								required
								className="form-control form-control-lg"
							/>
							<label className="form-label">Monto a retirar</label>
						</div>
						<div className="form-outline mb-4">
							<input
								placeholder="98.00 USDT"
								type="number"
								required
								className="form-control form-control-lg"
							/>
							<label className="form-label">
								Vas a recibir <span className="fw-bolder">2% de comision</span>
							</label>
						</div>
						<div className="form-outline mb-4">
							<input
								placeholder="TRON (TRC20)"
								required
								className="form-control form-control-lg"
							/>
							<label className="form-label">Red</label>
						</div>
						<div className="form-outline mb-4">
							<input
								placeholder="AXXXU22R65G65HG5HB5HN8"
								required
								className="form-control form-control-lg"
							/>
							<label className="form-label">Direccion de USDT</label>
						</div>
						{/* 	<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 text-danger">
						{errorApi?.map(
							(err) =>
								err.msg &&
								!err.param && <div className="text-danger">{err.msg}</div>
						)}
					</div> */}
						<button type="submit" className="btn btn-primary btn-lg btn-block">
							RETIRAR
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default Retract
