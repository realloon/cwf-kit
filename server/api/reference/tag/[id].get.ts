import referenceData from '../../../data/reference.json'

export default defineEventHandler(async event => {
  const id = event.context.params?.id
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID is required',
    })
  }

  

  return 'Hello Nitro'
})
