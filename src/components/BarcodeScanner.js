import { useEffect } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';

export default function BarcodeScanner({ setBarcode }){
  const codeReader = new BrowserMultiFormatReader();

  function handleScan(result){
    if (result) {
      setBarcode(result.text);
    }
  };

  useEffect(() => {
    codeReader
    .decodeOnceFromVideoDevice(undefined, 'scanning-video-frame')
    .then(handleScan)
    .catch(console.error);

    return () => {
      codeReader.reset();
    };
  }, []);
};