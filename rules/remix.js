// const OFF = 0;
const WARN = 1;
// const ERROR = 2;

const defaultAdapterExports = {
  value: ["createRequestHandler"],
  type: ["GetLoadContextFunction", "RequestHandler"],
};

const defaultRuntimeExports = {
  value: [
    "createCookie",
    "createCookieSessionStorage",
    "createMemorySessionStorage",
    "createRequestHandler",
    "createSession",
    "createSessionStorage",
    "isCookie",
    "isSession",
    "json",
    "MaxPartSizeExceededError",
    "redirect",
    "unstable_composeUploadHandlers",
    "unstable_createMemoryUploadHandler",
    "unstable_parseMultipartFormData",
  ],
  type: [
    "ActionFunction",
    "AppData",
    "AppLoadContext",
    "Cookie",
    "CookieOptions",
    "CookieParseOptions",
    "CookieSerializeOptions",
    "CookieSignatureOptions",
    "CreateRequestHandlerFunction",
    "DataFunctionArgs",
    "EntryContext",
    "ErrorBoundaryComponent",
    "HandleDataRequestFunction",
    "HandleDocumentRequestFunction",
    "HeadersFunction",
    "HtmlLinkDescriptor",
    "HtmlMetaDescriptor",
    "LinkDescriptor",
    "LinksFunction",
    "LoaderFunction",
    "MemoryUploadHandlerFilterArgs",
    "MemoryUploadHandlerOptions",
    "MetaDescriptor",
    "MetaFunction",
    "PageLinkDescriptor",
    "RequestHandler",
    "RouteComponent",
    "RouteHandle",
    "ServerBuild",
    "ServerEntryModule",
    "Session",
    "SessionData",
    "SessionIdStorageStrategy",
    "SessionStorage",
    "UploadHandler",
    "UploadHandlerPart",
  ],
};

const architectSpecificExports = {
  value: ["createArcTableSessionStorage"],
  type: [],
};

const cloudflareSpecificExports = {
  value: ["createCloudflareKVSessionStorage"],
  type: [],
};

const cloudflarePagesSpecificExports = {
  value: ["createPagesFunctionHandler"],
  type: ["createPagesFunctionHandlerParams"],
};

const cloudflareWorkersSpecificExports = {
  value: ["createEventHandler", "handleAsset"],
  type: [],
};

const nodeSpecificExports = {
  value: [
    "AbortController",
    "createFileSessionStorage",
    "createReadableStreamFromReadable",
    "fetch",
    "FormData",
    "Headers",
    "installGlobals",
    "NodeOnDiskFile",
    "readableStreamToString",
    "Request",
    "Response",
    "unstable_createFileUploadHandler",
    "writeAsyncIterableToWritable",
    "writeReadableStreamToWritable",
  ],
  type: ["HeadersInit", "RequestInfo", "RequestInit", "ResponseInit"],
};

const reactSpecificExports = {
  value: [
    "Form",
    "Link",
    "Links",
    "LiveReload",
    "Meta",
    "NavLink",
    "Outlet",
    "PrefetchPageLinks",
    "RemixBrowser",
    "RemixServer",
    "Scripts",
    "ScrollRestoration",
    "useActionData",
    "useBeforeUnload",
    "useCatch",
    "useFetcher",
    "useFetchers",
    "useFormAction",
    "useHref",
    "useLoaderData",
    "useLocation",
    "useMatches",
    "useNavigate",
    "useNavigationType",
    "useOutlet",
    "useOutletContext",
    "useParams",
    "useResolvedPath",
    "useSearchParams",
    "useSubmit",
    "useTransition",
  ],
  type: [
    "FormEncType",
    "FormMethod",
    "FormProps",
    "HtmlLinkDescriptor",
    "HtmlMetaDescriptor",
    "LinkProps",
    "NavLinkProps",
    "RemixBrowserProps",
    "RemixServerProps",
    "ShouldReloadFunction",
    "SubmitFunction",
    "SubmitOptions",
    "ThrownResponse",
  ],
};

const getReplaceRemixImportsMessage = (packageName) =>
  `All \`remix\` exports are considered deprecated as of v1.3.3. Please use \`@remix-run/${packageName}\` instead. You can run \`remix migrate --migration replace-remix-imports\` to automatically migrate your code.`;

const replaceRemixImportsOptions = [
  {
    packageExports: defaultAdapterExports,
    packageName:
      "{architect|cloudflare-pages|cloudflare-workers|express|netlify|vercel}",
  },
  { packageExports: defaultRuntimeExports, packageName: "{cloudflare|node}" },
  { packageExports: architectSpecificExports, packageName: "architect" },
  { packageExports: cloudflareSpecificExports, packageName: "cloudflare" },
  {
    packageExports: cloudflarePagesSpecificExports,
    packageName: "cloudflare-pages",
  },
  {
    packageExports: cloudflareWorkersSpecificExports,
    packageName: "cloudflare-workers",
  },
  { packageExports: nodeSpecificExports, packageName: "node" },
  { packageExports: reactSpecificExports, packageName: "react" },
].map(({ packageExports, packageName }) => ({
  importNames: [...packageExports.value, ...packageExports.type],
  message: getReplaceRemixImportsMessage(packageName),
  name: "remix",
}));

export const remixRules = {
  "no-restricted-imports": [WARN, ...replaceRemixImportsOptions],
};
