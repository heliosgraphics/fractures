export const getSlug = (subdomain: string | undefined): string => {
  if (!subdomain) return ''

  let str = subdomain;

  str = str.replace(/^\s+|\s+$/g, '')
  str = str.toLowerCase()

  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;"
  var to = "aaaaeeeeiiiioooouuuunc------"
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str.replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

  return str
}
