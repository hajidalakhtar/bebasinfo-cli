#!/usr/bin/env node

/**
 * bebasinfo
 * berita indonesia
 *
 * @author Muhammad Hajid Al Akhtar <https://hajid.me>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const chalk = require('chalk');

const axios = require('axios')
const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);

	const res = await axios.get(`https://api.bebasinfo.my.id/get/news/${flags.category}`);
	res.data.data.forEach((item, index) => {
		console.log((index + 1) + " " +  item.title.replace(/- .*/g, chalk.red(item.title.match(/- .*/g))))
	});

	// }
})();
