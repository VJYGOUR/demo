import { Link, useNavigate } from "react-router-dom";
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.splice(0, 1));
function Customer() {
  const navigate = useNavigate();
  return (
    <div className="bg-black h-[100vh] px-3 text-white">
      <button className="pl-8 pt-5" onClick={() => navigate(-1)}>
        go Back
      </button>
      <h1 className="text-white text-center py-4 uppercase text-[1.3rem] tracking-wider">
        Customer List
      </h1>
      <div className="flex gap-3">
        <Link to="/add">
          <button className="text-black rounded-lg bg-blue-300 py-2 px-3">
            Add customer
          </button>
        </Link>
        <select
          name="cars"
          id="cars"
          className="bg-blue-100 rounded-lg text-black"
        >
          <option value="volvo">FirstName</option>
          <option value="saab">City</option>
          <option value="mercedes">Email</option>
          <option value="audi">Phone</option>
        </select>
      </div>
      <hr className="text-white mt-3" />
      <div className="grid gap-4 grid-cols-8 py-3 border-b-[1px]">
        <div>FirstName</div>
        <div>LastName</div>
        <div>Address</div>
        <div>City</div>
        <div>State</div>
        <div>Email</div>
        <div>Phone</div>
        <div>Action</div>
      </div>
      <main className="grid text-white gap-4 grid-cols-8 grid-rows-12 opacity-[.9]">
        {arr.map((curr, i) => (
          <>
            <div>data 0</div>
            <div> data 1</div>
            <div>data 2</div>
            <div>data 3</div>
            <div>data 4</div>
            <div>data 5</div>
            <div>data 6</div>
            <div className="flex gap-4">
              <button>-</button>
              <button>edit</button>
            </div>
          </>
        ))}
      </main>
    </div>
  );
}

export default Customer;
