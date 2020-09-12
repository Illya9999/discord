import Command from '../Structures/Command';

const Say = new Command;
Say.setName('say')
	.setDescription('Sends a message')
	.setExec((msgData, channel, content) => {
		return msgData.content = content, msgData;
	});
export default Say;
