import Add from "./components/Add";
import List from "./components/List";

function App() {
  return (
    <div className="border-2 py-6 w-[70%] mx-auto rounded-lg my-[150px]">
      <div className="flex flex-col gap-5 items-center">
        <Add />
        <List />
      </div>
    </div>
  );
}

export default App;
