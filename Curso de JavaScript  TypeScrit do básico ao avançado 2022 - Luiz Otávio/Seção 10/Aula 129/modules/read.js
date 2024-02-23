const fs = require("fs").promises;

module.exports = way => {
	return fs.readFile(way, "utf8");
};
