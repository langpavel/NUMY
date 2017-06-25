import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import Head from 'next/head';

import stylesheet from '../styles/index.scss';

const messages = defineMessages({
  title: {
    id: 'title',
    defaultMessage: 'NUMY',
  },
});

export default injectIntl(({ intl, title, children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2d89ef" />
      <meta name="apple-mobile-web-app-title" content="NUMY" />
      <meta name="application-name" content="NUMY" />
      <meta name="theme-color" content="#ffffff" />
      <title>{title || intl.formatMessage(messages.title)}</title>
      <script dangerouslySetInnerHTML={{ __html: `
          var _rollbarConfig = {
              accessToken: "8b981efb385241afb84e03b5071190fd",
              captureUncaught: true,
              payload: { environment: "test" }
          };
          !function(r){function o(e){if(n[e])return n[e].exports;var t=n[e]={exports:{},id:e,loaded:!1};return r[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}var n={};return o.m=r,o.c=n,o.p="",o(0)}([function(r,o,n){"use strict";var e=n(1),t=n(4);_rollbarConfig=_rollbarConfig||{},_rollbarConfig.rollbarJsUrl=_rollbarConfig.rollbarJsUrl||"https://cdnjs.cloudflare.com/ajax/libs/rollbar.js/2.0.4/rollbar.min.js",_rollbarConfig.async=void 0===_rollbarConfig.async||_rollbarConfig.async;var a=e.setupShim(window,_rollbarConfig),l=t(_rollbarConfig);window.rollbar=e.Rollbar,a.loadFull(window,document,!_rollbarConfig.async,_rollbarConfig,l)},function(r,o,n){"use strict";function e(r){return function(){try{return r.apply(this,arguments)}catch(r){try{console.error("[Rollbar]: Internal error",r)}catch(r){}}}}function t(r,o){this.options=r,this._rollbarOldOnError=null;var n=s++;this.shimId=function(){return n},window&&window._rollbarShims&&(window._rollbarShims[n]={handler:o,messages:[]})}function a(r,o){var n=o.globalAlias||"Rollbar";if("object"==typeof r[n])return r[n];r._rollbarShims={},r._rollbarWrappedError=null;var t=new d(o);return e(function(){return o.captureUncaught&&(t._rollbarOldOnError=r.onerror,i.captureUncaughtExceptions(r,t,!0),i.wrapGlobals(r,t,!0)),o.captureUnhandledRejections&&i.captureUnhandledRejections(r,t,!0),r[n]=t,t})()}function l(r){return e(function(){var o=this,n=Array.prototype.slice.call(arguments,0),e={shim:o,method:r,args:n,ts:new Date};window._rollbarShims[this.shimId()].messages.push(e)})}var i=n(2),s=0,c=n(3),p=function(r,o){return new t(r,o)},d=c.bind(null,p);t.prototype.loadFull=function(r,o,n,t,a){var l=function(){var o;if(void 0===r._rollbarDidLoad){o=new Error("rollbar.js did not load");for(var n,e,t,l,i=0;n=r._rollbarShims[i++];)for(n=n.messages||[];e=n.shift();)for(t=e.args||[],i=0;i<t.length;++i)if(l=t[i],"function"==typeof l){l(o);break}}"function"==typeof a&&a(o)},i=!1,s=o.createElement("script"),c=o.getElementsByTagName("script")[0],p=c.parentNode;s.crossOrigin="",s.src=t.rollbarJsUrl,n||(s.async=!0),s.onload=s.onreadystatechange=e(function(){if(!(i||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState)){s.onload=s.onreadystatechange=null;try{p.removeChild(s)}catch(r){}i=!0,l()}}),p.insertBefore(s,c)},t.prototype.wrap=function(r,o){try{var n;if(n="function"==typeof o?o:function(){return o||{}},"function"!=typeof r)return r;if(r._isWrap)return r;if(!r._wrapped&&(r._wrapped=function(){try{return r.apply(this,arguments)}catch(e){var o=e;throw"string"==typeof o&&(o=new String(o)),o._rollbarContext=n()||{},o._rollbarContext._wrappedSource=r.toString(),window._rollbarWrappedError=o,o}},r._wrapped._isWrap=!0,r.hasOwnProperty))for(var e in r)r.hasOwnProperty(e)&&(r._wrapped[e]=r[e]);return r._wrapped}catch(o){return r}};for(var u="log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleUnhandledRejection".split(","),f=0;f<u.length;++f)t.prototype[u[f]]=l(u[f]);r.exports={setupShim:a,Rollbar:d}},function(r,o){"use strict";function n(r,o,n){if(r){var t;"function"==typeof o._rollbarOldOnError?t=o._rollbarOldOnError:r.onerror&&!r.onerror.belongsToShim&&(t=r.onerror,o._rollbarOldOnError=t);var a=function(){var n=Array.prototype.slice.call(arguments,0);e(r,o,t,n)};a.belongsToShim=n,r.onerror=a}}function e(r,o,n,e){r._rollbarWrappedError&&(e[4]||(e[4]=r._rollbarWrappedError),e[5]||(e[5]=r._rollbarWrappedError._rollbarContext),r._rollbarWrappedError=null),o.handleUncaughtException.apply(o,e),n&&n.apply(r,e)}function t(r,o,n){if(r){"function"==typeof r._rollbarURH&&r._rollbarURH.belongsToShim&&r.removeEventListener("unhandledrejection",r._rollbarURH);var e=function(r){var n=r.reason,e=r.promise,t=r.detail;!n&&t&&(n=t.reason,e=t.promise),o&&o.handleUnhandledRejection&&o.handleUnhandledRejection(n,e)};e.belongsToShim=n,r._rollbarURH=e,r.addEventListener("unhandledrejection",e)}}function a(r,o,n){if(r){var e,t,a="EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");for(e=0;e<a.length;++e)t=a[e],r[t]&&r[t].prototype&&l(o,r[t].prototype,n)}}function l(r,o,n){if(o.hasOwnProperty&&o.hasOwnProperty("addEventListener")){for(var e=o.addEventListener;e._rollbarOldAdd&&e.belongsToShim;)e=e._rollbarOldAdd;var t=function(o,n,t){e.call(this,o,r.wrap(n),t)};t._rollbarOldAdd=e,t.belongsToShim=n,o.addEventListener=t;for(var a=o.removeEventListener;a._rollbarOldRemove&&a.belongsToShim;)a=a._rollbarOldRemove;var l=function(r,o,n){a.call(this,r,o&&o._wrapped||o,n)};l._rollbarOldRemove=a,l.belongsToShim=n,o.removeEventListener=l}}r.exports={captureUncaughtExceptions:n,captureUnhandledRejections:t,wrapGlobals:a}},function(r,o){"use strict";function n(r,o){this.impl=r(o,this),this.options=o,e(n.prototype)}function e(r){for(var o=function(r){return function(){var o=Array.prototype.slice.call(arguments,0);if(this.impl[r])return this.impl[r].apply(this.impl,o)}},n="log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleUnhandledRejection,_createItem,wrap,loadFull,shimId".split(","),e=0;e<n.length;e++)r[n[e]]=o(n[e])}n.prototype._swapAndProcessMessages=function(r,o){this.impl=r(this.options);for(var n,e,t;n=o.shift();)e=n.method,t=n.args,this[e]&&"function"==typeof this[e]&&this[e].apply(this,t);return this},r.exports=n},function(r,o){"use strict";r.exports=function(r){return function(o){if(!o&&!window._rollbarInitialized){r=r||{};for(var n,e,t=r.globalAlias||"Rollbar",a=window.rollbar,l=function(r){return new a(r)},i=0;n=window._rollbarShims[i++];)e||(e=n.handler),n.handler._swapAndProcessMessages(l,n.messages);window[t]=e,window._rollbarInitialized=!0}}}}]);
          Rollbar.info('App load: ' + location.href);
          ` }}
      />
      <style
        dangerouslySetInnerHTML={{ __html: stylesheet }} // eslint-disable-line react/no-danger
      />
    </Head>
    <div id="loading" className="loading">
      <svg version="1" xmlns="http://www.w3.org/2000/svg" width="346.667" height="346.667" viewBox="0 0 260.000000 260.000000">
        <path d="M125 54.5c0 46.7-.2 54.5-1.4 54.5-.8 0-16.5-14-34.8-31.1L55.5 46.8l-.3 29.1L55 105H31V45.8l-2.4 2.9C20 59 11 76 6.2 91 1.8 104.9.5 113.7.5 130c0 16.2 1.3 25.1 5.7 39 2.8 9 10.2 25.5 11.7 26.5.4.2 3.6-13.4 7-30.3 3.5-16.9 6.7-32.8 7.3-35.5.5-2.6 1.5-4.7 2.2-4.7.7 0 11.1 16.9 23.1 37.5C69.6 183.1 79.7 200 80 200c.3 0 9.7-16.9 21-37.5 13.9-25.5 21-37.4 22-37.2 1.1.2 4.3 13.9 13.1 57.2 6.4 31.4 11.9 58.5 12.3 60.3l.8 3.2h-13.6c-13.2 0-13.6-.1-14.1-2.3-.3-1.2-2.5-12.7-4.9-25.5-2.4-12.8-4.6-23.5-4.8-23.7-.4-.5-30 52.8-30.6 55-.4 1.6 18.4 7.3 30.3 9 11.5 1.7 23.9 1.9 34 .5 6.3-.9 7.4-1.4 10.4-4.7 4.6-5.1 13.1-18.2 13.1-20.1 0-.8-3.9-19.7-8.6-41.9-4.7-22.2-8.4-40.6-8.2-40.8.4-.4 29 3.4 29.6 3.9.2.2 1.8 9.5 3.7 20.6 1.9 11.1 3.5 20.4 3.7 20.5.2.2 5-8.2 10.8-18.6 10.4-19 10.4-19 13.5-18.5 1.6.3 7.2 1.1 12.3 1.7 6 .8 9.2 1.6 8.9 2.3-.3.6-11 18.9-23.9 40.6-12.9 21.7-24.1 40.6-24.8 41.9-1.2 2.3-1 2.3 4.6-.9 25.2-14.1 45.4-35.4 56.8-59.4 4.2-8.9 9-23.8 10.7-33.6 1.7-9.7 1.7-34.3 0-44-1.7-9.8-6.5-24.7-10.7-33.6-12.2-25.8-36-49.6-61.8-61.8C170.1 5.3 147.5 0 131.6 0H125v54.5zm38.2 16.2c.3 29.5.3 29.9 2.8 34.8 2.8 5.7 8.9 9.5 15 9.5 5.9 0 12.2-3.8 14.8-9 2.1-4.3 2.2-5.3 2.2-34.7V41h20v30.7c0 33.4-.4 36.8-5.6 46.3-5.8 10.6-15.4 16-30 16.8-17.6.9-29.7-5.5-36.4-19.1-4.2-8.6-5-16.1-5-47.5V41h21.8l.4 29.7z"/><path d="M88.2 7c-8.4 2.9-21.3 8.8-24.5 11.2-1.7 1.3-.7 2.5 13 15.3 8.1 7.6 16.9 15.9 19.6 18.4l4.7 4.5V4l-2.2.1c-1.3 0-6 1.3-10.6 2.9zM41.5 207.7l-2.8 14.7 5.4 5c7.8 7.1 29.7 21.2 31.8 20.4.7-.2-29.2-52.5-31-54.2-.3-.4-1.8 6-3.4 14.1z"/>
      </svg>
      <p>Loading …</p>
    </div>
    <div className="numy">
      <noscript>
        JavaScript is required!
      </noscript>
      {children}
    </div>
  </div>
));
