import path from 'path';

export default ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        // ✅ Render 환경에서도 절대경로 지정
        localServer: {
          maxage: 300000,
          path: path.join(__dirname, '..', '..', 'public', 'uploads'),
        },
      },
      // ✅ public/uploads 폴더 자동 생성 경로
      sizeLimit: 10000000, // 10MB
    },
  },
});
