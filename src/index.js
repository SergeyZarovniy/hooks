import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  return (
    <HookSwitcher/>
  );
};





const HookSwitcher = () => {

  const [color,setColor] = useState('white');
  const [fontSize,setFontSize] = useState(14);

  return (
    <div style={{padding: '10px', backgroundColor: color, fontSize: fontSize}}>
      Hello World
  <button onClick = { () => setColor('black') }> Dark </button>
  <button onClick = { () => setColor('white') }> Light </button>
  <button onClick = { () => setFontSize ( (s) => s+2 ) }> + </button>
</div>
  );
};


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


