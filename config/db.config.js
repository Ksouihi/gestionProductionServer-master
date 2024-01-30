module.exports = {
    HOST: "localhost",
    USER: "pguser",
    PASSWORD: "123456",
    DB: "Suivi_Cms",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};