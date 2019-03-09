const config = {
    database: {
        host: process.env.DATABASE_HOST,
        name: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        pool: {
            min: parseInt(process.env.DATABASE_POOL_MIN),
            max: parseInt(process.env.DATABASE_POOL_MAX)
        }
    },
    webServer: {
        port: process.env.WEB_SERVER_PORT
    }
};

module.exports = config;