export default {
  name: 'category',
  title: 'Kategorija',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Naziv',
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
      name: 'description',
      title: 'Opis',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Slika',
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
    {
      name: 'order',
      title: 'Redosled',
      type: 'number',
      description: 'Redosled prikazivanja kategorija',
    },
  ],
};
