// import React from "react";
// import "./BlogCards.css";
// import Temp from "../../../assets/HomePage/TEMPIMG.png";
// import calendericon from "../../../assets/HomePage/calender.svg";
// import clockicon from "../../../assets/HomePage/clock.svg";
// import likeicon from "../../../assets/HomePage/like.svg";
// import viewsicon from "../../../assets/HomePage/views.svg";
// import BlogMetaData from "../BlogMetaData/BlogMetaData";

// const BlogCards = () => {
//   const metaData = [
//     { icon: viewsicon, text: "4.2k Views" },
//     { icon: clockicon, text: "4 Min Read" },
//     { icon: calendericon, text: "Aug 6, 2024" },
//     { icon: likeicon, text: "1.1k Likes" },
//   ];

//   return (
//     <div className="BlogCardsContainer">
//       <div className="BlogCardsContainerLeft">
//         <img src={Temp} alt={Temp} />
//       </div>
//       <div className="BlogCardsContainerRight">
//         <div className="BlogCardsContainerRightTop">
//           <h2>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius!
//           </h2>
//         </div>
//         <div className="BlogCardsContainerRightMiddle">
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
//             officiis natus vero enim corrupti sequi ipsa nesciunt sunt totam
//             sint!
//           </p>
//         </div>
//         <div className="BlogCardsContainerRightBottom">
//           <div className="BlogCardsContainerRightBottomDuration">
//             {metaData.map((item, index) => (
//               <BlogMetaData key={index} icon={item.icon} text={item.text} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCards;

// import React from "react";
// import "./BlogCards.css";
// import Temp from "../../../assets/HomePage/TEMPIMG.png";
// import BlogMetaData from "../BlogMetaData/BlogMetaData";

// const BlogCards = ({ title, description, metaData, onClick }) => {
//   return (
//     <div className="BlogCardsContainer" onClick={onClick}>
//       <div className="BlogCardsContainerLeft">
//         <img src={Temp} alt="Blog Thumbnail" />
//       </div>
//       <div className="BlogCardsContainerRight">
//         <div className="BlogCardsContainerRightTop">
//           <h2>{title}</h2>
//         </div>
//         <div className="BlogCardsContainerRightMiddle">
//           <p>{description}</p>
//         </div>
//         <div className="BlogCardsContainerRightBottom">
//           <div className="BlogCardsContainerRightBottomDuration">
//             {metaData.map((item, index) => (
//               <BlogMetaData key={index} icon={item.icon} text={item.text} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCards;


import React from "react";
import "./BlogCards.css";

const BlogCards = ({ title, description, url, metaData, onClick }) => {
  return (
    <div className="BlogCardsContainer" onClick={() => onClick(url)}>
      <div className="BlogCardsContainerRight">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="BlogCardsMeta">
          {metaData.map((item, index) => (
            <span key={index}>{item.icon} {item.text}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
