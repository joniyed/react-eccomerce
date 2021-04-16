const ROOT_URL = process.env.REACT_APP_API_URL;
const VERSION = process.env.REACT_APP_API_VERSION;

export const SIGNUP_URL = `${ROOT_URL}/api/${VERSION}/auth/signup`;
export const SIGNIN_URL = `${ROOT_URL}/api/${VERSION}/auth/signin`;
export const SIGNOUT_URL = `${ROOT_URL}/api/${VERSION}/auth/signout`;

export const PROUDUCT_URL = `${ROOT_URL}/api/${VERSION}/pruduct`;

export const CREATE_CATEGORY_URL = `${ROOT_URL}/api/${VERSION}/category`;