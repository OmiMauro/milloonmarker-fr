import axios from 'axios'

const url_cotization = 'https://www.dolarsi.com/api/api.php?type=dolar'

export const getCotization = async () => {
	try {
		const response = await axios.get(url_cotization)
		return response.data[1]
	} catch (error) {
		console.log(error)
	}
}

export const formatToNumber = (value) => {
	const convertedValue = parseFloat(value.replace('.', '').replace(',', '.'))
	return !isNaN(convertedValue) ? convertedValue.toFixed(2) : 'No cotiza'
}
