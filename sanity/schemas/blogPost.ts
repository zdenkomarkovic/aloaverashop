export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Naslov',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'string',
      initialValue: 'Aloe Vera Shop',
    },
    {
      name: 'publishedAt',
      title: 'Datum objave',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'mainImage',
      title: 'Glavna slika',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Kratak pregled',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required().max(200),
    },
    {
      name: 'body',
      title: 'Sadržaj',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Natpis',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'featured',
      title: 'Izdvojen post',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'author',
    },
  },
};
