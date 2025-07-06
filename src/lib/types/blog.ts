export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
  readTime: number;
  published: boolean;
}

export interface BlogContent {
  metadata: BlogPost;
  content: string;
}
