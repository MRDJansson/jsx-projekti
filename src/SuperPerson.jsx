import useStore from "./stores/Store";
import RemoveSuperPerson from "./RemoveSuperPerson";

function SuperPerson({ name, superpower }) {
  const removeSuperPerson = useStore((state) => state.removeSuperPerson);

  const handleRemove = () => {
    removeSuperPerson(name);
  };

  return (
    <div 
      className="flex items-center justify-between text-sm font-medium cursor-pointer p-2 rounded-md bg-gradient-to-r from-purple-100 to-pink-100 transition-all duration-200 hover:scale-105 hover:shadow-lg"
      onClick={handleRemove}
    >
      <span className="text-purple-900">{name}</span>
      <span className="text-purple-600">{superpower}</span>
    </div>
  );
}

export default SuperPerson;
