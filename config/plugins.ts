// 📁 cms/config/plugins.ts
import path from 'path';

export default ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 10000000, // 10MB
      },
      // ✅ Render 환경에서도 절대경로로 지정
      uploadPath: path.join(__dirname, '..', '..', 'public', 'uploads'),
    },
  },
});
