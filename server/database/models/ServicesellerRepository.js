const AbstractRepository = require("./AbstractRepository");

class ServicesellerRepository extends AbstractRepository {
    constructor() {
        super({ table: "serviceseller" });
    }

    async readAll() {
        const [rows] = await this.database.query(`select * from ${this.table}`);

        return rows;
    }

    async read(id) {
        const [rows] = await this.database.query(
            `select * from ${this.table} where id = ?`,
            [id]
        );

        return rows[0];
    }

    async create(serviceseller) {
        const [result] = await this.database.query(
            `insert into ${this.table} (name, password, mail, phone, validate) values (?, ?, ?, ?, ?)`,
            [
                serviceseller.name,
                serviceseller.password,
                serviceseller.mail,
                serviceseller.phone,
                serviceseller.validate,
            ]
        );
        return result.insertId;
    }

    async delete(id) {
        const [result] = await this.database.query(
            `delete from ${this.table} where id = ?`,
            [id]
        );
        return result.affectedRows;
    }

    async update(serviceseller) {
        const [result] = await this.database.query(
            `update ${this.table} set name = ?, password = ?, mail = ?, phone = ?, validate = ?`,
            [
                serviceseller.name,
                serviceseller.password,
                serviceseller.mail,
                serviceseller.phone,
                serviceseller.validate,
            ]
        );
        return result.affectedRows;
    }
}


module.exports = ServicesellerRepository;