import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectorAuth, verifyEmail } from '../../redux/slices/auth-slices'
import { Link } from 'react-router-dom'
import { STATUS } from '../../constants'
const ConfirmEmail = () => {
	const { token } = useParams()
	const { msg, status, errors } = useSelector(selectorAuth)
	const dispatch = useDispatch()

	useEffect(() => {
		if (token) {
			dispatch(verifyEmail(token))
		}
	}, [dispatch])
	let img =
		'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
	return (
		<section className="vh-100">
			<div className="container py-5 h-100">
				<div className="row d-flex align-items-center justify-content-center h-100">
					<h1 className="fw-bold text-center text-uppercase">
						Verificando cuenta...
					</h1>
					<div className="col-md-8 col-lg-7 col-xl-6">
						<img src={img} className="img-fluid" alt="Phone image" />
					</div>
					<div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
						<div className=" px-5 py-4 rounded-xl bg-white">
							{status === STATUS.SUCCESSFUL && (
								<>
									<p className="text-center text-success m-2">{msg}</p>
									<Link className="text-center my-3" to="/login">
										Iniciar sesión
									</Link>
								</>
							)}
							{status === STATUS.PENDING && (
								<button class="btn btn-primary btn-lg " type="button" disabled>
									<span
										class="spinner-border spinner-border-sm"
										role="status"
										aria-hidden="true"
									></span>
									Por favor, espere...
								</button>
							)}
							{status === STATUS.FAILED &&
								errors?.map((err) => (
									<div className="text-danger text-center">{err.msg}</div>
								))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ConfirmEmail
