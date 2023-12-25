export const validateHttpUrl = (text?: string | null): boolean => {
  let url;

  try {
    url = new URL(text as string);
  } catch (_) {
    return false;
  }

  return Boolean(url.protocol === "http:" || url.protocol === "https:");
}

export const validateEmail = (email: string): boolean => {
  const re: RegExp = /\S+@\S+\.\S+/;

  return re.test(email);
};
