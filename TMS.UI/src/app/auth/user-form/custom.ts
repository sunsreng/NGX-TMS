export class Custom {
    static unique(control) {
        const db = ['sreng@sreng.com'];

        return new Promise(resolve => {
            setTimeout(() => {
                if (db.indexOf(control.value) !== -1) {
                    resolve({ unique: false });
                }
                resolve(null);
            }, 4000);
        });
    }
}
