import {Redirect, Route} from "react-router-dom"

const PrivateRoute = ({children, isLoggedIn, ...rest}) => {
	return (
		<Route
			{...rest}
			render={() => isLoggedIn === true ? children : <Redirect to="/auth/login"/>}
		/>
	)
}

export default PrivateRoute
