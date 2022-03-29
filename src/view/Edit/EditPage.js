import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DogForm from '../../components/DogForm/DogForm';
import { fetchDogById, updateDog } from '../../services/dogs';

export default function EditPage() {
  const [dog, setDog] = useState({ name: '', bio: '', age: '', breed: '' });
  const [loading, setLoading] = useState(true);
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
      history.push(`/dogs/${id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <DogForm submitHandler={sendUpdate} {...{ dog, setDog }} />
    </div>
  );
}
