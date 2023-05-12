import { FunctionComponent, useEffect, useState } from "react";
import { Title, PSNotice, BlogCards, BlogSection } from "../styles/pages/blog";
import urls from "../data/urls";
import { Link } from "react-router-dom";
import BlogManager, { BlogRecord } from "../manager/BlogManager";
import { BlogPostProps } from "../types/blog-post";

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
  console.log(posts);
  const getPosts = async () => {
    const result = await BlogManager.list();
    let list: BlogPostProps[] = [];
    result.forEach(async (x) =>
      list.push(await BlogManager.pbToWeb(x as unknown as BlogRecord, true))
    );
    setPosts(list);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <BlogSection>
        <div>
          <Title>
            Blog<PSNotice>(Don't expect much...)</PSNotice>
          </Title>
          <BlogCards>{posts.map(BlogItem)}</BlogCards>
        </div>
      </BlogSection>
    </>
  );
}

export default BlogPage;
