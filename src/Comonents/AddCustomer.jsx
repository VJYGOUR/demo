import { useNavigate } from "react-router-dom";

function AddCustomer() {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="pl-8 pt-5 bg-gray-300 text-left w-full"
        onClick={() => navigate(-1)}
      >
        go Back
      </button>
      <main className="bg-gray-300 h-[100vh] flex justify-center items-center">
        <div className="w-[50%] bg-white px-6 py-8 rounded-lg mx-auto  ">
          <h1 className="py-2 mb-2 uppercase text-center">Customer List</h1>
          <form action="" className="grid grid-cols-2 grid-rows-4 gap-4">
            <input
              type="text"
              placeholder="FirstName"
              className="border-solid border-[2px] px-1 py-1 rounded-lg"
            />
            <input
              type="text"
              placeholder="lastName"
              className="border-solid border-[2px] px-1 py-1 rounded-lg"
            />
            <input
              type="text"
              placeholder="street"
              className="border-solid border-[2px] px-1 py-1 rounded-lg"
            />
            <input
              type="text"
              placeholder="Address"
              className="border-solid border-[2px] px-1 py-1 rounded-lg"
            />
            <input
              type="text"
              placeholder="City"
              className="border-solid border-[2px] px-1 py-1 rounded-lg"
            />
            <input
              type="text"
              placeholder="state"
              className="border-solid border-[2px] px-1 py-1 rounded-lg"
            />
            <input
              type="email"
              placeholder="email"
              className="border-solid border-[2px] px-1 py-1 rounded-lg"
            />
            <input
              type="number"
              placeholder="Phone"
              className="border-solid border-[2px] px-1 py-1 rounded-lg"
            />
            <button className="w-full col-span-2 text-white rounded-lg py-2 uppercase bg-blue-700">
              submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddCustomer;
