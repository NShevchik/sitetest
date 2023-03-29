import './App.css';
import { createPdf } from './createpdf';

function App() {
  return (
    <div className="App">
      <input className='input'></input>
      <button className='button' onClick={() => createPdf()}>Test site + PDF</button>
      <div className='output'></div>
    </div>
  );
}

export default App;
