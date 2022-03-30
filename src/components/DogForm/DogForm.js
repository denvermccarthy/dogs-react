export default function DogForm({ submitHandler, dog, setDog }) {
  const updateDawg = (attribute, val) => {
    const newDawg = { ...dog, [attribute]: val };
    setDog(newDawg);
  };

  return (
    <div>
      <label>
        Name
        <input
          type={'text'}
          value={dog.name}
          onChange={(e) => updateDawg('name', e.target.value)}
        />
      </label>
      <label>
        Age
        <input
          type={'number'}
          value={dog.age}
          onChange={(e) => updateDawg('age', e.target.value)}
        />
      </label>
      <label>
        Bio
        <input type={'text'} value={dog.bio} onChange={(e) => updateDawg('bio', e.target.value)} />
      </label>
      <label>
        Breed
        <input
          type={'text'}
          value={dog.breed}
          onChange={(e) => updateDawg('breed', e.target.value)}
        />
      </label>
      <button type="submit" onClick={submitHandler}>
        Click Me!
      </button>
    </div>
  );
}
