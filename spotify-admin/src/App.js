import "./index.css";
import CreateSong from "./components/CreateSong";

function App() {
  return (
    <>
      <h2 className="bg-sky-300 text-center p-3 text-xl font-bold">
        Admin Panel
      </h2>
      <div class="song">
        <CreateSong />
      </div>
    </>
  );
}

export default App;
