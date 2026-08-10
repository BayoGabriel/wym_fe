import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'

import { Post } from '@/lib/sanity/types'
import { urlFor } from '@/lib/sanity/image'

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value) return null

      return (
        <figure className="my-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted">
            <Image
              src={urlFor(value).width(1200).height(675).quality(80).url()}
              alt={value.alt || ''}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          {value.caption && (
            <figcaption className="mt-3 text-sm text-muted-foreground">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },

    code: ({ value }) => {
      if (!value?.code) return null

      return (
        <div className="my-8 overflow-hidden rounded-xl border border-border bg-slate-950">
          {value.language && (
            <div className="border-b border-white/10 px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-400">
              {value.language}
            </div>
          )}

          <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-100">
            <code>{value.code}</code>
          </pre>
        </div>
      )
    },
  },

  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 mb-5 text-3xl font-bold tracking-tight text-foreground">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-foreground">
        {children}
      </h3>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-primary pl-6 text-lg italic leading-8 text-muted-foreground">
        {children}
      </blockquote>
    ),

    normal: ({ children }) => (
      <p className="my-5 text-lg leading-8 text-foreground">
        {children}
      </p>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="my-6 ml-6 list-disc space-y-3 text-lg leading-8 text-foreground">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal space-y-3 text-lg leading-8 text-foreground">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="pl-2">{children}</li>
    ),

    number: ({ children }) => (
      <li className="pl-2">{children}</li>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">
        {children}
      </strong>
    ),

    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),

    link: ({ value, children }) => {
      const href = value?.href as string | undefined

      if (!href) return <>{children}</>

      const isExternal = /^https?:\/\//i.test(href)

      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
        >
          {children}
        </a>
      )
    },
  },
}

export default function ArticleContent({ post }: { post: Post }) {
  return (
    <div>
      <PortableText value={post.body} components={components} />

      {post.tags && post.tags.length > 0 && (
        <div className="mt-12 border-t border-border pt-6">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
