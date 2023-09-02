import { useAppSelector } from "../redux/store";

const List = () => {
  const persons = useAppSelector((state) => state.person.persons);
  return (
    <div className="flex flex-col gap-4">
      <p>Person's List </p>
      <table className=" rounded-md ">
        <thead>
          <tr className=" bg-gradient-to-b from-sky-400 to-sky-600 text-white">
            <th className="p-2 border rounded">ID</th>
            <th className="p-2 border rounded">Name</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => {
            return (
              <tr key={person.id}>
                <td>{person.id + 1}</td>
                <td>{person.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
