export default ({ env }) => ({
  // 🔐 관리자 인증용 JWT
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },

  // 🔑 API 토큰 관련
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },

  // 🔁 데이터 전송용 토큰
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },

  // 🔒 암호화 키
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },

  // 🌐 배포 환경 URL
  url: env('PUBLIC_URL', 'https://cms-c5fx.onrender.com'),

  // ✅ 백엔드 요청 시 사용하는 실제 API 주소
  backend: env('STRAPI_ADMIN_BACKEND_URL', 'https://cms-c5fx.onrender.com'),

  // ✅ 관리자 패널 정적 리소스 제공 활성화 (pathname required 방지)
  serveAdminPanel: true,

  // ✅ 관리자 빌드 경로 (Strapi v5 기준 dist/admin 사용)
  app: {
    buildPath: env('STRAPI_ADMIN_BUILD_PATH', './dist/admin'),
  },

  // ✅ HTTPS 프록시 환경 대응 (Render 환경 필수)
  proxy: true,

  // ⚙️ Strapi 내부 기능 플래그
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
