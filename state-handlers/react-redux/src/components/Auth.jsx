import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/authSlice';

const Auth = () => {
    const { user, isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login({ id: 1, name: 'Santiago Betancur' }));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {isLoggedIn ? (
                <div>
                    <p>Bienvenido, {user.name}</p>
                    <button onClick={handleLogout}>Cerrar Sesión</button>
                </div>
            ) : (
                <button onClick={handleLogin}>Iniciar Sesión</button>
            )}
        </section>
    );
};

export default Auth;
