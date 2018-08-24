// https://github.com/sequelize/cli/blob/master/src/helpers/path-helper.js#L13
// (because sequelize-cli doesn't support typescript)
const date = new Date();
console.log(
  [
    date.getUTCFullYear(),
    format(date.getUTCMonth() + 1),
    format(date.getUTCDate()),
    format(date.getUTCHours()),
    format(date.getUTCMinutes()),
    format(date.getUTCSeconds())
  ].join("")
);
