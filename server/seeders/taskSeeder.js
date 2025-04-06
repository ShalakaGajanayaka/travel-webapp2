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
  { name: "Paris", image: "https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_1280.jpg" },
  { name: "New York", image: "https://cdn.pixabay.com/photo/2019/07/21/07/12/new-york-4352072_1280.jpg" },
  { name: "Tokyo", image: "https://cdn.pixabay.com/photo/2013/11/25/09/47/buildings-217878_1280.jpg" },
  { name: "London", image: "https://cdn.pixabay.com/photo/2017/05/18/21/54/london-bridge-2324875_1280.jpg" },
  { name: "Sydney", image: "https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244_1280.jpg" },
  { name: "Rome", image: "https://cdn.pixabay.com/photo/2020/05/17/12/56/rome-5181486_1280.jpg" },
  { name: "Berlin", image: "https://cdn.pixabay.com/photo/2019/11/30/16/13/berlin-4663539_1280.jpg" },
  { name: "Dubai", image: "https://cdn.pixabay.com/photo/2020/03/19/18/29/camel-4948299_1280.jpg" },
  { name: "Barcelona", image: "https://cdn.pixabay.com/photo/2013/04/22/14/20/spain-106463_1280.jpg" },
  { name: "Istanbul", image: "https://cdn.pixabay.com/photo/2015/08/31/07/30/istanbul-915076_1280.jpg" },
  { name: "Bangkok", image: "https://cdn.pixabay.com/photo/2020/02/20/13/25/city-4864747_1280.jpg" },
  { name: "Los Angeles", image: "https://cdn.pixabay.com/photo/2014/10/22/17/34/los-angeles-498285_1280.jpg" },
  { name: "Singapore", image: "https://cdn.pixabay.com/photo/2016/01/10/19/49/singapore-1132358_1280.jpg" },
  { name: "Amsterdam", image: "https://cdn.pixabay.com/photo/2021/11/08/11/19/buildings-6778915_1280.jpg" },
  { name: "Madrid", image: "https://cdn.pixabay.com/photo/2017/09/03/00/19/spain-2708993_1280.jpg" },
  { name: "Cape Town", image: "https://cdn.pixabay.com/photo/2017/04/28/09/02/south-africa-2267795_1280.jpg" },
  { name: "Hong Kong", image: "https://cdn.pixabay.com/photo/2019/07/29/10/35/hong-kong-4370342_1280.jpg" },
  { name: "Seoul", image: "https://cdn.pixabay.com/photo/2022/10/15/16/44/night-view-7523474_1280.jpg" },
  { name: "Moscow", image: "https://cdn.pixabay.com/photo/2018/12/26/05/13/moscow-3895333_1280.jpg" },
  { name: "Rio de Janeiro", image: "https://cdn.pixabay.com/photo/2021/06/22/15/20/rio-de-janeiro-6356462_1280.jpg" },
  { name: "San Francisco", image: "https://cdn.pixabay.com/photo/2019/12/05/05/50/san-francisco-4674351_1280.jpg" },
  { name: "Cairo", image: "https://cdn.pixabay.com/photo/2018/08/24/11/28/mosque-3627765_1280.jpg" },
  { name: "Venice", image: "https://cdn.pixabay.com/photo/2019/12/18/16/34/venice-4704342_1280.jpg" },
  { name: "Florence", image: "https://cdn.pixabay.com/photo/2019/06/06/13/36/italy-4256018_1280.jpg" },
  { name: "Prague", image: "https://cdn.pixabay.com/photo/2021/01/20/21/32/prague-5935651_1280.jpg" },
  { name: "Vienna", image: "https://cdn.pixabay.com/photo/2017/01/23/21/05/castle-2003867_1280.jpg" }
];

// Generate 400 tasks dynamically
// const tasks = Array.from({ length: 400 }, (_, i) => {
//   const tie = Math.random() < 0.5;
//   const destination = travelDestinations[i % travelDestinations.length]; 

//   let value, profit;

//   if (tie) {
//     value = (Math.random() * (10000 - 100) + 100).toFixed(2); 
//     profit = (value * 0.1).toFixed(2); 
//   } else {
//     value = (Math.random() * 50).toFixed(2); 
//     profit = (value * 0.01).toFixed(2);
//   }

//   return {
//     name: `${destination.name} Trip ${i + 1}`,
//     value: parseFloat(value),
//     profit: parseFloat(profit),
//     tie,
//     link: destination.image, 
//   };
// });

// const seedDB = async () => {
//   try {
//     await Task.deleteMany();
//     await Task.insertMany(tasks); 
//     console.log("✅ 400 Tasks Seeded Successfully!");
//     process.exit();
//   } catch (error) {
//     console.error("❌ Error Seeding Tasks:", error);
//     process.exit(1);
//   }
// };

// seedDB();

const updateTaskImages = async () => {
  try {
    // Get all existing tasks (400 of them)
    const existingTasks = await Task.find({});
    
    if (existingTasks.length === 0) {
      console.log("❌ No tasks found in database");
      process.exit(1);
    }

    console.log(`🔍 Found ${existingTasks.length} tasks to update`);

    // Update each task with new image based on its position in the original array
    const updatePromises = existingTasks.map(async (task, index) => {
      const destinationIndex = index % travelDestinations.length;
      const newImage = travelDestinations[destinationIndex].image;
      
      return Task.updateOne(
        { _id: task._id },
        { $set: { link: newImage } }
      );
    });

    await Promise.all(updatePromises);
    console.log("✅ All task images updated successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error updating task images:", error);
    process.exit(1);
  }
};

updateTaskImages();
