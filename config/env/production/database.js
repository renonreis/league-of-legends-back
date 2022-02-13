const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});

//postgres://wpyxcrrronhswh:1029f14b4bb98b052e80891c2f0e561de198d703e3f3d3a5e0ca0ca7065d7e1d@ec2-34-233-157-189.compute-1.amazonaws.com:5432/damjint9rlr6s5