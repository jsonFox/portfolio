export const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  return el?.scrollIntoView({ behavior: 'smooth' });
}