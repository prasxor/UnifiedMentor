
import React from "react";
import "./Blog.css";
import MainTitle from "../../components/Atoms/MainTitle/MainTitle";
import BlogCards from "../../components/Atoms/BlogCards/BlogCards";

const blogPosts = [
  {
    id: "waste-management-app",
    title: "How I Built My First React Native App: A Waste Management Solution",
    description:
      "A journey into building a waste management app with React Native.",
    url: "https://prasxorkumarblog.hashnode.dev/how-i-built-my-first-react-native-app-a-waste-management-solution",
    metaData: [
      { icon: "path/to/viewsicon.svg", text: "3.5k Views" },
      { icon: "path/to/clockicon.svg", text: "5 Min Read" },
      { icon: "path/to/calendericon.svg", text: "Mar 25, 2025" },
      { icon: "path/to/likeicon.svg", text: "900 Likes" },
    ],
  },
];

const Blog = () => {

  const handleBlogClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="container BlogMainContainer">
      <MainTitle
        content={"Blog"}
        para={
          "Welcome to my blog, where I share insights, projects, and discoveries."
        }
      />
      <div className="BlogCards">
        {blogPosts.map((post, index) => (
          <BlogCards
            key={index}
            title={post.title}
            description={post.description}
            url={post.url}
            metaData={post.metaData}
            onClick={() => handleBlogClick(post.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
