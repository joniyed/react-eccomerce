import {
    SIGNIN_URL,
    SIGNUP_URL,
    SIGNOUT_URL
} from '../config/Config'

export const signup = user => {
    return fetch(SIGNUP_URL, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => {
        return res.json();
    }).catch(err => {
        console.log(err.message);
    })
}
export const signin = user => {
    return fetch(SIGNIN_URL, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => {
        return res.json();
    }).catch(err => {
        console.log(err.message);
    })
}


export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem('jwt', JSON.stringify(data));
        next()
    }
}

export const signout = next => {
    if (typeof window !== "undefined") {
        localStorage.removeItem('jwt');
        next()
        return fetch(SIGNOUT_URL, {
            method: "GET"
        }).then(res => console.log('signout', res))
            .catch(err => console.log(err));
    }
}


export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
}