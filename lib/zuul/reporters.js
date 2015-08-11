// Replacing all the reporters with empty constructors

function NoopCtor() {}

exports.Base = exports.base = NoopCtor;
exports.Dot = exports.dot = NoopCtor;
exports.Doc = exports.doc = NoopCtor;
exports.TAP = exports.tap = NoopCtor;
exports.JSON = exports.json = NoopCtor;
exports.HTML = exports.html = NoopCtor;
exports.List = exports.list = NoopCtor;
exports.Min = exports.min = NoopCtor;
exports.Spec = exports.spec = NoopCtor;
exports.Nyan = exports.nyan = NoopCtor;
exports.XUnit = exports.xunit = NoopCtor;
exports.Markdown = exports.markdown = NoopCtor;
exports.Progress = exports.progress = NoopCtor;
exports.Landing = exports.landing = NoopCtor;
exports.JSONCov = exports['json-cov'] = NoopCtor;
exports.HTMLCov = exports['html-cov'] = NoopCtor;
exports.JSONStream = exports['json-stream'] = NoopCtor;
