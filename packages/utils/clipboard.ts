export const copyValue = (text: string) => {
  const inp = document.createElement('input');

  document.body.appendChild(inp);
  inp.value = text;
  inp.select();
  document.execCommand('copy', false);

  return inp.remove();
};
