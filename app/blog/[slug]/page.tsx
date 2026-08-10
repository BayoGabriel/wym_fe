import { sanityClient } from '@/lib/sanity/client'
import { POST_BY_SLUG, RELATED_POSTS } from '@/lib/sanity/queries'
import { Post } from '@/lib/sanity/types'
import ArticleContent from '@/src/components/blog/ArticleContent'
import RelatedArticles from '@/src/components/blog/RelatedArticles'
import { Metadata } from 'next'
import ArticleHeader from '@/src/components/blog/ArticleHeader'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import Nav_Bar from '@/src/components/layout/Nav_bar'
import Footer from '@/src/components/layout/Footer'

export const revalidate = 60

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> | { slug: string } }): Promise<Metadata> {
  const resolved = (params instanceof Promise) ? await params : params
  const post = await sanityClient.fetch<Post | null>(POST_BY_SLUG, { slug: resolved.slug ?? null })
  if (!post) return {}
  const title = post.seoTitle || post.title
  const description = post.seoDescription || post.excerpt || ''
  const url = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/blog/${post.slug.current}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolved = (params instanceof Promise) ? await params : params
  const post = await sanityClient.fetch<Post | null>(POST_BY_SLUG, { slug: resolved.slug ?? null })
  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-2xl font-semibold">Article not found</h1>
        <p className="mt-2 text-muted-foreground">The requested article does not exist or is not published.</p>
      </div>
    )
  }

  const related = await sanityClient.fetch<Post[]>(RELATED_POSTS, { slug: post.slug.current, categoryId: post.category?._id, tags: post.tags || [] })

  return (
    <>
      <Nav_Bar bgColor="bg-transparent" linkColor="text-[#101828]" linkDColor="text-[#101828]" getStartedBtn="border-black border" iconColor="text-[#101828]" disableScrollStyleChange />
      <article className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-5xl">
          <ArticleHeader post={post} />
        </div>

        {post.mainImage && (
          <div className="mt-8 mx-auto max-w-[1400px]">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted">
              <Image
                src={urlFor(post.mainImage).width(1600).height(900).quality(85).url()}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
            </div>
          </div>
        )}

        <div className="mx-auto max-w-3xl mt-10">
          <ArticleContent post={post} />
        </div>

        <div className="mx-auto max-w-5xl mt-16">
          <RelatedArticles posts={related} />
        </div>
      </article>
      <Footer />
    </>
  )
}
