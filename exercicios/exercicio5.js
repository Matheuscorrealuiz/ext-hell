var form = Ext.create("Ext.form.Panel", {
    title: "Cadastro cliente",
    labelWidth: 75,
    bodyStyle: "padding: 10px 10px 0",
    width: 1200,
    height: 200,
    renderTo: Ext.getBody(),
    layout: "column",
    items: [
        {
            xtype: "fieldset",
            columnWidth: 0.5,
            height: 120,
            title: "Informações",
            defaultType: "textfield",
            layout: "column",
            items: [
                {
                    fieldLabel: "Nome",
                    name: "nome",
                    padding: 5,
                },
                {
                    fieldLabel: "Sobrenome",
                    name: "sobrenome",
                    padding: 5,
                },
                {
                    fieldLabel: "Email",
                    name: "email",
                    padding: 5,
                },
                {
                    fieldLabel: "Senha",
                    name: "senha",
                    padding: 5,
                },
                {
                    fieldLabel: "CPF",
                    name: "cpf",
                    padding: 5,
                },
                {
                    fieldLabel: "RG",
                    name: "rg",
                    padding: 5,
                },
            ],
        },
        {
            xtype: "fieldset",
            columnWidth: 0.5,
            height: 120,
            title: "Informações Adicionais",
            defaultType: "textfield",
            layout: "anchor",
            items: [
                {
                    fieldLabel: "Cidade",
                    name: "cidade",
                    anchor: "75%",
                },
                {
                    xtype: "datefield",
                    fieldLabel: "Data de Nascimento",
                    name: "dataNascimento",
                    anchor: "75%",
                },
                {
                    fieldLabel: "Telefone",
                    name: "telefone",
                    anchor: "75%",
                },
            ],
        },
    ],
});

Ext.create("Ext.Button", {
    text: "Encontrar data",
    renderTo: Ext.getBody(),
    handler: function () {
        console.log(form.getForm().findField("dataNascimento").getValue());
    },
});
