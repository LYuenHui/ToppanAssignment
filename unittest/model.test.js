import supertest from "supertest";
import dbconn from "../util/dbHelper.js";
import createServer from "../server";
const app = createServer();
// beforeEach(() => console.log(`Starting new test`));

// afterEach(async () => {
//   dbconn.end(function (err) {
//     if (err) {
//       return console.log(err.message);
//     }
//     // close all connections
//   });
// });
afterAll(async () => {
  dbconn.end(function (err) {
    if (err) {
      return console.log(err.message);
    }
    // close all connections
  });
});
describe("Test API", () => {
  //test user scenario 1
  describe("registerStudent", () => {
    describe("given existing records ", () => {
      it("should return 200", async () => {
        const sampleReq = {
          teacher: "marvin@gmail.com",
          students: ["studentjon@gmail.com", "studenthon@gmail.com", "george@gmail.com", "jeremy@gmail.com"],
        };
        await supertest(app).post("/api/register").send(sampleReq).expect(400);
      });
    });

    describe("given teacher do not exists", () => {
      it("should return 404", async () => {
        const sampleReq = {
          teacher: "maarvin@gmail.com",
          students: ["studentjon@gmail.com", "studenthon@gmail.com", "george@gmail.com", "jeremy@gmail.com"],
        };
        await supertest(app).post("/api/register").send(sampleReq).expect(400);
      });
    });
  });

  //test user scenario 2
  describe("getCommonStudent", () => {
    describe("given existing teacher", () => {
      it("should return 200", async () => {
        const email = "marvin@gmail.com";
        await supertest(app).get(`/api/commonstudents?teacher=${email}`).expect(200);
      });
    });

    describe("given teacher doenst exists", () => {
      it("should return 404", async () => {
        const email = "test@gmail.com";
        await supertest(app).get(`/api/commonstudents?teacher=${email}`).expect(404);
      });
    });
  });

  //test user scenario 3
  describe("suspend student", () => {
    describe("given existing student ", () => {
      it("should return 204", async () => {
        const sampleReq = {
          students: "aaron@gmail.com",
        };
        await supertest(app).post("/api/suspend").send(sampleReq).expect(204);
      });
    });

    describe("given student do not exist", () => {
      it("should return 404", async () => {
        const sampleReq = {
          students: "sirent@gmail.com",
        };
        await supertest(app).post("/api/suspend").send(sampleReq).expect(404);
      });
    });
  });

  //test user scenario 4
  describe("retrieve student that can receive notification", () => {
    describe("successful request", () => {
      it("should return 204", async () => {
        const sampleReq = {
          teacher: "marvin@gmail.com",
          notification: "Hello students! @studentagnes@gmail.com @studentmiche@gmail.com",
        };
        await supertest(app).post("/api/retrievefornotifications").send(sampleReq).expect(200);
      });
    });

    describe("given teacher do not exist", () => {
      it("should return 404", async () => {
        const sampleReq = {
          teacher: "teacherken@gmail.com",
          notification: "Hello students! @studentagnes@gmail.com @studentmiche@gmail.com",
        };
        await supertest(app).post("/api/retrievefornotifications").send(sampleReq).expect(404);
      });
    });
  });
});
