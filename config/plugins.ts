// 📁 cms/config/plugins.ts
import fs from 'fs';
import path from 'path';

export default ({ env }) => {
  // ✅ Render 환경에서도 확실히 존재하는 절대경로로 지정
  const uploadDir =
    env('UPLOADS_PATH') || path.resolve(process.cwd(), 'public', 'uploads');

  // ✅ 폴더 없으면 생성 (Render에서도 런타임 시 자동 생성됨)
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  return {
    upload: {
      config: {
        provider: 'local',
        providerOptions: {
          sizeLimit: 10000000, // 10MB
        },
        uploadPath: uploadDir,
      },
    },
  };
};
