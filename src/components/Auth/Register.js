import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectorAuth,
	clearState,
	registered,
	logged,
} from '../../redux/slices/auth-slices'
import { useNavigate } from 'react-router-dom'
const schemaRegister = yup.object().shape({
	email: yup
		.string()
		.email('Ingrese un email valido')
		.required('El email es requerido'),
	password: yup
		.string()
		.min(6, 'La contraseña debe ser minimo de 6 caracteres')
		.required('La contraseña es requerida'),
	repeatPassword: yup.string(),
	name: yup.string().required('Ingrese el nombre'),
	lastname: yup.string().required('El apellido es requerido'),
	phone: yup.string().required('El celular es requerido'),
})
const Register = () => {
	const dispatch = useDispatch()
	const {
		auth,
		user,
		status,
		errors: errorApi,
		msg,
	} = useSelector(selectorAuth)

	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: yupResolver(schemaRegister) })

	useEffect(() => {
		dispatch(clearState())
	}, [])
	const onSubmitHandler = (data) => {
		dispatch(registered(data))
		/* 	reset() */
	}
	let img =
		'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
	return (
		<section className="">
			<div className="container py-5 h-100">
				<div className="row d-flex align-items-center justify-content-center h-100">
					<h1 className="fw-bold text-center text-uppercase">Registrarme</h1>
					<div className="col-md-8 col-lg-7 col-xl-6">
						<img src={img} className="img-fluid" alt="Phone image" />
					</div>
					<div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
						<form onSubmit={handleSubmit(onSubmitHandler)}>
							<div className="form-outline mb-4">
								<input
									{...register('name')}
									placeholder="Juan"
									type="text"
									required
									className="form-control form-control-lg"
								/>
								<label className="form-label">Nombre</label>
								<p className="text-danger">{errors.name?.message}</p>
								{errorApi?.map(
									(err) =>
										err.param == 'name' && (
											<div className="text-danger">{err.msg}</div>
										)
								)}
							</div>
							<div className="form-outline mb-4">
								<input
									{...register('lastname')}
									placeholder="Perez"
									type="text"
									required
									className="form-control form-control-lg"
								/>

								<label className="form-label">Apellido</label>
								<p className="text-danger">{errors.lastname?.message}</p>
								{errorApi?.map(
									(err) =>
										err.param == 'lastname' && (
											<div className="text-danger">{err.msg}</div>
										)
								)}
							</div>
							<div className="form-outline mb-4">
								<input
									{...register('email')}
									placeholder="juan_perez@gmail.com"
									type="email"
									required
									className="form-control form-control-lg"
								/>
								<label className="form-label">Email</label>
								<p className="text-danger">{errors.email?.message}</p>
								{errorApi?.map(
									(err) =>
										err.param == 'email' && (
											<div className="text-danger">{err.msg}</div>
										)
								)}
							</div>
							<div className="form-outline mb-4">
								<input
									{...register('phone')}
									placeholder="+541160001122"
									type="phone"
									required
									className="form-control form-control-lg"
								/>
								<label className="form-label">Celular</label>
								<p className="text-danger">{errors.phone?.message}</p>
								{errorApi?.map(
									(err) =>
										err.param == 'phone' && (
											<div className="text-danger">{err.msg}</div>
										)
								)}
							</div>
							<div className="form-outline mb-4">
								<input
									{...register('password')}
									placeholder="***********"
									type="password"
									required
									className="form-control form-control-lg"
								/>
								<label className="form-label" htmlFor="form1Example23">
									Contraseña
								</label>
								<p>{errors?.password?.message}</p>
								{errorApi?.map(
									(err) =>
										err.param == 'password' && (
											<div className="text-danger">{err.msg}</div>
										)
								)}
							</div>
							<div className="form-outline mb-4">
								<input
									{...register('repeatPassword')}
									placeholder="***********"
									type="password"
									required
									className="form-control form-control-lg"
								/>
								<label className="form-label" htmlFor="repeatPassword">
									Repita la contraseña
								</label>
								{errorApi?.map(
									(err) =>
										err.param == 'repeatPassword' && (
											<div className="text-danger">{err.msg}</div>
										)
								)}
								<p>{errors?.repeatPassword?.message}</p>
							</div>
							<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 text-danger">
								{errorApi?.map(
									(err) =>
										err.msg &&
										!err.param && <div className="text-danger">{err.msg}</div>
								)}
							</div>
							<button
								type="submit"
								className="btn btn-primary btn-lg btn-block"
							>
								Registrarme
							</button>
							{/*
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
							</a> */}
						</form>
						{msg && <p className="text-success text-center">{msg}</p>}
						<p className="mt-3">
							Ya tienes cuenta?
							<Link to="/login"> Iniciar sesion</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Register
