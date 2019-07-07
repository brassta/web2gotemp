import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector   : 'solo-header-icon-button',
    templateUrl: './header-icon-button.component.html',
    styleUrls  : ['./header-icon-button.component.less']
})
export class HeaderIconButtonComponent implements OnInit {

    @Input() iconName;
    @Input() iconGroup;

    constructor() {
    }

    ngOnInit() {
    }

    get ButtonClass() {
        return `${this.setIconGroup(this.iconGroup)} fa-${this.iconName}`;
    }

    setIconGroup(iconGroupName: string) {
        switch (iconGroupName) {
            case 'strong':
                return 'fas';
                break;
            case 'brand':
                return 'fab';
                break;
            default:
                return 'fas';
        }
    }

}
