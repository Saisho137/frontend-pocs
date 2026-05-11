import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import LoginForm from "./components/loginForm";

function App() {
  const { user, loading, error } = useSelector((state) => state.auth);

  return (
    <article style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Redux Example</h1>
      {loading && <h2>Cargando!</h2>}
      {error && <h2>Error!</h2>}
      <section>
        <h2 style={{ textAlign: 'center' }}>Authentication:</h2>
        <Auth />
      </section>
      {!user && <section>
        <h2 style={{ textAlign: 'center' }}>Authentication with effects:</h2>
        <LoginForm />
      </section>}
      {user && <>
        <section>
          <h2 style={{ textAlign: 'center' }}>Todo Counter:</h2>
          <Counter />
        </section>
        <section>
          <h2 style={{ textAlign: 'center' }}>To do:</h2>
          <TodoList />
        </section>
      </>}
    </article>
  );
}

export default App;
