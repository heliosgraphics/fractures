import xss from 'xss';

export const sanitizeText = (input: string = ''): string => {
  const clean: string = xss(input);

  return clean;
}

export const middleEllipsis = (str: string = '', length: number = 19): string => {
  const diff: number = Math.floor((length - 3) / 2);

  if (str.length > length) {
    return str.substring(0, diff) + '...' + str.substring(str.length - diff, str.length);
  }

  return str;
}

// TODO @chrispuska Make this account for possible markdown parts in `text` add tests.
export const removeNewlines = (text?: string | null, limit?: number): string => {
  if (!text) return '';

  const length: number = text?.length;
  const trimmedString = text.substring(0, limit ?? length);

  return sanitizeText(trimmedString.replace(/(?:\r\n|\r|\n)/g, ' '));
}

// TODO @chrispuska This should only touch semantics, not ui
export const formatRawText = (inputText: string = '', pattern?: RegExp, match?: string): string => {
  // Links
  const URL_PATTERN = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
  const URL_PSEUDO_PATTERN = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
  const URL_EMAIL_PATTERN = /(([a-zA-Z0-9_\-\.]+)@[a-zA-Z_]+?(?:\.[a-zA-Z]{2,6}))+/gim;

  // New lines
  const NEW_LINES_PATTERN = /(?:\r\n|\r|\n)/gim;

  let formattedText: string = inputText
    // Links
    .replace(URL_PATTERN, '<a class="underline medium" href="$&">$&</a>')
    .replace(URL_PSEUDO_PATTERN, '$1<a class="underline medium" href="http://$2">$2</a>')
    .replace(URL_EMAIL_PATTERN, '<a class="underline medium" href="mailto:$1">$1</a>')
    // New lines
    .replace(NEW_LINES_PATTERN, '<br/>')

  // Replace a custom one
  // TODO @chrispuska Make this multi pattern instead.
  if (!pattern) formattedText.replace(pattern!, `<a class=" medium" href="${match}">$&</a>`)

  return sanitizeText(formattedText);
}
