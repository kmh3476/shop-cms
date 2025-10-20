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

  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },

  // ✅ HTTPS 환경 (Render)에서 secure cookie 오류 방지
  url: env('PUBLIC_URL', 'https://cms-c5fx.onrender.com/admin'), // ← Render CMS 실제 주소로 바꾸기
  proxy: true, // ✅ 리버스 프록시 환경에서 secure 쿠키 처리 허용
  serveAdminPanel: true, // 관리자 패널 제공
});
