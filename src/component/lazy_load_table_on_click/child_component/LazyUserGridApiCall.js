const usersInBackend = [
  { name: "User 0", age: 28, email: "User0@example.com" },
  { name: "User 1", age: 34, email: "User1@example.com" },
  { name: "User 2", age: 22, email: "User2@example.com" },
  { name: "User 3", age: 29, email: "User3@example.com" },
  { name: "User 4", age: 31, email: "User4@example.com" },
  { name: "User 5", age: 27, email: "User5@example.com" },
  { name: "User 6", age: 26, email: "User6@example.com" },
  { name: "User 7", age: 33, email: "User7@example.com" },
  { name: "User 8", age: 30, email: "User8@example.com" },
  { name: "User 9", age: 28, email: "User9@example.com" },
  { name: "User 10", age: 34, email: "User10@example.com" },
  { name: "User 11", age: 22, email: "User11@example.com" },
  { name: "User 12", age: 29, email: "User12@example.com" },
  { name: "User 13", age: 31, email: "User13@example.com" },
  { name: "User 14", age: 27, email: "User14@example.com" },
  { name: "User 15", age: 26, email: "User15@example.com" },
  { name: "User 16", age: 33, email: "User16@example.com" },
  { name: "User 17", age: 30, email: "User17@example.com" },
  { name: "User 18", age: 28, email: "User18@example.com" },
  { name: "User 19", age: 34, email: "User19@example.com" },
  { name: "User 20", age: 22, email: "User20@example.com" },
  { name: "User 21", age: 29, email: "User21@example.com" },
  { name: "User 22", age: 31, email: "User22@example.com" },
  { name: "User 23", age: 27, email: "User23@example.com" },
  { name: "User 24", age: 26, email: "User24@example.com" },
  { name: "User 25", age: 33, email: "User25@example.com" },
  { name: "User 26", age: 30, email: "User26@example.com" },
];

export default function getNextUsers(pageNumber, pageSize) {
  return usersInBackend.slice(
    pageNumber * pageSize,
    (pageNumber + 1) * pageSize
  );
}
export function getMaxPage(pageSize) {
  return Math.ceil(usersInBackend.length / pageSize);
}
