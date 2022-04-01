import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchDogs } from '../../services/dogs';

export default function DogList() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchDogs();
        setDogs(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetch();
  }, []);

  if (loading) return <div>loading</div>;

  return (
    <div className="flex justify-center items-center gap-y-10 flex-col w-full">
      {error && <p>error</p>}
      {dogs.map((dog) => (
        <div key={dog.id}>
          <NavLink className={'flex flex-col items-center w-screen'} to={`/dogs/${dog.id}`}>
            <img className="w-1/3 h-auto" src={`${dog.img}`} alt="Cute Puppy" />
            <h4 className="text-2xl">{dog.name}</h4>
          </NavLink>
        </div>
      ))}
    </div>
  );
}
