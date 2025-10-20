// 📁 cms/config/plugins.ts
import path from 'path';

export default ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        // ✅ 업로드 용량 제한 (10MB)
        sizeLimit: 10000000,

        // ✅ 실제 업로드 파일 저장 경로
        localServer: {
          path: path.join(__dirname, '..', '..', 'public', 'uploads'),
        },
      },
      // ✅ 혹시 Strapi가 fallback 할 때 사용할 경로
      uploadPath: path.join(__dirname, '..', '..', 'public', 'uploads'),
    },
  },
});
