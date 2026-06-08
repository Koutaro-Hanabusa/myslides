// スライド本文（slides.mdx）の CodeBlock に渡すコード片。
// MDX のテンプレートリテラルは各行先頭インデントが剥がれるため、
// インデントを保持したいコードはこの .ts ファイル側で定義する。

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
