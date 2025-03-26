# 設計例（参考）

## フォルダ構成例
```
/app
  /login
  /dashboard
/components
  /PostCard.tsx
  /PostForm.tsx
/lib
  /api.ts
/tests
  /PostCard.test.tsx
```

## コンポーネント設計例
- `PostCard`: 表示用 (Presentational)
- `PostForm`: 入力・状態管理 (Container)
