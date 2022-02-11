module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eaba5d70fcb95d9f5397dea9fc0cf44a'),
  },
});
