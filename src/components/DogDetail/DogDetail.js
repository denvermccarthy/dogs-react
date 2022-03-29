import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchDogById } from '../../services/dogs';

export default function DogDetail() {
  const [dog, setDog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchDogById(id);
      setDog(data);
    };
    fetch();
  }, [id]);

  if (!dog) return <div>loading...</div>;

  return (
    <div>
      {dog.name} <Link to={`/dogs/${id}/edit`}>edit</Link>
    </div>
  );
}
