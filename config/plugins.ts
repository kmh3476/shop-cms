// 📁 cms/config/plugins.ts
export default ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 10 * 1024 * 1024, // ✅ 10MB
        // ✅ 로컬 서버 접근 설정 (Render 환경에서 파일 URL 생성용)
        localServer: {
          // Render 배포 도메인 기준으로 접근 가능하도록 설정
          maxage: 300000,
          url: env('PUBLIC_URL', 'https://cms-c5fx.onrender.com'),
        },
      },
      // ✅ 실제 업로드 파일 저장 경로 (dist/admin ❌)
      uploadPath: 'public/uploads',
    },
  },
});
