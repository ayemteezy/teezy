import { format } from 'date-fns'

export const formatDate = (_date: string) => {
  const _formattedDate = format(_date, "MMMM yyyy")

  return _formattedDate
}