import { useEffect } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';

export default function BarcodeScanner({ setBarcode }){
  const barcodeReader = new BrowserMultiFormatReader();


  // decodeOnceFromVideoDevice method needs two inputs: 
  // - The video deviceId
  // - The ID of the video element to show live video (optional)
  // The first input is 'undefined' because 'getVideoInputDevices' is depreciated, so defaults to main camera
  // 'scanning-video-frame' is the ID of the <video> element in src/App.js
  useEffect(() => {
    async function readBarcode() {
      try {
        const result = await barcodeReader.decodeOnceFromVideoDevice(undefined, 'scanning-video-frame');
        setBarcode(result.text);
      } catch (error) {
        console.error(error);
      }
    }
    readBarcode();

    // Execute reset method when BarcodeScanner unmounts so the camera doesn't stay on when the 
    // component is no longer active ("Stop scanning" button)
    return () => {
      barcodeReader.reset();
    }
  }, []);
};