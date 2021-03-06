Ext.create("Ext.form.Panel", {
    renderTo: Ext.getBody(),
    frame: true,
    title: "Data",
    bodyPadding: "15 5 0",
    width: 350,
    fieldDefaults: {
        labelWidth: 125,
        msgTarget: "side",
        autoFitErrors: false,
    },
    defaults: {
        width: 300,
    },
    defaultType: "datefield",
    items: [
        {
            fieldLabel: "Data Inicial",
            name: "startdt",
            itemId: "startdt",
            vtype: "daterange",
            endDateField: "enddt",
        },
        {
            fieldLabel: "Data Final",
            name: "enddt",
            itemId: "enddt",
            vtype: "daterange",
            startDateField: "startdt",
        },
    ],
});

Ext.onReady(function () {
    Ext.apply(Ext.form.field.VTypes, {
        daterange: function (val, field) {
            var date = field.parseDate(val);

            if (!date) {
                return false;
            }
            if (
                field.startDateField &&
                (!this.dateRangeMax ||
                    date.getTime() != this.dateRangeMax.getTime())
            ) {
                var start = field.up("form").down("#" + field.startDateField);
                start.setMaxValue(date);
                start.validate();
                this.dateRangeMax = date;
            } else if (
                field.endDateField &&
                (!this.dateRangeMin ||
                    date.getTime() != this.dateRangeMin.getTime())
            ) {
                var end = field.up("form").down("#" + field.endDateField);
                end.setMinValue(date);
                end.validate();
                this.dateRangeMin = date;
            }
            return true;
        },

        daterangeText: "Data inicial deve ser menor que a data final",
    });
});
