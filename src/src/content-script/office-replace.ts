import * as moment from 'moment';

export class OfficeReplace {
    private showCustomText: boolean;
    private customText: string;
    private readonly office365BrandingSelector = 'span.o365cs-nav-brandingText';

    constructor(customTextActive: boolean = false, customText: string = '') {
        this.showCustomText = customTextActive;
        this.customText = customText;
    }

    private get shouldBeReplaced(): boolean {
        return moment(new Date()).isLeapYear();
    }

    public replace(): void {
        const items = document.querySelectorAll(this.office365BrandingSelector);
        const itemsArr: HTMLElement[] = Array.prototype.slice.call(items);
        for (const item of itemsArr) {
            if (item.innerText.indexOf('Office') > -1) {
                if (this.showCustomText) {
                    item.innerText = this.customText;
                } else if (this.shouldBeReplaced) {
                    item.innerText = 'Office 366';
                }
            }
        }
    }
}