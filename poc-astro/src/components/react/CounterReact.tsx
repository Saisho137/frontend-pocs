import { useState } from 'react';

export default function CounterReact() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-react">
      <p>Clicks: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Incrementar</button>
    </div>
  );
}
