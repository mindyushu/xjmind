import { createSignal, type Component } from 'solid-js';
import '../../corewasm/corewasm'

const App: Component = () => {
  const [text, setText] = createSignal('text')

  return <div>
    <h1>Edit File</h1>
    <span>{text()}</span>
    <button onclick={() => {
      setText(wasm.exports.multiply(1,2) + '')
    }}>Do ADD</button>
  </div>;
};

export default App;
