export const MCP_APP_RESOURCE_EXAMPLE = `const resourceUri = "ui://example/results.html";

registerAppResource(
  server,
  "Results UI",
  resourceUri,
  { mimeType: RESOURCE_MIME_TYPE },
  async () => ({
    contents: [{
      uri: resourceUri,
      mimeType: RESOURCE_MIME_TYPE,
      text: appHtml,
    }],
  }),
);`;

export const MCP_APP_TOOL_EXAMPLE = `registerAppTool(server, "search", {
  inputSchema: { query: z.string() },
  outputSchema: { items: z.array(itemSchema) },
  _meta: { ui: { resourceUri } },
}, async ({ query }) => {
  const items = await search(query);

  return {
    content: [{ type: "text", text: "検索結果を返しました" }],
    structuredContent: { items },
  };
});`;
