import React from 'react'

const Buy = () => {
	return (
		<>
			<div className="container py-5 h-100">
				<div className="row d-flex align-items-center justify-content-center h-100">
					<h1 className="fw-bold text-center text-uppercase">Comprar</h1>
					<div className="col-md-8 col-lg-7 col-xl-6">
						{/* 	<img src={img} className="img-fluid" alt="Phone image" /> */}
					</div>
					<div className="col-md-7 col-lg-5 col-xl-5"></div>
					{/*   offset-xl-1  */}
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
					<p className="text-center text-success">
						Liberacion de activos cada 72hs
					</p>
				</div>
			</div>
		</>
	)
}

export default Buy
