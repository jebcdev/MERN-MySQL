import { Sequelize } from "sequelize";

const dbConnectionDetails = {
    database: "merninformaticadp",
    user: "root",
    password: "",
    host: "localhost",
    port: 3306,
};

const db = new Sequelize(
    dbConnectionDetails.database,
    dbConnectionDetails.user,
    dbConnectionDetails.password,
    {
        host: dbConnectionDetails.host,
        port: dbConnectionDetails.port,
        dialect: "mysql",
    }
);

export default db;
