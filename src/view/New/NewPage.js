import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DogForm from '../../components/DogForm/DogForm';
import { createDog } from '../../services/dogs';

export default function NewPage() {
  const [dog, setDog] = useState({ name: '', bio: '', age: '', breed: '' });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();

  const createDogHandler = async () => {
    try {
      await createDog(dog);
      setSuccess('Success!');
      setTimeout(() => history.push('/'), 500);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {success && <div>{success}</div>}
      {error && <div>{error}</div>}
      <DogForm submitHandler={createDogHandler} {...{ dog, setDog }} />
    </div>
  );
}
