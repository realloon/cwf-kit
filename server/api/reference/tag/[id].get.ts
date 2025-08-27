import { tagsMap } from '../../../data/reference'

export default defineEventHandler(async event => {
  const id = event.context.params?.id
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID is required',
    })
  }

  return tagsMap.get(id)
})
