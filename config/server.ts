export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  app: {
    keys: env.array('APP_KEYS'),
  },

  // ✅ Render(HTTPS) 환경에서 필요한 설정 추가
  url: env('PUBLIC_URL', 'https://cms-c5fx.onrender.com'), // ← 실제 Render CMS URL로 바꾸세요
  proxy: true, // ✅ HTTPS 리버스 프록시 환경에서 secure cookie 오류 방지
});
