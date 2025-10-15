import Link from 'next/link';
import { format } from 'date-fns';
import { BlogPost } from '../lib/blog';

interface RecentBlogPostsProps {
  posts: BlogPost[];
}

export function RecentBlogPosts({ posts }: RecentBlogPostsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="font-demibold text-4xl leading-normal my-20 mx-4">Recent Writing</div>
      <div className="mx-4 space-y-8">
        {posts.slice(0, 3).map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h3 className="text-2xl font-semibold mb-2 hover:text-gray-600 transition-colors cursor-pointer">
                {post.title}
              </h3>
            </Link>
            <time className="text-gray-500 text-sm">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
            {post.excerpt && (
              <p className="text-gray-700 mt-3 leading-relaxed">
                {post.excerpt}
              </p>
            )}
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-3 text-black hover:text-gray-600 transition-colors font-medium"
            >
              Read more →
            </Link>
          </article>
        ))}

        {posts.length > 3 && (
          <div className="pt-4">
            <Link
              href="/blog"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}