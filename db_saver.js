const nedb = require("nedb");

const inputs = new nedb("./inputs.db");
inputs.loadDatabase();

const testdb = () => {
  inputs.find({}, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Db running, # of records: ${data.length}`);
  });
};

const insertData = (data) => {
  inputs.insert(data);
};

const getData = async (key) => {
  return inputs.find({ name: key }, (err, data) => {
    err && console.log(err);
  });
};

const getAllData = async (f) => {
  return inputs.find({}, f);
};

module.exports = { testdb, insertData, getAllData, deleteData: null };
