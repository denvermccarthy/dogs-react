import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DogForm from '../../components/DogForm/DogForm';
import { createDog, fetchDogById, updateDog } from '../../services/dogs';

export default function NewPage() {
  const [dog, setDog] = useState({ name: '', bio: '', age: '', breed: '' });
  const history = useHistory();

  const createDogHandler = async () => {
    try {
      await createDog(dog);
      history.push('/s');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <DogForm submitHandler={createDogHandler} {...{ dog, setDog }} />
    </div>
  );
}
