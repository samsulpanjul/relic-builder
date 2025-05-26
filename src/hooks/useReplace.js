import { useMemo } from "react";

/**
 * @param {string} rawDescription
 * @param {number[]} paramList
 * @returns {string}
 */
export function useReplace(rawDescription, paramList) {
  const relicDescription = useMemo(() => {
    if (!rawDescription || !Array.isArray(paramList)) return rawDescription;

    return rawDescription
      .replace(/#(\d+)\[i\]/g, (_, index) => {
        const paramValue = paramList[parseInt(index) - 1];
        if (typeof paramValue === "number") {
          if (!Number.isInteger(paramValue)) {
            return (paramValue * 100).toFixed(0);
          }
          return paramValue.toString();
        }
        return "";
      })
      .replace(/<\/?unbreak>/g, "");
  }, [rawDescription, paramList]);

  return relicDescription;
}
