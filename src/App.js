import logo from './logo.svg';
import './App.css';
import { Button, Upload } from 'antd';

function App() {
  return (
    <div className="App">
      <Upload>
        <Button>
          Upload
        </Button>
      </Upload>
    </div>
  );
}

export default App;
