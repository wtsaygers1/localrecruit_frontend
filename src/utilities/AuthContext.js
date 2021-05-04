import { createContext, useState, useEffect, useContext, useHistory } from "react";
import { axiosHelper } from "./axiosHelper";
import history from './history';

const AuthContext = createContext({});

export const AuthHelper = () => {
    const [token, setToken] = useState('');

    useEffect(() => {
        let lsToken = window.localStorage.getItem('token');

        if (lsToken) {
            setToken(lsToken)
        }
    }, [])

    function saveToken(res) {
        const APItoken = res.data.data.token || res.data.access_token;
        setToken(APItoken)
        window.localStorage.setItem('token', APItoken)
        // console.log('successful reg')
        history.replace('/');
        console.log(history);
    }

    function destroyToken() {
        setToken('')
        window.localStorage.removeItem('token');
    }

    function register(registrationData) {
        axiosHelper({
            data: registrationData,
            method: 'post',
            url: '/api/register',
            successMethod: saveToken
        })
    }

    function login(loginData) {
        axiosHelper({
            data: loginData,
            method: 'post',
            url: '/oauth/token',
            successMethod: saveToken
        })
    }

    function logout() {
        axiosHelper({
            url: '/api/auth/logout',
            successMethod: destroyToken,
            token
        })
    }

    return { token, register, login, logout }
}

export const AuthProvider = (props) => {

    const initialContext = AuthHelper()

    return (
        <AuthContext.Provider value={initialContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

export default AuthContext;