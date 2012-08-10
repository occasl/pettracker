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