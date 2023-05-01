/**
 * Takes a string and returns a number if the string is a valid number, otherwise returns undefined.
 *
 * @param str - The string to parse
 * @returns - The number if the string is a valid number, otherwise undefined
 */
export const parseValidNumber = (
  str: string | undefined
): number | undefined => {
  if (str === undefined) {
    return undefined;
  }
  const num = Number(str);
  return isNaN(num) ? undefined : num;
};
