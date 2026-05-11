import Auth from "./components/Auth";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <article style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>API Context</h1>
      <section>
        <h2 style={{ textAlign: 'center' }}>Auth:</h2>
        <Auth />
      </section>
      {user && <>
        <section style={{ textAlign: 'center' }}>
          <h2>Todo List Counter:</h2>
          <Counter />
        </section>
        <section style={{ textAlign: 'center' }}>
          <h2>Todo List:</h2>
          <TodoList />
        </section>
      </>}
    </article>
  );
}

export default App;
