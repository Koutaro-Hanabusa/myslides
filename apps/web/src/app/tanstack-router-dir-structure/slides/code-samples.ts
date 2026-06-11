// スライド本文（slides.mdx）の CodeBlock に渡すコード片。
// MDX のテンプレートリテラルは各行先頭インデントが剥がれるため、
// インデントを保持したいコードはこの .ts ファイル側で定義する。

export const GOOD_TYPE_SAFE_ROUTING = `// パスも params も補完が効く・存在しないパスはコンパイルエラー
<Link to="/contracts/$contractId" params={{ contractId }} />

// 受け取る側も型付き（contractId: string）
const { contractId } = Route.useParams();`;

export const GOOD_TYPE_SAFE_SEARCH = `// URL の ?page=2&tab=archived を schema で定義
export const Route = createFileRoute("/contracts")({
  validateSearch: z.object({
    page: z.number().default(1),
    tab: z.enum(["active", "archived"]).default("active"),
  }),
});

// 読む側は完全に型付き → URL がそのまま型安全な state に
const { page, tab } = Route.useSearch();`;

export const GOOD_COLOCATION = `routes/contracts/
├── index.tsx        ← これだけが /contracts になる
└── -components/     ← \`-\` prefix で route tree から除外
    ├── Page.tsx
    └── fallbacks/   ← ルート専用の物を隣に置ける`;

export const DIR_STRUCTURE = `apps/<appname>/src/
├── features/
│   └── <domain>/
│       ├── api/        ← queryOptions / mutationOptions / API I/O
│       ├── hooks/      ← useSuspenseQuery / useMutation を呼ぶ hook
│       ├── components/ ← View 断片（Router 非依存）
│       └── types.ts    ← ドメイン型・route と共有する Enum
└── routes/
    └── <route>/
        ├── -components/
        │   ├── fallbacks/  ← 必要なルートのみ（pending / error の中身）
        │   └── Page.tsx    ← Page 本体（Router 依存を features に注入）
        └── index.tsx       ← validateSearch / loader / アダプタの宣言のみ`;

export const DIR_OPT_FEATURES = `src/
├── features/<domain>/   ← api / hooks / components / Page まで集約
└── routes/<route>/
    └── index.tsx         ← features を読むだけの薄い wrapper`;

export const DIR_OPT_ROUTES = `src/routes/<route>/
├── -api/         ← queryOptions / mutationOptions
├── -hooks/       ← hook
├── -components/  ← View 断片 / fallbacks / Page
└── index.tsx     ← loader / validateSearch`;

export const DIR_OPT_HYBRID = `src/
├── features/<domain>/   ← ロジックの実体（Router 非依存）
│   └── api / hooks / components
└── routes/<route>/      ← TanStack Router 依存部分だけ
    ├── -components/  ← fallbacks / Page
    └── index.tsx     ← loader / validateSearch`;

export const ROUTE_EXAMPLE = `// routes/contracts/index.tsx — 宣言だけ
export const Route = createFileRoute("/contracts")({
  loader: ({ context }) => context.queryClient.ensureQueryData(contractsQueryOptions),
  pendingComponent: ContractsPending, // -components/fallbacks/
  errorComponent: ContractsError, //    -components/fallbacks/
  component: Page,
});

// -components/Page.tsx — データは取得済みとして読む
function Page() {
  const { data } = useSuspenseQuery(contractsQueryOptions);
  return <ContractList items={data} />;
}`;

export const SERVER_FN_SRC = `src/
├── features/<domain>/   ← api / hooks / components
├── routes/<route>/      ← ルーティング宣言のみ
└── server/<entity>/     ← ★ serverFn を全部ここへ集約
    ├── <entity>.functions.ts      wrapper
    ├── <entity>-schema.ts         schema
    └── <verb>-<entity>.server.ts  logic`;

export const SERVER_FN_ROUTES = `src/
├── features/<domain>/
│   ├── <entity>-schema.ts         schema
│   └── <verb>-<entity>.server.ts  logic（実体）
└── routes/<route>/
    └── -api/
        └── <entity>.functions.ts  ★ wrapper だけ routes 側`;

export const SERVER_FN_FEATURES = `src/features/<domain>/
└── server/                        ← ★ wrapper も含めて全部 features
    ├── <entity>.functions.ts      wrapper
    ├── <entity>-schema.ts         schema
    └── <verb>-<entity>.server.ts  logic`;

export const DIR_STRUCTURE_WITH_SERVER = `apps/<appname>/src/
├── features/
│   └── <domain>/
│       ├── api/        ← queryOptions / mutationOptions / use-<verb>-<entity>
│       ├── server/     ← ★ Server Function
│       │   ├── <entity>.functions.ts  ← createServerFn のラッパー
│       │   ├── <entity>-schema.ts     ← 入出力の schema
│       │   └── <verb>-<entity>.server.ts ← ロジック
│       ├── hooks/      ← useSuspenseQuery / useMutation を呼ぶ hook
│       ├── components/ ← View 断片（Router 非依存）
│       └── types.ts    ← ドメイン型・route と共有する Enum
└── routes/
    └── <route>/
        ├── -components/ ← fallbacks / Page.tsx
        └── index.tsx    ← validateSearch / loader / アダプタの宣言のみ`;
