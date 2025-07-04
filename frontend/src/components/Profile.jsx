import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token || !id) {
        setError('User not authenticated.');
        return;
      }
      try {
        const res = await axios.get(`http://localhost:3000/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError('Could not fetch profile. Please try again later.');
      }
    };
    fetchUserProfile();
  }, [id]);

  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;
  if (!user) return <p style={{ textAlign: 'center' }}>Loading profile...</p>;

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-card">
        <h3>Welcome</h3>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
