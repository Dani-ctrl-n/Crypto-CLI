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
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      console.log("Current API Key: ", key.yellow);
      return key;
    } catch (error) {
      console.log(error.message.red);
    }
  },
  remove() {
    console.log("Hello from remove");
  },
};

module.exports = key;
