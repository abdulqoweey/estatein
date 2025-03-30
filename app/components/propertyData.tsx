export const properties = [
  {
    title: 'Modern Penthouse',
    description: 'Spacious penthouse with breathtaking city views.',
    price: '#2,500,000',
    location: 'Lagos, Nigeria', // Changed to Nigerian location
    imageUrl: '/images/Image-4.png', // Local image
    type: 'penthouse',
    details: [
      { type: 'bedroom', label: '4 Beds' },
      { type: 'bathroom', label: '3 Baths' },
      { type: 'smartHome', label: 'Smart Home Features' },
    ],
  },
  {
    title: 'Beachfront Bungalow',
    description:
      'Charming bungalow right on the beach with incredible sunset views.',
    price: '#1,000,000,000',
    location: 'Victoria Island, Lagos', // Changed to Nigerian location
    imageUrl: '/images/Image-2.png', // Local image
    type: 'bungalow',
    details: [
      { type: 'bedroom', label: '2 Beds' },
      { type: 'bathroom', label: '2 Baths' },
      { type: 'mountainIcon', label: 'Ocean Front' },
    ],
  },
  {
    title: 'Urban Loft',
    description:
      'Stylish urban loft in the heart of downtown, perfect for professionals.',
    price: '#85,000,000',
    location: 'Abuja, Nigeria', // Changed to Nigerian location
    imageUrl: '/images/Image-1.png', // Local image
    type: 'loft',
    details: [
      { type: 'bedroom', label: '1 Bed' },
      { type: 'bathroom', label: '1 Bath' },
      { type: 'smartHome', label: 'Smart Appliances' },
    ],
  },
  {
    title: 'Country Estate',
    description:
      'A sprawling country estate with a large garden and private lake.',
    price: '#3,005,000,000',
    location: 'Ibadan, Nigeria', // Changed to Nigerian location
    imageUrl: '/images/Image-3.png', // Local image
    type: 'estate',
    details: [
      { type: 'bedroom', label: '6 Beds' },
      { type: 'bathroom', label: '5 Baths' },
      { type: 'mountainIcon', label: 'Private Lake' },
    ],
  },
  {
    title: 'City Apartment',
    description:
      'A sleek and modern apartment in a new development, ideal for city living.',
    price: '#95,000,000',
    location: 'Port Harcourt, Nigeria', // Changed to Nigerian location
    imageUrl: '/images/Image-4.png', // Local image
    type: 'apartment',
    details: [
      { type: 'bedroom', label: '2 Beds' },
      { type: 'bathroom', label: '2 Baths' },
      { type: 'villaIcon', label: 'Central Location' },
    ],
  },
].map((property, index) => ({
  ...property,
  id: index + 1, // Auto-generate ID starting from 1
}))
