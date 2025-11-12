export default {
  name: 'product',
  title: 'Proizvod',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Naziv proizvoda',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Slike',
      type: 'array',
      of: [
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
          ],
        },
      ],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'category',
      title: 'Kategorija',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Cena',
      type: 'number',
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: 'oldPrice',
      title: 'Stara cena',
      type: 'number',
      description: 'Originalna cena pre sniženja',
    },
    {
      name: 'shortDescription',
      title: 'Kratak opis',
      type: 'text',
      rows: 3,
    },
    {
      name: 'description',
      title: 'Detaljan opis',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'ingredients',
      title: 'Sastojci',
      type: 'text',
    },
    {
      name: 'usage',
      title: 'Način upotrebe',
      type: 'text',
    },
    {
      name: 'volume',
      title: 'Zapremina',
      type: 'string',
      description: 'npr. 1000ml, 330ml, 60 kapsula',
    },
    {
      name: 'inStock',
      title: 'Na stanju',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'featured',
      title: 'Izdvojen proizvod',
      type: 'boolean',
      initialValue: false,
      description: 'Prikazati na početnoj strani',
    },
    {
      name: 'bestseller',
      title: 'Najprodavaniji',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'new',
      title: 'Novi proizvod',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0',
      subtitle: 'category.name',
    },
  },
};
