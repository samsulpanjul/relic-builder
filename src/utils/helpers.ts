export const JSONParse = (data: unknown) => {
  if (!data) return null;

  return JSON.parse(
    JSON.stringify(data, (key, value) => {
      if (key === "client" || key === "_tasks" || key === "cachedAssetsManager")
        return undefined;
      if (typeof value === "bigint") return value.toString();
      return value;
    }),
  );
};
