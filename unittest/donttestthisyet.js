// import dbconn from "../util/dbHelper.js";
// jest.mock("mysql2/promise");

// jest.mock("mysql2/promise", () => ({
//   createConnection: jest.fn(() => ({
//     execute: jest.fn(),
//     end: jest.fn(),
//   })),
// }));
// describe("should have created a database with User table and 3 dummy user records", function () {
//   test("avc", function () {
//     const users = dbconn.query("SELECT * FROM studentdb", (error, results, fields) => {
//       if (error) {
//         throw error;
//       }
//       console.log(results);
//       expect(results).toHaveLength(3);
//       done();
//     });
//   });
// });

// // describe("helper.js", function () {
// //     test("Extract email", function () {
// //       expect(extractEmails("Hello students! @studentagnes@gmail.com @studentmiche@gmail.com")).toStrictEqual(["studentagnes@gmail.com", "studentmiche@gmail.com"]);
// //     });
// //   });
