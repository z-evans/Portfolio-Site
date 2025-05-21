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
  additional?: Additional;
}

export interface Tag {
  code: string;
  collectionId: string;
  created: string;
  id: string;
  name: string;
}

export interface Additional {
  gpx?: string;
}
