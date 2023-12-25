import { sanitizeText } from 'utils/strings'

export const getStatus = (limit: number, unsafe?: string | null) => {
  const pronouns: string = sanitizeText(unsafe || '');
  const limitedCharacters: string = pronouns.slice(0, limit)

  return limitedCharacters
}
