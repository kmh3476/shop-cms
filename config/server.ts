export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 10000),

  url: env('PUBLIC_URL', 'https://cms-c5fx.onrender.com'),

  proxy: true,

  serveAdminPanel: true,

  settings: {
    cors: {
      enabled: true,
      origin: ['*'],
    },
    cookies: {
      secure: false,
      sameSite: 'lax',
    },
  },

  app: {
    keys: env.array('APP_KEYS'),
  },
});
