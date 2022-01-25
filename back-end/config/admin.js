module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a69eae89b31b1006377dcb2e2ba4ec62'),
  },
});
