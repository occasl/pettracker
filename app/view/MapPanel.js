/*
 * Copyright (c) 2012., Qualcomm, Inc.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

Ext.define('MyApp.view.MapPanel', {
    extend: 'Ext.Panel',
    requires: 'Ext.Map',
    alias: 'widget.petMap',
    id: 'myMapPanel',
    config: {
        layout: 'fit',
//        scrollable: 'vertical',
//        styleHtmlContent: true,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                itemId: 'mapToolbar',
                title: 'DogTag',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        itemId: 'backButton',
                        text: 'Back'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'nearButton',
                        text: 'Near Me'
                    }
                ]
            }
        ],
        listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButtonTap"
            },
            {
                delegate: "#nearButton",
                event: "tap",
                fn: "onNearButtonTap"
            }
        ]
    },
    initialize: function() {
        this.callParent();

        var map = {
            xtype: 'map',
            id: 'petMap',
            itemId: 'petMap',
            styleHtmlContent: true,
            mapOptions: {
                zoom: 11,
                zoomControl: true
//                    center: new google.maps.LatLng(33.143, -117.221)
            },
            plugins: [
                new Ext.plugin.google.Tracker({
                    trackSuspended: false,
                    allowHighAccuracy: true,
                    marker: new google.maps.Marker({
                        title: 'My Current Location',
                        icon: 'resources/img/blue_MarkerA.png'
                    })
                })
               // ,new Ext.plugin.google.Traffic()  //Adds traffic
            ],
            listeners: [
                {
                    scope: this,
                    maprender: this.onMapRender
                }
            ]
        };
        this.add([map]);
    },
    onBackButtonTap: function () {
        this.fireEvent("backButton", this);
    },
    onMapRender: function (map, gmap, eOpts) {
        this.fireEvent("mapRender", map, gmap, eOpts);
    },
    onNearButtonTap: function () {
        this.fireEvent("nearButton", this);
    }

});