module.exports = class Command {
	constructor(options = {}) {
		(options.name ?? options.command) && (this.name = this.command = (options.name ?? options.command));
		this.description = options.description ?? 'A custom command!';
		this.run = options.run ?? (() => {});
		options.match && (this.match = options.match);
	}
	setName(name) {
		this.name = this.command = name
		return this;
	}
	setRegExp(regex) {
		this.match = regex;
		return this;
	}
	setDescription(desc) {
		this.description = desc;
		return this;
	}
	setExec(run) {
		this.run = run;
		return this;
	}
}