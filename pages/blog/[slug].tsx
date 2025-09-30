import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getAllPosts, getPostBySlug, BlogPost } from '../../lib/blog';
import { format } from 'date-fns';
import Link from 'next/link';

interface BlogPostPageProps {
  post: BlogPost;
  mdxSource: MDXRemoteSerializeResult;
}

export default function BlogPostPage({ post, mdxSource }: BlogPostPageProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/blog"
          className="text-gray-400 hover:text-white transition-colors mb-8 inline-block"
        >
          ← Back to Blog
        </Link>

        <article>
          <header className="mb-12">
            <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
            <time className="text-gray-400">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <MDXRemote {...mdxSource} />
          </div>
        </article>
      </div>

      <style jsx global>{`
        .prose h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }

        .prose h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }

        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: #d1d5db;
        }

        .prose ul,
        .prose ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }

        .prose li {
          margin-bottom: 0.5rem;
          color: #d1d5db;
        }

        .prose a {
          color: #60a5fa;
          text-decoration: underline;
        }

        .prose a:hover {
          color: #93c5fd;
        }

        .prose blockquote {
          border-left: 4px solid #374151;
          padding-left: 1rem;
          font-style: italic;
          color: #9ca3af;
          margin: 1.5rem 0;
        }

        .prose code {
          background-color: #1f2937;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }

        .prose pre {
          background-color: #1f2937;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }

        .prose pre code {
          background-color: transparent;
          padding: 0;
        }
      `}</style>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const mdxSource = await serialize(post.content);

  return {
    props: {
      post,
      mdxSource,
    },
  };
};