...
this.conn = new Client();
...
this.conn.on('ready', () => {
    this.conn.sftp((err: any, sftp: any) => {
        if (err) throw err;
        callback(sftp);
    });
}).connect(config);
...