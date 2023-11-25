import Logout from '../components/logout/Logout';
import * as request from '../lib/request';
import Path from '../paths';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}${Path.Login}`, {
        email,
        password,
    });

    return result;
};

export const register = async (email, password) =>
    await request.post(`${baseUrl}${Path.Register}`, {
        email,
        password,
    });

export const logout = async() => await request.get(`${baseUrl}${Logout}`);