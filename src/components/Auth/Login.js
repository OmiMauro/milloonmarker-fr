import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schemaLogin = yup.object().shape({
	email: yup
		.string()
		.min(5, 'Email must be minimum of length 5')
		.required('Email is required'),
	password: yup
		.string()
		.min(6, 'Password must be minimum of length 6')
		.required('Password is required'),
})
const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: yupResolver(schemaLogin) })

	const onSubmitHandler = (data) => {
		console.log(data)
		/* reset() */
	}

	return (
		<section className="vh-100">
			<div className="container py-5 h-100">
				<div className="row d-flex align-items-center justify-content-center h-100">
					<div className="col-md-8 col-lg-7 col-xl-6">
						<img
							src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
							className="img-fluid"
							alt="Phone image"
						/>
					</div>
					<div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
						<form>
							<div className="form-outline mb-4">
								<input
									{...register('email')}
									placeholder="email"
									type="email"
									required
									className="form-control form-control-lg"
								/>
								<label class="form-label" for="form1Example13">
									Email address
								</label>
								<p>{errors.email?.message}</p>
							</div>
							<div className="form-outline mb-4">
								<input
									{...register('password')}
									placeholder="password"
									type="password"
									required
									className="form-control form-control-lg"
								/>
								<label class="form-label" for="form1Example23">
									Password
								</label>
								<p>{errors?.password?.message}</p>
							</div>

							<button
								type="submit"
								className="btn btn-primary btn-lg btn-block"
							>
								Sign in
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
					</div>
				</div>
			</div>
		</section>
	)
}

export default Login
{
	/* <form onSubmit={handleSubmit(onSubmitHandler)}>
			<h2>Lets sign you in.</h2>
			<br />

			<input {...register('email')} placeholder="email" type="email" required />
			<p>{errors.email?.message}</p>
			<br />

			<input
				{...register('password')}
				placeholder="password"
				type="password"
				required
			/>
			<p>{errors?.password?.message}</p>
			<br />

			<button type="submit">Sign in</button>
		</form>
 */
}
