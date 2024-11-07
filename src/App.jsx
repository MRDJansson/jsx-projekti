import Header from "./Header";
import Footer from "./Footer";
import SuperPeople from "./SuperPeople";
import AddSuperPerson from "./AddSuperPerson";
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="w-full max-w-md p-1 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-xl shadow-2xl">
        <div className="bg-white w-full rounded-xl shadow-xl overflow-hidden">
          <Header />
          <AddSuperPerson />
          <SuperPeople />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
