import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/image";

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt?: string; caption?: string } }) => {
      const imageUrl = urlFor(value).width(1200).url();
      return (
        <div className="my-8 rounded-xl overflow-hidden">
          <Image
            src={imageUrl}
            alt={value.alt || "Blog image"}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
          {value.caption && (
            <p className="text-center text-sm text-gray-500 mt-2">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
  block: {
    // Headings
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-gray-900 mt-6 mb-3">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-base font-bold text-gray-900 mt-4 mb-2">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-sm font-bold text-gray-900 mt-4 mb-2">
        {children}
      </h6>
    ),

    // Paragraphs
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4">
        {children}
      </p>
    ),

    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-emerald-600 pl-4 my-6 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },

  // Lists
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 ml-4 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 ml-4 text-gray-700">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="ml-2">{children}</li>
    ),
    number: ({ children }) => (
      <li className="ml-2">{children}</li>
    ),
  },

  // Marks
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    underline: ({ children }) => (
      <span className="underline">{children}</span>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 text-emerald-600 px-2 py-1 rounded font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-600 hover:text-emerald-700 underline"
      >
        {children}
      </a>
    ),
  },
};
