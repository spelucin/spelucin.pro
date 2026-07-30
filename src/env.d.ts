// Support TypeScript for your env var containing the GTM ID

interface ImportMetaEnv {
  readonly PUBLIC_GTM_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}