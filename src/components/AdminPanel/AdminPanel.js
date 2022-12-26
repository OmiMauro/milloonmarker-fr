import React from 'react'

const AdminPanel = ({ status, errors }) => {
	const payments = [
		{
			_id: 1,
			name: 'Juan',
			lastname: 'Perez',
			extraction: 100,
			buy: 50,
			disponible: 50,
			usd_t: 25,
			confirmar: false,
		},
	]
	return (
		<div className="container">
			<>
				<h4 className="text-center text-muted">Pagos</h4>
				<table className="table table-striped table-light table-bordered table-hover">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Nombre</th>
							<th scope="col">Apellido</th>
							<th scope="col">Retira</th>
							<th scope="col">Compra</th>
							<th scope="col">Confirmar</th>

							<th scope="col">Disponible</th>
							<th scope="col">USD_T</th>
						</tr>
					</thead>
					<tbody className="table-striped">
						{payments?.map((payment, index) => {
							return (
								<tr key={payment?._id}>
									<th>{payment?.name}</th>
									<th>{payment?.lastname}</th>
									<th>{payment?.extraction}</th>
									<th>{payment?.buy}</th>
									<th>{payment?.confirmar ? 'SI' : 'NO'}</th>

									<th>{payment?.disponible}</th>
									<th>{payment?.usd_t}</th>

									{/* <th>
										{_orderId?.status !== 'approved' && (
											<a
												className="btn btn-outline-primary"
												href={inscription?._orderId?.init_point}
												target="_blank"
											>
												Pagar
											</a>
										)}
										<Link
											className="btn btn-outline-primary"
											to={`/backoffice/inscription/${inscription._id}`}
										>
											Ver
										</Link>
									</th> */}
								</tr>
							)
						})}
					</tbody>
				</table>
			</>
		</div>
	)
}

export default AdminPanel
