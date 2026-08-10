"use client"
import { useSearchParams, useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import { Author, Category } from '@/lib/sanity/types'

export default function BlogFilters({ categories, authors }: { categories: Category[]; authors: Author[] }) {
  const params = useSearchParams()
  const router = useRouter()
  const [search, setSearch] = useState<string>(params.get('search') || '')

  const current = useMemo(() => ({
    category: params.get('category') || '',
    author: params.get('author') || '',
    search: params.get('search') || '',
    page: params.get('page') || '1',
  }), [params])

  const setParam = (name: string, value: string) => {
    const q = new URLSearchParams(params.toString())
    if (value) q.set(name, value)
    else q.delete(name)
    q.delete('page')
    router.push(`/blog?${q.toString()}`)
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 md:items-end">
      <div>
        <label className="block text-sm font-medium">Category</label>
        <select value={current.category} onChange={(e) => setParam('category', e.target.value)} className="select select-bordered w-full md:w-56">
          <option value="">All</option>
          {categories.map((c) => (
            <option key={c._id} value={c.slug?.current || ''}>{c.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Author</label>
        <select value={current.author} onChange={(e) => setParam('author', e.target.value)} className="select select-bordered w-full md:w-56">
          <option value="">All Authors</option>
          {authors.map((a) => (
            <option key={a._id} value={a.slug?.current || ''}>{a.name}</option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium">Search</label>
        <div className="join w-full">
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search articles..." className="input input-bordered join-item w-full" />
          <button className="btn join-item" onClick={() => setParam('search', search)}>Search</button>
        </div>
      </div>

      {(current.category || current.author || current.search) && (
        <button className="btn btn-ghost" onClick={() => router.push('/blog')}>Clear filters</button>
      )}
    </div>
  )
}
