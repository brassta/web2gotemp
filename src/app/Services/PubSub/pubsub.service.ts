// -----------------------------------------------------------------------
// <copyright file="pubsub.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

/**
 * PubSub pattern implementaition
 */
export class PubsubService {
    private topics = {};
    private hasOwnProperty = this.topics.hasOwnProperty;

    constructor() {

    }

    /**
     * Subscribe to service
     */
    public Subscribe = ((topic, listener): Subscription => {
        if (!this.hasOwnProperty.call(this.topics, topic)) {
            this.topics[topic] = [];
        }
        const index = this.topics[topic].push(listener) - 1;
        return {
            Remove: (() => {
                delete this.topics[topic][index];
            })
        };

    });

    /**
     * Publish message
     */
    public Publish = ((topic, info) => {
        if (!this.hasOwnProperty.call(this.topics, topic)) {
            return;
        }
        this.topics[topic].forEach((item) => {
            item(typeof (info) !== 'undefined' ? info : {});
        });
    });

    public Subscribed(topic) {
        return this.topics[topic].length;
    }

}

export interface Subscription {
    Remove: any;
}
