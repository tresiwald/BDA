const Client = require('ssh2').Client,
    config = {
        host: "ikc-data.enterpriselab.ch",
        port: 22,
        user: "ikc-data",
        keyPath: "./res/ssh/ikc-data",
        docDir: "/sftp/ikcdata/docs"
    };