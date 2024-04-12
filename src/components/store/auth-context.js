import React, { useState } from 'react'
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
})

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('isLoggedIn')
    const [token, setToken] = useState(initialToken)
    const userIsLoggedIn = !!token;//THIS WILL CONVERT TRUITHY OR FALSY VALUE TO BOOLEAN VALUE
    
    const loginHandler = (token) => {
        setToken(token)
        localStorage.setItem('isLoggedIn', token)
    }

    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('isLoggedIn')
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext