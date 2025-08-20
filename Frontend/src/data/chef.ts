export type ChefItem = {
  id: string
  title: string
  description: string
  imageUrl: string
}

export const chefItems: ChefItem[] = [
  {
    id: 'dish-1',
    title: 'Seasonal Tasting Plate',
    description: 'Local, seasonal ingredients plated for balance and contrast.',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'dish-2',
    title: 'Fine Dining Entrée',
    description: 'Precision technique and presentation focused on flavor.',
    imageUrl: 'https://images.unsplash.com/photo-1516683037151-9d0d845c76f2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'dessert-1',
    title: 'Modern Dessert',
    description: 'Textural contrasts with a light finish.',
    imageUrl: 'https://images.unsplash.com/photo-1514516870926-2059890f06cc?q=80&w=1200&auto=format&fit=crop',
  },
]
