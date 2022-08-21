const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {

	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Untuk Melihat CLI version`
	},
	category: {
		type: `string`,
		alias: `c`,
		default: `general`,
		desc: `Untuk memilih category`
	}
};

const commands = {
	help: { desc: `Print help info` }
};

const helpText = meowHelp({
	name: `berita`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
