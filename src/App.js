import './App.css';
import { useState } from 'react';
import QRCode from 'qrcode';

function App() {
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');

  const GenerateQRCode = () => {
    if (!url) return; // Prevent generating if URL is empty
    QRCode.toDataURL(url, {
      width: 800,
      margin: 2,
      color: {
        dark: '#000080ff',  // Navy blue for dark parts of the QR code.
        light: '#ffffffff', // White for light parts of the QR code.
      }
    }, (err, url) => {
      if (err) return console.error(err);
      setQrcode(url);
    });
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      GenerateQRCode(); // Call GenerateQRCode if the "Enter" key is pressed
    }
  }

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Example: https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyDown={handleKeyDown} // Trigger the function when Enter is pressed
      />
      <button onClick={GenerateQRCode}>Generate</button>
      {qrcode && (
        <>
          <img src={qrcode} alt="Generated QR Code" />
          <a href={qrcode} download="qrcode.png">Download</a>
        </>
      )}
    </div>
  );
}

export default App;
