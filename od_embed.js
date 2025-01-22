! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(i, o, function(t) {
                return e[t]
            }.bind(null, o));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/packs/", n(n.s = 1014)
}({
        1014: function(e, t, n) {
            n(395);
            var i = window.iFrameResize;
            ! function() {
                function e(e, t, n) {
                    e.postMessage({
                        from: "od_embed.js",
                        command: t,
                        data: n
                    }, "*")
                }
                "function" !== typeof ODEmbed && (window.ODEmbed = function(t, n) {
                    var o, r = document.getElementById(t),
                        a = r.contentWindow,
                        l = (n = n || {}).bgColor;
                    "function" === typeof ga && ga((function(e) {
                        o = e.get("clientId")
                    }));
                    var s = function(e) {
                            var t = "; ".concat(document.cookie).split("; ".concat(e, "="));
                            if (2 === t.length) return t.pop().split(";").shift()
                        }("_cioid"),
                        c = window.location.search,
                        d = new URLSearchParams(c).get("_od_gtao"),
                        u = function(e) {
                            ! function(e, t) {
                                var n = e.data;
                                if ("object" === typeof n && "WebOrderForm.jsx" === n.from) {
                                    var i = n.command,
                                        o = n.data;
                                    switch (i) {
                                        case "opendateOrderCanceled":
                                        case "opendateOrderGoToAddOns":
                                        case "opendateOrderGoToCheckout":
                                        case "opendateOrderPlaced":
                                            t.scrollIntoView();
                                            break;
                                        case "ga.page_view":
                                            window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                                                event: "page_view",
                                                page_location: o
                                            });
                                            break;
                                        case "ga.add_to_cart":
                                            window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                                                event: "add_to_cart",
                                                ecommerce: {
                                                    items: o
                                                }
                                            });
                                            break;
                                        case "ga.begin_checkout":
                                            window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                                                event: "begin_checkout",
                                                ecommerce: {
                                                    items: o
                                                }
                                            });
                                            break;
                                        case "ga.purchase":
                                            window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                                                event: "purchase",
                                                ecommerce: o
                                            });
                                            break;
                                        default:
                                            console.log('Unknown command "' + i + '" received from WebOrderForm.jsx')
                                    }
                                }
                            }(e, r)
                        };
                    window.addEventListener ? window.addEventListener("message", u, !1) : window.attachEvent("onmessage", u), r.addEventListener("load", (function() {
                        l && l.length > 0 && (a.document.body.style.background = l), i({
                            license: "12ajjdewwwy-26rnhw2943-1s7g1u8ma0i"
                        }, r), o && o.length > 0 && e(a, "setClientID", {
                            clientId: o
                        }), s && s.length > 0 && e(a, "setCustomerioId", {
                            customerioId: s
                        }), "true" === d && setTimeout((function() {
                            e(a, "triggerGoToAddOns", {})
                        }), 100), e(a, "reportPageView", {})
                    }))
                })
            }()
        },
        395: function(e, t, n) {
                function i(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, i)
                    }
                    return n
                }

                function o(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? i(Object(n), !0).forEach((function(t) {
                            r(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function r(e, t, n) {
                    return (t = function(e) {
                        var t = function(e, t) {
                            if ("object" !== typeof e || null === e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var i = n.call(e, t || "default");
                                if ("object" !== typeof i) return i;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(e, "string");
                        return "symbol" === typeof t ? t : String(t)
                    }(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                e.exports = function() {
                        "use strict";
                        const e = "[iframe-resizer]",
                            t = t => `${e}[${function (e) { var t, n; return window.top === window.self ? `Parent page: ${e}` : null !== (t = window) && void 0 !== t && null !== (n = t.parentIFrame) && void 0 !== n && n.getId ? `${window.parentIFrame.getId()}: ${e}` : `Nested parent page: ${e}` }(t)}]`, n = function (e) { for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)i[o - 1] = arguments[o]; return function (e, n) { for (var i, o = arguments.length, r = new Array(o > 2 ? o - 2 : 0), a = 2; a < o; a++)r[a - 2] = arguments[a]; return null === (i = window) || void 0 === i ? void 0 : i.console[e](t(n), ...r) }("warn", e, ...i) }, i = (t, n) => { var i; return null === (i = console) || void 0 === i ? void 0 : i.warn((e => t => window.chrome ? e(t.replaceAll("<br>", "\n").replaceAll("<rb>", "\x1b[31;1m").replaceAll("</>", "\x1b[m").replaceAll("<b>", "\x1b[1m").replaceAll("<i>", "\x1b[3m").replaceAll("<u>", "\x1b[4m")) : e(t.replaceAll("<br>", "\n").replaceAll(/<[/a-z]+>/gi, "")))((t => function () { for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)i[o] = arguments[o]; return [`${e}[${t}]`, ...i].join(" ") })(t))(n)) }, r = "5.3.1", a = "[iFrameSizer]", l = a.length, s = Object.freeze({ max: 1, scroll: 1, bodyScroll: 1, documentElementScroll: 1 }), c = (e, t, n, i) => e.addEventListener(t, n, i || !1), d = (e, t, n) => e.removeEventListener(t, n, !1), u = e => { if (!e) return ""; let t = -559038744, n = 1103547984; for (let i, o = 0; o < e.length; o++)i = e.codePointAt(o), t = Math.imul(t ^ i, 2246822519), n = Math.imul(n ^ i, 3266489917); return t ^= Math.imul(t ^ n >>> 15, 1935289751), n ^= Math.imul(n ^ t >>> 15, 3405138345), t ^= n >>> 16, n ^= t >>> 16, (2097152 * (n >>> 0) + (t >>> 11)).toString(36) }, f = e => e.replaceAll(/[A-Za-z]/g, (e => String.fromCodePoint((e <= "Z" ? 90 : 122) >= (e = e.codePointAt(0) + 19) ? e : e - 26))), p = ["<iy><yi>Puchspk Spjluzl Rlf</><iy><iy>", "<iy><yi>Tpzzpun Spjluzl Rlf</><iy><iy>", "Aopz spiyhyf pz hchpshisl dpao ivao Jvttlyjphs huk Vwlu-Zvbyjl spjluzlz.<iy><iy><i>Jvttlyjphs Spjluzl</><iy>Mvy jvttlyjphs bzl, <p>pmyhtl-ylzpgly</> ylxbpylz h svd jvza vul aptl spjluzl mll. Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.<iy><iy><i>Vwlu Zvbyjl Spjluzl</><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-jvttlyjphs vwlu zvbyjl wyvqlja aolu fvb jhu bzl pa mvy myll bukly aol alytz vm aol NWS C3 Spjluzl. Av jvumpyt fvb hjjlwa aolzl alytz, wslhzl zla aol <i>spjluzl</> rlf pu <p>pmyhtl-ylzpgly</> vwapvuz av <i>NWSc3</>.<iy><iy>Mvy tvyl pumvythapvu wslhzl zll: <b>oaawz://pmyhtl-ylzpgly.jvt/nws</>", "<i>NWSc3 Spjluzl Clyzpvu</><iy><iy>Aopz clyzpvu vm <p>pmyhtl-ylzpgly</> pz ilpun bzlk bukly aol alytz vm aol <i>NWS C3</> spjluzl. Aopz spjluzl hssvdz fvb av bzl <p>pmyhtl-ylzpgly</> pu Vwlu Zvbyjl wyvqljaz, iba pa ylxbpylz fvby wyvqlja av il wbispj, wyvcpkl haaypibapvu huk il spjluzlk bukly clyzpvu 3 vy shaly vm aol NUB Nlulyhs Wbispj Spjluzl.<iy><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-vwlu zvbyjl wyvqlja vy dlizpal, fvb dpss ullk av wbyjohzl h svd jvza vul aptl jvttlyjphs spjluzl.<iy><iy>Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>."], m = ["NWSc3", "zvsv", "wyv", "ibzpulzz", "vlt"], h = Object.fromEntries(["2cgs7fdf4xb", "1c9ctcccr4z", "1q2pc4eebgb", "ueokt0969w", "w2zxchhgqz", "1umuxblj2e5"].map(((e, t) => [e, Math.max(0, t - 1)]))), v = e => f(p[e]), y = e => { const t = e[f("spjluzl")]; if (!t) return -1; const n = t.split("-"); let i = function () { let e = -2; const t = u(f(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "")); return t in h && (e = h[t]), e }(n[0]); return 0 === i || (e => e[2] === u(e[0] + e[1]))(n) || (i = -2), i }, g = {}, w = Object.freeze({ autoResize: !0, bodyBackground: null, bodyMargin: null, bodyPadding: null, checkOrigin: !0, direction: "vertical", inPageLinks: !1, heightCalculationMethod: "auto", id: "iFrameResizer", log: !1, license: void 0, mouseEvents: !0, offsetHeight: null, offsetWidth: null, postMessageTarget: null, sameDomain: !1, scrolling: !1, sizeHeight: !0, sizeWidth: !1, warningTimeout: 5e3, tolerance: 0, waitForLoad: !1, widthCalculationMethod: "auto", onClose: () => !0, onClosed() { }, onInit: !1, onMessage: null, onMouseEnter() { }, onMouseLeave() { }, onReady: e => { "function" == typeof g[e.id].onInit && (i(e.id, "\n\x1b[31;1mDeprecated Option\x1b[m\n\nThe \x1b[1monInit()\x1b[m function is deprecated and has been replaced with \x1b[1monReady()\x1b[m. It will be removed in a future version of iFrame Resizer.\n      "), g[e.id].onInit(e)) }, onResized() { }, onScroll: () => !0 }), b = { position: null, version: r }; function z(e) { function t() { x(C), $(), N("onResized", C) } function o(e) { return "border-box" !== e.boxSizing ? 0 : (e.paddingTop ? parseInt(e.paddingTop, 10) : 0) + (e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0) } function s(e) { return "border-box" !== e.boxSizing ? 0 : (e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0) + (e.borderBottomWidth ? parseInt(e.borderBottomWidth, 10) : 0) } const u = e => A.slice(A.indexOf(":") + 7 + e), f = (e, t) => (n, i) => { const o = {}; var r, a; r = function () { M(`Send ${e} (${n})`, `${e}:${t()}`, i) }, o[a = i] || (r(), o[a] = requestAnimationFrame((() => { o[a] = null }))) }, p = (e, t) => () => { let n = !1; const i = t => () => { g[s] ? n && n !== t || (e(t, s), n = t, requestAnimationFrame((() => { n = !1 }))) : l() }, o = i("scroll"), r = i("resize window"); function a(e, t) { t(window, "scroll", o), t(window, "resize", r) } function l() { a(0, d), u.disconnect(), f.disconnect() } const s = D, u = new ResizeObserver(i("page observed")), f = new ResizeObserver(i("iframe observed")); a(0, c), u.observe(document.body, { attributes: !0, childList: !0, subtree: !0 }), f.observe(g[s].iframe, { attributes: !0, childList: !1, subtree: !1 }), g[s] && (g[s][`stop${t}`] = l) }, m = e => () => { e in g[D] && (g[D][e](), delete g[D][e]) }, h = f("pageInfo", (function () { const e = document.body.getBoundingClientRect(), t = C.iframe.getBoundingClientRect(), n = window, i = n.scrollY, o = n.scrollX, r = n.innerHeight, a = n.innerWidth, l = document.documentElement, s = l.clientHeight, c = l.clientWidth; return JSON.stringify({ iframeHeight: t.height, iframeWidth: t.width, clientHeight: Math.max(s, r || 0), clientWidth: Math.max(c, a || 0), offsetTop: parseInt(t.top - e.top, 10), offsetLeft: parseInt(t.left - e.left, 10), scrollTop: i, scrollLeft: o, documentHeight: s, documentWidth: c, windowHeight: r, windowWidth: a }) })), v = f("parentInfo", (function () { const e = C.iframe, t = document.documentElement, n = t.scrollWidth, i = t.scrollHeight, o = window.visualViewport, r = o.width, a = o.height, l = o.offsetLeft, s = o.offsetTop, c = o.pageLeft, d = o.pageTop, u = o.scale; return JSON.stringify({ iframe: e.getBoundingClientRect(), document: { scrollWidth: n, scrollHeight: i }, viewport: { width: r, height: a, offsetLeft: l, offsetTop: s, pageLeft: c, pageTop: d, scale: u } }) })), y = p(h, "PageInfo"), w = p(v, "ParentInfo"), z = m("stopPageInfo"), k = m("stopParentInfo"); function E(e) { const t = e.getBoundingClientRect(); return T(), { x: Number(t.left) + Number(b.position.x), y: Number(t.top) + Number(b.position.y) } } function P(e) { const t = e ? E(C.iframe) : { x: 0, y: 0 }, n = ((e, t) => ({ x: e.width + t.x, y: e.height + t.y }))(C, t), i = window.parentIframe || window.parentIFrame; i ? function (t, n) { t["scrollTo" + (e ? "Offset" : "")](n.x, n.y) }(i, n) : function (e) { b.position = e, W(D) }(n) } function W(e) { var t; const n = b.position, i = n.x, o = n.y, r = null === (t = g[e]) || void 0 === t ? void 0 : t.iframe; !1 !== N("onScroll", { iframe: r, top: o, left: i, x: i, y: o }) ? $() : S() } function F(e) { let t = {}; if (0 === C.width && 0 === C.height) { const e = u(9).split(":"); t = { x: e[1], y: e[0] } } else t = { x: C.width, y: C.height }; N(e, { iframe: C.iframe, screenX: Number(t.x), screenY: Number(t.y), type: C.type }) } const N = (e, t) => j(D, e, t); let A = e.data, C = {}, D = null; "[iFrameResizerChild]Ready" !== A ? a === `${A}`.slice(0, l) && A.slice(l).split(":")[0] in g && (C = function () { var e; const t = A.slice(l).split(":"), n = t[1] ? Number(t[1]) : 0, i = null === (e = g[t[0]]) || void 0 === e ? void 0 : e.iframe, r = getComputedStyle(i); return { iframe: i, id: t[0], height: n + o(r) + s(r), width: Number(t[2]), type: t[3], msg: t[4] } }(), D = C.id, D ? (function (e) { if (!g[e]) throw new Error(`${C.type} No settings for ${e}. Message was: ${A}`) }(D), C.type in { true: 1, false: 1, undefined: 1 } || (g[D].loaded = !0, (null !== C.iframe || (n(D, `The iframe (${C.id}) was not found.`), 0)) && function () { var t; const n = e.origin; if (e.sameDomain) return !0; let i = null === (t = g[D]) || void 0 === t ? void 0 : t.checkOrigin; if (i && "null" != `${n}` && !(i.constructor === Array ? function () { let e = 0, t = !1; for (; e < i.length; e++)if (i[e] === n) { t = !0; break } return t }() : function () { var e; const t = null === (e = g[D]) || void 0 === e ? void 0 : e.remoteHost; return n === t }())) throw new Error(`Unexpected message received from: ${n} for ${C.iframe.id}. Message was: ${e.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`); return !0 }() && function () { var e, o, a; switch (null !== (e = g[D]) && void 0 !== e && e.firstRun && g[D] && (g[D].firstRun = !1), C.type) { case "close": O(C.iframe); break; case "message": a = u(6), N("onMessage", { iframe: C.iframe, message: JSON.parse(a) }); break; case "mouseenter": F("onMouseEnter"); break; case "mouseleave": F("onMouseLeave"); break; case "autoResize": g[D].autoResize = JSON.parse(u(9)); break; case "scrollBy": !function () { const e = C.width, t = C.height; (window.parentIframe || window).scrollBy(e, t) }(); break; case "scrollTo": P(!1); break; case "scrollToOffset": P(!0); break; case "pageInfo": h("start", D), y(); break; case "parentInfo": v("start", D), w(); break; case "pageInfoStop": z(); break; case "parentInfoStop": k(); break; case "inPageLink": !function (e) { const t = e.split("#")[1] || "", n = decodeURIComponent(t); let i = document.getElementById(n) || document.getElementsByName(n)[0]; i ? function () { const e = E(i); b.position = { x: e.x, y: e.y }, W(D), window.location.hash = t }() : window.top !== window.self && window.parentIFrame && window.parentIFrame.moveToAnchor(t) }(u(9)); break; case "title": !function (e, t) { var n; (null === (n = g[t]) || void 0 === n ? void 0 : n.syncTitle) && (g[t].iframe.title = e) }(C.msg, D); break; case "reset": I(C); break; case "init": t(), function (e) { try { var n, i, o; g[e].sameDomain = !(null === (n = g[e]) || void 0 === n || null === (i = n.iframe) || void 0 === i || null === (o = i.contentWindow) || void 0 === o || !o.iframeChildListener) } catch (t) { g[e].sameDomain = !1 } }(D), (o = C.msg) !== r && (void 0 !== o || i(D, "<rb>Legacy version detected in iframe</>\n\nDetected legacy version of child page script. It is recommended to update the page in the iframe to use <b>@iframe-resizer/child</>.\n\nSee <u>https://iframe-resizer.com/setup/#child-page-setup</> for more details.\n")), L = !0, N("onReady", C.iframe); break; default: if (0 === C.width && 0 === C.height) return void n(D, `Unsupported message received (${C.type}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`); if (0 === C.width || 0 === C.height) return; if (document.hidden) return; t() } }())) : n("", "iframeResizer received messageData without id, message was: ", A)) : Object.keys(g).forEach((e => { g[e].mode >= 0 && M("iFrame requested init", R(e), e) })) } function j(e, t, n) { let i = null, o = null; if (g[e]) { if (i = g[e][t], "function" != typeof i) throw new TypeError(`${t} on iFrame[${e}] is not a function`); "onClose" === t || "onScroll" === t ? o = i(n) : setTimeout((() => i(n))) } return o } function k(e) { const t = e.id; delete g[t] } function O(e) { const t = e.id; if (!1 !== j(t, "onClose", t)) { try { e.parentNode && e.remove() } catch (e) { n(t, e) } j(t, "onClosed", t), k(e) } } function T(e) { null === b.position && (b.position = { x: window.scrollX, y: window.scrollY }) } function S() { b.position = null } function $(e) { null !== b.position && (window.scrollTo(b.position.x, b.position.y), S()) } function I(e) { T(e.id), x(e), M("reset", "reset", e.id) } function x(e) { function t(t) { const n = `${e[t]}px`; e.iframe.style[t] = n } const n = e.id, i = g[n], o = i.sizeHeight, r = i.sizeWidth; o && t("height"), r && t("width") } function M(e, t, o, r) { var l, s; g[o] && (null !== (l = g[o]) && void 0 !== l && l.postMessageTarget ? function () { const e = g[o], n = e.iframe, i = e.postMessageTarget, r = e.sameDomain, l = e.targetOrigin; if (r) try { return void n.contentWindow.iframeChildListener(a + t) } catch (n) { } i.postMessage(a + t, l) }() : n(o, `[${e}] IFrame(${o}) not found`), r && (null === (s = g[o]) || void 0 === s ? void 0 : s.warningTimeout) && (g[o].msgTimeout = setTimeout((function () { if (void 0 === g[o]) return; const e = g[o], t = e.iframe, n = e.loaded, r = e.loadErrorShown, a = e.waitForLoad, l = t.sandbox; n || r || (g[o].loadErrorShown = !0, i(o, `\n<rb>No response from iFrame</>\n            \nThe iframe (<i>${o}</>) has not responded within ${g[o].warningTimeout / 1e3} seconds. Check <b>@iframe-resizer/child</> package has been loaded in the iframe.\n${a ? "\nThe <b>waitForLoad</> option is currently set to <i>'true'</>. If the iframe loads before the JavaScript runs, this option will prevent <i>iframe-resizer</> from initialising. To disable this, set the <b>waitForLoad</> option to <i>'false'</>.  \n" : ""}\n${!((null === l || void 0 === l ? void 0 : l.length) > 0) || l.contains("allow-scripts") && l.contains("allow-same-origin") ? "" : "The iframe has the <b>sandbox</> attribute, please ensure it contains both the <i>'allow-same-origin'</> and <i>'allow-scripts'</> values."}\n\nThis message can be ignored if everything is working, or you can set the <b>warningTimeout</> option to a higher value or zero to suppress this warning.\n`)) }), g[o].warningTimeout))) } function R(e) { const t = g[e]; return [e, "8", t.sizeWidth, t.log, "32", !0, t.autoResize, t.bodyMargin, t.heightCalculationMethod, t.bodyBackground, t.bodyPadding, t.tolerance, t.inPageLinks, "child", t.widthCalculationMethod, t.mouseEvents, t.offsetHeight, t.offsetWidth, t.sizeHeight, t.license, b.version, t.mode].join(":") } let E = 0, L = !1, P = !1; const W = e => t => { function a(e) { if (!e) return {}; if ("object" != typeof e) throw new TypeError("Options is not an object"); return ("sizeWidth" in e || "sizeHeight" in e || "autoResize" in e) && i(d, '<rb>Deprecated Option</>\n\nThe <b>sizeWidth</>, <b>sizeHeight</> and <b>autoResize</> options have been replaced with new <b>direction</> option which expects values of <i>"vertical"</>, <i>"horizontal"</> or <i>"horizontal"</>.\n'), e } function l(e) { var t, n; const i = null === (t = g[e]) || void 0 === t || null === (n = t.iframe) || void 0 === n ? void 0 : n.title; return "" === i || void 0 === i } const d = function (n) { if (n && "string" != typeof n) throw new TypeError("Invalid id for iFrame. Expected String"); return "" !== n && n || (n = function () { let t = (null === e || void 0 === e ? void 0 : e.id) || w.id + E++; return null !== document.getElementById(t) && (t += E++), t }(), t.id = n, (e || {}).log), n }(t.id); return d in g && "iFrameResizer" in t ? n(d, "Ignored iFrame, already setup.") : (function (e) { var n, r; g[d] = o(o(o({ iframe: t, firstRun: !0, remoteHost: null === t || void 0 === t ? void 0 : t.src.split("/").slice(0, 3).join("/") }, w), a(e)), {}, { mode: y(e), syncTitle: l(d) }), function () { const e = g[d].direction; if ("horizontal" === e) return g[d].sizeWidth = !0, void (g[d].sizeHeight = !1); if ("none" === e) return g[d].sizeWidth = !1, g[d].sizeHeight = !1, void (g[d].autoResize = !1); if ("vertical" !== e) throw new TypeError(d, `Direction value of "${e}" is not valid`) }(), (n = (null === e || void 0 === e ? void 0 : e.offsetSize) || (null === e || void 0 === e ? void 0 : e.offset)) && ("vertical" === g[d].direction ? g[d].offsetHeight = n : g[d].offsetWidth = n), null !== e && void 0 !== e && e.offset && i(d, "<rb>Deprecated option</>\n\n The <b>offset</> option has been renamed to <b>offsetSize</>. Use of the old name will be removed in a future version of <i>iframe-resizer</>."), null === g[d].postMessageTarget && (g[d].postMessageTarget = t.contentWindow), g[d].targetOrigin = !0 === g[d].checkOrigin ? "" === (r = g[d].remoteHost) || null !== r.match(/^(about:blank|javascript:|file:\/\/)/) ? "*" : r : "*" }(e), function () { const e = g[d].mode; var t; e < 0 && i("Parent", `${v(e + 2)}${v(2)}`), P || e < 0 || (P = !0, t = `v${r} (${(e => f(m[e]))(e)})`, console.info(`%c[iframe-resizer] ${t}`, "font-weight: bold;"), e < 1 && i("Parent", v(3))) }(), N(), function () { var e, n; switch (t.style.overflow = !1 === (null === (e = g[d]) || void 0 === e ? void 0 : e.scrolling) ? "hidden" : "auto", null === (n = g[d]) || void 0 === n ? void 0 : n.scrolling) { case "omit": break; case !0: t.scrolling = "yes"; break; case !1: t.scrolling = "no"; break; default: t.scrolling = g[d] ? g[d].scrolling : "no" } }(), function () { const e = g[d].bodyMargin; "number" != typeof e && "0" !== e || (g[d].bodyMargin = `${e}px`) }(), function (e) { const n = t.id, i = g[n], o = i.mode, r = i.waitForLoad; -1 !== o && -2 !== o && (c(t, "load", (function () { M("iFrame.onload", `${e}:${L}`, n, !0), function () { var e, n; const i = null === (e = g[d]) || void 0 === e ? void 0 : e.firstRun, o = (null === (n = g[d]) || void 0 === n ? void 0 : n.heightCalculationMethod) in s; !i && o && I({ iframe: t, height: 0, width: 0, type: "init" }) }() })), !1 === r && M("init", `${e}:${L}`, n, !0)) }(R(d)), function () { if (g[d]) { const e = g[d].iframe, t = { close: O.bind(null, e), disconnect: k.bind(null, e), removeListeners() { i(d, "\n<rb>Deprecated Method Name</>\n\nThe \x1b[removeListeners()</> method has been renamed to \x1b[disconnect()</>.\n"), this.disconnect() }, resize: M.bind(null, "Window resize", "resize", d), moveToAnchor(e) { M("Move to anchor", `moveToAnchor:${e}`, d) }, sendMessage(e) { M("Send Message", `message:${e = JSON.stringify(e)}`, d) } }; e.iframeResizer = t, e.iFrameResizer = t } }()), null === t || void 0 === t ? void 0 : t.iFrameResizer }; function F() { !1 === document.hidden && function (e, t) { const n = e => { var t, n; return (null === (t = g[e]) || void 0 === t ? void 0 : t.autoResize) && !(null !== (n = g[e]) && void 0 !== n && n.firstRun) }; Object.keys(g).forEach((function (i) { n(i) && M(e, t, i) })) }("Tab Visible", "resize") } const N = (e => { let t = !1; return function () { return t ? void 0 : (t = !0, Reflect.apply(e, this, arguments)) } })((() => { c(window, "message", z), c(document, "visibilitychange", F), window.iframeParentListener = e => setTimeout((() => z({ data: e, sameDomain: !0 }))) })), A = "[iframeResizer] ", C = function () { function e(e) { switch (!0) { case !e: throw new TypeError(`${A}iframe is not defined`); case !e.tagName: throw new TypeError(`${A}Not a valid DOM element`); case "IFRAME" !== e.tagName.toUpperCase(): throw new TypeError(`${A}Expected <IFRAME> tag, found <${e.tagName}>`); default: t(e), n.push(e) } } let t, n; return function (i, o) { if ("undefined" == typeof window) return []; switch (t = W(i), n = [], typeof o) { case "undefined": case "string": document.querySelectorAll(o || "iframe").forEach(e); break; case "object": e(o); break; default: throw new TypeError(`${A}Unexpected data type (${typeof o})`) }return Object.freeze(n) } }(); return "undefined" != typeof window && (window.iFrameResize = window.iFrameResize || function () { i("", "Deprecated: iFrameResize(), please use iframeResize()"), C(...arguments) }), C }() } });