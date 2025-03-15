const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("../config/db.js");
const Task = require("../models/Task.js");

dotenv.config();
connectDB();

// List of sample travel destinations with image links
// const travelDestinations = [
//   { name: "Paris", image: "https://media.timeout.com/images/106181719/750/562/image.jpg" },
//   { name: "New York", image: "https://www.travelguide.net/media/new-york.jpeg" },
//   { name: "Tokyo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/640px-Skyscrapers_of_Shinjuku_2009_January.jpg" },
//   { name: "London", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg" },
//   { name: "Sydney", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/800px-Sydney_Opera_House_-_Dec_2008.jpg" },
//   { name: "Rome", image: "https://miro.medium.com/v2/resize:fit:1400/1*gfzxEKbwzFDI8L-h2FQSrw.jpeg" },
//   { name: "Berlin", image: "https://source.unsplash.com/500x300/?berlin" },
//   { name: "Dubai", image: "https://source.unsplash.com/500x300/?dubai" },
//   { name: "Barcelona", image: "https://source.unsplash.com/500x300/?barcelona" },
//   { name: "Istanbul", image: "https://source.unsplash.com/500x300/?istanbul" },
//   { name: "Bangkok", image: "https://source.unsplash.com/500x300/?bangkok" },
//   { name: "Los Angeles", image: "https://source.unsplash.com/500x300/?los-angeles" },
//   { name: "Singapore", image: "https://source.unsplash.com/500x300/?singapore" },
//   { name: "Amsterdam", image: "https://source.unsplash.com/500x300/?amsterdam" },
//   { name: "Madrid", image: "https://source.unsplash.com/500x300/?madrid" },
//   { name: "Cape Town", image: "https://source.unsplash.com/500x300/?cape-town" },
//   { name: "Hong Kong", image: "https://source.unsplash.com/500x300/?hong-kong" },
//   { name: "Seoul", image: "https://source.unsplash.com/500x300/?seoul" },
//   { name: "Moscow", image: "https://source.unsplash.com/500x300/?moscow" },
//   { name: "Rio de Janeiro", image: "https://source.unsplash.com/500x300/?rio-de-janeiro" },
//   { name: "San Francisco", image: "https://source.unsplash.com/500x300/?san-francisco" },
//   { name: "Cairo", image: "https://source.unsplash.com/500x300/?cairo" },
//   { name: "Venice", image: "https://source.unsplash.com/500x300/?venice" },
//   { name: "Florence", image: "https://source.unsplash.com/500x300/?florence" },
//   { name: "Prague", image: "https://source.unsplash.com/500x300/?prague" },
//   { name: "Vienna", image: "https://source.unsplash.com/500x300/?vienna" }
// ];



const travelDestinations = [
  { name: "Paris", image: "https://media.istockphoto.com/id/2119799972/photo/spring-evening-view-of-the-eiffel-tower-in-paris.jpg?s=1024x1024&w=is&k=20&c=2K8nNcS9i5vXjGkLhFtJwITDi7UX4YOyxGh4UX6KoSI=" },
  { name: "New York", image: "https://media.istockphoto.com/id/1406960186/photo/the-skyline-of-new-york-city-united-states.jpg?s=1024x1024&w=is&k=20&c=m5cYGPJsDS6nTsxYucy6jlCj7flGliYw6Lf4Ftg0jQs=" },
  { name: "Tokyo", image: "https://media.istockphoto.com/id/598919748/photo/view-of-tokyo-skyline-at-sunset.jpg?s=1024x1024&w=is&k=20&c=KhNea-Cj5rBlAkdG7RSctzoJOBSBiOCXiWsRGn-e5rY=" },
  { name: "London", image: "https://media.istockphoto.com/id/1347665170/photo/london-at-sunset.jpg?s=1024x1024&w=is&k=20&c=ogVKCS26t23fSvgCO77CC_6mhtxMDk2cmBOUQ9VamYo=" },
  { name: "Sydney", image: "https://media.istockphoto.com/id/2157582170/photo/light-trail-cityscape-sydney-harbor-circular-quay-new-south-wales-australia.jpg?s=1024x1024&w=is&k=20&c=IFLHK1OoMYSUcogQLqOB_ME8LNtecuRc_vm8OsHkZYQ=" },
  { name: "Rome", image: "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=1024x1024&w=is&k=20&c=VzsI_-yWmldqLzFoRpfRCGsx5RkIEytRIVEFZ5Am01E=" },
  { name: "Berlin", image: "https://media.istockphoto.com/id/503874284/photo/berlin-skyline-with-spree-river-at-sunset-germany.jpg?s=1024x1024&w=is&k=20&c=tDWGKjtGWIqbO1d096rPS8A8DIhQfcpdQbTQgxPKZ-Q=" },
  { name: "Dubai", image: "https://media.istockphoto.com/id/1572334424/photo/dubai.jpg?s=1024x1024&w=is&k=20&c=zeyO5dpuwsxyc922a3tu6DI2vCHr9QuzoGUuSSjxaYA=" },
  { name: "Barcelona", image: "https://media.istockphoto.com/id/1301579230/photo/spanish-cities-the-sacred-barcelona-family.jpg?s=1024x1024&w=is&k=20&c=mXWYXPJT7DUM9K_RBetQHpC7M5ITcsLWRryxikTksGA=" },
  { name: "Istanbul", image: "https://media.istockphoto.com/id/1327842864/photo/blue-mosque-of-istanbul-famous-place-of-visit-turkey.jpg?s=1024x1024&w=is&k=20&c=PnQahBSa5Rbd8-uHZAeq4vbQ4NOsQ6nTEPWd7dtuoTs=" },
  { name: "Bangkok", image: "https://media.istockphoto.com/id/483816132/photo/bangkok-cityscape.jpg?s=1024x1024&w=is&k=20&c=gqDw9xwNMlqzUG-mTh5Sh7VY96ifTCq02HzFqNBZrC0=" },
  { name: "Los Angeles", image: "https://media.istockphoto.com/id/1462206892/photo/downtown-los-angeles-skyline-view-from-echo-lake-park.jpg?s=1024x1024&w=is&k=20&c=zyvm8ZRXHTl1gXtEn8avOirY2XiWpf6SCKR865iwzEY=" },
  { name: "Singapore", image: "https://media.istockphoto.com/id/590050726/photo/singapore-glowing-at-night.jpg?s=1024x1024&w=is&k=20&c=RDybwcdhLM1XH8OvFez6tyauD2dI08oq_ghDkPqTzEU=" },
  { name: "Amsterdam", image: "https://media.istockphoto.com/id/1352073906/photo/amsterdam-downtown-amstel-river-old-houses-and-a-bridge-nice-view-of-the-famous-city-of.jpg?s=1024x1024&w=is&k=20&c=1vZ-KIn0RyM4lXgF_PJPI1Iaw3-flR5gGzbPXjjw0MI=" },
  { name: "Madrid", image: "https://media.istockphoto.com/id/1303417572/photo/madrid-spain-sunrise-city-skyline-at-cibeles-fountain-town-square.jpg?s=1024x1024&w=is&k=20&c=e_r6AqEoemZa-aE-QJJDd_QEobfa3qwxL_sPYQeT39s=" },
  { name: "Cape Town", image: "https://media.istockphoto.com/id/620737858/photo/cape-town-and-the-12-apostels-from-above.jpg?s=1024x1024&w=is&k=20&c=Gp-7siInfi5ZXVfysn6IEOdbSXI7x_0CPGkVls6iU_A=" },
  { name: "Hong Kong", image: "https://media.istockphoto.com/id/579757046/photo/hong-kong-city-view-from-peak-at-sunrise.jpg?s=1024x1024&w=is&k=20&c=dWiOSmT5jv8AoPr0kzJEMQM2wk7eeq4dUq6Iy9o4GgA=" },
  { name: "Seoul", image: "https://media.istockphoto.com/id/621371796/photo/sunset-at-seoul-city-skyline-south-korea.jpg?s=1024x1024&w=is&k=20&c=ibUBCv8Pn9k97XIa7NnQi1UuQkmy1dMUF0N_S8sq5sc=" },
  { name: "Moscow", image: "https://media.istockphoto.com/id/614724736/photo/festive-day-of-november.jpg?s=1024x1024&w=is&k=20&c=1-4cZV2watL2gT6Y4JrPrQNwOxAh0qIFoqxYXndguLU=" },
  { name: "Rio de Janeiro", image: "https://media.istockphoto.com/id/518230906/photo/christ-the-redeemer-in-rio-de-janeiro.jpg?s=1024x1024&w=is&k=20&c=zjtXz3bzlh5W3OP16aSRao9KdY9p_rk76KK4eFgubxA=" },
  { name: "San Francisco", image: "https://media.istockphoto.com/id/1571494714/photo/view-of-golden-gate-bridge.jpg?s=1024x1024&w=is&k=20&c=CjGq7GX4096tSqcfS6JXoFUUHrujBcBr-XqDWa9PY8Q=" },
  { name: "Cairo", image: "https://media.istockphoto.com/id/1180786967/photo/panorama-of-cairo.jpg?s=1024x1024&w=is&k=20&c=SP2xGBoagUCIgekBQP8oO2RrzBA5WZYxAIIm38NXvg0=" },
  { name: "Venice", image: "https://media.istockphoto.com/id/1356797222/photo/venice-grand-canal-view-of-the-rialto-bridge-and-gondoliers-italy.jpg?s=1024x1024&w=is&k=20&c=gLVQvHeoJxnzYDSAJFkOfBPe7s_hfDXVeK5cXTxhbeI=" },
  { name: "Florence", image: "https://media.istockphoto.com/id/483876975/photo/panorama-of-florence-and-saint-mary.jpg?s=1024x1024&w=is&k=20&c=t4W_F9862QocNu2FzzcO-dLnHDG332bXO7h6Kk0r9Nc=" },
  { name: "Prague", image: "https://media.istockphoto.com/id/1179665824/photo/prague-czech-republic.jpg?s=1024x1024&w=is&k=20&c=5ifGAwAJYfYsN-Ci8ljiPIdgyPi_e8s9fmXzeiZKiHc=" },
  { name: "Vienna", image: "https://media.istockphoto.com/id/1432923297/photo/aerial-drone-photo-st-charles-church-karlskirche-at-sunset-vienna-austria.jpg?s=1024x1024&w=is&k=20&c=RCFU4KBqFeoiQR6IiFRlv6p-Y92hs3SQRIbrAx5gUoI=" }
];

// Generate 400 tasks dynamically
const tasks = Array.from({ length: 400 }, (_, i) => {
  const tie = Math.random() < 0.5;
  const destination = travelDestinations[i % travelDestinations.length]; 

  let value, profit;

  if (tie) {
    value = (Math.random() * (10000 - 100) + 100).toFixed(2); 
    profit = (value * 0.1).toFixed(2); 
  } else {
    value = (Math.random() * 50).toFixed(2); 
    profit = (value * 0.01).toFixed(2);
  }

  return {
    name: `${destination.name} Trip ${i + 1}`,
    value: parseFloat(value),
    profit: parseFloat(profit),
    tie,
    link: destination.image, 
  };
});

const seedDB = async () => {
  try {
    await Task.deleteMany();
    await Task.insertMany(tasks); 
    console.log("✅ 400 Tasks Seeded Successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error Seeding Tasks:", error);
    process.exit(1);
  }
};

seedDB();
