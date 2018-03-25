import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  private _extensionEnabled: boolean;
  private _customTextEnabled: boolean;
  private _customText: string = '';

  public get extensionEnabled(): boolean {
    return this._extensionEnabled;
  }

  public set extensionEnabled(value: boolean) {
    this._extensionEnabled = true;
  }

  public get customText(): string {
    return this._customText;
  }

  public set customText(value: string) {
    this._customText = value;
  }

  public get customTextEnabled(): boolean {
    return this._customTextEnabled;
  }

  public set customTextEnabled(value: boolean) {
    this._customTextEnabled = value;
  }
  
  public ngOnInit(): void {
    this.loadConfig();
  }

  public loadConfig(): void {
    chrome.storage.sync.get(['office366'], result => {
      if (result.office366) {
        this._customTextEnabled = <boolean>result.office366.customTextActive;
        this._extensionEnabled = <boolean>result.office366.extensionEnabled;
        this._customText = result.office366.customText;
      }
    });
  }

  public saveConfig(): void {
    chrome.storage.sync.set({'office366': {
      customTextActive: this._customTextEnabled,
      customText: this._customText,
      extensionEnabled: this._extensionEnabled
    }}, () => {
    });
  }

}
