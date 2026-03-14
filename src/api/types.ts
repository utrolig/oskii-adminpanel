type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type UpdatePostInput = {
  title: string;
  body: string;
  userId: number;
};

export type { Post, UpdatePostInput };
