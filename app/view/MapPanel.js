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
                title: 'Pettracker',
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
//            {
//                xtype: 'map',
//                itemId: 'petMap',
//                mapOptions: {
//                    zoom: 11,
//                    zoomControl: true,
//                        center: new google.maps.LatLng(32.843, -117.221)
//                }
////                plugins: [
////                    new Ext.plugin.google.Tracker({
////                        trackSuspended: false,
////                        allowHighAccuracy: true,
////                        marker: new google.maps.Marker({
////                            title: 'My Current Location',
////                            icon: 'resources/img/blue_markerA.png'
////                        })
////                    }),
////                    new Ext.plugin.google.Traffic()
////                ]
//            }
        ],
        listeners: [
//            {
//                delegate: "#petMap",
//                event: 'maprender',
//                fn: "onMapRender"
//            },
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
                }),
                new Ext.plugin.google.Traffic()
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