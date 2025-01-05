export type PostTypeCard = {
    _id: number;
    title: string;
    image: string; // Ensure this matches the updated property name
    excerpt: string;
    category: string;
    views: number;
    _createdAt: Date | string;
    author: {
      _id: number;
      name: string;
    };
  };
  