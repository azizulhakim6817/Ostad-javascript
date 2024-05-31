// what is Array,index? Write a simple Array
// What is Object?

//*********** Array-index [0,1,2,3,4,5,6]

/* let city = ["Dhatak", "Khulna", "Barishal", "Brahmanbaria"];
console.log(city[0]); */

/* let Download = [
  "Android",
  "iPhone",
  "ISO",
  "MAC",
  "Windows",
  "Linux",
  "Chrome OS",
];
console.log(Download); */

// What is Object?
/* let OneCategory = {
  id: 1,
  categoryName: "Laptop",
  createdAt: "2023-09-20",
  updateAt: "2024-09-30",
  categoryImage:
    "https://unsplash.com/photos/african-american-psychologist-sitting-on-armchair-and-giving-recommendation-to-patient-while-he-lying-on-sofa-during-consultation-at-office-70fE0xK1De0",
};
console.log(OneCategory["categoryName"]); */

//*********** */ What is JSON?  index [0,1,2,3,4,5,6]
/* let AllCategoryList = [
  {
    id: 1,
    categoryName: "Laptop",
    createdAt: "2023-09-20",
    updateAt: "2024-09-30",
    categoryImage:
      "https://unsplash.com/photos/african-american-psychologist-sitting-on-armchair-and-giving-recommendation-to-patient-while-he-lying-on-sofa-during-consultation-at-office-70fE0xK1De0",
  },

  {
    id: 2,
    categoryName: "Laptop",
    createdAt: "2023-09-20",
    updateAt: "2024-09-30",
    categoryImage:
      "https://unsplash.com/photos/african-american-psychologist-sitting-on-armchair-and-giving-recommendation-to-patient-while-he-lying-on-sofa-during-consultation-at-office-70fE0xK1De0",
  },

  {
    id: 3,
    categoryName: "Laptop",
    createdAt: "2023-09-20",
    updateAt: "2024-09-30",
    categoryImage:
      "https://unsplash.com/photos/african-american-psychologist-sitting-on-armchair-and-giving-recommendation-to-patient-while-he-lying-on-sofa-during-consultation-at-office-70fE0xK1De0",
  },
];

console.log(AllCategoryList[0]);

console.log(AllCategoryList[0]["categoryName"]); */

//**** Personal WhatsUp Group */

const AllCategory = [
  {
    id: 1,
    name: "Azizul hakim",
    age: 25,
    city: "Brahmanbaria",
    isStudent: "false",
  },
  {
    id: 2,
    name: "Somn",
    age: 25,
    city: "Khulna",
    isStudent: "true",
  },

  {
    id: 3,
    name: "Assad",
    age: 25,
    city: "Shylet",
    isStudent: "true",
  },

  {
    id: 3,
    name: "Jowel",
    age: 25,
    city: "Sudiarb",
    isStudent: "true",
  },
];

const i = 0;
for (i = 0; AllCategory.length > i; i++) {
  console.log(AllCategory[i]);
}

// null / undefined
/* let a =null
let b ;
console.log(a);
console.log(b); */
