import React, { useState } from 'react';
import CryptoJS, { SHA256 } from 'crypto-js';

const HashVerification = () => {
  const [inputValue, setInputValue] = useState('');
  const storedHash = SHA256("Dark").toString(); // Set your stored hash value here
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const verifyHash = () => {
    // Generate hash from input value
    const inputHash = CryptoJS.SHA256(inputValue).toString(CryptoJS.enc.Hex);
    
    // Compare with stored hash
    if (inputHash == storedHash) {
      setVerificationStatus('Verified!🥳');
    } else {
      setVerificationStatus('Not Verified!🤔');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2 style={{color: 'aquamarine'}}>Hash Verification</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text to verify"
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />
      <button onClick={verifyHash} style={{ padding: '10px', width: '100%' }}>Verify</button>
      <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold', color: 'white'}}>{verificationStatus}</p>
    </div>
  );
};

export default HashVerification;
