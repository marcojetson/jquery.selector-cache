(function (context, jQuery) {
    var MutationObserver = context.MutationObserver || context.WebKitMutationObserver;
    if (!MutationObserver) {
        return;
    }

    var hash_count = 0;

    var hash = function () {
        var result = '';

        for (var i = 0; i < arguments.length; i++) {
            var argument = arguments[i],
                type = typeof argument;

            if (type === 'string' && argument.indexOf('<') !== 0) {
                result += '♥' + argument;
                break;
            }

            if (type === 'undefined') {
                result += '♣u';
                break;
            }

            if (argument === null) {
                result += '♣n';
                break;
            }

            if (type === 'object') {
                if (argument.selector) {
                    result += '♥' + argument.selector;
                    break;
                }

                if (!argument._id) {
                    argument._id = hash_count++;
                }

                result += '♣' + argument._id;
                break;
            }

            return false;
        }

        return result;
    };

    var cache = {};

    var observer = new MutationObserver(function () {
        cache = {};
    });

    observer.observe(document, {
        subtree: true,
        attributes: true,
        childList: true,
        characterData: true,
        attributeOldValue: true,
        characterDataOldValue: true
    });

    var baseJQuery = jQuery.noConflict(true);

    var jQueryCache = function(selector, context) {
        var key = hash(selector, context),
            result = false;

        if (key !== false) {
            result = cache[key] || false;
        }

        if (result === false) {
            result = new baseJQuery.fn.init(selector, context);
            if (key !== false) {
                cache[key] = result;
            }
        }

        return result;
    };

    jQueryCache.fn = jQueryCache.prototype = baseJQuery.fn;
    baseJQuery.extend(jQueryCache, baseJQuery);

    context.jQuery = context.$ = jQueryCache;
})(window, jQuery);
