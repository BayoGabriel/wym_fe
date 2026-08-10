import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/lib/sanity/types'
import { urlFor } from '@/lib/sanity/image'

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug.current}`} className="group block rounded-xl overflow-hidden border hover:shadow-sm transition">
      <div className="relative aspect-[16/9] bg-muted">
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).width(800).height(450).quality(80).url()}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        )}
      </div>
      <div className="p-4">
        <div className="text-xs uppercase tracking-wide text-primary-600">{post.category?.title}</div>
        <h3 className="mt-2 text-lg font-semibold leading-snug group-hover:underline">
          {post.title}
        </h3>
        {post.excerpt && <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>}
        <div className="mt-3 text-xs text-muted-foreground flex items-center gap-2">
          <span>{post.author?.name}</span>
          <span>·</span>
          <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString()}</time>
        </div>
      </div>
    </Link>
  )
}
