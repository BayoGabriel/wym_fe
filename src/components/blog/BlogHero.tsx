import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/lib/sanity/types'
import { urlFor } from '@/lib/sanity/image'

export default function BlogHero({ post }: { post: Post | null }) {
  if (!post) return null
  return (
    <Link href={`/blog/${post.slug.current}`} className="block group">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="relative aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-xl bg-muted">
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).width(1200).height(675).quality(80).url()}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>
        <div>
          <p className="text-sm text-primary-600">{post.category?.title}</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight group-hover:underline">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="mt-3 text-muted-foreground line-clamp-3">{post.excerpt}</p>
          )}
          <div className="mt-4 text-sm text-muted-foreground">
            <span>{post.author?.name}</span>
            <span className="mx-2">·</span>
            <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString()}</time>
          </div>
        </div>
      </div>
    </Link>
  )
}
