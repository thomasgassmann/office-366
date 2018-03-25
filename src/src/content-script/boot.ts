import { OfficeReplace } from './office-replace';

window.onload = function () {
    console.log('Office 366 extension started...')
    chrome.storage.sync.get(['office366'], result => {
        let config = result.office366;
        if (!config) {
            config = {
                customTextActive: false,
                customText: '',
                extensionEnabled: true
            };
        }

        console.log(config);

        if (config.extensionEnabled) {
            const replacer = new OfficeReplace(config.customTextActive, config.customText);
            let maxRetry = 15;
            const timer = setInterval(() => {
                replacer.replace();
                if (maxRetry-- <= 0) {
                    clearInterval(timer);
                }
            }, 1000);
        }
    });
};