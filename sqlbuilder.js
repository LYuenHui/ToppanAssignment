const sqlbuilder = (action, item) => {
  switch (action) {
    case "Register":
      console.log(`inside sqlbuilder ${item}`);
      break;
    case "notification":
      console.log(`inside sqlbuilder ${item}`);
      break;
  }
};

export default sqlbuilder;
