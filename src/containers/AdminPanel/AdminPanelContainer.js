import React from 'react'
import AdminPanel from '../../components/AdminPanel/AdminPanel'

const AdminPanelContainer = () => {
	let errors, status
	return (
		<div className="col">
			<AdminPanel errors={errors} status={status}></AdminPanel>
		</div>
	)
}

export default AdminPanelContainer
