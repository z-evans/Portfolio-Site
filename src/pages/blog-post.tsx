import { useEffect, useState } from "react";
import urls from "../data/urls";
import BlogManager from "../manager/BlogManager";
import { BlogPostSection, GoBack, Title } from "../styles/pages/blog-post";
import { BlogPostProps } from "../types/blog-post";
import { useParams } from "react-router-dom";

function BlogPostPage() {
  let { id } = useParams();
  const [post, setPost] = useState<BlogPostProps | undefined>(undefined);

  const getPost = async () => {
    setPost(await BlogManager.get(id as string));
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <BlogPostSection>
        <GoBack to={urls.pages.blog}>{"<< Back"}</GoBack>
        {post && (
          <div>
            <div className="head">
              {!post.hideImage && <img src={post.image} alt={post.name} />}
              <Title>{post.name}</Title>
              <p className="date">{new Date(post.date).toLocaleDateString()}</p>
            </div>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: BlogManager.format(post.description),
              }}
            />
          </div>
        )}
      </BlogPostSection>
    </>
  );
}

export default BlogPostPage;
