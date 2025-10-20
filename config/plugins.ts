// 📁 cms/config/plugins.ts
import path from 'path';

export default ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 10 * 1024 * 1024, // ✅ 10MB
        localServer: {
          // ✅ Render 환경 절대 URL
          url: env('PUBLIC_URL', 'https://cms-c5fx.onrender.com'),
          maxage: 300000,
        },
      },
      // ✅ 절대경로로 지정 (Render 환경 필수)
      uploadPath: path.join(process.cwd(), 'public', 'uploads'),
    },
  },
});
