module.exports = {
  "development": {
    "username": process.env.PGUSER,
    "password": process.env.PGSECRET,
    "database": process.env.PGDB,
    "host": process.env.PGHOST,
    "dialect": "postgres"
  }
}
