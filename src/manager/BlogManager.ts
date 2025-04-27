import { BlogPostProps } from "../types/blog-post";
import PocketBase from "pocketbase";
import urls from "../data/urls";

class BlogManager {
  pb = new PocketBase("https://api.zevans.co.uk");

  async list(page: number, limit: number) {
    return await this.pb.collection("posts").getList(page, limit, {
      sort: "-created",
      expand: "tags",
    });
  }

  async pbToWeb(record: any, thumb: boolean) {
    return {
      name: record.name as string,
      description: record.description as string,
      image: (await this.getImage(record, thumb)) as string,
      id: record.id as string,
      date: record.created as unknown as Date,
      hideImage: record.hideImage as boolean,
      expand: record.expand as any,
    } as BlogPostProps;
  }

  async getImage(record: any, thumb: boolean) {
    return await this.pb.files.getURL(record, record.image, {
      thumb: thumb ? "100x250" : undefined,
    });
  }

  async get(id: string) {
    const post = await this.pb.collection("posts").getOne(id as string, {
      expand: "tags",
    });

    if (post === undefined) location.pathname = urls.pages.blog;

    return await this.pbToWeb(post, false);
  }
}
export default new BlogManager();
