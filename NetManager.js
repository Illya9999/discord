module.exports = class NetManager {
	constructor(DiscordManager, Endpoints){
		this.block = new Map();
		this.endpoint = Endpoints.MESSAGE_ACK;
		Endpoints.MESSAGE_ACK = this.check;
		this.DiscordManager = DiscordManager;
	}
	check(channelID, msgID){
		if(this.block.has(channelID+msgID)) return 'https://localhost:1234';
		return this.endpoint(channelID, msgID);
	}
	add(channelID, msgID){
		this.block.set(channelID+msgID, 1);
	}
}