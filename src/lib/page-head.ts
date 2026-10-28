const SUFFIX = "Falola Titilope Rosemary | Portfolio";

export const pageHead = (name?: string) => () => ({
  meta: [{ title: name ? `${name} | ${SUFFIX}` : SUFFIX }],
});
