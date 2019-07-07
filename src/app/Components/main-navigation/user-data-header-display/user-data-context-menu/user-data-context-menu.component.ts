import {Component, OnInit} from '@angular/core';
import {PopoverRef} from '../../../popover/popover-ref';
import {PubsubService} from '../../../../Services/PubSub/pubsub.service';
import {ConstantsPubSub} from '../../../../Constants/Messages/PubSub/pubsub-constants';


@Component({
    selector: 'solo-user-data-context-menu',
    templateUrl: './user-data-context-menu.component.html',
    styleUrls: ['./user-data-context-menu.component.less']
})
export class UserDataContextMenuComponent implements OnInit {
    username: string;
    fullName: string;
    organization: string;

    constructor(
        private popoverRef: PopoverRef,
        private pubSub: PubsubService,
    ) {
        // console.log('user detail', popoverRef.data);
        this.username = popoverRef.data.username;
        this.fullName = popoverRef.data.fullName;
        this.organization = popoverRef.data.organization;
    }

    ngOnInit() {
    }

    doLogout() {
        localStorage.clear();
        sessionStorage.clear();
        this.pubSub.Publish(ConstantsPubSub.PS_USER_LOGED_OUT, false);
        this.popoverRef.close({id: 'logout'});
    }
}
