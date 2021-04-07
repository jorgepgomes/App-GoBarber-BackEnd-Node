export default {
  jwt: {
    secrect: process.env.APP_SECRECT || 'default',
    expiresIn: '30d',
  },
};
