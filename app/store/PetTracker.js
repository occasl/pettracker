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

Ext.define('MyApp.store.PetTracker', {
    extend: 'Ext.data.Store',
    requires: [
        'MyApp.model.Pet'
    ],

    config: {
        autoLoad: true,
        model: 'MyApp.model.Pet',
        storeId: 'PetTracker',
        proxy: {
            type: 'jsonp',
            url: 'http://nodetest-loutilities.rhcloud.com/dogtag',
            reader: {
                type: 'json',
                idProperty: '_id',
                rootProperty: 'records',
                useSimpleAccessors: true
            }
        }
    }
});