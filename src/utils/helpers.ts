export const scrollTo = (id: string) => {
  const el = document.getElementById(
    id.toLowerCase().replaceAll(/\s+/g, '-')
  ) as HTMLElement;

  return el.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
};

export const getElementDimensions = (id: string) => {
  const el = document.getElementById(id) as HTMLElement;
  const { width, height } = el.getBoundingClientRect();

  return [width, height];
};
