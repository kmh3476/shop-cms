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

  // ✅ 관리자 패널 정적 리소스 경로 (pathname 오류 방지용)
  serveAdminPanel: true,

  // ✅ 관리자 빌드 파일 경로 (Render 환경에서 필수)
  app: {
    buildPath: '/opt/render/project/src/build',
  },

  // ✅ HTTPS 프록시 환경 대응
  proxy: true,

  // ⚙️ Strapi 내부 기능 플래그
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
