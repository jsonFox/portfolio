export const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  return el?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
};

export const getElementDimensions = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return [null, null];
  const { width, height } = el.getBoundingClientRect();
  return [width, height];
};
