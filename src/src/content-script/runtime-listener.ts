export class RuntimeListener {
    constructor() {
        this.initializeMessagesListener();
    }
    
    public initializeMessagesListener() {
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            const command = message['command'];
            console.log('Received runtime command: ' + command);
            const response = { message: 'Aye!' };
            sendResponse(response);
        });
    }
}