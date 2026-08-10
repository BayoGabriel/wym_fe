"use client"
import { useSearchParams, useRouter } from 'next/navigation'
import { Category } from '@/lib/sanity/types'

export default function CategoryNavigation({ categories }: { categories: Category[] }) {
  const params = useSearchParams()
  const router = useRouter()
  const active = params.get('category') || ''

  const go = (slug?: string) => {
    const q = new URLSearchParams(params.toString())
    if (!slug) q.delete('category')
    else q.set('category', slug)
    q.delete('page')
    router.push(`/blog?${q.toString()}`)
  }

  return (
    <nav className="relative -mx-4 px-4 overflow-x-auto no-scrollbar">
      <ul className="flex items-center gap-3 pb-1">
        <li>
          <button
            onClick={() => go(undefined)}
            className={`px-3 py-1.5 rounded-full border transition ${!active ? 'bg-foreground text-background border-foreground' : 'border-border text-foreground hover:bg-muted'}`}
          >All</button>
        </li>
        {categories.map((c) => (
          <li key={c._id}>
            <button
              onClick={() => go(c.slug?.current)}
              className={`px-3 py-1.5 rounded-full border transition ${active === (c.slug?.current || '') ? 'bg-foreground text-background border-foreground' : 'border-border text-foreground hover:bg-muted'}`}
            >{c.title}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
