import {Component, OnInit} from '@angular/core';
import {PubsubService} from '../../Services/PubSub/pubsub.service';
import {ConstantsPubSub} from '../../Constants/Messages/PubSub/pubsub-constants';
import {environment} from '../../../environments/environment.prod';


@Component({
    selector: 'solo-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

    receivedBusinessObjectSubscription: any;
    actualBusinessObjectName = '';
    userLoggedIn = true;


    constructor(
        private pubSub: PubsubService,
        private constantsPubSub: ConstantsPubSub
    ) {
        this.pubSub.Subscribe(ConstantsPubSub.PS_USER_LOGGED_EVENT, (data => {
            console.log(data);
        }));
    }

    ngOnInit() {
        this.subscribeToReceiveBusinessObject();
        if (localStorage.getItem('_spAuthData') !== null || sessionStorage.getItem('_spAuthData') !== null) {
            this.userLoggedIn = true;
        }
    }

    private subscribeToReceiveBusinessObject() {
        this.receivedBusinessObjectSubscription = this.pubSub.Subscribe(ConstantsPubSub.PS_RECEIVED_BUSINESS_OBJECTS_LIST, response => {
            console.log('header', response);
            this.actualBusinessObjectName = response.objectType;
        });
    }

    setMenuState() {

        this.pubSub.Publish(ConstantsPubSub.PS_MAIN_MENU_BUTTON_TRIGGERED, {});
    }

    openLogin() {
        window.location.href = environment.pathToLogin;
    }
}
