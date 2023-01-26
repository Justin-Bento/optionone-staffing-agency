import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'questions',
  title: 'Questions',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      title: 'Question',
    }),
    defineField({
      name: 'answer',
      type: 'text',
      title: 'Answer',
    }),
  ],
})
