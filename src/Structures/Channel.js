module.exports = class Channel {
	constructor(DiscordManager, channel) {
		this.DiscordManager = DiscordManager;
		this.createBotMessage = this.DiscordManager.createBotMessage
		this.MessageManager = this.DiscordManager.MessageManager;
		for (const key in channel)
			channel.hasOwnProperty(key) && (this[key] = channel[key]);
	}
	send(content, editor = message=>message) {
		let msg = this.createBotMessage(this.id, content);
		msg.author = {
			id: '1',
			username: 'Illya',
			discriminator: '0000',
			/*
				Make this not make http request
			*/
			avatar: '../533010254368210969/f1ba8fea4b92ffb97ed1c5e23373e701',
			bot: !0
		};
		msg = editor(msg);
		this.DiscordManager.NetManager.add(this.id, msg.id);
		this.MessageManager.receiveMessage(this.id, msg);
	}
}