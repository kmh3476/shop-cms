export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 10000),

  // ✅ Render 도메인을 명시적으로 지정
  url: env('PUBLIC_URL', 'https://cms-c5fx.onrender.com'),

  app: {
    keys: env.array('APP_KEYS'),
  },

  // ✅ HTTPS 프록시 환경 허용
  proxy: true,
  settings: {
    cookies: {
      secure: false, // secure 쿠키 비활성화
    },
  },
});
