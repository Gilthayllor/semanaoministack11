// Update with your config settings.

module.exports = {

  development: {
    client: 'mssql',
    connection: {
      server: "DESKTOP-4PU7USD",
      user: "sa",
      password: "Cnxsql2015",
      database: "Aulas",
      options:{
        port : 1433,
        enableArithAbort : true
      }
    },
    migrations: {
      directory: './src/database/migrations'
    },
  },

  staging: {
    client: 'mssql',
    connection: {
      database: 'aulas',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
