import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/lib/sanity/types'
import { urlFor } from '@/lib/sanity/image'

export default function FeaturedArticle({ post }: { post: Post | null }) {
  if (!post) return null
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div className="relative lg:col-span-7 rounded-2xl overflow-hidden bg-muted min-h-[300px] lg:min-h-[520px]">
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).width(1400).height(900).quality(85).url()}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        )}
      </div>
      <div className="lg:col-span-5 flex">
        <div className="self-center">
          <p className="text-xs font-medium tracking-widest text-primary-600 uppercase">{post.category?.title}</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
            <Link href={`/blog/${post.slug.current}`} className="hover:underline">
              {post.title}
            </Link>
          </h2>
          {post.excerpt && <p className="mt-4 text-base text-muted-foreground max-w-prose">{post.excerpt}</p>}
          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <span>{post.author?.name}</span>
            <span>·</span>
            <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString()}</time>
            {/* Reading time can be added here if needed */}
          </div>
          <div className="mt-6">
            <Link href={`/blog/${post.slug.current}`} className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all">
              Read article <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
