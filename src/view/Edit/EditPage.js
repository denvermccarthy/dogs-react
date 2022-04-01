import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DogForm from '../../components/DogForm/DogForm';
import { fetchDogById, updateDog } from '../../services/dogs';

export default function EditPage() {
  const [dog, setDog] = useState({ name: '', bio: '', age: '', breed: '' });
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchDogById(id);
      setDog(data);
      setLoading(false);
    };
    fetch();
  }, [id]);

  if (loading) return <div>loading...</div>;
  const sendUpdate = async () => {
    try {
      await updateDog(dog);
      setSuccess('Success!');
      setTimeout(() => history.push(`/dogs/${id}`), 500);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      {success && <div>{success}</div>}
      <DogForm submitHandler={sendUpdate} {...{ dog, setDog }} />
    </div>
  );
}
