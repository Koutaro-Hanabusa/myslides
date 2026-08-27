export const MCP_APP_TOOL_EXAMPLE = `const resourceUri = "ui://get-time/mcp-app.html";

registerAppTool(
  server,
  "get-time",
  {
    title: "Get Time",
    inputSchema: {},
    _meta: { ui: { resourceUri } },
  },
  async () => {
    const time = new Date().toISOString();
    return { content: [{ type: "text", text: time }] };
  },
);`;

export const MCP_APP_RESOURCE_EXAMPLE = `registerAppResource(
  server,
  "Get Time UI",
  resourceUri,
  { mimeType: RESOURCE_MIME_TYPE },
  async () => {
    const html = await fs.readFile("dist/mcp-app.html", "utf-8");
    return {
      contents: [{
        uri: resourceUri,
        mimeType: RESOURCE_MIME_TYPE,
        text: html,
      }],
    };
  },
);`;
