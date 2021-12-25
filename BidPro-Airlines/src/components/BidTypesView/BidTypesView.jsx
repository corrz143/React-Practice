// import React from "react";
// import { BidTypes } from "../BidTypes/BidTypes";

// export function BidTypesView({ types }) {
//   // if (this.item === undefined)
//   return (
//     <>
//       <div>
//         <h1>Bid Types</h1>
//       </div>

//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th className="">ID</th>
//             <th className="">Bid Types</th>
//             <th className="">Status</th>
//             <th className="">#Bid Periods</th>
//             <th scope="">Last Import</th>
//             <th className="">
//               <a href="#">
//                 <i className="bi bi-funnel-fill mx-2"></i>
//               </a>
//               <a href="#">
//                 <i className="bi bi-plus mx-2"></i>
//               </a>
//               <a href="#">
//                 <i className="bi bi-arrow-repeat mx-2"></i>
//               </a>
//             </th>
//           </tr>
//         </thead>

//         <tbody className="table table-striped">
//           <tr className="list-items">
//             {types.map((type, id) => (
//               <BidTypes key={type.id} type={type} />
//             ))}
//           </tr>
//         </tbody>
//       </table>
//     </>
//   );
// }
