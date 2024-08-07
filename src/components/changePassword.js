import React, { useState } from 'react';
import axios from 'axios';

function PasswordChangeForm() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');
  /*useEffect(() => {
    if (!token) {
      navigate('/Login');
      return;
    }
    }, []);*/

  const handleChangePassword = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/password', {
        currentPassword,
        newPassword,
        confirmPassword,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Current Password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm New Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleChangePassword}>Change Password</button>
      <p>{message}</p>
    </div>
  );
}

export default PasswordChangeForm;
