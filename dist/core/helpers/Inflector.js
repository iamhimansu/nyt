export default class Inflector {
    // ------------------------
    // Casing & String Helpers
    // ------------------------
    static camel2id(name, separator = "-") {
        return name
            .replace(/([a-z\d])([A-Z])/g, `$1${separator}$2`)
            .toLowerCase();
    }
    static id2camel(id, separator = "-") {
        return id
            .split(separator)
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join("");
    }
    static id2camelLower(id, separator = "-") {
        const camel = Inflector.id2camel(id, separator);
        return camel.charAt(0).toLowerCase() + camel.slice(1);
    }
    static camelize(words) {
        return words
            .toLowerCase()
            .split(/[\s_\-]+/)
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join("");
    }
    static underscore(name) {
        return name
            .replace(/([a-z\d])([A-Z])/g, "$1_$2")
            .toLowerCase();
    }
    static slug(words, separator = "-") {
        return Inflector.transliterate(words)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, separator)
            .replace(new RegExp(`${separator}+`, "g"), separator)
            .replace(new RegExp(`^${separator}|${separator}$`, "g"), "");
    }
    static humanize(str, separator = "_") {
        const s = str.replace(new RegExp(separator, "g"), " ");
        return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    }
    // ------------------------
    // Pluralization / Singularization
    // ------------------------
    static pluralRules = [
        [/(quiz)$/i, "$1zes"],
        [/^(ox)$/i, "$1en"],
        [/([m|l])ouse$/i, "$1ice"],
        [/(matr|vert|ind)(ix|ex)$/i, "$1ices"],
        [/(x|ch|ss|sh)$/i, "$1es"],
        [/([^aeiouy]|qu)y$/i, "$1ies"],
        [/(hive)$/i, "$1s"],
        [/(?:([^f])fe|([lr])f)$/i, "$1$2ves"],
        [/sis$/i, "ses"],
        [/([ti])um$/i, "$1a"],
        [/(buffal|tomat)o$/i, "$1oes"],
        [/(bu)s$/i, "$1ses"],
        [/(alias|status)$/i, "$1es"],
        [/(octop|vir)us$/i, "$1i"],
        [/(ax|test)is$/i, "$1es"],
        [/s$/i, "s"],
        [/$/, "s"]
    ];
    static singularRules = [
        [/(quiz)zes$/i, "$1"],
        [/(matr)ices$/i, "$1ix"],
        [/(vert|ind)ices$/i, "$1ex"],
        [/^(ox)en$/i, "$1"],
        [/(alias|status)es$/i, "$1"],
        [/(octop|vir)i$/i, "$1us"],
        [/(cris|ax|test)es$/i, "$1is"],
        [/(shoe)s$/i, "$1"],
        [/(o)es$/i, "$1"],
        [/(bus)es$/i, "$1"],
        [/([m|l])ice$/i, "$1ouse"],
        [/(x|ch|ss|sh)es$/i, "$1"],
        [/(m)ovies$/i, "$1ovie"],
        [/(s)eries$/i, "$1eries"],
        [/([^aeiouy]|qu)ies$/i, "$1y"],
        [/([lr])ves$/i, "$1f"],
        [/(tive)s$/i, "$1"],
        [/(hive)s$/i, "$1"],
        [/([^f])ves$/i, "$1fe"],
        [/(^analy)ses$/i, "$1sis"],
        [/s$/i, ""]
    ];
    static pluralize(word) {
        for (const [rule, replacement] of Inflector.pluralRules) {
            if (rule.test(word))
                return word.replace(rule, replacement);
        }
        return word;
    }
    static singularize(word) {
        for (const [rule, replacement] of Inflector.singularRules) {
            if (rule.test(word))
                return word.replace(rule, replacement);
        }
        return word;
    }
    // ------------------------
    // Transliteration
    // ------------------------
    /**
     * Convert accented / non-ASCII characters to ASCII
     */
    static transliterate(str) {
        if (!str)
            return "";
        return str
            .normalize("NFD") // separate accents
            .replace(/[\u0300-\u036f]/g, "") // remove diacritics
            .replace(/ß/g, "ss")
            .replace(/æ/g, "ae")
            .replace(/ø/g, "o")
            .replace(/œ/g, "oe")
            .replace(/[^\x00-\x7F]/g, ""); // remove remaining non-ASCII
    }
}
