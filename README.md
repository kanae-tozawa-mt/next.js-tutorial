# Next.js Template with Docker, Biome, and ECS CI/CD

このテンプレートは、以下の技術を活用した**本番運用向けのNext.js開発環境**です：

- ✅ **Next.js (App Router)**
- ✅ **pnpm + corepack**
- ✅ **Tailwind CSS**
- ✅ **import alias: `@/*`**
- ✅ **Biome (Lint & Format)**
- ✅ **Docker 開発環境 & 本番用ビルド**
- ✅ **GitHub Actions によるCI/CD**（ECR/ECS）

---

## 🧱 ディレクトリ構成（抜粋）

```
root/
├── docker/                # Docker関連（dev, prod）
│   ├── Dockerfile.dev
│   ├── Dockerfile.prod
│   ├── docker-compose.dev.yml
│   └── docker-compose.prod.yml
├── ecs/                   # ECSタスク定義関連
│   ├── task-def.json
│   └── task-def.rendered.json（Actionsで生成）
├── .github/workflows/     # GitHub Actions定義
│   ├── deploy.yml
│   └── check.yml
├── src/
├── .biome.json
├── Makefile               # 開発用コマンド集
└── ...
```

---

## 🚀 使い方（開発）

### 必要環境
- Node.js 20+
- pnpm（corepackで自動有効化）
- Docker / Docker Compose

### コマンド一覧（Makefile）

```bash
make dev-up        # Docker 開発サーバー起動
make dev-down      # 停止
make lint          # Biome によるLint
make format        # Biome による整形
make build         # Next.js 本番ビルド
```

---

## 📦 Docker（開発 & 本番）

### 開発用
```bash
make dev-up
```
- `docker/Dockerfile.dev`
- `docker-compose.dev.yml`

### 本番用（ローカル確認）
```bash
make prod-up
```
- `docker/Dockerfile.prod`
- `docker-compose.prod.yml`

---

## 🧪 静的チェック（CI対応済み）

- Biome による `lint` & `format --check`
- `pnpm build` による本番ビルド確認
- すべて GitHub Actions 上で `push` & `pull_request` にて実行

```bash
make check
```

---

## 🔄 GitHub Actions（CI/CD）

### check.yml
- `pnpm biome check .`
- `pnpm biome format . --check`
- `pnpm build`

### deploy.yml
- `Dockerfile.prod` でイメージビルド
- Amazon ECR に push
- ECS タスク定義に差し替え & デプロイ

---

## 🔐 必要な GitHub Secrets

| Name | 例 | 用途 |
|------|----|------|
| `AWS_ACCESS_KEY_ID` | `AKIA...` | AWS認証 |
| `AWS_SECRET_ACCESS_KEY` | `abc...` | AWS認証 |
| `AWS_REGION` | `ap-northeast-1` | リージョン |
| `ECR_REPOSITORY` | `my-next-app` | リポジトリ名 |
| `ECR_IMAGE_URI` | `1234.dkr.ecr.ap-northeast-1.amazonaws.com/my-next-app:latest` | 本番用イメージURI |
| `ECS_CLUSTER` | `my-cluster` | ECSクラスター名 |
| `ECS_SERVICE` | `my-service` | ECSサービス名 |

---

## 📄 `ecs/task-def.json`

```json
{
  "family": "next-task",
  "containerDefinitions": [
    {
      "name": "app",
      "image": "REPLACE_ME_IMAGE_URI",
      "essential": true,
      "portMappings": [
        { "containerPort": 3000, "hostPort": 3000 }
      ]
    }
  ],
  "requiresCompatibilities": ["FARGATE"],
  "networkMode": "awsvpc",
  "cpu": "256",
  "memory": "512"
}
```

GitHub Actions 内で `REPLACE_ME_IMAGE_URI` が Secrets に置換されます。

---

## 🏁 スタート手順まとめ

```bash
# 1. 依存をインストール
corepack enable
pnpm install

# 2. 開発サーバー起動（Docker）
make dev-up

# 3. コードを変更 → Lint & Build チェック
make check

# 4. 本番ビルドの確認（任意）
make prod-up

# 5. main ブランチに push → ECR/ECS へ自動デプロイ
```

---

## 📣 対応予定・拡張案

- [ ] Blue/Green デプロイ対応
- [ ] staging/production 環境の分離
- [ ] Terraform によるECS/ECRのIaC化
- [ ] buildxによるECRキャッシュの最適化

---

お気軽に Issue や PR ください！
