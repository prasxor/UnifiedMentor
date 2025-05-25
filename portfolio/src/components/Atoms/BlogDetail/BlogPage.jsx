import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { slug } = useParams();
  const blogUrl = `https://prasxorkumarblog.hashnode.dev/${slug}`;

  return (
    <div>
      <h2>Blog Post</h2>
      <iframe src={blogUrl} width="100%" height="600px" frameBorder="0" />
    </div>
  );
};

export default BlogPage;
