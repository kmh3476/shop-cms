// 📁 cms/config/server.ts
export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 10000),

  // ✅ Render 배포 도메인 (admin 정적 빌드 경로 계산에 필요)
  url: env('PUBLIC_URL', 'https://cms-c5fx.onrender.com'),

  // ✅ HTTPS 프록시 환경 허용
  proxy: true,

  // ✅ 관리자 패널 정적 파일 제공 (pathname required 에러 방지)
  serveAdminPanel: true,

  // ✅ Strapi v5의 정적 파일 경로는 dist/admin
  dirs: {
    public: './dist/admin',
  },

  // ✅ CORS 및 쿠키 설정
  settings: {
    cors: {
      enabled: true,
      origin: ['*'], // 필요시 프론트엔드 도메인만 허용
    },
    cookies: {
      secure: false, // HTTPS 환경에서 secure 쿠키 문제 방지
      sameSite: 'lax', // 일부 브라우저 쿠키 차단 이슈 예방
    },
  },

  // ✅ 앱 키 설정
  app: {
    keys: env.array('APP_KEYS'),
  },
});
