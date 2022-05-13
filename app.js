// const bcrypt = require("bcryptjs");

// const a = bcrypt.hash("1q2w3e4r", 12).then((res) => {
//   bcrypt.compare("1q2w3e4r", res, (err, ans) => {
//     console.log(ans);
//   });
// });

// console.log(a);

const validator = require("validator");

console.log(validator.isLength("1q2w3e4r", { min: 9, max: 10 }));
