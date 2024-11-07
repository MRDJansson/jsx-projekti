import useStore from "./stores/Store";

function RemoveSuperPerson({ name }) {
  const removeSuperPerson = useStore((state) => state.removeSuperPerson);

  const handleRemove = (e) => {
    removeSuperPerson(name);
  };

  return (
    <div
      onClick={handleRemove} 
    />
  );
}

export default RemoveSuperPerson;
