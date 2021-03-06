Ext.define("CadastroModel", {
    extend: "Ext.data.Model",
    fields: [
        { name: "nome", type: "string" },
        { name: "sobrenome", type: "string" },
        { name: "email", type: "string" },
        { name: "senha", type: "string" },
        { name: "cpf", type: "string" },
        { name: "rg", type: "string" },
        { name: "cidade", type: "string" },
        { name: "dataNascimento", type: "string" },
        { name: "telefone", type: "string" },
    ],
});

var dados = Ext.create("Ext.data.Store", {
    storeId: "CadastroStore",
    model: "CadastroModel",
    data: [
        {
            nome: "Matheus",
            sobrenome: "Correa",
            email: "qualquercoisa@gmail.com",
            senha: "123456",
            cpf: "11111111111",
            rg: "2222222222",
            cidade: "São Leopoldo",
            dataNascimento: "04/12/2001",
            telefone: "982060078",
        } /*
        {
            nome: "Alan",
            sobrenome: "sla",
            email: "sla@gmail.com",
            senha: "123456",
            cpf: "3333333333",
            rg: "4444444444",
            cidade: "São Leopoldo",
            dataNascimento: "12/11/2001",
            telefone: "911111111",
        },*/,
    ],
    proxy: {
        type: "memory",
    },
});

var form = Ext.create("Ext.form.Panel", {
    id: "cadastroForm",
    title: "Cadastro cliente",
    store: "CadastroStore",
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
                    xtype: "textfield",
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
const getFormInfo = () => {
    // retorna um array com os campos do formulario
    return form.items.items[0].items.items;
};

const getFormExtra = () => {
    // [0].setRawValue("opaepa")
    return form.items.items[1].items.items;
};

// Ext.getStore pega os dados da store pelo ID.
const getStore = () => {
    // retorna um objeto, com os dados acessíveis via .raw.cidade (ex)
    return Ext.getStore("CadastroStore").getAt(0);
};

// Joina os dois formulários
const joinForm = () => {
    return getFormInfo().concat(getFormExtra());
};

// Converte um obj para um array (a store do ext vem em forma de objeto)
const convertObjToArray = () => {
    return Object.values(getStore().raw);
};

// Preenche o formulário usando os valores obtidos da store
const fillFormData = () => {
    Ext.Array.each(joinForm(), (name, index) => {
        name.setRawValue(convertObjToArray()[index]);
    });
};

fillFormData();
