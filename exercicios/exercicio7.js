let read_only = false;

Ext.create("Ext.data.Store", {
    storeId: "cadastroStore",
    fields: ["nome", "email", "cidade"],
    data: [
        {
            nome: "Matheus",
            email: "qualquercoisa@gmail.com",
            cidade: "São Leopoldo",
        },
    ],
});

Ext.create("Ext.grid.Panel", {
    title: "Cliente",
    id: "myGridPanel",
    store: Ext.data.StoreManager.lookup("cadastroStore"),
    columns: [
        {
            header: "Nome",
            dataIndex: "nome",
            editor: {
                xtype: "textfield",
            },
        },
        {
            header: "Email",
            dataIndex: "email",
            flex: 1,
            editor: {
                xtype: "textfield",
                allowBlank: false,
            },
        },
        {
            header: "Cidade",
            dataIndex: "cidade",
            editor: {
                xtype: "textfield",
            },
        },
    ],
    selType: "rowmodel",
    plugins: [Ext.create("Ext.grid.plugin.RowEditing")],
    height: 150,
    width: 400,
    renderTo: Ext.getBody(),

    listeners: {
        render: function (grid) {
            /*grid.getEl().on(
                "validateedit",
                function () {
                    console.log("teste");
                },
                c
            );*/
            grid.on("edit", function (editor, e) {
                console.log(Ext.getCmp("myGridPanel"));
                Ext.getCmp("myGridPanel").setReadOnly(false);
            });
        },
    },
});
