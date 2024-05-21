// src/pages/index.tsx
import fs from 'fs';
import path from 'path';



export async function getStaticProps() {
  const postsPath = path.join(process.cwd(), './src/contents/posts'); // Adjust this path as needed
  const postFileNames = fs.readdirSync(postsPath);
  const posts = postFileNames.map((slug) => {
    const content = fs.readFileSync(path.join(postsPath, slug), 'utf8');
    return { slug, content };
  });

  return {
    props: {
      posts,
    },
  };
}

interface Post {
  slug: string;
  content: string;
}

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.slug}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
