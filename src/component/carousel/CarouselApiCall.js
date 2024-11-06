export default function getImagePaths() { // for dynamic 
  const images = [
    "img/User1.jpg",
    "img/User2.jpg",
    "img/User3.jpg",
    "img/User4.jpg",
    "img/User5.jpg",
    "img/User6.jpg",
    "img/User7.jpg",
    "img/User8.jpg",
    "img/User9.jpg",
  ];
  return images;
}

// Pros:
// Simplicity: The array is directly available for import and use.
// Readability: It's clear and straightforward.
// Cons:
// Static: The array is fixed and cannot be modified dynamically within the module.

// export default function getImagePaths() {
//     const images = [
//       "img/User1.jpg",
//       "img/User2.jpg",
//       "img/User3.jpg",
//       "img/User4.jpg",
//       "img/User5.jpg",
//       "img/User6.jpg",
//       "img/User7.jpg",
//       "img/User8.jpg",
//       "img/User9.jpg",
//     ];
//     return images;
//   }