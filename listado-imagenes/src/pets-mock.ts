export interface PictureInfo {
  id: number;
  category: string;
  picUrl: string;
  title: string;
  selected?:boolean;
}

export const pets: PictureInfo[] = [
  {
    id: 1,
    category: "dogs",
    picUrl:
      "https://images.pexels.com/photos/994174/pexels-photo-994174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Perrito 1",
  },
  {
    id: 2,
    category: "dogs",
    picUrl:
      "https://images.pexels.com/photos/179221/pexels-photo-179221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Perrito 2",
  },
  {
    id: 3,
    category: "dogs",
    picUrl:
      "https://images.pexels.com/photos/1480913/pexels-photo-1480913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Perrito 3",
  },
  {
    id: 4,
    category: "dogs",
    picUrl:
      "https://images.pexels.com/photos/7752793/pexels-photo-7752793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Perrito 4",
  },

  {
    id: 5,
    category: "birds",
    picUrl:
      "https://images.pexels.com/photos/1617366/pexels-photo-1617366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Pajarito 1",
  },
  {
    id: 6,
    category: "birds",
    picUrl:
      "https://images.pexels.com/photos/2850833/pexels-photo-2850833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Pajarito 2",
  },
  {
    id: 7,
    category: "birds",
    picUrl:
      "https://images.pexels.com/photos/357316/pexels-photo-357316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Pajarito 3",
  },
  {
    id: 8,
    category: "birds",
    picUrl:
      "https://images.pexels.com/photos/105808/pexels-photo-105808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Pajarito 4",
  },
];
