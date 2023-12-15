const addDays = require("date-fns/addDays");

const getDaysAfterXDays = (numOfDays) => {
  const result = addDays(new Date(2020, 8, 22), numOfDays);
  return `${result.getDate()}-${result.getMonth()}-${result.getFullYear()}`;
};

module.exports = getDaysAfterXDays;
