export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },

  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },

  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },

  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },

  // 🌐 배포 환경 URL
  url: env('PUBLIC_URL', 'https://cms-c5fx.onrender.com'),

  // ✅ 백엔드 요청 시 사용하는 실제 API 주소
  backend: env('STRAPI_ADMIN_BACKEND_URL', 'https://cms-c5fx.onrender.com'),

  // ✅ 관리자 패널 정적 리소스 경로 (Strapi 5에서는 dist/admin)
  app: {
    buildPath: 'dist/admin',
  },

  // ✅ HTTPS 프록시 환경 대응
  proxy: true,

  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
