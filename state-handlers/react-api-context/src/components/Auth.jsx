import { useAuth } from '../context/AuthContext';

const Auth = () => {
    const { user, login, logout } = useAuth();
    return (
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {user ? (
                <div>
                    <p>Bienvenido, {user.name}</p>
                    <button onClick={logout}>Cerrar Sesión</button>
                </div>
            ) : (
                <button onClick={() => login({ id: 1, name: 'Santiago Betancur' })}>
                    Iniciar Sesión
                </button>
            )}
        </section>
    );
};

export default Auth;