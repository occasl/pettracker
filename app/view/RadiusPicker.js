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

Ext.define('MyApp.view.RadiusPicker', {
    extend: 'Ext.Picker',
    alias: 'widget.radiusPicker',
    config: {
        xtype: 'picker',
        docked: 'top',
        itemId: 'pickerRadius',
        hidden: true,
        slots: [
            {
                name: 'radius',
                data: [
                    {text: '1/2 mile', value: 0.5},
                    {text: '1 mile', value: 1},
                    {text: '2 mile', value: 2},
                    {text: '3 mile', value: 3},
                    {text: '5 mile', value: 5},
                    {text: '10 mile', value: 10},
                    {text: '20 mile', value: 20}
                ]
            }
        ],
        listeners: {
            change: 'onPickerChange'
        }
    },
    onPickerChange: function (picker, value, eOpts) {
        this.fireEvent('pickerChanged', this, value);
    }
});