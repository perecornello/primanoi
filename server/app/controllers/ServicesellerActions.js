const tables = require("../../database/tables");

const browse = async (req, res, next) => {
    try {
        const serviceseller = await tables.serviceseller.readAll();

        res.json(serviceseller);
    } catch (error) {
        next(error);
    }
};

const read = async (req, res, next) => {
    try {
        const serviceseller = await tables.serviceseller.read(req.params.id);
        if (serviceseller == null) {
            res.sendStatus(404);
        } else {
            res.json(serviceseller);
        }
    } catch (error) {
        next(error);
    }
};

const add = async (req, res, next) => {
    const serviceseller = req.body;
    try {
        const insertId = await tables.serviceseller.create(serviceseller);
        res.status(201).json({ insertId });
    } catch (error) {
        next(error);
    }
};

const destroy = async (req, res, next) => {
    try {
        await tables.serviceseller.delete(req.params.id);

        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};

const edit = async (req, res, next) => {
    try {
        const serviceseller = { ...req.body, id: Number(req.params.id) };
        await tables.serviceseller.update(serviceseller);
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};

const servicesellerActions = { browse, read, add, destroy, edit };

module.exports = servicesellerActions;