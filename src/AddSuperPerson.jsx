import { useState } from "react";
import useStore from "./stores/Store";
import { Sparkles } from "lucide-react";

function AddSuperPerson() {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const addSuperPerson = useStore((state) => state.addSuperPerson);

  // Handler for adding a super person
  const handleClick = (e) => {
    e.preventDefault(); // Prevents any default action
    if (name && superpower) {
      addSuperPerson({ name, superpower });
      setName("");
      setSuperpower("");
    }
  };

  return (
    <div className="space-y-4 p-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="power" className="block text-sm font-medium">
          Superpower
        </label>
        <input
          id="power"
          type="text"
          placeholder="Enter superpower..."
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <button
        onClick={handleClick} // Move the click handler here
        className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md flex items-center justify-center transition-all duration-200 hover:from-purple-600 hover:to-pink-600"
      >
        <Sparkles className="mr-2 h-4 w-4" />
        Add SuperPerson
      </button>
    </div>
  );
}

export default AddSuperPerson;
