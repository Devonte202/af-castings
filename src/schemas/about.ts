const aboutSchema = {
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'agencyDescription',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'profileImage',
      type: 'image',
      title: 'Profile Image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'ceoDescription',
      type: 'string',
      title: 'CEO Bio',
    },
    
  ]
}

export default aboutSchema
