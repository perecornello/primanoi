const tables = require("../../database/tables");

const browse = async (req, res, next) => {
    try {
        const land = await tables.land.readAll();

        res.json(land);
    } catch (error) {
        next(error);
    }
};

const read = async (req, res, next) => {
    try {
        const land = await tables.land.read(req.params.id);
        if (land == null) {
            res.sendStatus(404);
        } else {
            res.json(land);
        }
    } catch (error) {
        next(error);
    }
};

const add = async (req, res, next) => {
    const land = req.body;
    try {
        const insertId = await tables.land.create(land);
        res.status(201).json({ insertId });
    } catch (error) {
        next(error);
    }
};

const destroy = async (req, res, next) => {
    try {
        await tables.land.delete(req.params.id);

        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};

const edit = async (req, res, next) => {
    try {
        const land = { ...req.body, id: Number(req.params.id) };
        await tables.land.update(land);
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};

const LandActions = { browse, read, add, destroy, edit };

module.exports = LandActions;