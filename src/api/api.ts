import ky from 'ky';

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

const client = ky.create({
  prefixUrl: 'https://jsonplaceholder.typicode.com',
});

const api = {
  async fetchConfig(): Promise<Post> {
    return client.get('posts/1').json<Post>();
  },
  async updateConfig(input: UpdatePostInput): Promise<Post> {
    return client.put('posts/1', { json: input }).json<Post>();
  },
};

export { api };
export type { Post, UpdatePostInput };
