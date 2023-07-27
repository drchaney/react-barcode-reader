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
        // decodeOnceFromVideoDevice needs two inputs: the video device, and the id of the element to show live video (optional)
        // The first input is 'undefined' because 'getVideoInputDevices' is depreciated
        // 'scanning-video-frame' is the id of the video element in App.js
        const result = await barcodeReader.decodeOnceFromVideoDevice(undefined, 'scanning-video-frame');
        handleScan(result);
      } catch (error) {
        console.error(error);
      }
    }
    readBarcode();
  }, []);
};