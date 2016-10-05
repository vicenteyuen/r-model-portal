var COOKIE = 'lang';
var allowed = { sk: true, en: true, cz: true };

F.onLocate = function(req, res) {

    var language = req.query.lang;

    // Set the language according to the querystring and store to the cookie
    if (language) {
        if (!allowed[language])
            return 'en';
        res.cookie(COOKIE, language, '2 days');
        return language;
    }

    language = req.cookie(COOKIE);
    if (language) {
        if (allowed[language])
            return language;
        return 'zh_CN';
    }

    // Sets the language according to user-agent
    language = req.language;

    if (language.indexOf('zh_CN') > -1) {
        return 'zh_CN';
    }



    return 'zh_CN';
};