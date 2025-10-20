// 📁 cms/config/server.ts
export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 10000),

  // ✅ Render 배포 도메인 (admin 정적 빌드 경로 계산에 필요)
  url: env('PUBLIC_URL', 'https://cms-c5fx.onrender.com'),

  // ✅ HTTPS 프록시 환경 허용
  proxy: true,

  // ✅ CORS 및 쿠키 설정 추가
  settings: {
    cors: {
      enabled: true,
      origin: ['*'], // 필요시 특정 도메인만 허용 ex: ['https://your-frontend.vercel.app']
    },
    cookies: {
      secure: false, // HTTPS 환경에서 secure 쿠키 문제 방지
    },
  },

  app: {
    keys: env.array('APP_KEYS'),
  },
});
