var $ = require("jquery");

const getUrlParams = function(urlParams)
{
    if (urlParams)
    {
        var tokens;
        var params = {};
        var regex = /[?&]?([^=]+)=([^&]*)/g;

        urlParams = urlParams.split("+").join(" ");

        // eslint-disable-next-line
        while (tokens = regex.exec(urlParams))
        {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }

        return params;
    }

    return {};
};

const setUrlParams = function(urlParams)
{
    var pathName = window.location.pathname;
    var params = $.isEmptyObject(urlParams) ? "" : "?" + $.param(urlParams);
    var title = document.getElementsByTagName("title")[0].innerHTML;

    window.history.replaceState({}, title, pathName + params);
};

const setUrlParam = function(key, value)
{
    var urlParams = getUrlParams(document.location.search);

    if (value !== null)
    {
        urlParams[key] = value;
    }
    else
    {
        delete urlParams[key];
    }

    setUrlParams(urlParams);
};

export default {setUrlParam, setUrlParams, getUrlParams};
