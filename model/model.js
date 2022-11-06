import dbconn from "../util/dbHelper.js";

export const validateTeacher = async (params) => {
  const data = await new Promise((resolve, reject) => {
    const sql = "select email from teacherdb where email = ?";
    dbconn.query(sql, params, (err, rows, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  if (data.length > 0) {
    return true;
  } else return false;
};

export const validateStudent = async (params) => {
  let joinedQuery = [];
  if (typeof params === "object") {
    params.forEach((element) => {
      joinedQuery.push("email = '" + element + "' ");
    });
  } else {
    joinedQuery.push("email = '" + params + "' ");
  }

  const data = await new Promise((resolve, reject) => {
    const sql = "select email from studentdb where " + joinedQuery.join(" OR ");
    dbconn.query(sql, params, (err, rows, fields) => {
      // dbconn.end();
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });

  return data.map((a) => a.email);
};

export const registerStudent = async (params) => {
  const data = await new Promise((resolve, reject) => {
    const sql = "Insert into teacher_studentdb values  ?";
    dbconn.query(sql, [params], (err, rows, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  return data;
};

export const getCommonStudent = async (params) => {
  const data = await new Promise((resolve, reject) => {
    const sql = "select studentemail from teacher_studentdb where teacheremail in  (?)";
    dbconn.query(sql, [params], (err, rows, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  return data.map((a) => a.studentemail);
};

export const getNotificationStudent = async (params) => {
  const data = await new Promise((resolve, reject) => {
    const sql = "select email from studentdb where email in (select studentemail from teacher_studentdb where teacheremail = ?) AND status ='A';";
    dbconn.query(sql, [params], (err, rows, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  return data.map((a) => a.email);
};

export const validateExistingRecord = async (params) => {
  const data = await new Promise((resolve, reject) => {
    const sql = "select * from teacher_studentdb where teacheremail =  ? AND studentemail = ?";
    dbconn.query(sql, params, (err, rows, fields) => {
      // dbconn.end();
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  if (data.length > 0) {
    return true;
  } else return false;
};

export const suspendStudent = async (params) => {
  const data = await new Promise((resolve, reject) => {
    const sql = "Update studentdb set Status = 'S' where email in (?)";
    dbconn.query(sql, [params], (err, rows, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });

  return data;
};
// class student {
//   async validateTeacher(params) {
//     const data = await new Promise((resolve, reject) => {
//       const sql = "select email from teacherdb where email = ?";
//       dbconn.query(sql, params, (err, rows, fields) => {
//         if (err) {
//           reject(err);
//         } else {
//           // console.log(result) => gives correct output
//           resolve(rows);
//         }
//       });
//     });
//     if (data.length > 0) {
//       return true;
//     } else return false;
//   }

//   async validateStudent(params) {
//     let joinedQuery = [];
//     params.forEach((element) => {
//       joinedQuery.push("email = '" + element + "' ");
//     });

//     const data = await new Promise((resolve, reject) => {
//       const sql = "select email from studentdb where " + joinedQuery.join(" OR ");

//       dbconn.query(sql, params, (err, rows, fields) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(rows);
//         }
//       });
//     });

//     return data.map((a) => a.email);
//   }

//   async registerStudent(params) {
//     const data = await new Promise((resolve, reject) => {
//       const sql = "Insert into teacher_studentdb values  ?";
//       dbconn.query(sql, [params], (err, rows, fields) => {
//         if (err) {
//           reject(err);
//         } else {
//           // console.log(result) => gives correct output
//           resolve(rows);
//         }
//       });
//     });
//     return data;
//   }

//   async getCommonStudent(params) {
//     const data = await new Promise((resolve, reject) => {
//       const sql = "select studentemail from teacher_studentdb where teacheremail in  (?)";
//       dbconn.query(sql, [params], (err, rows, fields) => {
//         if (err) {
//           reject(err);
//         } else {
//           // console.log(result) => gives correct output
//           resolve(rows);
//         }
//       });
//     });
//     return data.map((a) => a.studentemail);
//   }

//   async validateExistingRecord(params) {
//     const data = await new Promise((resolve, reject) => {
//       const sql = "select * from teacher_studentdb where teacheremail =  ? AND studentemail = ?";
//       dbconn.query(sql, params, (err, rows, fields) => {
//         if (err) {
//           reject(err);
//         } else {
//           // console.log(result) => gives correct output
//           resolve(rows);
//         }
//       });
//     });
//     if (data.length > 0) {
//       console.log(`i am true`);
//       return true;
//     } else return false;
//   }

//   async suspendStudent(params) {
//     console.log(`params in model ${params}`);
//     const data = await new Promise((resolve, reject) => {
//       const sql = "Update studentdb set Status = 'S' where email in (?)";
//       dbconn.query(sql, [params], (err, rows, fields) => {
//         if (err) {
//           reject(err);
//         } else {
//           // console.log(result) => gives correct output
//           resolve(rows);
//         }
//       });
//     });

//     return data;
//   }

//   //   async listStudentNotification(params) {
//   //     const data = await new Promise((resolve, reject) => {
//   //       const sql =
//   //         "select studentemail from teacher_studentdb where teacheremail in  (?)";
//   //       dbconn.query(sql, [params], (err, rows, fields) => {
//   //         if (err) {
//   //           reject(err);
//   //         } else {
//   //           // console.log(result) => gives correct output
//   //           resolve(rows);
//   //         }
//   //       });
//   //     });
//   //     return data.map((a) => a.studentemail);
//   //   }

//   // extractEmails(text) {
//   //   return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
//   // }
// }

// export default student;
