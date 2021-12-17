Ext.define("Pessoa", {
    name: "Matheus",

    constructor: function (name) {
        if (name) {
            this.name = name;
        }
    },

    getName: function () {
        alert("Meu nome é " + this.name);
    },
});

Ext.define("Estudante", {
    schoolName: "",

    constructor: function (schoolName) {
        this.schoolName = schoolName || "Desconhecido";
    },

    mixins: {
        nome: "Pessoa",
    },
});

var studentObj = new Ext.create("Estudante", "XYZ");
studentObj.getName();
