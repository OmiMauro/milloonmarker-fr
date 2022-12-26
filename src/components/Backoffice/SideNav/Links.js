import { Link } from 'react-router-dom'

export const linksAdmin = [
	<Link to="/backoffice" className="nav-link align-middle px-0">
		<i className="fs-4 bi-table fa fa-table"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Home</span>
	</Link>,
	<Link to="/backoffice/pagos" className="nav-link px-0 align-middle ">
		<i className="fs-4 fa fa-user-circle"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Payments</span>
	</Link>,
	<Link to="/backoffice/comprar" className="nav-link px-0 align-middle ">
		<i className="fs-4 fa fa-user-circle"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Comprar</span>
	</Link>,
	<Link to="/backoffice/retirar" className="nav-link px-0 align-middle ">
		<i className="fs-4 fa fa-user-circle"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Payments</span>
	</Link>,

	<Link to="/backoffice/users" className="nav-link align-middle px-0">
		<i className="fs-4 fa fa-user"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Usuarios</span>
	</Link>,
]

export const linksUser = [
	<Link to="/backoffice" className="nav-link align-middle px-0">
		<i className="fs-4 fa fa-table"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Home</span>
	</Link>,
	<Link to="/backoffice/pagos" className="nav-link px-0 align-middle ">
		<i className="fs-4 fa fa-user-circle"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Payments</span>
	</Link>,
	<Link to="/backoffice/comprar" className="nav-link px-0 align-middle ">
		<i className="fs-4 fa fa-user-circle"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Comprar</span>
	</Link>,
	<Link to="/backoffice/retirar" className="nav-link px-0 align-middle ">
		<i className="fs-4 fa fa-user-circle"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Payments</span>
	</Link>,
	<Link to="/backoffice/profile" className="nav-link px-0 align-middle ">
		<i className="fs-4 fa fa-user-circle"></i>{' '}
		<span className="ms-1 d-none d-sm-inline">Perfil</span>
	</Link>,
]
