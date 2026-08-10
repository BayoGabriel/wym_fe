import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/lib/sanity/types'
import { urlFor } from '@/lib/sanity/image'

export default function FeaturedFullWidth({ post }: { post: Post | null }) {
  if (!post) return null

  return (
    <article>
      {/* Full width image within container */}
      <Link href={`/blog/${post.slug.current}`} className="block group">
        <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-muted">
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).width(1600).height(900).quality(85).url()}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          )}
        </div>
      </Link>

      {/* Details below image */}
      <div className="mt-6 max-w-4xl">
        <p className="text-xs font-medium uppercase tracking-widest text-primary-600">{post.category?.title}</p>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold">
          <Link href={`/blog/${post.slug.current}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        {post.excerpt && (
          <p className="mt-3 text-base text-muted-foreground">{post.excerpt}</p>
        )}
        <div className="mt-4 text-sm text-muted-foreground flex items-center gap-2">
          <span>{post.author?.name}</span>
          <span>·</span>
          <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString()}</time>
        </div>
      </div>
    </article>
  )
}
