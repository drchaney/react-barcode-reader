import { useEffect } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';

export default function BarcodeScanner({ setBarcode }){
  const barcodeReader = new BrowserMultiFormatReader();

  function handleScan(result){
    if (result) {
      setBarcode(result.text);
    }
  };

  useEffect(() => {
    async function readBarcode() {
      try {
        const result = await barcodeReader.decodeOnceFromVideoDevice(undefined, 'scanning-video-frame');
        handleScan(result);
      } catch (error) {
        console.error(error);
      }
    }
    readBarcode();
  }, []);
};