import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { deleteDog, fetchDogById } from '../../services/dogs';

export default function DogDetail({ user }) {
  const [dog, setDog] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchDogById(id);
      setDog(data);
    };
    fetch();
  }, [id]);

  if (!dog) return <div>loading...</div>;

  const deleteDogHandler = async () => {
    await deleteDog(id);
    history.push('/');
  };

  return (
    <div className="flex flex-col h-full items-center text-center mt-4">
      <h1 className="text-5xl">{dog.name}</h1>
      <h3 className="text-2xl">Breed: {dog.breed}</h3>
      <img className=" " src={`${dog.img}`} alt="Cute photo of a dog" />
      <p>{dog.bio}</p>
      {user && (
        <div>
          <Link to={`/dogs/${id}/edit`}>edit</Link>
          <button onClick={deleteDogHandler}>delete</button>
        </div>
      )}
    </div>
  );
}
