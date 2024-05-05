import { BlogPostProps } from "../types/blog-post";
import PocketBase, { Record } from "pocketbase";
import urls from "../data/urls";

export type BlogRecord = Record;

class BlogManager {
  pb = new PocketBase("https://api.zevans.co.uk");

  async list() {
    return (
      await this.pb.collection("posts").getList(1, 6, {
        sort: "-created",
        expand: "tags",
      })
    ).items;
  }

  async pbToWeb(record: Record, thumb: boolean) {
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

  async getImage(record: Record, thumb: boolean) {
    return await this.pb.files.getUrl(record, record.image, {
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
