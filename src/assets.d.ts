declare module "*.asset.json" {
  const asset: { url: string; content_type: string };
  export default asset;
}
