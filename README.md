This sample reproduces an Rspack bundling bug. The following works correctly (no bundling):

```
> node .
```

Working output:

```
Hello from Base!
Hello from Derived!
```

The following fails (bundling):

```
> npm install
> npx rspack
> node dist\bundle.js
```

Error output:

```
D:\Code\rspack-repro\dist\bundle.js:1
(()=>{"use strict";var e={},r={};function o(s){var t=r[s];if(void 0!==t)return t.exports;var l=r[s]={exports:{}};return e[s](l,l.exports,o),l.exports}o.rv=function(){return"1.0.0-beta.3"},o.ruid="bundler=rspack@1.0.0-beta.3";let s="methodName";class t{[s](){console.log("Hello from Base!")}}new class e extends t{[s](){super[file$foo](),console.log("Hello from Derived!")}}()[s]()})();

                                             ^

ReferenceError: file$foo is not defined
    at e.methodName (D:\Code\rspack-repro\dist\bundle.js:1:326)
    at D:\Code\rspack-repro\dist\bundle.js:1:379
    at Object.<anonymous> (D:\Code\rspack-repro\dist\bundle.js:1:383)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.12.0
```

Tested on Windows.
