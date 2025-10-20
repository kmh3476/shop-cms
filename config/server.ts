export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  app: {
    keys: env.array('APP_KEYS'),
  },

  // ✅ HTTPS 프록시 환경 (Render) 대응
  url: env('PUBLIC_URL', 'https://cms-c5fx.onrender.com'), // ⚠️ 본인 Render CMS 주소
  proxy: true, // ✅ secure cookie 오류 해결용
});
