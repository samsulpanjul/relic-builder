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

export const isPercent = (string: string) => {
  if (!string) return "";

  return !string.includes("Delta");
};

export const calculateSubAffixValue = (
  baseValue: number,
  stepValue: number,
  steps: number[] | number,
  count: number,
) => {
  let totalStep = 0;
  if (typeof steps !== "number") {
    totalStep = steps.reduce((prev, curr) => prev + curr, 0);
  } else {
    totalStep = steps;
  }

  const oneRoll = baseValue + totalStep * stepValue;
  return oneRoll * count;
};
