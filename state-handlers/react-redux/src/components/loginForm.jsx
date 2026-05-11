// src/components/LoginForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice'
import { loginAsync } from '../features/authThunks';

const LoginForm = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        dispatch(loginAsync({ username, password }));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            {auth.isLoggedIn ? (
                <div>
                    <h2>Bienvenido, {auth.user.name}</h2>
                    <button onClick={handleLogout}>Cerrar Sesión</button>
                </div>
            ) : (
                <div>
                    <h2>Iniciar Sesión</h2>
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin} disabled={auth.loading}>
                        {auth.loading ? 'Iniciando...' : 'Iniciar Sesión'}
                    </button>
                    {auth.error && <p style={{ color: 'red' }}>{auth.error}</p>}
                </div>
            )}
        </div>
    );
};

export default LoginForm;
