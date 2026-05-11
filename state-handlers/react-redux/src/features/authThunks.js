// src/features/auth/authThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';

const mockLoginApi = async (credentials) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (credentials.username === 'usuario' && credentials.password === 'contraseña') {
                resolve({ id: 1, name: 'Usuario Ejemplo', token: 'abcd1234' });
            } else {
                reject(new Error('Credenciales inválidas'));
            }
        }, 1000);
    });
};

export const loginAsync = createAsyncThunk(
    'auth/loginAsync',
    async (credentials, { rejectWithValue }) => {
        try {
            const user = await mockLoginApi(credentials);
            return user;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
