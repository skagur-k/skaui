const getCurrentUrl = () => {
	if (typeof window !== 'undefined') {
		return window.location.href.split('#')[0]
	}
	return null
}

export default getCurrentUrl
