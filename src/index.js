import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  return (
    <HookSwitcher/>
  );
};


const [color] = useState('white')


const HookSwitcher = () => {
  return (
    <div style={{padding: '10px', backgroundColor: 'white'}}>
  <button onClick = { () => {} }> Dark </button>
  <button onClick = { () => {} }> Light </button>
</div>
  );
};


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


