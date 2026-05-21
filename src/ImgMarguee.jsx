 import { useNavigate } from "react-router-dom";
import { restaurants } from "./array";

function ImgMarquee() {
     const navigate = useNavigate();
  return (

    
    <div className="p-6">
         <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 border mcx-auto block mt-8 justify-center items-center rounded-md text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
      >
        Go Back
      </button>

      <h1 className="text-2xl font-bold mb-2 text-center">Meet the Restaurants</h1>
  <p className="text-center mb-4">Handpicked selection of top on-demand delivery restaurants</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {restaurants.map((el, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-md">
            <img
              src={el.img}
              alt={el.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h2 className="font-semibold">{el.name}</h2>
              <p className="text-sm text-gray-500">{el.sub}</p>
            </div>


                 
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImgMarquee;