jquery.selector-cache
=====================

Speed up jQuery code by caching selectors

Install
-------

Using bower:

```
bower install jquery.selector-cache
```

Usage
-----

Include jquery.selector-cache.js after jQuery, that's all.

Browser support
---------------

The optimization will work in [browsers supporting MutationObserver](http://caniuse.com/#feat=mutationobserver).
In any other browser it's going to be disabled.

Is it faster?
-------------

Yes.

![jquery.selector-cache benchmark](https://cloud.githubusercontent.com/assets/408194/8335607/123f7336-1a9f-11e5-958a-b4a37a32e659.png)

<small>
- Google Chrome 43.0.2357.124 (64-bit)
- jQuery 1.11.3
- 500000 iterations
</small>

Is it faster in real life?
--------------------------

No idea.

TODO
----

- Upload benchmarks
- Tests
- Smarter cache invalidation
