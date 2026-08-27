export const MCP_APPS_EXAMPLE = `const resourceUri = "ui://search/results.html";

registerAppTool(server, "search", {
  inputSchema: { query: z.string() },
  _meta: { ui: { resourceUri } },
}, async ({ query }) => ({
  content: [{ type: "text", text: "検索結果を返しました" }],
  structuredContent: { items: await search(query) },
}));

registerAppResource(
  server,
  "Search results",
  resourceUri,
  { mimeType: RESOURCE_MIME_TYPE },
  async () => ({
    contents: [{ uri: resourceUri, mimeType: RESOURCE_MIME_TYPE, text: appHtml }],
  }),
);`;
