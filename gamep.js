"use strict";
const t42ContentProtector = function(e = { disableSelectAll: !0, disableCopy: !0, disableCut: !0, disablePaste: !0, disableSave: !0, disableViewSource: !0, disablePrintPage: !0, disableDeveloperTool: !0, disableReaderMode: !0, disableRightClick: !0, disableTextSelection: !0, disableImageDragging: !0 }) {
    function t(e) { window.addEventListener("keydown", (function(t) { t.ctrlKey && t.which === e && t.preventDefault(), t.metaKey && t.which === e && t.preventDefault() })), document.keypress = function(t) { return (!t.ctrlKey || t.which !== e) && (!t.metaKey || t.which !== e) && void 0 } } return { init: function(e) { e.disableSelectAll && t(65), e.disableCopy && t(67), e.disableCut && t(88), e.disablePaste && t(86), e.disableSave && t(83), e.disableViewSource && t(85), e.disablePrintPage && t(80), e.disableDeveloperTool && function() { if (hotkeys("command+option+j,command+option+i,command+shift+c,command+option+c,command+option+k,command+option+z,command+option+e,f12,ctrl+shift+i,ctrl+shift+j,ctrl+shift+c,ctrl+shift+k,ctrl+shift+e,shift+f7,shift+f5,shift+f9,shift+f12", (function(e, t) { e.preventDefault() })), ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document) return;
                (function() { if ("function" == typeof window.CustomEvent) return !1;

                    function e(e, t) { t = t || { bubbles: !1, cancelable: !1, detail: void 0 }; var n = document.createEvent("CustomEvent"); return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n } e.prototype = window.Event.prototype, window.CustomEvent = e })(),
                function() { var e = { open: !1, orientation: null },
                        t = function(e, t) { window.dispatchEvent(new CustomEvent("devtoolschange", { detail: { open: e, orientation: t } })) };
                    setInterval((function() { var n = window.outerWidth - window.innerWidth > 160,
                            o = window.outerHeight - window.innerHeight > 160,
                            i = n ? "vertical" : "horizontal";
                        o && n || !(window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized || n || o) ? (e.open && t(!1, null), e.open = !1, e.orientation = null) : (e.open && e.orientation === i || t(!0, i), e.open = !0, e.orientation = i) }), 500), "undefined" != typeof module && module.exports ? module.exports = e : window.devtools = e }(); let e = new Image,
                    t = navigator.userAgent.toLowerCase(),
                    n = t.indexOf("msie") > -1 || t.indexOf("edge/") > -1;!n && "Netscape" === navigator.appName && t.indexOf("trident/") > -1 && (n = !0); var o = !n && t.indexOf("chrome") > -1,
                    i = !o && !n && t.indexOf("safari") > -1; let r = "No source code for you! Close the console to refresh the page :)",
                    l = "background: black; color: transparent; font-size: 0px;",
                    c = "__utmq",
                    a = function(e) { if (null == e || "object" != typeof e) return e; let t = e.constructor(); for (let n in e) e.hasOwnProperty(n) && (t["log" === n ? "go" : n] = e[n]); return t }(console);

                function d() { u() }

                function u() { "1" !== y(c) && (p(c, 1, 3650), function() { try { return window.self !== window.top } catch (e) { return !0 } }() || location.reload()) }

                function s(e) { n ? e ? a.go(r, e) : a.go(r) : e ? a.go("%c" + r, l, e) : a.go("%c" + r, l) } if ("1" !== y(c)) { let e = 0,
                        t = 160,
                        n = window.outerWidth - window.innerWidth > t,
                        o = window.outerHeight - window.innerHeight > t;
                    o && n || !(window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized || n || o) ? (u(), e = 1) : !devtools.open || devtools.orientation }

                function f() { null != document.body && document.body.parentNode.removeChild(document.body), null != document.head && document.head.parentNode.removeChild(document.head) }

                function p(e, t, n) { n > 0 && function(e) { p(e, "", -1) }(e); let o = ""; if (n) { let e = new Date;
                        e.setTime(e.getTime() + 24 * n * 60 * 60 * 1e3), o = "; expires=" + e.toGMTString() } document.cookie = e + "=" + t + o + "; path=/" }

                function y(e) { let t = e + "=",
                        n = document.cookie.split(";"); for (let e = 0; e < n.length; e++) { let o = n[e]; for (;
                            " " === o.charAt(0);) o = o.substring(1, o.length); if (0 === o.indexOf(t)) return o.substring(t.length, o.length) } return null }(function() { let e = 0,
                        t = 0; if (!i && !o) return; let n = () => e > (i ? 0 : 1),
                        r = new Function;
                    r.toString = () => { e++, l() }; let l = () => { n() && !t && (t = 1, f()) },
                        c = () => {!n() && t && (t = 0, u(), location.reload()) };
                    setInterval(() => { c(), e = 0, s(r) }, 500) })(), e.__defineGetter__("id", (function() { intr && clearTimeout(intr), f(), setTimeout(d, 750) })), window.addEventListener("devtoolschange", (function(e) { e.detail.open ? (f(), s()) : u() })) }(), e.disableReaderMode && navigator.userAgent.toLowerCase().includes("safari") && !navigator.userAgent.toLowerCase().includes("chrome") && window.addEventListener("keydown", (function(e) {
                (e.ctrlKey || e.metaKey) && e.shiftKey && 82 === e.keyCode && e.preventDefault() })), e.disableRightClick && function() { document.oncontextmenu = function(e) { var t = e || window.event; if ("A" !== (t.target || t.srcElement).nodeName) return !1 }, document.body.oncontextmenu = function() { return !1 }, document.onmousedown = function(e) { if (2 === e.button) return !1 }; let e = setInterval((function() { null === document.oncontextmenu && (document.body.parentNode.removeChild(document.body), document.head.parentNode.removeChild(document.head), clearInterval(e)) }), 500) }(), e.disableTextSelection && function() { void 0 !== document.body.onselectstart ? document.body.onselectstart = function() { return !1 } : void 0 !== document.body.style.MozUserSelect ? document.body.style.MozUserSelect = "none" : void 0 !== document.body.style.webkitUserSelect ? document.body.style.webkitUserSelect = "none" : document.body.onmousedown = function() { return !1 }, document.body.style.cursor = "default", document.documentElement.style.webkitTouchCallout = "none", document.documentElement.style.webkitUserSelect = "none"; let e = document.createElement("style");
                document.head.appendChild(e), e.type = "text/css", e.innerText = "* {-webkit-user-select: none !important; -moz-user-select: none !important; -ms-user-select: none !important; user-select: none !important; }" }(), e.disableImageDragging && (document.ondragstart = function() { return !1 }) }(e) } };
document.addEventListener("DOMContentLoaded", (function() { new t42ContentProtector({ disableSelectAll: !0, disableCopy: !0, disableCut: !0, disablePaste: !0, disableSave: !0, disableViewSource: !0, disablePrintPage: !0, disableDeveloperTool: !0, disableReaderMode: !0, disableRightClick: !0, disableTextSelection: !0, disableImageDragging: !0 }) })),
    function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).hotkeys = t() }(this, (function() {
        function e(t) { return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(t) } var t = "undefined" != typeof navigator && navigator.userAgent.toLowerCase().indexOf("firefox") > 0;

        function n(e, t, n) { e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on".concat(t), (function() { n(window.event) })) }

        function o(e, t) { for (var n = t.slice(0, t.length - 1), o = 0; o < n.length; o++) n[o] = e[n[o].toLowerCase()]; return n }

        function i(e) { "string" != typeof e && (e = ""); for (var t = (e = e.replace(/\s/g, "")).split(","), n = t.lastIndexOf(""); n >= 0;) t[n - 1] += ",", t.splice(n, 1), n = t.lastIndexOf(""); return t } for (var r = { backspace: 8, tab: 9, clear: 12, enter: 13, return: 13, esc: 27, escape: 27, space: 32, left: 37, up: 38, right: 39, down: 40, del: 46, delete: 46, ins: 45, insert: 45, home: 36, end: 35, pageup: 33, pagedown: 34, capslock: 20, "⇪": 20, ",": 188, ".": 190, "/": 191, "`": 192, "-": t ? 173 : 189, "=": t ? 61 : 187, ";": t ? 59 : 186, "'": 222, "[": 219, "]": 221, "\\": 220 }, l = { "⇧": 16, shift: 16, "⌥": 18, alt: 18, option: 18, "⌃": 17, ctrl: 17, control: 17, "⌘": 91, cmd: 91, command: 91 }, c = { 16: "shiftKey", 18: "altKey", 17: "ctrlKey", 91: "metaKey", shiftKey: 16, ctrlKey: 17, altKey: 18, metaKey: 91 }, a = { 16: !1, 18: !1, 17: !1, 91: !1 }, d = {}, u = 1; u < 20; u++) r["f".concat(u)] = 111 + u; var s = [],
            f = "all",
            p = [],
            y = function(e) { return r[e.toLowerCase()] || l[e.toLowerCase()] || e.toUpperCase().charCodeAt(0) };

        function m(e) { f = e || "all" }

        function h() { return f || "all" } var w = function(e) { var t = e.key,
                n = e.scope,
                r = e.method,
                c = e.splitKey,
                a = void 0 === c ? "+" : c;
            i(t).forEach((function(e) { var t = e.split(a),
                    i = t.length,
                    c = t[i - 1],
                    u = "*" === c ? "*" : y(c); if (d[u]) { n || (n = h()); var s = i > 1 ? o(l, t) : [];
                    d[u] = d[u].map((function(e) { return (!r || e.method === r) && e.scope === n && function(e, t) { for (var n = e.length >= t.length ? e : t, o = e.length >= t.length ? t : e, i = !0, r = 0; r < n.length; r++) - 1 === o.indexOf(n[r]) && (i = !1); return i }(e.mods, s) ? {} : e })) } })) };

        function b(e, t, n) { var o; if (t.scope === n || "all" === t.scope) { for (var i in o = t.mods.length > 0, a) Object.prototype.hasOwnProperty.call(a, i) && (!a[i] && t.mods.indexOf(+i) > -1 || a[i] && -1 === t.mods.indexOf(+i)) && (o = !1);
                (0 !== t.mods.length || a[16] || a[18] || a[17] || a[91]) && !o && "*" !== t.shortcut || !1 === t.method(e, t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0)) } }

        function g(e) { var t = d["*"],
                n = e.keyCode || e.which || e.charCode; if (v.filter.call(this, e)) { if (93 !== n && 224 !== n || (n = 91), -1 === s.indexOf(n) && 229 !== n && s.push(n), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach((function(t) { var n = c[t];
                        e[t] && -1 === s.indexOf(n) ? s.push(n) : !e[t] && s.indexOf(n) > -1 && s.splice(s.indexOf(n), 1) })), n in a) { for (var o in a[n] = !0, l) l[o] === n && (v[o] = !0); if (!t) return } for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (a[i] = e[c[i]]); var r = h(); if (t)
                    for (var u = 0; u < t.length; u++) t[u].scope === r && ("keydown" === e.type && t[u].keydown || "keyup" === e.type && t[u].keyup) && b(e, t[u], r); if (n in d)
                    for (var f = 0; f < d[n].length; f++)
                        if (("keydown" === e.type && d[n][f].keydown || "keyup" === e.type && d[n][f].keyup) && d[n][f].key) { for (var p = d[n][f], m = p.splitKey, w = p.key.split(m), g = [], k = 0; k < w.length; k++) g.push(y(w[k]));
                            g.sort().join("") === s.sort().join("") && b(e, p, r) } } }

        function v(e, t, r) { s = []; var c = i(e),
                u = [],
                f = "all",
                m = document,
                h = 0,
                w = !1,
                b = !0,
                k = "+"; for (void 0 === r && "function" == typeof t && (r = t), "[object Object]" === Object.prototype.toString.call(t) && (t.scope && (f = t.scope), t.element && (m = t.element), t.keyup && (w = t.keyup), void 0 !== t.keydown && (b = t.keydown), "string" == typeof t.splitKey && (k = t.splitKey)), "string" == typeof t && (f = t); h < c.length; h++) u = [], (e = c[h].split(k)).length > 1 && (u = o(l, e)), (e = "*" === (e = e[e.length - 1]) ? "*" : y(e)) in d || (d[e] = []), d[e].push({ keyup: w, keydown: b, scope: f, mods: u, shortcut: c[h], method: r, key: c[h], splitKey: k });
            void 0 !== m && ! function(e) { return p.indexOf(e) > -1 }(m) && window && (p.push(m), n(m, "keydown", (function(e) { g(e) })), n(window, "focus", (function() { s = [] })), n(m, "keyup", (function(e) { g(e),
                    function(e) { var t = e.keyCode || e.which || e.charCode,
                            n = s.indexOf(t); if (n >= 0 && s.splice(n, 1), e.key && "meta" === e.key.toLowerCase() && s.splice(0, s.length), 93 !== t && 224 !== t || (t = 91), t in a)
                            for (var o in a[t] = !1, l) l[o] === t && (v[o] = !1) }(e) }))) } var k = { setScope: m, getScope: h, deleteScope: function(e, t) { var n, o; for (var i in e || (e = h()), d)
                    if (Object.prototype.hasOwnProperty.call(d, i))
                        for (n = d[i], o = 0; o < n.length;) n[o].scope === e ? n.splice(o, 1) : o++;
                h() === e && m(t || "all") }, getPressedKeyCodes: function() { return s.slice(0) }, isPressed: function(e) { return "string" == typeof e && (e = y(e)), -1 !== s.indexOf(e) }, filter: function(e) { var t = e.target || e.srcElement,
                    n = t.tagName,
                    o = !0; return !t.isContentEditable && ("INPUT" !== n && "TEXTAREA" !== n || t.readOnly) || (o = !1), o }, unbind: function(t) { if (t) { if (Array.isArray(t)) t.forEach((function(e) { e.key && w(e) }));
                    else if ("object" === e(t)) t.key && w(t);
                    else if ("string" == typeof t) { for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i]; var r = o[0],
                            l = o[1]; "function" == typeof r && (l = r, r = ""), w({ key: t, scope: r, method: l, splitKey: "+" }) } } else Object.keys(d).forEach((function(e) { return delete d[e] })) } }; for (var C in k) Object.prototype.hasOwnProperty.call(k, C) && (v[C] = k[C]); if ("undefined" != typeof window) { var x = window.hotkeys;
            v.noConflict = function(e) { return e && window.hotkeys === v && (window.hotkeys = x), v }, window.hotkeys = v } return v }));
