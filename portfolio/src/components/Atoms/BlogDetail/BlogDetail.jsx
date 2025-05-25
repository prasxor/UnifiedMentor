// import { useState } from "react";
// import Modal from "react-modal"; // Install react-modal: npm install react-modal

// const BlogDetail = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedBlogUrl, setSelectedBlogUrl] = useState("");

//   const openModal = (url) => {
//     setSelectedBlogUrl(url);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const blogPosts = [
//     {
//       id: 1,
//       title: "How I Built My First React Native App",
//       url: "https://prasxorkumarblog.hashnode.dev/how-i-built-my-first-react-native-app-a-waste-management-solution",
//       description: "A waste management solution.",
//     },
//   ];

//   return (
//     <div className="blog-section">
//       <h2>My Blogs</h2>
//       <div className="blog-cards">
//         {blogPosts.map((post) => (
//           <div
//             key={post.id}
//             className="blog-card"
//             onClick={() => openModal(post.url)}
//           >
//             <h3>{post.title}</h3>
//             <p>{post.description}</p>
//           </div>
//         ))}
//       </div>

//       <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
//         <button onClick={closeModal}>Close</button>
//         <iframe
//           src={selectedBlogUrl}
//           title="Blog Post"
//           width="100%"
//           height="80vh"
//           frameBorder="0"
//         />
//       </Modal>
//     </div>
//   );
// };

// export default BlogDetail;


// import React from "react";
// import { useParams } from "react-router-dom";
// import "./BlogDetail.css";

// const blogPosts = [
//   {
//     id: "waste-management-app",
//     url: "https://prasxorkumarblog.hashnode.dev/how-i-built-my-first-react-native-app-a-waste-management-solution",
//   },
//   // Add more blogs here
// ];

// const BlogDetail = () => {
//   const { id } = useParams();
//   const blog = blogPosts.find((post) => post.id === id);

//   if (!blog) {
//     return <h2>Blog not found</h2>;
//   }

//   return (
//     <div className="blog-detail-container">
//       <h2>Read the full blog below</h2>
//       <iframe
//         src={blog.url}
//         title="Blog Post"
//         width="100%"
//         height="600px"
//         frameBorder="0"
//         allowFullScreen
//       />
//     </div>
//   );
// };

// export default BlogDetail;


import React, { useState, useEffect } from "react";
import "./BlogDetail.css";
import BlogCards from "../BlogCards/BlogCards";
// import { useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const [blogs, setBlogs] = useState([]);

  // const navigate = useNavigate();

  // const handleBlogClick = (url) => {
  //   const slug = url.split("/").pop(); // Extracts the slug from Hashnode URL
  //   navigate(`/blog/${slug}`); // Navigates to the dynamic blog page
  // };

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = {
        query: `
          {
            publication(host: "prasxorkumarblog.hashnode.dev") {
              posts(first: 5) {
                title
                brief
                slug
                url
                coverImage
                dateAdded
              }
            }
          }
        `,
      };

      try {
        const response = await fetch("https://api.hashnode.com/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(query),
        });
        const data = await response.json();
        setBlogs(data.data.publication.posts);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-section">
      <h2>My Blogs</h2>
      <div className="blog-container">
        {blogs.map((post, index) => (
          <BlogCards
            key={index}
            title={post.title}
            description={post.brief}
            url={post.url}
            metaData={[
              { icon: "📅", text: new Date(post.dateAdded).toDateString() },
            ]}
            onClick={(url) => window.open(url, "_blank")}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
