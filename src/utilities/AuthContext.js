import { createContext, useState, useEffect, useContext } from "react";
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
        console.log(res) // Check response
        let APItoken; // Initalize variable
        if (res.config.url === "https://localrecruit_backend-wtsaygers1973145.codeanyapp.com/api/register") {
            APItoken = res.data.data.token
        } else if (res.config.url === "https://localrecruit_backend-wtsaygers1973145.codeanyapp.com/oauth/token") {
            APItoken = res.data.access_token
        }
        setToken(APItoken);
        window.localStorage.setItem('token', APItoken)
        history.replace('/');
    }

    function destroyToken() {
        setToken('')
        window.localStorage.removeItem('token');
        history.replace('/');
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
            data: {
                grant_type: 'password',
                client_id: '2',
                client_secret: '4HPeYA6Tyuk0eyyTsIiZef7ur0IGOaMh6TdE4fI8',
                scope: '*',
                ...loginData,
            },
            method: 'post',
            url: '/oauth/token',
            successMethod: saveToken
        })
        console.log('successful login')
    }

    function logout() {
        axiosHelper({
            url: '/api/logout',
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