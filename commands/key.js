const inquirer = require("inquirer");
const KeyManager = require("../lib/KeyManager");
const colors = require("colors");
const { isRequired } = require("../utils/validation");

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter your API Key ".green + "https://coinmarketcap.com",
        validate: isRequired,
      },
    ]);

    const key = keyManager.setKey(input.key);

    if (key) {
      console.log("API Key set".blue);
    }
  },
  show() {
    console.log("Hello from show");
  },
  remove() {
    console.log("Hello from remove");
  },
};

module.exports = key;
