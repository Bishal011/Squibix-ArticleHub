const sampleArticles = [
  // Existing articles
  {
    id: "1",
    title: "The Rise of AI in Everyday Life",
    excerpt: "Artificial Intelligence is shaping the future in various industries...",
    content: "AI is no longer a futuristic concept...",
    author: { 
      name: "John Doe", 
      avatar: "https://www.shutterstock.com/image-vector/abstract-boy-avtar-character-fiction-260nw-2168819879.jpg" 
    },
    category: "Technology",
    readingTime: "5 min",
    createdAt: "2025-01-01",
    lastEditedAt: null,
    thumbnail: "https://i.pinimg.com/originals/19/db/31/19db31732931019b73bedcf17924f814.jpg",
    tags: ["AI", "Future", "Tech"],
    isEdited: false,
  },
  {
    id: "2",
    title: "10 Tips for Starting a Business",
    excerpt: "Starting a business can be challenging. Here are 10 tips...",
    content: "Starting a business requires planning...",
    author: { 
      name: "Jane Smith", 
      avatar: "https://randomuser.me/api/portraits/women/65.jpg" 
    },
    category: "Business",
    readingTime: "6 min",
    createdAt: "2024-12-20",
    lastEditedAt: "2024-12-25",
    thumbnail: "https://static.vecteezy.com/system/resources/thumbnails/005/048/106/small_2x/black-and-yellow-grunge-modern-thumbnail-background-free-vector.jpg",
    tags: ["Business", "Entrepreneurship"],
    isEdited: true,
  },
  {
    id: "3",
    title: "The Benefits of Mindful Meditation",
    excerpt: "Mindfulness meditation has many mental health benefits...",
    content: "Mindfulness is a practice...",
    author: { 
      name: "Emily Clark", 
      avatar: "https://randomuser.me/api/portraits/women/55.jpg" 
    },
    category: "Health",
    readingTime: "4 min",
    createdAt: "2024-12-10",
    lastEditedAt: null,
    thumbnail: "https://www.shutterstock.com/image-vector/colorful-comic-video-thumbnail-template-260nw-2118291392.jpg",
    tags: ["Health", "Mindfulness"],
    isEdited: false,
  },
  {
    id: "4",
    title: "Understanding Blockchain Technology",
    excerpt: "Blockchain is revolutionizing the digital world...",
    content: "Blockchain is a distributed ledger...",
    author: { 
      name: "Mark Johnson", 
      avatar: "https://randomuser.me/api/portraits/men/85.jpg" 
    },
    category: "Technology",
    readingTime: "8 min",
    createdAt: "2024-11-30",
    lastEditedAt: "2024-12-01",
    thumbnail: "https://www.shutterstock.com/image-vector/comic-cartoon-thumbnail-background-template-260nw-2268411797.jpg",
    tags: ["Blockchain", "Tech"],
    isEdited: true,
  },
  // Additional articles
  {
    id: "5",
    title: "Exploring the World of Virtual Reality",
    excerpt: "Virtual reality is changing the way we interact with digital environments...",
    content: "Virtual reality (VR) immerses users in a computer-generated world...",
    author: { 
      name: "Alex Johnson", 
      avatar: "https://randomuser.me/api/portraits/men/45.jpg" 
    },
    category: "Technology",
    readingTime: "7 min",
    createdAt: "2025-02-15",
    lastEditedAt: null,
    thumbnail: "https://www.shutterstock.com/image-vector/sun-rays-halftone-on-yellow-260nw-2506198177.jpg",
    tags: ["VR", "Tech", "Innovation"],
    isEdited: false,
  },
  {
    id: "6",
    title: "Healthy Eating: Tips for a Balanced Diet",
    excerpt: "A balanced diet is crucial for maintaining good health...",
    content: "Eating a balanced diet provides the nutrients your body needs...",
    author: { 
      name: "Sarah Lee", 
      avatar: "https://randomuser.me/api/portraits/women/45.jpg" 
    },
    category: "Health",
    readingTime: "5 min",
    createdAt: "2025-01-25",
    lastEditedAt: null,
    thumbnail: "https://www.shutterstock.com/image-vector/pink-yellow-comic-thumbnail-template-260nw-2298418255.jpg",
    tags: ["Health", "Diet", "Nutrition"],
    isEdited: false,
  },
  {
    id: "7",
    title: "The Future of Renewable Energy",
    excerpt: "Renewable energy sources are paving the way for a sustainable future...",
    content: "Renewable energy, such as solar and wind power, is becoming more prevalent...",
    author: { 
      name: "Michael Brown", 
      avatar: "https://randomuser.me/api/portraits/men/55.jpg" 
    },
    category: "Environment",
    readingTime: "6 min",
    createdAt: "2025-02-05",
    lastEditedAt: null,
    thumbnail: "https://www.shutterstock.com/image-illustration/dynamic-comicstyle-radial-burst-background-260nw-2555056619.jpg",
    tags: ["Renewable Energy", "Environment", "Sustainability"],
    isEdited: false,
  },
  {
    id: "8",
    title: "The Importance of Mental Health Awareness",
    excerpt: "Mental health awareness is essential for promoting well-being...",
    content: "Raising awareness about mental health helps reduce stigma and encourages support...",
    author: { 
      name: "Jessica Green", 
      avatar: "https://randomuser.me/api/portraits/women/35.jpg" 
    },
    category: "Health",
    readingTime: "5 min",
    createdAt: "2025-01-30",
    lastEditedAt: null,
    thumbnail: "https://www.shutterstock.com/image-vector/comic-cartoon-thumbnail-template-background-260nw-2364014673.jpg",
    tags: ["Mental Health", "Well-being", "Awareness"],
    isEdited: false,
  },
  {
    id: "9",
    title: "Exploring the Culinary Delights of Italy",
    excerpt: "Italian cuisine is famous for its rich flavors and diverse dishes...",
    content: "From pasta to pizza, Italian cuisine offers a wide variety of delicious options...",
    author: { 
      name: "Anthony Rossi", 
      avatar: "https://randomuser.me/api/portraits/men/25.jpg" 
    },
    category: "Travel",
    readingTime: "7 min",
    createdAt: "2025-02-20",
    lastEditedAt: null,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCEyN2GEZSKuYKcFw3D7aAM4AQf3RoS3yhw&s",
    tags: ["Travel", "Cuisine", "Italy"],
    isEdited: false,
  },
  {
    id: "10",
    title: "A Guide to Effective Time Management",
    excerpt: "Time management is key to productivity and success...",
    content: "Implementing effective time management strategies can help you achieve your goals...",
    author: { 
      name: "Laura Adams", 
      avatar: "https://randomuser.me/api/portraits/women/30.jpg" 
    },
    category: "Business",
    readingTime: "5 min",
    createdAt: "2025-02-10",
    lastEditedAt: null,
    thumbnail: "https://i.ytimg.com/vi/Y6PpTfC93I0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC0WCHFHfTo5h86ldqHGNyx9KlBZg",
    tags: ["Time Management", "Productivity", "Business"],
    isEdited: false,
  }
];

export default sampleArticles;
