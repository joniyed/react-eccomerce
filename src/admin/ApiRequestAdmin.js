import {
    CREATE_CATEGORY_URL, PROUDUCT_URL
} from '../config/Config'

export const createCategory = (token, userId, Category) => {
    return fetch(`${CREATE_CATEGORY_URL}/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(Category)
    }).then(res => {
        return res.json();
    }).catch(err => {
        console.log(err.message);
    })
}

export const createProduct = (token, userId, product) => {
    return fetch(`${PROUDUCT_URL}/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: product
    }).then(res => {
        return res.json();
    }).catch(err => {
        console.log(err.message);
    })
}