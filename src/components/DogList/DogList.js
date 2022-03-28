import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchDogs } from '../../services/dogs';

export default function DogList() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchDogs();
        setDogs(data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      {dogs.map((dog) => (
        <div key={dog.id}>
          <NavLink to={`/dogs/${dog.id}`}>
            <h4>{dog.name}</h4>
          </NavLink>
        </div>
      ))}
    </div>
  );
}
