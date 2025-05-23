# Next.jsチュートリアル

## 🧱 ディレクトリ構成

```
root/
├── docker/                # Docker関連
│   ├── Dockerfile.dev
│   ├── docker-compose.dev.yml
├── src/
├── Makefile               # 開発用コマンド集
└── ...
```

---

## 🚀 使い方
### 前提
このリポジトリにはコミットなどせずに、各自forkしてから操作するようにしてください

### 必要環境
- VS Code
- Docker Desktop
- Dev Containers 拡張機能

### devContainer での開発方法

1. VS Code で本プロジェクトを開く
2. コマンドパレット（`Cmd/Ctrl + Shift + P`）を開く
3. `Dev Containers: Reopen in Container` を選択
4. コンテナのビルドが完了するまで待機
5. 自動的に必要な拡張機能がインストールされ、開発環境が整います

---

```bash
# 開発サーバーの起動
make dev

# リントの調整
make lint

# テストの実行
make test

# カバレッジの確認
make test-coverage
```
---

## 💡 開発のポイント

- コンポーネントは `src/components` に配置し、機能ごとにディレクトリを分割
- ページコンポーネントは `src/app` 配下に配置
- 外部サービスとの連携は `src/lib` に切り出す
- カスタムフックは `src/hooks` に配置
- ユーティリティ関数は `src/utils` に配置
- スタイリングは Tailwind CSS を使用
