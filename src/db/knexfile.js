// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {

  development: {
    client: 'mysql2',
    connection: {
      // host: process.env.DB_HOST,
      // user: process.env.DB_USER,
      // password: process.env.DB_PASSWORD,
      // database: process.env.DB_NAME
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'm_marketing_saas'
    },
    migrations: {
      directory:  './migrations',
    },
    seeds: {
      directory:  './seeds',
    }
  },

  staging: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    migrations: {
      directory:  './migrations',
    },
    seeds: {
      directory:  './seeds',
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    migrations: {
      directory:  './migrations',
    },
    seeds: {
      directory:  './seeds',
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};
