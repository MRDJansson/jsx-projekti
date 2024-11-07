function SuperPerson({ name, superpower }) {
  return (
    <div className="flex items-center justify-between text-sm font-medium">
      <span className="text-purple-900">{name}</span>
      <span className="text-purple-600">{superpower}</span>
    </div>
  );
}

export default SuperPerson;
