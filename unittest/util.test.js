import { extractEmails } from "../util/helper.js";

describe("helper.js", function () {
  test("Extract email", function () {
    expect(extractEmails("Hello students! @studentagnes@gmail.com @studentmiche@gmail.com")).toStrictEqual(["studentagnes@gmail.com", "studentmiche@gmail.com"]);
  });
});
