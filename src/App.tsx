import React, {useState} from 'react';
import './App.css';
import DesignImage from './assets/BG2.png'

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [imgSrc, setImgSrc] = useState<string>(DesignImage);

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImgSrc(URL.createObjectURL(selectedFile));
    }
  };

  const handleDelete = () => {
    setFile(null);
    setImgSrc(DesignImage);
  }

  let btnName = file === null ? 'Добавить' : 'Изменить';

  return (
    <div className='App'>
      <div className='imgWrap'>
        <img src={imgSrc} alt='img'/>
      </div>
      <div className='btnWrap'>
        <label htmlFor="file-upload" className='labelBtn'>
          <input type="file" id="file-upload" onChange={handleFile}/>
          {btnName}
        </label>
        {btnName === 'Изменить' && (
          <div className='Btn' onClick={handleDelete}>Удалить</div>
        )}
      </div>
    </div>
  );
}

export default App;