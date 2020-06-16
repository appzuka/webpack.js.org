(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{396:function(n,s,a){"use strict";a.r(s),s.default='<p><a href="https://www.npmjs.com/package/imports-loader"><img src="https://img.shields.io/npm/v/imports-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org/"><img src="https://img.shields.io/node/v/imports-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/imports-loader"><img src="https://david-dm.org/webpack-contrib/imports-loader.svg" alt="deps"></a>\n<a href="https://github.com/webpack-contrib/imports-loader/actions"><img src="https://github.com/webpack-contrib/imports-loader/workflows/imports-loader/badge.svg" alt="tests"></a>\n<a href="https://codecov.io/gh/webpack-contrib/imports-loader"><img src="https://codecov.io/gh/webpack-contrib/imports-loader/branch/master/graph/badge.svg" alt="cover"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=imports-loader"><img src="https://packagephobia.now.sh/badge?p=imports-loader" alt="size"></a></p>\n<p>The imports loader allows you to use modules that depend on specific global variables.</p>\n<p>This is useful for third-party modules that rely on global variables like <code>$</code> or <code>this</code> being the <code>window</code> object. The imports loader can add the necessary <code>require(\'whatever\')</code> calls, so those modules work with webpack.</p>\n<h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>imports-loader</code>:</p>\n<pre><code class="hljs language-console">$ npm install imports-loader --save-dev\n</code></pre>\n<p>Given you have this file <code>example.js</code></p>\n<pre><code class="hljs language-js"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'img\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doSomeAwesomeJqueryPluginStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>then you can inject the <code>jquery</code> variable into the module by configuring the imports-loader like this:</p>\n<p><strong>index.js</strong></p>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'imports-loader?imports=default%20jquery%20$!./example.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Adds the following code to the beginning of example.js:</span>\n<span class="token comment">//</span>\n<span class="token comment">//  `import $ from "jquery";` to `example.js`</span></code></pre>\n<blockquote>\n<p>⚠ By default loader generate ES module named syntax.</p>\n</blockquote>\n<h3 id="inline">Inline<a href="#inline" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>The <code>imports</code> have follow syntax:</p>\n<pre><code>?imports=syntax%20moduleName%20name%20alias\n</code></pre>\n<p>The space (<code>%20</code>) is the separator between import segments.</p>\n<blockquote>\n<p><code>syntax</code> is required.</p>\n</blockquote>\n<p>A <code>syntax</code> can be omitted only if one segment is used. In this case, the <code>moduleName</code> and <code>name</code> will be equal to it.</p>\n<p>Description of string values can be found in the documentation below.</p>\n<h4 id="examples">Examples<a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p><strong>index.js</strong></p>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`imports-loader?imports[]=default%20jquery%20$&#x26;imports[]=angular!./example.js`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Adds the following code to the beginning of example.js:</span>\n<span class="token comment">//</span>\n<span class="token comment">//  import $ from "jquery";</span>\n<span class="token comment">//  import angular from "angular";</span></code></pre>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`imports-loader?type=commonjsimports[]=single%20jquery%20$&#x26;imports[]=angular!./example.js`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Adds the following code to the beginning of example.js:</span>\n<span class="token comment">//</span>\n<span class="token comment">//  var $ = require("jquery");</span>\n<span class="token comment">//  var angular = require("angular");</span></code></pre>\n<pre><code class="hljs language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`imports-loader?wrapper=window&#x26;imports[]=default%20jquery%20$&#x26;imports[]=angular!./example.js`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Adds the following code to the example.js:</span>\n<span class="token comment">//</span>\n<span class="token comment">//  import $ from "jquery";</span>\n<span class="token comment">//  import angular from "angular";</span>\n<span class="token comment">//</span>\n<span class="token comment">// (function () {</span>\n<span class="token comment">//   code from example.js</span>\n<span class="token comment">// }.call(window));</span></code></pre>\n<p>Description of string values can be found in the documentation below.</p>\n<h3 id="using-configuration">Using Configuration<a href="#using-configuration" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>The loader\'s signature:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'example.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'imports-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              type<span class="token punctuation">:</span> <span class="token string">\'commonjs\'</span><span class="token punctuation">,</span>\n              imports<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token string">\'single ./lib_1 $\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'single ./lib_2 lib_2_default\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'multiple ./lib_2 lib2_method_1\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'multiple ./lib_2 lib2_method_2 lib_2_method_2_short\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'single ./lib_3 lib_3_defaul\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'pure ./lib_4\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'single jquery $\'</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                  moduleName<span class="token punctuation">:</span> <span class="token string">\'angular\'</span><span class="token punctuation">,</span>\n                  name<span class="token punctuation">:</span> <span class="token string">\'angular\'</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token punctuation">]</span><span class="token punctuation">,</span>\n              wrapper<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                call<span class="token punctuation">:</span> <span class="token string">\'window\'</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              additionalCode<span class="token punctuation">:</span> <span class="token string">\'var someVariable = 1;\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>And run <code>webpack</code> via your preferred method.</p>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n<thead>\n<tr>\n<th align="center">Name</th>\n<th align="center">Type</th>\n<th align="center">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><a href="#type"><code>type</code></a></strong><p class="description mobile"><code>{String}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{String}</code></td>\n<td align="center"><code>module</code></td>\n<td align="left">Format of generated exports</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><a href="#imports"><code>imports</code></a></strong><p class="description mobile"><code>{String\\|Object\\|Array&#x3C;String\\|Object>}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{String\\|Object\\|Array&#x3C;String\\|Object>}</code></td>\n<td align="center"><code>undefined</code></td>\n<td align="left">List of imports</td>\n</tr>\n</tbody>\n</table>\n<h3 id="type">Type<a href="#type" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String</code>\nDefault: <code>module</code></p>\n<p>Format of generated exports.</p>\n<p>Possible values - <code>commonjs</code> (CommonJS module syntax) and <code>module</code> (ES module syntax).</p>\n<h4 id="commonjs"><code>commonjs</code><a href="#commonjs" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'example.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'imports-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          type<span class="token punctuation">:</span> <span class="token string">\'commonjs\'</span><span class="token punctuation">,</span>\n          imports<span class="token punctuation">:</span> <span class="token string">\'Foo\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// Adds the following code to the beginning of example.js:</span>\n<span class="token comment">//</span>\n<span class="token comment">// var Foo = require("Foo");</span></code></pre>\n<h4 id="module"><code>module</code><a href="#module" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'example.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'imports-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          type<span class="token punctuation">:</span> <span class="token string">\'module\'</span><span class="token punctuation">,</span>\n          imports<span class="token punctuation">:</span> <span class="token string">\'Foo\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// Adds the following code to the beginning of example.js:</span>\n<span class="token comment">//</span>\n<span class="token comment">// import Foo from "Foo";</span></code></pre>\n<h3 id="imports">Imports<a href="#imports" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String|Object|Array</code>\nDefault: <code>undefined</code></p>\n<p>List of imports.</p>\n<h4 id="string"><code>String</code><a href="#string" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Allows to use a string to describe an export.</p>\n<h5 id="syntax"><code>Syntax</code><a href="#syntax" aria-hidden="true"><span class="icon icon-link"></span></a></h5>\n<p>String values let you specify import syntax, moduleName, name, and alias.</p>\n<p>String syntax - <code>[[syntax] [moduleName] [name] [alias]]</code>, where:</p>\n<ul>\n<li>\n<p><code>[syntax]</code>:</p>\n<ul>\n<li>if type <code>module</code>- can be <code>default</code>, <code>named</code>, <code>namespace</code> or <code>side-effect</code></li>\n<li>if type <code>commonjs</code>- can be <code>single</code>, <code>multiple</code> or <code>pure</code></li>\n</ul>\n</li>\n<li>\n<p><code>[moduleName]</code> - name of an imported module (<strong>required</strong>)</p>\n</li>\n<li>\n<p><code>[name]</code> - name of an imported value (<strong>required</strong>)</p>\n</li>\n<li>\n<p><code>[alias]</code> - alias of an imported value (<strong>may be omitted</strong>)</p>\n</li>\n</ul>\n<p>Examples:</p>\n<p>If type <code>module</code>:</p>\n<ul>\n<li><code>[Foo]</code> - generates <code>import Foo from "Foo";</code>.</li>\n<li><code>[default Foo]</code> - generates <code>import Foo from "Foo";</code>.</li>\n<li><code>[default ./my-lib Foo]</code> - generates <code>import Foo from "./my-lib";</code>.</li>\n<li><code>[named Foo FooA]</code> - generates <code>import { FooA } from "Foo";</code>.</li>\n<li><code>[named Foo FooA Bar]</code> - generates <code>import { FooA as Bar } from "Foo";</code>.</li>\n<li><code>[[default Foo] [named Foo Bar BarA]]</code> - generates <code>import Foo, { Bar as BarA } from "Foo";</code>.</li>\n<li><code>[namespace Foo FooA]</code> - generates <code>import * as FooA from "Foo";</code>.</li>\n<li><code>[[default Foo] [namespace Foo FooA]]</code> - generates <code>import Foo, * as FooA from "Foo";</code>.</li>\n<li><code>[side-effect Foo]</code> - generates <code>import "Foo";</code>.</li>\n</ul>\n<p>If type <code>commonjs</code>:</p>\n<ul>\n<li><code>[Foo]</code> - generates <code>const Foo = require("Foo");</code>.</li>\n<li><code>[single Foo]</code> - generates <code>const Foo = require("Foo");</code>.</li>\n<li><code>[single ./my-lib Foo]</code> - generates <code>const Foo = require("./my-lib");</code>.</li>\n<li><code>[multiple Foo FooA Bar]</code> - generates <code>const { FooA:Bar } = require("Foo");</code>.</li>\n<li><code>[pure Foo]</code> - generates <code>require("Foo");</code>.</li>\n</ul>\n<blockquote>\n<p>⚠ Aliases can\'t be used together with <code>default</code> or <code>side-effect</code> syntax.</p>\n</blockquote>\n<h6 id="examples-1">Examples<a href="#examples-1" aria-hidden="true"><span class="icon icon-link"></span></a></h6>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'example.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'imports-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              type<span class="token punctuation">:</span> <span class="token string">\'commonjs\'</span><span class="token punctuation">,</span>\n              imports<span class="token punctuation">:</span> <span class="token string">\'default jquery $\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Adds the following code to the beginning of example.js:</span>\n<span class="token comment">//</span>\n<span class="token comment">// import $ from "jquery";</span></code></pre>\n<h4 id="object"><code>Object</code><a href="#object" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Allows to use an object to describe an import.</p>\n<p>Properties:</p>\n<ul>\n<li><code>[syntax]</code> - can be <code>default</code>, <code>named</code>, <code>namespace</code> or <code>side-effect</code></li>\n<li><code>moduleName</code> - name of an imported module (<strong>required</strong>)</li>\n<li><code>name</code> - name of an exported value (<strong>required</strong>)</li>\n<li><code>alias</code> - alias of an exported value (<strong>may be omitted</strong>)</li>\n</ul>\n<h5 id="examples-2">Examples<a href="#examples-2" aria-hidden="true"><span class="icon icon-link"></span></a></h5>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'example.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'imports-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              imports<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                syntax<span class="token punctuation">:</span> <span class="token string">\'named\'</span><span class="token punctuation">,</span>\n                moduleName<span class="token punctuation">:</span> <span class="token string">\'./lib_2\'</span><span class="token punctuation">,</span>\n                name<span class="token punctuation">:</span> <span class="token string">\'lib2_method_2\'</span><span class="token punctuation">,</span>\n                alias<span class="token punctuation">:</span> <span class="token string">\'lib_2_method_2_alias\'</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Adds the following code to the beginning of example.js:</span>\n<span class="token comment">//</span>\n<span class="token comment">// import { lib2_method_2 as lib_2_method_2_alias } from "./lib_2";</span></code></pre>\n<h4 id="array"><code>Array</code><a href="#array" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Allow to specify multiple imports. Each item can be a <a href="https://github.com/webpack-contrib/imports-loader#string"><code>string</code></a> or an <a href="https://github.com/webpack-contrib/imports-loader#object"><code>object</code></a>.</p>\n<h5 id="examples-3">Examples<a href="#examples-3" aria-hidden="true"><span class="icon icon-link"></span></a></h5>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'example.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'imports-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              imports<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                  moduleName<span class="token punctuation">:</span> <span class="token string">\'angular\'</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                  syntax<span class="token punctuation">:</span> <span class="token string">\'default\'</span><span class="token punctuation">,</span>\n                  moduleName<span class="token punctuation">:</span> <span class="token string">\'jquery\'</span><span class="token punctuation">,</span>\n                  name<span class="token punctuation">:</span> <span class="token string">\'$\'</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token string">\'default ./lib_2 lib_2_default\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'named ./lib_2 lib2_method_1\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'named ./lib_2 lib2_method_2 lib_2_method_2_alias\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'default ./lib_3 lib_3_default\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'namespace ./lib_3 lib_3_all\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'side-effect ./lib_4\'</span><span class="token punctuation">,</span>\n              <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Adds the following code to the beginning of example.js:</span>\n<span class="token comment">//</span>\n<span class="token comment">// import angular from "angular";</span>\n<span class="token comment">// import $ from "jquery";</span>\n<span class="token comment">// import lib_2_default, { lib2_method_1, lib2_method_2 as lib_2_method_2_alias } from "./lib_2";</span>\n<span class="token comment">// import lib_3_default, * as lib_3_all from "./lib_3";</span>\n<span class="token comment">// import "./lib_4";</span></code></pre>\n<h3 id="wrapper">wrapper<a href="#wrapper" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String|Array</code>\nDefault: <code>undefined</code></p>\n<p>Closes the module code in a function with a given <code>this</code> (<code>(function () { ... }).call(window);</code>).</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'example.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'imports-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              imports<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                moduleName<span class="token punctuation">:</span> <span class="token string">\'jquery\'</span><span class="token punctuation">,</span>\n                name<span class="token punctuation">:</span> <span class="token string">\'$\'</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              wrapper<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'window\'</span><span class="token punctuation">,</span> <span class="token string">\'document\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// Adds the following code to the example.js:</span>\n<span class="token comment">//</span>\n<span class="token comment">//  import $ from "jquery";</span>\n<span class="token comment">//</span>\n<span class="token comment">// (function () {</span>\n<span class="token comment">//   code from example.js</span>\n<span class="token comment">// }.call(window, document));</span></code></pre>\n<h3 id="additionalcode">additionalCode<a href="#additionalcode" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String</code>\nDefault: <code>undefined</code></p>\n<p>Adds custom code.</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'example.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'imports-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              imports<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                moduleName<span class="token punctuation">:</span> <span class="token string">\'jquery\'</span><span class="token punctuation">,</span>\n                name<span class="token punctuation">:</span> <span class="token string">\'$\'</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              additionalCode<span class="token punctuation">:</span> <span class="token string">\'var someVariable = 1;\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// Adds the following code to the beginning of example.js:</span>\n<span class="token comment">//</span>\n<span class="token comment">// import $ from \'jquery\';</span>\n<span class="token comment">// var someVariable = 1;</span></code></pre>\n<p>For further hints on compatibility issues, check out <a href="/guides/shimming/">Shimming Modules</a> of the official docs.</p>\n<h2 id="maintainers">Maintainers<a href="#maintainers" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n  <tbody>\n    <tr>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/166921?v=3&s=150">\n        </br>\n        <a href="https://github.com/bebraw">Juho Vepsäläinen</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars2.githubusercontent.com/u/8420490?v=3&s=150">\n        </br>\n        <a href="https://github.com/d3viant0ne">Joshua Wiens</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/533616?v=3&s=150">\n        </br>\n        <a href="https://github.com/SpaceK33z">Kees Kluskens</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/3408176?v=3&s=150">\n        </br>\n        <a href="https://github.com/TheLarkInn">Sean Larkin</a>\n      </td>\n    </tr>\n  <tbody>\n</table>\n'}}]);