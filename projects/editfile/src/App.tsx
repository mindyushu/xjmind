import { createSignal, type Component } from 'solid-js';

const App: Component = () => {
  const [text,setText]=createSignal('text')

  return <div>
    <h1>Edit File</h1>
    <span>{text()}</span>
    <button onclick={()=>{
      setText(eval('add(1,2,3)'))
    }}>Do ADD</button>
  </div>;
};

export default App;
