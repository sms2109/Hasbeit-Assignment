export const movies = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Movie ${i + 1}`,
  image: `https://picsum.photos/200/300?random=${i + 1}`,
  description: `This is the description for Movie ${i + 1}.`,
}));
