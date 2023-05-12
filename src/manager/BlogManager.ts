import content from "../data/content";
import { BlogPostProps } from "../types/blog-post";
import PocketBase, { Record } from "pocketbase";
import urls from "../data/urls";

interface Replacement {
  id: string;
  replace: string;
}

export type BlogRecord = Record;

class BlogManager {
  pb = new PocketBase("https://api.zevans.co.uk");

  replacements: Replacement[] = content.replacements;

  async list() {
    return (
      await this.pb.collection("posts").getList(1, 6, {
        sort: "-created",
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
    } as BlogPostProps;
  }

  async getImage(record: Record, thumb: boolean) {
    return await this.pb.files.getUrl(record, record.image, {
      thumb: thumb ? "100x250" : undefined,
    });
  }

  async get(id: string) {
    const post = await this.pb.collection("posts").getOne(id as string);

    if (post === undefined) location.pathname = urls.pages.blog;

    return await this.pbToWeb(post, false);
  }

  format(content: string) {
    for (const replacement of this.replacements) {
      content = content.replaceAll(
        new RegExp(`\\[${replacement.id}]`, "g"),
        `<${replacement.replace}>`
      );
      content = content.replaceAll(
        new RegExp(`\\[/${replacement.id}]`, "g"),
        `</${replacement.replace}>`
      );
    }
    return content;
  }
}
export default new BlogManager();
