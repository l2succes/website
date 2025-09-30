import Link from 'next/link';
import { getAllPosts, BlogPost } from '../../lib/blog';
import { format } from 'date-fns';

interface BlogPageProps {
  posts: BlogPost[];
}

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-12">Blog</h1>

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-800 pb-12">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-3xl font-bold mb-3 hover:text-gray-300 transition-colors">
                  {post.title}
                </h2>
              </Link>

              <time className="text-gray-400 text-sm">
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </time>

              {post.excerpt && (
                <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                  {post.excerpt}
                </p>
              )}

              <Link
                href={`/blog/${post.slug}`}
                className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read more →
              </Link>
            </article>
          ))}

          {posts.length === 0 && (
            <p className="text-gray-400">No blog posts yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}