// function PostCard({ content, location, title, postImages }) {
//   const normalizedLocation = location.trim().replaceAll(" ", "-").toLowerCase();

//   return (
//     <div className="col-12 col-md-6">
//       <div className="card">
//         <img
//           src={postImages[normalizedLocation]}
//           className="card-img-top post-image-height object-fit-cover"
//           alt="..."
//         />
//         <div className="card-body">
//           <h5 className="card-title">{title}</h5>
//           <h6 className="card-subtitle text-body-secondary mb-2">{location}</h6>
//           <p className="card-text text-truncate">{content}</p>
//           <button type="button" className="btn btn-warning float-end">
//             Go to post ↗
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default PostCard();