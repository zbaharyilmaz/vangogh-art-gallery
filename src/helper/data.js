const artworks = [

  {
    id: 1,
    title: "Sunflowers",
    year: 1888,
    description: "A series of still-life paintings featuring vibrant sunflowers in a vase.",
    image: "https://www.worldhistory.org/uploads/images/15460.png"
  },
  {
    id: 2,
    title: "The Bedroom",
    year: 1888,
    description: "A painting of Van Gogh's bedroom in Arles, showcasing the simplicity of his living space.",
    image: "https://www.worldhistory.org/uploads/images/15466.png"
  },
  {
    id: 3,
    title: "Café Terrace at Night",
    year: 1888,
    description: "A beautiful night scene depicting a café in Arles, illuminated under the stars.",
    image: "https://www.worldhistory.org/uploads/images/15461.png"
  },

  {
    id: 4,
    title: "Wheatfield with Crows",
    year: 1890,
    description: "A dramatic and emotional work, featuring a wheatfield under a stormy sky with crows flying.",
    image: "https://www.worldhistory.org/uploads/images/15475.png"
  },
  {
    id: 5,
    title: "Pink Peach Trees",
    year: 1888,
    description: "Fascinated by the colours and light of Provence, the artist painted a series of canvases with blossom trees as their subject.",
    image: "https://www.worldhistory.org/uploads/images/15485.png"
  },

  {
    id: 6,
    title: "Wheatfield with Reaper",
    year: 1889,
    description: "A symbolic painting featuring a lone reaper harvesting wheat in a field.",
    image: "https://www.worldhistory.org/uploads/images/15487.png"
  },
  {
    id: 7,
    title: "Irises",
    year: 1889,
    description: "A vibrant painting of irises in the garden of Saint-Paul-de-Mausole asylum.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Vincent_van_Gogh_-_Irises_%281889%29.jpg/622px-Vincent_van_Gogh_-_Irises_%281889%29.jpg"
  },

  {
    id: 8,
    title: "The Sower",
    year: 1888,
    description: "A depiction of a peasant sowing seeds in a field, showcasing Van Gogh's vibrant colors.",
    image: "https://www.worldhistory.org/uploads/images/15490.png"
  },
  {
    id: 9,
    title: "Almond Blossom",
    year: 1890,
    description: "A joyful painting of almond branches in bloom, symbolizing new life and hope.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/608px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg"
  },
  {
    id: 10,
    title: "The Yellow House",
    year: 1888,
    description: "The house in Arles where Van Gogh lived and created many of his famous works.",
    image: "https://www.worldhistory.org/uploads/images/15472.png"
  },
  {
    id: 11,
    title: "Red Vineyard at Arles",
    year: 1888,
    description: "The only painting Van Gogh ever sold, depicting a red vineyard under a warm sun.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Vincent_van_Gogh_-_Red_Vineyard_at_Arles_%281888%29.jpg/602px-Vincent_van_Gogh_-_Red_Vineyard_at_Arles_%281888%29.jpg"
  },
  {
    id: 12,
    title: "The Night Café",
    year: 1888,
    description: "A powerful painting of a café in Arles, featuring a chaotic, emotionally charged color palette.",
    image: "https://www.worldhistory.org/uploads/images/15459.png"
  },
  {
    id: 13,
    title: "The Postman Joseph Roulin",
    year: 1888,
    description: "A portrait of the postman Joseph Roulin, one of Van Gogh's favorite subjects.",
    image: "https://www.worldhistory.org/uploads/images/15478.png"
  },
  {
    id: 14,
    title: "Portrait of Dr. Gachet",
    year: 1890,
    description: "A portrait of Van Gogh's physician, Dr. Gachet, painted shortly before the artist's death.",
    image: "https://www.worldhistory.org/uploads/images/15467.png"
  },
  {
    id: 15,
    title: "The Mulberry Tree",
    year: 1889,
    description: "A painting of a vibrant mulberry tree, created while Van Gogh was in the Saint-Paul-de-Mausole asylum.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/The_Mulberry_Tree_by_Vincent_van_Gogh.jpg/581px-The_Mulberry_Tree_by_Vincent_van_Gogh.jpg"
  },
  {
    id: 16,
    title: "The Starry Night",
    year: 1889,
    description: "One of Van Gogh's most famous paintings, depicting a swirling night sky over a small town.",
    image: "https://www.worldhistory.org/uploads/images/15468.png"
  },

  {
    id: 17,
    title: "Bridge at Arles",
    year: 1888,
    description: "A depiction of a bridge in Arles, capturing the peaceful atmosphere of the town.",
    image: "https://www.worldhistory.org/uploads/images/15480.png"
  },
  {
    id: 18,
    title: "The Potato Eaters",
    year: 1885,
    description: "A gritty, earthy depiction of peasants eating potatoes, reflecting Van Gogh's early style.",
    image: "https://www.worldhistory.org/uploads/images/15462.png"
  },
  {
    id: 19,
    title: "Still Life: Vase with Fifteen Sunflowers",
    year: 1888,
    description: "A vibrant and colorful still life of sunflowers in a vase.",
    image: "https://www.worldhistory.org/uploads/images/15473.png"
  },
  {
    id: 20,
    title: "Vase with Irises Against a Yellow Background",
    year: 1890,
    description: "A vibrant arrangement of irises in a vase, set against a striking yellow background.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Still_Life_-_Vase_with_Irises_against_a_yellow_background_%28JH_1977%29_-_My_Dream.jpg/604px-Still_Life_-_Vase_with_Irises_against_a_yellow_background_%28JH_1977%29_-_My_Dream.jpg"
  },
  {
    id: 21,
    title: "The Artist's Garden at Auvers",
    year: 1890,
    description: "A vibrant depiction of a garden in Auvers-sur-Oise, painted during Van Gogh's final months.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Van_Gogh_-_Garten_in_Auvers.jpeg/607px-Van_Gogh_-_Garten_in_Auvers.jpeg"
  },
  {
    id: 22,
    title: "The Ravine",
    year: 1889,
    description: "A serene landscape of a ravine, created during Van Gogh's time at the Saint-Paul-de-Mausole asylum.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Vincent_van_Gogh_-_Ravine.jpg/611px-Vincent_van_Gogh_-_Ravine.jpg"
  },
  {
    id: 23,
    title: "The Olive Trees",
    year: 1889,
    description: "A vibrant portrayal of olive trees in the south of France, painted in bold, expressive strokes.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Vincent_van_Gogh_-_Olive_Trees_-_Google_Art_Project_%28Minneapolis_Institute_of_Arts%29.jpg/601px-Vincent_van_Gogh_-_Olive_Trees_-_Google_Art_Project_%28Minneapolis_Institute_of_Arts%29.jpg"
  },
 
];

export default artworks;
