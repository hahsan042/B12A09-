// import React from "react";
// import { Link } from "react-router";

// const PopularCard = ({ data }) => {
//   console.log(data);

//   return (
//     <Link to={`/gamerdetails/${data.id}`}>
//       <div className="flex flex-col bg-gray-900 text-white rounded-lg shadow-lg w-11/12 mx-auto overflow-hidden">
//         <div className="relative h-48">
//           <img
//             src={data.coverPhoto} // Replace with your image URL
//             alt="Hero"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="p-4">
//           <div className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm mb-3">
//             {data.category}
//           </div>
//           <h2 className="text-lg font-bold mb-2">Outlaws Unleashed</h2>
//           <p className="text-sm mb-3">Starting at $14</p>
//           <div className="flex items-center mb-3">
//             <span className="text-yellow-400">Ratings</span>
//             <span className="ml-2 text-sm">({data.ratings})</span>
//           </div>
//           <div className="flex items-center">
//             <img
//               src={data.developerUrl} // Replace with your developer image URL
//               alt="Developer"
//               className="rounded-full w-10 h-10 mr-3"
//             />
//             <span className="text-sm font-semibold">{data.developer}</span>
//             <span className="text-green-400 ml-2">✓</span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default PopularCard;

import React from "react";
import { Link } from "react-router";

const PopularCard = ({ data }) => {
  return (
    <div className="flex flex-col bg-gray-900 text-white rounded-lg shadow-lg w-11/12 mx-auto overflow-hidden">
      {/* Image */}
      <div className="relative h-48">
        <img
          src={data.coverPhoto}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm mb-3">
          {data.category}
        </div>

        <h2 className="text-lg font-bold mb-2">{data.title}</h2>

        <p className="text-sm mb-3">{data.shortDescription}</p>

        <div className="flex items-center mb-3">
          <span className="text-yellow-400">Ratings</span>
          <span className="ml-2 text-sm">({data.ratings})</span>
        </div>

        <div className="flex items-center mb-5">
          <img
            src={data.developerUrl}
            alt="Developer"
            className="rounded-full w-10 h-10 mr-3"
          />
          <span className="text-sm font-semibold">{data.developer}</span>
          <span className="text-green-400 ml-2">✓</span>
        </div>

        {/* ⭐ See More Button */}
        <Link to={`/gamerdetails/${data.id}`}>
          <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg font-semibold">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularCard;
