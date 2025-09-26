/**
 * Check if value is "empty"
 * - null, undefined
 * - empty string
 * - empty array
 * - empty object
 */
export function empty(value) {
    if (value === null || value === undefined)
        return true;
    if (typeof value === "string" && value.trim().length === 0)
        return true;
    if (Array.isArray(value) && value.length === 0)
        return true;
    if (typeof value === "object" && Object.keys(value).length === 0)
        return true;
    return false;
}
/**
 * Check if a key exists in an object safely (like PHP isset)
 */
export function isset(obj, key) {
    return obj != null && Object.prototype.hasOwnProperty.call(obj, key);
}
