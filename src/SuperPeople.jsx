import useStore from "./stores/Store";
import SuperPerson from "./SuperPerson";

function SuperPeople() {
  const superPeople = useStore((state) => state.superPeople);
  const fetchSuperPeople = useStore((state) => state.fetchSuperPeople)

  return (
    <div className="p-6 space-y-2">
      {superPeople.map((person, index) => (
        <div
          key={index}
          className="p-2 rounded-md bg-gradient-to-r from-purple-100 to-pink-100 transition-all duration-200 hover:scale-105 hover:shadow-lg"
        >
          <SuperPerson name={person.name} superpower={person.superpower} />
        </div>
      ))}
    </div>
  );
}

export default SuperPeople;
