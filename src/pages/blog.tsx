import { FunctionComponent, useEffect, useState } from "react";
import { Title, PSNotice, BlogCards, BlogSection } from "../styles/pages/blog";
import urls from "../data/urls";
import { Link } from "react-router-dom";
import BlogManager, { BlogRecord } from "../manager/BlogManager";
import { BlogPostProps } from "../types/blog-post";
import Loader from "../components/Loader";

const BlogItem: FunctionComponent<BlogPostProps> = ({
  name,
  id,
  image,
  date,
}) => {
  return (
    <Link to={urls.pages.blogPost(id)} key={id}>
      <div>
        <img src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <span className="date">{new Date(date).toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  );
};

function BlogPage() {
  const [posts, setPosts] = useState<BlogPostProps[]>([]);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    const result = await BlogManager.list();
    let list: BlogPostProps[] = [];

    result.forEach(async (x) =>
      list.push(await BlogManager.pbToWeb(x as unknown as BlogRecord, true))
    );

    setPosts(list);
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <BlogSection>
        <Title>
          Blog<PSNotice>(Don't expect much...)</PSNotice>
        </Title>
        <Loader isLoading={loading}>
          <BlogCards>
            {posts.length > 0 ? (
              posts.map(BlogItem)
            ) : (
              <p>Something has gone wrong...</p>
            )}
          </BlogCards>
        </Loader>
      </BlogSection>
    </>
  );
}

export default BlogPage;
