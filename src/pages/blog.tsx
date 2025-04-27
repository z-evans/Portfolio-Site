import { FunctionComponent, useEffect, useState } from "react";
import {
  Title,
  PSNotice,
  BlogCards,
  BlogSection,
  BlogCard,
  BlogDetails,
} from "../styles/pages/blog";
import urls from "../data/urls";
import { Link } from "react-router-dom";
import BlogManager from "../manager/BlogManager";
import { BlogPostProps } from "../types/blog-post";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

const BlogItem: FunctionComponent<BlogPostProps> = ({
  name,
  id,
  image,
  date,
  expand,
}) => {
  return (
    <Link to={urls.pages.blogPost(id)} key={id}>
      <BlogCard>
        <img src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <BlogDetails>
            <span className="tags">
              {(expand?.tags ?? []).map((x) => x.name).join(", ")}
            </span>
            <span className="date">{new Date(date).toLocaleDateString()}</span>
          </BlogDetails>
        </div>
      </BlogCard>
    </Link>
  );
};

function BlogPage() {
  const [posts, setPosts] = useState<BlogPostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 6,
    count: 0,
  });

  const getPosts = async (page: number) => {
    setLoading(true);
    const result = await BlogManager.list(page, pagination.limit);
    let list: BlogPostProps[] = [];

    result.items.forEach(async (x) =>
      list.push(await BlogManager.pbToWeb(x as any, true))
    );

    if (pagination.count === 0) {
      setPagination({ ...pagination, count: result.totalItems });
    }
    setPosts(list);
    setLoading(false);
  };

  useEffect(() => {
    getPosts(pagination.page);
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
              <>{posts.map(BlogItem)}</>
            ) : (
              <p>Something has gone wrong...</p>
            )}
          </BlogCards>
          <br />
          <Pagination
            count={pagination.count}
            limit={pagination.limit}
            current={pagination.page}
            onChange={(page) => {
              setPagination({ ...pagination, page });
              getPosts(page);
            }}
          />
        </Loader>
      </BlogSection>
    </>
  );
}

export default BlogPage;
