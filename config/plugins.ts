// 📁 cms/config/plugins.ts
export default ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 10000000, // 10MB
      },
      // ✅ 올바른 업로드 경로 지정 (dist/admin ❌)
      uploadPath: 'public/uploads',
    },
  },
});
