import Image from 'next/image'
import { Post } from '@/lib/sanity/types'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { urlFor } from '@/lib/sanity/image'

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value) return null
      return (
        <div className="relative w-full aspect-video my-6">
          <Image
            src={urlFor(value).width(1200).height(675).quality(80).url()}
            alt={value.alt || ''}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>
      )
    },
    code: ({ value }: { value: any }) => (
      <pre className="my-4 overflow-x-auto rounded-lg bg-slate-900 text-slate-100 p-4 text-sm"><code>{value.code}</code></pre>
    ),
  },
  block: {
    h2: ({ children }: { children: any }) => <h2 className="mt-8 text-2xl font-bold tracking-tight">{children}</h2>,
    h3: ({ children }: { children: any }) => <h3 className="mt-6 text-xl font-semibold tracking-tight">{children}</h3>,
    blockquote: ({ children }: { children: any }) => (
      <blockquote className="border-l-4 pl-4 italic text-muted-foreground my-4">{children}</blockquote>
    ),
    normal: ({ children }: { children: any }) => <p className="my-4 leading-7 text-foreground">{children}</p>,
  },
  list: {
    bullet: ({ children }: { children: any }) => <ul className="my-4 ml-6 list-disc space-y-2">{children}</ul>,
    number: ({ children }: { children: any }) => <ol className="my-4 ml-6 list-decimal space-y-2">{children}</ol>,
  },
  marks: {
    strong: ({ children }: { children: any }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: { children: any }) => <em className="italic">{children}</em>,
    link: ({ value, children }: { value: any; children: any }) => {
      const href = value?.href as string
      const isExternal = href?.startsWith('http')
      return (
        <a
          className="text-primary-600 underline underline-offset-2 hover:text-primary-700"
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      )
    },
  },
}

export default function ArticleContent({ post }: { post: Post }) {
  return (
    <div className="prose prose-slate max-w-none">
      {post.mainImage && (
        <div className="relative w-full aspect-video mb-6 rounded-xl overflow-hidden bg-muted">
          <Image
            src={urlFor(post.mainImage).width(1280).height(720).quality(80).url()}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      )}
      <PortableText value={post.body} components={components} />
      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="badge badge-outline">{t}</span>
          ))}
        </div>
      )}
    </div>
  )
}
