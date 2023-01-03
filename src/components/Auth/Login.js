import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import {
	selectorAuth,
	logged,
	clearState,
} from '../../redux/slices/auth-slices'
import { useSelector, useDispatch } from 'react-redux'
const schemaLogin = yup.object().shape({
	email: yup
		.string()
		.min(5, 'El email debe ser minimo 5 caracteres')
		.email('Ingrese un email valido')
		.required('El email es requerido'),
	password: yup
		.string()
		.min(6, 'La contraseña debe ser minimo de 6 caracteres')
		.required('La contraseña es requerida'),
})
const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: yupResolver(schemaLogin) })
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { auth, user, status, errors: errorsAuth } = useSelector(selectorAuth)

	useEffect(() => {
		if (auth) navigate('/backoffice')
	}, [auth])
	useEffect(() => {
		dispatch(clearState())
	}, [])
	const onSubmitHandler = (data) => {
		const body = data
		dispatch(logged(body))
		/* 	reset() */
	}
	useEffect(() => {
		dispatch(clearState())
	}, [])
	let img =
		'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
	return (
		<section className="vh-100">
			<div className="container py-5 h-100">
				<div className="row d-flex align-items-center justify-content-center h-100">
					<h1 className="fw-bold text-center text-uppercase">Iniciar Sesion</h1>

					<div className="col-md-8 col-lg-7 col-xl-6">
						<img src={img} className="img-fluid" alt="Phone image" />
					</div>
					<div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
						<form onSubmit={handleSubmit(onSubmitHandler)}>
							<div className="form-outline mb-4">
								<input
									{...register('email')}
									placeholder="example@gmail.com"
									type="email"
									required
									className="form-control form-control-lg"
								/>
								<label className="form-label" htmlFor="form1Example13">
									Email
								</label>
								<p className="text-danger">{errors.email?.message}</p>
								{errorsAuth?.map(
									(err) =>
										err.param == 'email' && (
											<div className="text-danger">{err.msg}</div>
										)
								)}
							</div>
							<div className="form-outline mb-4">
								<input
									{...register('password')}
									placeholder="******"
									type="password"
									required
									className="form-control form-control-lg"
								/>
								<label className="form-label" htmlFor="form1Example23">
									Contraseña
								</label>
								<p className="text-danger">{errors?.password?.message}</p>{' '}
								{errorsAuth?.map(
									(err) =>
										err.param == 'password' && (
											<div className="text-danger">{err.msg}</div>
										)
								)}
							</div>
							<p>
								Olvidaste tu contraseña?{' '}
								<Link to="/forgot-password">Recuperar</Link>
							</p>
							<button
								type="submit"
								className="btn btn-primary btn-lg btn-block"
								/* onClick={handleSubmit(onSubmitHandler)} */
							>
								Iniciar sesion
							</button>
						</form>
						{errorsAuth?.map(
							(err) =>
								err.msg &&
								!err.param && <div className="text-danger">{err.msg}</div>
						)}
						<p className="mt-3">
							Aún no tienes cuenta?
							<Link to="/register"> Registrarme</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Login
{
	/*
							<div className="divider d-flex align-items-center my-4">
								<p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
							</div>

						 <a
								className="btn btn-primary btn-lg btn-block"
								style="background-color: #3b5998"
								href="#!"
								role="button"
							>
								<i className="fab fa-facebook-f me-2"></i>Continue with Facebook
							</a>
							<a
								className="btn btn-primary btn-lg btn-block"
								style="background-color: #55acee"
								href="#!"
								role="button"
							>
								<i className="fab fa-twitter me-2"></i>Continue with Twitter
							</a> */
}
