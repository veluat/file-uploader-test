import React, {useState} from 'react';
import './App.css';
import DesignImage from './logo.svg'

function App() {
    const [file, setFile] = useState<string | null>(null);

    const handleFile = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
        const selectedFile = (event.target as HTMLInputElement).files?.[0] || null;
        if (selectedFile) {
            const fileUrl = URL.createObjectURL(selectedFile);
            setFile(fileUrl)
        }
    };

    const HandleDelete = () => {
        setFile(null)
    }

    let imgSrc = file === null ? DesignImage : file;
    let btnName = file === null ? 'Добавить' : 'Изменить'
    return (
        <div className='App'>
            <div className='imgWrap'>
                <img src={imgSrc} alt='img'/>
            </div>
            <div className='btnWrap'>
                <label htmlFor="file-upload" className='labelBtn' onClick={handleFile}>
                    <input type="file" id="file-upload"/>
                    {btnName}
                </label>
                {btnName === 'Изменить' && (
                    <div className='Btn' onClick={HandleDelete}>Удалить</div>
                )}
            </div>

        </div>
    );
}

export default App;
