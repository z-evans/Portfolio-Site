export interface BlogPostProps {
  id: string;
  name: string;
  date: Date;
  image: string;
  description: string;
  hideImage?: boolean;
  expand?: {
    tags: Tag[];
  };
}

export interface Tag {
  code: string;
  collectionId: string;
  created: string;
  id: string;
  name: string;
}
