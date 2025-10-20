// 📁 cms/config/plugins.ts
import path from 'path';

export default ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        // ✅ 파일 최대 크기 (10MB)
        sizeLimit: 10 * 1024 * 1024,

        // ✅ Render 환경 URL — PUBLIC_URL 값 기반
        localServer: {
          url: env('PUBLIC_URL', 'https://cms-c5fx.onrender.com'),
          maxage: 300000,
        },
      },

      // ✅ 절대경로 기반 업로드 폴더 지정 (dist/admin/uploads 방지)
      uploadPath: path.resolve(process.cwd(), 'public', 'uploads'),
    },
  },
});
