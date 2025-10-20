export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  url: env('PUBLIC_URL', 'https://cms-c5fx.onrender.com'),

  app: {
    keys: env.array('APP_KEYS'),
  },

  // ✅ HTTPS 프록시 환경 (Render)에서도 쿠키를 허용하도록 설정
  proxy: true,
  settings: {
    cookies: {
      secure: false, // ← secure 쿠키 비활성화 (HTTP에서도 전송 가능)
    },
  },
});
