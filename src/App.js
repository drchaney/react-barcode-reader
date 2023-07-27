import { useState } from 'react';
import BarcodeScanner from './components/BarcodeScanner';

function App() {
  const [barcode, setBarcode] = useState('n/a');
  const [startScanning, setStartScanning] = useState(false);
  const [buttonText, setButtonText] = useState('Start Scanning');

  function handleButtonClick(event){
    event.preventDefault();
    setStartScanning(!startScanning);
    if (!startScanning){
      setButtonText('Stop Scanning')
    } else {
      setButtonText('Start Scanning')
    }
  }

  return (
    <>
      <h1>Scanning QR/barcodes...</h1>
      <button onClick={handleButtonClick}>{buttonText}</button>
      <h2>Code scanned: {barcode}</h2>
      {
        startScanning? 
          <>
            <BarcodeScanner setBarcode={setBarcode}/>
            <video id="scanning-video-frame"/>
          </>
        : null
      }
    </>
  );
}

export default App;