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
    store: Ext.data.StoreManager.lookup("cadastroStore"),
    columns: [
        { header: "Nome", dataIndex: "nome", editor: "textfield" },
        {
            header: "Email",
            dataIndex: "email",
            flex: 1,
            editor: {
                xtype: "textfield",
                allowBlank: false,
            },
        },
        { header: "Cidade", dataIndex: "cidade", editor: "textfield" },
    ],
    selType: "rowmodel",
    plugins: [Ext.create("Ext.grid.plugin.RowEditing")],
    height: 150,
    width: 400,
    renderTo: Ext.getBody(),
});