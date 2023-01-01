export const APP_NAME = 'Portfolio';

export const TITLE_NAME = 'NITIN.';

export const MIME_TYPE = {
    json: "application/json",
    jsonp: "application/jsonp",
    jsonXML: "application/json+xml",
    xml: "application/xml",
} as const;

export const ALLOWED_MIME = [
    MIME_TYPE.json,
    MIME_TYPE.jsonp,
    MIME_TYPE.jsonXML,
    MIME_TYPE.xml,
]

export type ALLOWED_MIME_TYPE = typeof ALLOWED_MIME