import { useEffect, useState } from "react";
import urls from "../data/urls";
import BlogManager from "../manager/BlogManager";
import { BlogPostSection, GoBack, Title } from "../styles/pages/blog-post";
import { BlogPostProps } from "../types/blog-post";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import GpxManager from "../manager/GpxManager";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";

function BlogPostPage() {
  let { id } = useParams();
  const [post, setPost] = useState<BlogPostProps | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const getPost = async () => {
    setPost(await BlogManager.get(id as string));
    setLoading(false);
  };

  const loadGpx = () => {
    if (post?.additional?.gpx) {
      const parser = new DOMParser();
      const gpx = parser.parseFromString(
        post?.additional?.gpx,
        "application/xml"
      );
      const { positions, bounds } = GpxManager.basicGpxParse(gpx);

      return (
        <MapContainer bounds={bounds} style={{ height: "500px" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Polyline
            pathOptions={{ fillColor: "red", color: "blue" }}
            positions={positions}
          />
        </MapContainer>
      );
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <BlogPostSection>
        <GoBack to={urls.pages.blog}>{"<< Back"}</GoBack>
        <Loader isLoading={loading}>
          {post && (
            <div>
              <div className="head">
                {!post.hideImage && <img src={post.image} alt={post.name} />}
                <Title>{post.name}</Title>
                <p className="tags">
                  {(post.expand?.tags ?? []).map((x) => x.name).join(", ")}
                </p>
                <p className="date">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
              <div>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: post.description,
                  }}
                ></div>
                {post.additional?.gpx && loadGpx()}
              </div>
            </div>
          )}
        </Loader>
      </BlogPostSection>
    </>
  );
}

export default BlogPostPage;
