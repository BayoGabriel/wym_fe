import { sanityClient } from '@/lib/sanity/client'
import { FEATURED_POST, LATEST_POST, FILTERED_POSTS, CATEGORIES, AUTHORS } from '@/lib/sanity/queries'
import { Author, Category, Post } from '@/lib/sanity/types'
import BlogCard from '@/src/components/blog/BlogCard'
import BlogFilters from '@/src/components/blog/BlogFilters'
import BlogHero from '@/src/components/blog/BlogHero'
import EmptyBlogState from '@/src/components/blog/EmptyBlogState'
import FeaturedArticle from '@/src/components/blog/FeaturedArticle'
import CategoryNavigation from '@/src/components/blog/CategoryNavigation'

export const revalidate = 60

function parseSearchParams(searchParams: { [k: string]: string | string[] | undefined }) {
  const get = (k: string) => (Array.isArray(searchParams[k]) ? searchParams[k]?.[0] : searchParams[k])
  return {
    category: get('category') || undefined,
    author: get('author') || undefined,
    search: get('search') || undefined,
    page: get('page') ? Number(get('page')) : 1,
  }
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ [k: string]: string | string[] | undefined }> | { [k: string]: string | string[] | undefined } }) {
  const resolved = (searchParams instanceof Promise) ? await searchParams : searchParams
  const filters = parseSearchParams(resolved)

  const [featured, fallbackLatest, posts, categories, authors] = await Promise.all([
    sanityClient.fetch<Post | null>(FEATURED_POST),
    sanityClient.fetch<Post | null>(LATEST_POST),
    sanityClient.fetch<Post[]>(FILTERED_POSTS, {
      category: filters.category ?? null,
      author: filters.author ?? null,
      search: filters.search ? `*${filters.search}*` : null,
    }),
    sanityClient.fetch<Category[]>(CATEGORIES),
    sanityClient.fetch<Author[]>(AUTHORS),
  ])

  const hero = featured || fallbackLatest || null

  const pageSize = 9
  const page = Math.max(1, filters.page || 1)
  const paged = posts.slice((page - 1) * pageSize, page * pageSize)
  const totalPages = Math.ceil(posts.length / pageSize)

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      {/* Editorial hero */}
      <header className="mb-12 text-center">
        <p className="text-xs font-semibold tracking-widest text-primary-600 uppercase">Insights</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Ideas, perspectives, and stories</h1>
        <p className="mt-3 text-lg text-muted-foreground">Explore our latest thinking across technology, business, products, and industry.</p>
      </header>

      {/* Featured article */}
      <div className="mb-12">
        <FeaturedArticle post={hero} />
      </div>

      {/* Navigation row: categories + search/author filters */}
      <div className="mb-6">
        <CategoryNavigation categories={categories} />
      </div>
      <div className="mb-10">
        <BlogFilters categories={categories} authors={authors} />
      </div>

      {/* Latest insights grid */}
      <section className="mb-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Latest insights</h2>
            <p className="text-muted-foreground">Articles from our team and industry.</p>
          </div>
        </div>

        {paged.length === 0 ? (
          <EmptyBlogState />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paged.map((p: Post) => (
              <BlogCard key={p._id} post={p} />
            ))}
          </div>
        )}
      </section>

      {totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <div className="join">
            <a className={`btn join-item ${page <= 1 ? 'btn-disabled' : ''}`} href={`/blog?${new URLSearchParams({ ...(filters.category ? { category: filters.category } : {}), ...(filters.author ? { author: filters.author } : {}), ...(filters.search ? { search: String(filters.search) } : {}), page: String(page - 1) }).toString()}`}>Prev</a>
            <span className="join-item btn btn-ghost">Page {page} of {totalPages}</span>
            <a className={`btn join-item ${page >= totalPages ? 'btn-disabled' : ''}`} href={`/blog?${new URLSearchParams({ ...(filters.category ? { category: filters.category } : {}), ...(filters.author ? { author: filters.author } : {}), ...(filters.search ? { search: String(filters.search) } : {}), page: String(page + 1) }).toString()}`}>Next</a>
          </div>
        </div>
      )}
    </div>
  )
}
