import { enumsMap } from '../../../data/reference'

export default defineEventHandler(async event => {
  const id = event.context.params?.id
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID is required',
    })
  }

  return enumsMap.get(id)
})
