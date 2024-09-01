const AbstractRepository = require("./AbstractRepository");

class LandRepository extends AbstractRepository {
    constructor() {
        super({ table: "land" });
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

    async create(land) {
        const [result] = await this.database.query(
            `insert into ${this.table} (price, spot_number, benefits, land_confirmation) values (?, ?, ?, ?)`,
            [
                land.price,
                land.spot_number,
                land.benefits,
                land.land_confirmation,
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

    async update(land) {
        const [result] = await this.database.query(
            `update ${this.table} set price = ?, spot_number = ?, benefits = ?, land_confirmation = ?`,
            [
                land.price,
                land.spot_number,
                land.benefits,
                land.land_confirmation,
            ]
        );
        return result.affectedRows;
    }
}


module.exports = LandRepository;