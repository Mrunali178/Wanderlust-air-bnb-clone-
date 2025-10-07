const sampleListings = [
  {
    title: "Beachfront Villa in Goa",
    description:
      "Relax on the golden sands of Goa in this luxurious beachfront villa with a private pool and sea views.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    },
    price: 2500,
    location: "Goa, Goa",
    country: "India",
  },
  {
    title: "Houseboat Stay in Alleppey",
    description:
      "Cruise through the tranquil backwaters of Kerala on a traditional houseboat surrounded by lush greenery.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1697729600773-5b039ef17f3b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    },
    price: 1800,
    location: "Alleppey, Kerala",
    country: "India",
  },
  {
    title: "Mountain Cabin in Manali",
    description:
      "Unwind in this cozy wooden cabin overlooking the snow-capped peaks and pine forests of Manali.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1500,
    location: "Manali, Himachal Pradesh",
    country: "India",
  },
  {
    title: "Luxury Tent in Jaisalmer Desert",
    description:
      "Experience royal desert camping under the starlit sky with camel safaris and Rajasthani folk music.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1662879046665-b286adb83aad?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    },
    price: 2000,
    location: "Jaisalmer, Rajasthan",
    country: "India",
  },
  {
    title: "Tea Estate Bungalow in Munnar",
    description:
      "Stay amidst the rolling tea gardens of Munnar in this colonial-era bungalow offering panoramic views.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1724818361335-291394c25925?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    },
    price: 2200,
    location: "Munnar, Kerala",
    country: "India",
  },
  {
    title: "Private Beach Cottage in Andaman Islands",
    description:
      "Wake up to turquoise waters and white sand beaches in this serene Andaman beachfront cottage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586359716568-3e1907e4cf9f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    },
    price: 3500,
    location: "Havelock Island, Andaman & Nicobar Islands",
    country: "India",
  },
  {
    title: "Hilltop Homestay in Darjeeling",
    description:
      "Savor breathtaking views of Kanchenjunga while enjoying organic tea and home-cooked meals.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1697730418140-064a5b6c2e17?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D60", // Darjeeling hills
    },
    price: 1300,
    location: "Darjeeling, West Bengal",
    country: "India",
  },
  {
    title: "Royal Haveli in Jaipur",
    description:
      "Live like royalty in this beautifully restored haveli featuring Rajasthani art, courtyards, and heritage décor.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602643163983-ed0babc39797?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    },
    price: 2800,
    location: "Jaipur, Rajasthan",
    country: "India",
  },
  {
    title: "Riverside Cottage in Rishikesh",
    description:
      "Find peace by the Ganga River in this riverside cottage perfect for yoga, meditation, and adventure sports.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1650341259809-9314b0de9268?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    },
    price: 1200,
    location: "Rishikesh, Uttarakhand",
    country: "India",
  },
  {
    title: "Lakeside Retreat in Udaipur",
    description:
      "Enjoy stunning lake views from this luxurious retreat near Lake Pichola, the Venice of the East.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1697729844084-c03db2377161?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D", 
    },
    price: 3000,
    location: "Udaipur, Rajasthan",
    country: "India",
  },
  {
    title: "Coconut Grove Stay in Varkala",
    description:
      "Stay in a tropical cottage surrounded by coconut palms, just steps away from Varkala’s famous cliff beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1704499683557-0abe494388dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHZhcmthbGF8ZW58MHx8MHx8fDA%3D", 
    },
    price: 1700,
    location: "Varkala, Kerala",
    country: "India",
  },
  {
    title: "Eco Jungle Lodge in Jim Corbett",
    description:
      "Stay close to nature in this eco-friendly jungle lodge surrounded by wildlife and lush forests.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1664303908759-6d375aefbcd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvJTIwanVuZ2xlJTIwbG9kZ2UlMjBqaW0lMjBjb3JiZXR0fGVufDB8fDB8fHww", 
    },
    price: 1900,
    location: "Jim Corbett, Uttarakhand",
    country: "India",
  },
  {
    title: "Snow View Chalet in Gulmarg",
    description:
      "Hit the snow-covered slopes in this beautiful wooden chalet with stunning Himalayan views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1753541042288-fb3c415d1687?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd1bG1hcmclMjBrYXNobWlyfGVufDB8fDB8fHww", 
    },
    price: 3200,
    location: "Gulmarg, Jammu & Kashmir",
    country: "India",
  },
  {
    title: "Tropical Island Villa in Lakshadweep",
    description:
      "Enjoy the turquoise lagoons and coral reefs from this overwater villa on a private island in Lakshadweep.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1572025310208-2fd6b91764c1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    },
    price: 5000,
    location: "Agatti Island, Lakshadweep",
    country: "India",
  },
  {
    title: "Colonial Bungalow in Ooty",
    description:
      "Relax in this vintage colonial bungalow surrounded by tea gardens and misty hills in Ooty.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1638886540342-240980f60d25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b290eXxlbnwwfHwwfHx8MA%3D%3D", 
    },
    price: 1800,
    location: "Ooty, Tamil Nadu",
    country: "India",
  },
  {
    title: "Cultural Homestay in Varanasi",
    description:
      "Immerse yourself in India’s spiritual capital by staying in a traditional home near the sacred Ganga ghats.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1697729634472-bb82561ef296?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmFyYW5hc2klMjBnaGF0fGVufDB8fDB8fHww", 
    },
    price: 1000,
    location: "Varanasi, Uttar Pradesh",
    country: "India",
  },
  {
    title: "Adventure Camp in Spiti Valley",
    description:
      "Stay amidst the cold desert mountains of Spiti in adventure camps with stargazing and local cuisine.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1698753935121-153a106616d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BpdGklMjB2YWxsZXl8ZW58MHx8MHx8fDA%3D", 
    },
    price: 1600,
    location: "Spiti Valley, Himachal Pradesh",
    country: "India",
  },
  {
    title: "Luxury Cottage in Coorg",
    description:
      "Wake up to coffee plantations and misty mornings in this luxury cottage in the Western Ghats.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1710612198146-77512950a4b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29vcmd8ZW58MHx8MHx8fDA%3D", 
    },
    price: 2300,
    location: "Coorg, Karnataka",
    country: "India",
  },
  {
    title: "Backwater Resort in Kumarakom",
    description:
      "Enjoy the charm of Kerala’s backwaters in this luxury resort featuring traditional architecture and spa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1663480291599-0da722aeafd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJhY2t3YXRlciUyMFJlc29ydCUyMGluJTIwS3VtYXJha29tfGVufDB8fDB8fHww",
    },
    price: 2800,
    location: "Kumarakom, Kerala",
    country: "India",
  },
  {
    title: "Seaside Bungalow in Pondicherry",
    description:
      "Experience French charm in this pastel-colored seaside bungalow near the Promenade Beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1598677833732-7857ae95afce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9uZGljaGVycnl8ZW58MHx8MHx8fDA%3D",
    },
    price: 2000,
    location: "Pondicherry, Puducherry",
    country: "India",
  },
];

module.exports = { data: sampleListings };
