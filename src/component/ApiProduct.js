import { PROUDUCT_URL } from '../config/Config'


export const getProduct = (sortBy) => {
    return fetch(`${PROUDUCT_URL}?sotyBy=${sortBy}&order=desc&limit=10`, {
        method: "GET"
    }).then(res => {
        return res.json();
    }).catch(err => console.log(err));
}