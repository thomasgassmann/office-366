export class ConnectListener {
    constructor() {
        this.initializeMessagesListener();
    }

    public initializeMessagesListener() {
        chrome.runtime.onConnect.addListener(this.onConnectHandler.bind(this));
    }

    public onConnectHandler(port: chrome.runtime.Port) {
        port.onMessage.addListener(this.onConnectMessageHandler.bind(this));
    }

    public onConnectMessageHandler(msg, port) {
        console.log('Received connection message: ' + msg);
        const response = 'Greetings!';
        port.postMessage(response);
    }
}