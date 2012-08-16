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

Ext.define('MyApp.view.PetPanel', {
    extend:'Ext.Panel',
    alias: 'widget.petListPanel',
    config:{
        layout:{
            type:'fit'
        },
        items:[
            {
                xtype:'toolbar',
                docked:'top',
                title:'DogTag'
            },
            {
                xtype:'list',
                store:'PetTracker',
                id:'PetList',
                itemId:'petList',
                emptyText: "<div>No Dogs Found</div>",
//                onItemDisclosure: true,
                loadingText: "Loading Pets",
                itemTpl:[
                    '<div>{name} is a {description} and is located at {latitude} (latitude) and {longitude} (longitude)</div>'
                ]
            }
        ],
        listeners:[
            {
                fn:'onPetsListItemTap',
                event:'itemtap',
                delegate:'#PetList'
            }
        ]
    },
    onPetsListItemTap:function (dataview, index, target, record, e, options) {
        this.fireEvent('petSelectCommand', this, record);
    }
});