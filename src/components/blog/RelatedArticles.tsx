import Link from 'next/link'
import { Post } from '@/lib/sanity/types'
import BlogCard from './BlogCard'

export default function RelatedArticles({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) return null
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Related Articles</h3>
        <Link href="/blog" className="text-sm text-primary-600 hover:underline">View all</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <BlogCard key={p._id} post={p} />
        ))}
      </div>
    </section>
  )
}
