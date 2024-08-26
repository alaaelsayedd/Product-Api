const express = require("express");
let productList = [
  {
    id: 1,
    title: "Canon EOS Rebel T100",
    description:
      "Canon EOS Rebel T100 Digital SLR Camera with 18-55mm Lens Kit, 18 Megapixel Sensor, Wi-Fi, DIGIC4+, SanDisk 32GB Memory Card and Live View Shooting",
    oldPrice: 700.0,
    price: 559.99,
    isNew: true,
    category: "Electronics",
    ratings: 4.5,
    image: "https://i.ibb.co/1r28gMk/1.webp",
    brand: "Canon",
  },
  {
    id: 2,
    title: "Apple iPhone 13 Pro",
    description:
      "Apple iPhone 13 Pro with A15 Bionic chip, 6.1-inch Super Retina XDR display, 5G capability, 256GB Storage, Triple-camera system, and iOS 15",
    oldPrice: 1200.0,
    price: 1099.99,
    isNew: true,
    category: "Electronics",
    ratings: 4.8,
    image: "https://i.ibb.co/n7P8h5h/2.webp",
    brand: "Apple",
  },
  {
    id: 3,
    title: "Samsung Galaxy S21 Ultra",
    description:
      "Samsung Galaxy S21 Ultra 5G with 6.8-inch Dynamic AMOLED 2X Display, Exynos 2100, 108MP Quad Camera, 12GB RAM, and 256GB Storage",
    oldPrice: 1300.0,
    price: 1199.99,
    isNew: false,
    category: "Electronics",
    ratings: 4.7,
    image: "https://i.ibb.co/WPmq2Qw/3.webp",
    brand: "Samsung",
  },
  {
    id: 4,
    title: "Sony WH-1000XM4 Wireless Headphones",
    description:
      "Sony WH-1000XM4 Wireless Noise-Cancelling Over-Ear Headphones with 30 Hours Battery Life, Touch Sensor Controls, and Built-in Mic for Phone Calls",
    oldPrice: 350.0,
    price: 299.99,
    isNew: false,
    category: "Electronics",
    ratings: 4.6,
    image: "https://i.ibb.co/L6T8zLp/4.webp",
    brand: "Sony",
  },
  {
    id: 5,
    title: "Dell XPS 13 Laptop",
    description:
      "Dell XPS 13 9310 Laptop with 11th Gen Intel Core i7-1165G7, 16GB RAM, 512GB SSD, 13.4-inch FHD+ Display, Windows 11, and Intel Iris Xe Graphics",
    oldPrice: 1500.0,
    price: 1399.99,
    isNew: true,
    category: "Computers",
    ratings: 4.7,
    image: "https://i.ibb.co/k5g9s0Q/5.webp",
    brand: "Dell",
  },
  {
    id: 6,
    title: "Bose QuietComfort 35 II",
    description:
      "Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling with Alexa Voice Control, 20 Hours Battery Life, and Dual Microphones",
    oldPrice: 299.0,
    price: 249.99,
    isNew: false,
    category: "Electronics",
    ratings: 4.5,
    image: "https://i.ibb.co/fY6K4PY/6.webp",
    brand: "Bose",
  },
  {
    id: 7,
    title: "Microsoft Surface Pro 7",
    description:
      "Microsoft Surface Pro 7 with 12.3-inch Touchscreen, Intel Core i5, 8GB RAM, 128GB SSD, Windows 10 Home, and Type Cover included",
    oldPrice: 900.0,
    price: 799.99,
    isNew: true,
    category: "Computers",
    ratings: 4.4,
    image: "https://i.ibb.co/J71jKwc/7.webp",
    brand: "Microsoft",
  },
  {
    id: 8,
    title: "Nintendo Switch",
    description:
      "Nintendo Switch with Neon Blue and Neon Red Joy‑Con, 6.2-inch Touchscreen, 32GB Storage, and Compatibility with all Nintendo Switch Games",
    oldPrice: 300.0,
    price: 279.99,
    isNew: false,
    category: "Gaming",
    ratings: 4.8,
    image: "https://i.ibb.co/CJTTqV0/8.webp",
    brand: "Nintendo",
  },
  {
    id: 9,
    title: "Fitbit Charge 5",
    description:
      "Fitbit Charge 5 Advanced Fitness & Health Tracker with Built-in GPS, Stress Management Tools, Sleep Tracking, and 7-Day Battery Life",
    oldPrice: 180.0,
    price: 149.99,
    isNew: true,
    category: "Wearables",
    ratings: 4.3,
    image: "https://i.ibb.co/xM3F3Z3/9.webp",
    brand: "Fitbit",
  },
  {
    id: 10,
    title: "HP Pavilion Gaming Laptop",
    description:
      "HP Pavilion 15.6-inch Gaming Laptop with AMD Ryzen 5, 8GB RAM, 512GB SSD, NVIDIA GTX 1650, and Windows 11 Home",
    oldPrice: 950.0,
    price: 849.99,
    isNew: true,
    category: "Computers",
    ratings: 4.5,
    image: "https://i.ibb.co/YWJp4m2/10.webp",
    brand: "HP",
  },
];

var server = express();
/**Create an Applictaion  */
server.listen(3004, () => {
  console.log("server connected");
});
/**Create Middleware */
server.use(express.urlencoded({ extended: true }));
/***************************************************** */
/**GET Method */
server.get("/product", (req, res) => {
  res.send(productList);
});
server.get("/product/:id", (req, res) => {
  const id = req.params.id;

  res.send(productList.filter((product) => product.id == id));
});
/***************************************************** */
/**POST Method */
server.post("/product", (req, res) => {
  let postProduct = req.body;
  let Id = productList[productList.length - 1].id + 1;
  let newProduct = {
    id: Id,
    title: postProduct.title,
    description: postProduct.description,
    oldPrice: +postProduct.oldPrice,
    price: +postProduct.price,
    isNew: Boolean(postProduct.isNew),
    category: postProduct.category,
    ratings: +postProduct.ratings,
    image: postProduct.image,
    brand: postProduct.brand,
  };
  productList.push(newProduct);

  res.json({ message: "sucees add New Product", productList });
});
/***************************************************** */
/**PUT Method */

server.put("/product/:id", (req, res) => {
  let productId = req.params.id;
  let updateProductData = req.body;
  let productIndex = productList.findIndex(
    (product) => product.id == productId
  );
  let newProductData = {
    id: productId,
    title: updateProductData.title,
    description: updateProductData.description,
    oldPrice: +updateProductData.oldPrice,
    price: +updateProductData.price,
    isNew: Boolean(updateProductData.isNew),
    category: updateProductData.category,
    ratings: +updateProductData.ratings,
    image: updateProductData.image,
    brand: updateProductData.brand,
  };
  productList[productIndex] = { ...newProductData };
  res.json({
    message: "udate Product sucessfully",
    updateproduct: productList[productIndex],
  });
});
/***************************************************** */
/**DELETE Method */
server.delete('/product/:id',(req,res)=>{
    let productId =req.params.id;
    let index= productList.findIndex(product=>product.id==productId);
    productList.splice(index,1);
    res.json({
        message: "udate Product sucessfully",
         productList
      });
})
