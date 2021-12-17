Ext.create("Ext.form.Panel", {
    title: "Exercicio 2",
    width: 400,
    bodyPadding: 10,
    renderTo: Ext.getBody(),
    items: [
        {
            xtype: "textfield",
            name: "email",
            fieldLabel: "Email",
            vtype: "email",
        },
    ],
});
