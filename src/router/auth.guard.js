import { Auth } from 'aws-amplify'

export default async (to, from, next) => {
	const isProtected = to.matched.some((route) => route.meta.protected)
	let loggedIn
	try {
		loggedIn = await Auth.currentUserInfo()
		console.log(`User is ${loggedIn ? '' : 'not'} logged in`)
	} catch (err) {
		console.log(err)
	}
	if (isProtected && !loggedIn) {
		next('/')
		return
	}
	next()
}
