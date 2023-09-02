import { useState } from "react";
import { useAppDispatch } from "../redux/store";
import { addPerson } from "../redux/slices/personSlice";
const Add = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    if (name === "") return;
    dispatch(addPerson({ name: name }));
    setName("");
  };
  return (
    <form className="flex flex-col gap-3 justify-center items-start">
      <label className="">Enter the person's Name :</label>
      <input
        className="border rounded-md py-2 pl-3"
        type="text"
        value={name}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={handleClick}
        className=" bg-violet-500 text-white rounded-md px-4 py-2 cursor-pointer active:bg-violet-700"
      >
        Add
      </button>
    </form>
  );
};

export default Add;
