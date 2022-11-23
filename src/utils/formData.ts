export default obj => {
	const formData = new URLSearchParams()
	for (const key in obj) {
		formData.append(key, obj[key])
	}
	return formData
}
