/*Copyright (c) 2019 LIM KIAN SENG all rights reserved
*
*Permission is hereby granted, free of charge, to any person obtaining a copy
*of this software and associated documentation files (the "Software"), to deal
*in the Software without restriction, including without limitation the rights
*to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*copies of the Software, and to permit persons to whom the Software is
*furnished to do so, subject to the following conditions:
*
*The above copyright notice and this permission notice shall be included in all
*copies or substantial portions of the Software.
*
*THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
*SOFTWARE.*/
var _potatoMenuTitle = 0,
    _potatoMenu = 0,
    _potatoId = new Array,
    _potatoBindId = new Array,
    _potatoBindIndex = new Array,
    _potatoArray = [
        []
    ],
    _potatoBindIndexId = new Array,
    _potatoIndexId = new Array,
    _potatoIndexValue = new Array,
    pims, _pimS, _pcofig, _fieldtime, _value, _fieldboard, PIMS = function() {
        return _psinit.init()
    },
    _pcnst = function() {
        return this.KB = [75, 69, 89, 66, 79, 65, 82, 68], this.KP = [75, 69, 89, 80, 65, 68], this.h = [35], this.lp = [112, 111, 116, 97, 116, 111], this.r = [114, 101, 103, 105, 115, 116, 101, 114, 80, 111, 116, 97, 116, 111], this
    },
    _pdir = function() {
        return this.jsonphp = "config/json.php", this.potatoModelDir = "../apps/" + String(String(window.location.href).split("=").slice(1, 2)).split("-").slice(0, 1) + "/Models/", this.potatoModelDir2 = "apps/" + String(String(window.location.href).split("=").slice(1, 2)).split("-").slice(0, 1) + "/Models/", this
    },
    _psinit = {
        settings: {
            X_authorization: 0,
            nodevalue: "pims",
            colId: 0,
            rowId: 0,
            tabName1: String.fromCharCode(80, 79, 84, 65, 84, 79),
            tabName2: String.fromCharCode(79),
            pimsListObject: new Object,
            keyID: "pims",
            pimsReloadTime: "pims",
            pimsTargetId: "pims",
            pimsThis: new Object,
            pimsParameters: "pims",
            where: [],
            whereOther: [],
            field: [],
            fieldOther: [],
            newP: new Array,
            rsd: "",
            day: "20",
            hour: "08",
            minute: "00",
            month: "06",
            second: "00",
            year: "2019",
            data: new Array
        },
        init: function() {
            _pimS = this.settings;
            var t = new Date,
                e = t.getDate(),
                i = t.getHours(),
                n = t.getMinutes(),
                l = t.getMonth() + 1,
                r = t.getSeconds(),
                o = t.getFullYear();
            _pimS.day = parseInt(e) < 10 ? "0" + e : e, _pimS.hour = parseInt(i) < 10 ? "0" + i : i, _pimS.minute = parseInt(n) < 10 ? "0" + n : n, _pimS.month = parseInt(l) < 10 ? "0" + l : l, _pimS.second = parseInt(r) < 10 ? "0" + r : r, _pimS.day = o, pims = X, potato = X, _$.init(), document.onmouseover = X.prototype.doOver, document.onmouseout = X.prototype.doOut, document.onmousedown = X.prototype.doDown, document.onmouseup = X.prototype.doUp
        },
        start: function() {}
    },
    __p = function() {
        var t = function() {};
        return t.prototype = {
            l: function(t) {
                return String.fromCharCode.apply(String, t)
            }
        }, t
    }();
! function(t, e, i, n) {
    "use strict";

    function l(t, e) {
        for (var i = 0, n = t.length; i < n; i++) h(t[i], e)
    }

    function r(t) {
        return function(e) {
            tt(e) && (h(e, t), l(e.querySelectorAll(X), t))
        }
    }

    function o(t) {
        var e = t.getAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111)),
            i = t.nodeName.toUpperCase(),
            n = M.call(R, e ? F + e.toUpperCase() : $ + i);
        return e && -1 < n && !a(i, e) ? -1 : n
    }

    function a(t, e) {
        return -1 < X.indexOf(t + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + e + '"]')
    }

    function s(t) {
        var e = t.currentTarget,
            i = t.attrChange,
            n = t.attrName,
            l = t.target;
        pt && (!l || l === e) && e.attributeChangedCallback && "style" !== n && e.attributeChangedCallback(n, i === t[_] ? null : t.prevValue, i === t[I] ? null : t.newValue)
    }

    function d(t) {
        var e = r(t);
        return function(t) {
            g.push(e, t.target)
        }
    }

    function c(t) {
        ut && (ut = !1, t.currentTarget.removeEventListener(E, c)), l((t.target || e).querySelectorAll(X), t.detail === k ? k : A), Z && function() {
            for (var t, e = 0, i = et.length; e < i; e++) t = et[e], O.contains(t) || (et.splice(e, 1), h(t, k))
        }()
    }

    function u(t, e) {
        var i = this;
        nt.call(i, t, e), m.call(i, {
            target: i
        })
    }

    function p(t, e) {
        G(t, e), b ? b.observe(t, ot) : (ct && (t.setAttribute = u, t[w] = y(t), t.addEventListener(B, m)), t.addEventListener(T, s)), t.createdCallback && pt && (t.created = !0, t.createdCallback(), t.created = !1)
    }

    function h(t, e) {
        var i, n = o(t); - 1 < n && (v(t, D[n]), n = 0, e !== A || t[A] ? e === k && !t[k] && (t[A] = !1, t[k] = !0, n = 1) : (t[k] = !1, t[A] = !0, n = 1, Z && M.call(et, t) < 0 && et.push(t)), n && (i = t[e + "Callback"]) && i.call(t))
    }
    if (!(n in e)) {
        var g, m, f, y, b, v, x, w = "__" + n + (1e5 * Math.random() >> 0),
            A = "attached",
            k = "detached",
            S = "extends",
            _ = "ADDITION",
            C = "MODIFICATION",
            I = "REMOVAL",
            T = "DOMAttrModified",
            E = "DOMContentLoaded",
            B = "DOMSubtreeModified",
            $ = "<",
            F = "=",
            L = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
            N = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
            R = [],
            D = [],
            X = "",
            O = e.documentElement,
            M = R.indexOf || function(t) {
                for (var e = this.length; e-- && this[e] !== t;);
                return e
            },
            z = i.prototype,
            H = z.hasOwnProperty,
            P = z.isPrototypeOf,
            W = i.defineProperty,
            j = i.getOwnPropertyDescriptor,
            K = i.getOwnPropertyNames,
            V = i.getPrototypeOf,
            U = i.setPrototypeOf,
            Y = !!i.__proto__,
            q = i.create || function t(e) {
                return e ? (t.prototype = e, new t) : this
            },
            G = U || (Y ? function(t, e) {
                return t.__proto__ = e, t
            } : K && j ? function() {
                function t(t, e) {
                    for (var i, n = K(e), l = 0, r = n.length; l < r; l++) i = n[l], H.call(t, i) || W(t, i, j(e, i))
                }
                return function(e, i) {
                    do {
                        t(e, i)
                    } while ((i = V(i)) && !P.call(i, e));
                    return e
                }
            }() : function(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            }),
            J = t.MutationObserver || t.WebKitMutationObserver,
            Q = (t.HTMLElement || t.Element || t.Node).prototype,
            Z = !P.call(Q, O),
            tt = Z ? function(t) {
                return 1 === t.nodeType
            } : function(t) {
                return P.call(Q, t)
            },
            et = Z && [],
            it = Q.cloneNode,
            nt = Q.setAttribute,
            lt = Q.removeAttribute,
            rt = e.createElement,
            ot = J && {
                attributes: !0,
                characterData: !0,
                attributeOldValue: !0
            },
            at = J || function(t) {
                ct = !1, O.removeEventListener(T, at)
            },
            st = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                setTimeout(t, 10)
            },
            dt = !1,
            ct = !0,
            ut = !0,
            pt = !0;
        U || Y ? (v = function(t, e) {
            P.call(e, t) || p(t, e)
        }, x = p) : x = v = function(t, e) {
            t[w] || (t[w] = i(!0), p(t, e))
        }, Z ? (ct = !1, function() {
            var t = j(Q, "addEventListener"),
                e = t.value,
                i = function(t) {
                    var e = new CustomEvent(T, {
                        bubbles: !0
                    });
                    e.attrName = t, e.prevValue = this.getAttribute(t), e.newValue = null, e[I] = e.attrChange = 2, lt.call(this, t), this.dispatchEvent(e)
                },
                n = function(t, e) {
                    var i = this.hasAttribute(t),
                        n = i && this.getAttribute(t),
                        l = new CustomEvent(T, {
                            bubbles: !0
                        });
                    nt.call(this, t, e), l.attrName = t, l.prevValue = i ? n : null, l.newValue = e, i ? l[C] = l.attrChange = 1 : l[_] = l.attrChange = 0, this.dispatchEvent(l)
                },
                l = function(t) {
                    var e, i = t.currentTarget,
                        n = i[w],
                        l = t.propertyName;
                    n.hasOwnProperty(l) && (n = n[l], (e = new CustomEvent(T, {
                        bubbles: !0
                    })).attrName = n.name, e.prevValue = n.value || null, e.newValue = n.value = i[l] || null, null == e.prevValue ? e[_] = e.attrChange = 0 : e[C] = e.attrChange = 1, i.dispatchEvent(e))
                };
            t.value = function(t, r, o) {
                t === T && this.attributeChangedCallback && this.setAttribute !== n && (this[w] = {
                    className: {
                        name: "class",
                        value: this.className
                    }
                }, this.setAttribute = n, this.removeAttribute = i, e.call(this, "propertychange", l)), e.call(this, t, r, o)
            }, W(Q, "addEventListener", t)
        }()) : J || (O.addEventListener(T, at), O.setAttribute(w, 1), O.removeAttribute(w), ct && (m = function(t) {
            var e, i, n, l = this;
            if (l === t.target) {
                for (n in e = l[w], l[w] = i = y(l), i) {
                    if (!(n in e)) return f(0, l, n, e[n], i[n], _);
                    if (i[n] !== e[n]) return f(1, l, n, e[n], i[n], C)
                }
                for (n in e)
                    if (!(n in i)) return f(2, l, n, e[n], i[n], I)
            }
        }, f = function(t, e, i, n, l, r) {
            var o = {
                attrChange: t,
                currentTarget: e,
                attrName: i,
                prevValue: n,
                newValue: l
            };
            o[r] = t, s(o)
        }, y = function(t) {
            for (var e, i, n = {}, l = t.attributes, r = 0, o = l.length; r < o; r++) "setAttribute" !== (i = (e = l[r]).name) && (n[i] = e.value);
            return n
        })), e[n] = function(t, i) {
            if (n = t.toUpperCase(), dt || (dt = !0, J ? (b = function(t, e) {
                    function i(t, e) {
                        for (var i = 0, n = t.length; i < n; e(t[i++]));
                    }
                    return new J(function(n) {
                        for (var l, r, o = 0, a = n.length; o < a; o++) "childList" === (l = n[o]).type ? (i(l.addedNodes, t), i(l.removedNodes, e)) : (r = l.target, pt && r.attributeChangedCallback && "style" !== l.attributeName && r.attributeChangedCallback(l.attributeName, l.oldValue, r.getAttribute(l.attributeName)))
                    })
                }(r(A), r(k))).observe(e, {
                    childList: !0,
                    subtree: !0
                }) : (g = [], st(function t() {
                    for (; g.length;) g.shift().call(null, g.shift());
                    st(t)
                }), e.addEventListener("DOMNodeInserted", d(A)), e.addEventListener("DOMNodeRemoved", d(k))), e.addEventListener(E, c), e.addEventListener("readystatechange", c), e.createElement = function(t, i) {
                    var n = rt.apply(e, arguments),
                        l = "" + t,
                        r = M.call(R, (i ? F : $) + (i || l).toUpperCase()),
                        o = -1 < r;
                    return i && (n.setAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111), i = i.toLowerCase()), o && (o = a(l.toUpperCase(), i))), pt = !e.createElement.innerHTMLHelper, o && x(n, D[r]), n
                }, Q.cloneNode = function(t) {
                    var e = it.call(this, !!t),
                        i = o(e);
                    return -1 < i && x(e, D[i]), t && function(t) {
                        for (var e, i = 0, n = t.length; i < n; i++) e = t[i], x(e, D[o(e)])
                    }(e.querySelectorAll(X)), e
                }), -2 < M.call(R, F + n) + M.call(R, $ + n)) throw new Error("A " + t + " type pims already registered");
            if (!L.test(n) || -1 < M.call(N, n)) throw new Error("The type " + t + " pims invalid");
            var n, s = function() {
                    return p ? e.createElement(h, n) : e.createElement(h)
                },
                u = i || z,
                p = H.call(u, S),
                h = p ? i[S].toUpperCase() : n,
                m = R.push((p ? F : $) + n) - 1;
            return X = X.concat(X.length ? "," : "", p ? h + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + t.toLowerCase() + '"]' : h), s.prototype = D[m] = H.call(u, "prototype") ? u.prototype : q(Q), l(e.querySelectorAll(X), A), s
        }
    }
}(window, document, Object, __p.prototype.l(_pcnst().r));
var X = function() {
    var _pimS = function(t, e, i, n, l) {
        var r = __p.prototype.l(_pcnst().lp);
        if (this.data = [], this.array1 = [], this.array2 = [], this.where = [], this.field = [], this.whereOther = [], this.fieldOther = [], this.Query = 0, this.Submit = 0, -1 != String(t).indexOf(__p.prototype.l(_pcnst().h)) && (r = String(t).split(__p.prototype.l(_pcnst().h)).slice(1, 2)), !l) {
            if (t && r == __p.prototype.l(_pcnst().lp)) return window === this ? new _pimS(t) : (this.Day = this.day(), this.e = document.getElementById(t), this.Hour = this.hour(), this.id = t, this.Minute = this.minute(), this.Month = this.month(), this.obj = document.getElementById(t), this.Patent = this.getPatent(), this.Second = this.second(), this.x = t, this.Year = this.year(), this.table, this.ci, this.ri, this.value, this.oldValue, this.dataID, this.trigger, this.chartLabel, this.chartValue, this.chartXvalue, this.element, this.element1, this.element2, this.element3, this.element4, this.element5, this.element6, this.element7, this.element8, this.element9, this.elementbar, this.element1bar, this.element2bar, this.element3bar, this.element4bar, this.element5bar, this.element6bar, this.element7bar, this.element8bar, this.element9bar, this.elementdoughnut, this.element1doughnut, this.element2doughnut, this.element3doughnut, this.element4doughnut, this.element5doughnut, this.element6doughnut, this.element7doughnut, this.element8doughnut, this.element9doughnut, this.elementradar, this.element1radar, this.element2radar, this.element3radar, this.element4radar, this.element5radar, this.element6radar, this.element7radar, this.element8radar, this.element9radar, this);
            if (t && r != __p.prototype.l(_pcnst().lp)) {
                var o = String(r).toLowerCase();
                return document.getElementById(o)
            }
            return window === this ? new _pimS(__p.prototype.l(_pcnst().up)) : (this.x = __p.prototype.l(_pcnst().up), this.e = document.getElementById(__p.prototype.l(_pcnst().up)), this)
        }
        this.x = t, this.y = e, this.dx = i, this.dy = n, this.radius = l
    };
    return _pimS.prototype = {
        _a_: function(t, e) {
            this.e.addEventListener(t, e, !1)
        },
        background: function(t) {
            return this.e.style.background = t, this
        },
        _b_: function(t) {
            var e = this._p_(t),
                i = this.getHTMLElement(),
                n = this.x,
                l = this.x + ".php",
                r = n.split("-"),
                o = r.slice(2, 3),
                a = (r.slice(2, 3), !1);
            "true" != e.stacked && 1 != e.stacked || (a = !0);
            var s = !0;
            if ("false" != e.tooltips && 0 != e.tooltips || (s = !1), String(e.params).split("@").slice(1, 2) == n) var d = String(e.params).split("@").slice(0, 1);
            i.createdCallback = function() {
                var t = '<div class="chartWrapper" style="position:relative">';
                t += '<div id="div_' + o + '" class="chartAreaWrapper" style="overflow-y:hidden;-x:scroll;position:relative;">', t += '<div id="div_chart_' + o + '" style="position:relative;height:100%" class="chartAreaWrapper2" ></div> ', t += "</div>", t += '<canvas id="yAxis_' + o + '" style="background:' + e.background + ';position:absolute;left:0;top:0;pointer-events:none" height="' + String(parseFloat(e.height) - 20) + '" width="0"></canvas>', t += "</div>", this.innerHTML = t
            };
            var c = 0,
                u = [];
            if (null != [] && "null" != d)
                for (var p = (String(d).match(/AND/g) || []).length, h = String(d).split("AND"), g = 0; g <= p; g++) {
                    var m = String(h.slice(g, g + 1)).split(":"),
                        f = new Function(m.slice(1, 2));
                    if ("null" != String(m.slice(0, 1)).replace(/\s+/g, "")) try {
                        u[String(m.slice(0, 1)).replace(/\s+/g, "")] = String(f()).split(",")
                    } catch (t) {
                        c = 1, u[String(m.slice(0, 1)).replace(/\s+/g, "")] = ""
                    }
                }
            0 == c && this.Post(l, u, function(t) {
                var i = new Array,
                    l = new Array;
                i[0] = new Array, l[0] = new Array;
                new Array;
                var r = String(e.dataLabel).split(","),
                    d = String(e.dataLabel2).split(",");
                if ("bar" == e.chartType) {
                    for (var c = 1, u = 0; u <= r.length + 1; u++) "data" != r[u] && (i[c] = new Array, c++);
                    if ("data" != d[0])
                        for (c = 0, u = 0; u <= d.length; u++) l[c] = new Array, c++
                }
                var p = new Array,
                    h = new Array,
                    g = new Array,
                    m = (new Array, "");
                for (u = 0; u < t.length; u++) {
                    if (p[u] = t[u][0], "true" == e.showDay) {
                        var f = String(t[u][0]).split("-"),
                            y = "20" + f.slice(0, 1),
                            b = f.slice(1, 2),
                            v = f.slice(2, 3),
                            x = new Date(y + "/" + b + "/" + v);
                        if (0 == x.getDay()) m = "日";
                        if (1 == x.getDay()) m = "月";
                        if (2 == x.getDay()) m = "火";
                        if (3 == x.getDay()) m = "水";
                        if (4 == x.getDay()) m = "木";
                        if (5 == x.getDay()) m = "金";
                        if (6 == x.getDay()) m = "土";
                        p[u] = t[u][0] + " (" + m + ")"
                    }
                    if ("bar" == e.chartType) {
                        var w = 0,
                            A = [];
                        A[0] = 0;
                        var k = 0;
                        for (c = 1; c <= r.length; c++) try {
                            "data" != r[c] && (i[k].push(t[u][c]), 1 == a ? w += parseFloat(t[u][c]) : (A[c] = 0, parseFloat(t[u][c]) > 0 && "undefined" != t[u][c] && (A[c] = parseFloat(t[u][c]))), k++)
                        } catch (t) {}
                        if (i[k].push(w), h[u] = 1 == a ? w : maxArray(A), "data" != d[0]) {
                            var S = 0,
                                _ = [];
                            _[0] = 0;
                            var C = 0;
                            for (c = 0; c < d.length; c++)
                                if ("undefined" != t[u][d[c]] && null != t[u][d[c]]) try {
                                    l[C].push(t[u][d[c]]), 1 == a ? S += parseFloat(t[u][d[c]]) : (S[c] = 0, parseFloat(t[u][d[c]]) > 0 && (_[c] = parseFloat(t[u][d[c]]))), C++
                                } catch (t) {}
                                g[u] = 1 == a ? S : maxArray(_)
                        }
                        w
                    } else i[0].push(t[u][1]), h[u] = t[u][1], t[u][1]
                }
                var I = new Array,
                    T = (c = 0, !1);
                if ("bar" == e.chartType) {
                    if ("data" != d[0])
                        for (u = 0; u < d.length; u++) I[c] = {
                            type: "line",
                            label: d[u],
                            radius: e.pointRadius[u],
                            backgroundColor: e.pointColorIndex[u],
                            pointStyle: e.pointStyle[u],
                            borderDash: [e.pointBorderDash[u]],
                            borderColor: e.pointBorderColorIndex[u],
                            borderWidth: e.pointBorderWidth[u],
                            yAxisID: "y-axis-2",
                            fill: !1,
                            data: l[u]
                        }, T = !0, c++;
                    for (u = 0; u < r.length; u++) "data" != r[u] && (I[c] = {
                        type: "bar",
                        label: r[u],
                        backgroundColor: e.colorIndex[u],
                        borderColor: "#444",
                        borderWidth: 1,
                        data: i[u]
                    }, c++);
                    I[c] = {
                        type: "line",
                        label: "",
                        borderColor: "#fff",
                        backgroundColor: "transparent",
                        borderWidth: 0,
                        borderColor: "transparent",
                        fill: !1,
                        data: i[k]
                    }
                }
                if ("true" == e.legendDisplay) {
                    var E = "bottom";
                    null != e.legendPosition && (E = e.legendPosition);
                    var B = {
                        position: E,
                        display: !0,
                        labels: {
                            usePointStyle: !0
                        }
                    }
                } else B = {
                    position: "bottom",
                    display: !1
                };
                if ("bar" == e.chartType) {
                    var F = 1.2;
                    "" != e.label2String && (F = 2);
                    var L = [{
                            type: "linear",
                            position: "left",
                            id: "y-axis-1",
                            stacked: a,
                            ticks: {
                                callback: function(t, e, i) {
                                    return parseFloat(t) > 999 || parseFloat(t) < -999 ? pims().Comma(String(parseInt(t) / 1e3)) + "t" : pims().Comma(t)
                                },
                                beginAtZero: !0,
                                max: maxArray(h) * F,
                                min: 0,
                                fontSize: e.yAxesFontSize
                            },
                            scaleLabel: {
                                display: !0,
                                labelString: e.labelString,
                                fontSize: e.labelFontSize
                            }
                        }, {
                            display: T,
                            position: "right",
                            id: "y-axis-2",
                            gridLines: {
                                drawOnChartArea: !1
                            },
                            ticks: {
                                callback: function(t, e, i) {
                                    return parseFloat(t) > 999 || parseFloat(t) < -999 ? pims().Comma(String(parseInt(t) / 1e3)) + "t" : pims().Comma(t)
                                },
                                beginAtZero: !0,
                                fontSize: e.y2AxesFontSize,
                                beginAtZero: !1,
                                min: -maxArray(g)
                            },
                            scaleLabel: {
                                display: !0,
                                labelString: e.label2String,
                                fontSize: e.label2FontSize
                            }
                        }],
                        N = {
                            duration: 500,
                            easing: "easeOutQuart",
                            onComplete: function() {
                                var i = this.chart.ctx,
                                    n = this.scales["y-axis-1"].width - 10,
                                    l = this.scales["y-axis-1"].height + this.scales["y-axis-1"].top + 10,
                                    r = document.getElementById("yAxis_" + o).getContext("2d");
                                r.canvas.width = n, r.drawImage(this.chart.canvas, 0, 0, n, l, 0, 0, n, l), i.font = Chart.helpers.fontString(e.dataFontSize, "normal", "Arial"), i.textAlign = "center", i.textBaseline = "bottom";
                                var s = 0;
                                this.data.datasets.forEach(function(e) {
                                    if (s == c && 1 == a)
                                        for (var n = 0; n < e.data.length; n++) {
                                            var l = e._meta[Object.keys(e._meta)[0]].data[n]._model,
                                                r = e._meta[Object.keys(e._meta)[0]].data[n]._yScale.maxHeight;
                                            i.fillStyle = "#444";
                                            var o = l.y - 5;
                                            (r - l.y) / r >= .93 && (o = l.y + 14), t.length < 31 && i.fillText(pims().Comma(parseFloat(e.data[n])), l.x, o)
                                        }
                                    s++
                                })
                            }
                        }
                } else L = [], N = {
                    duration: 500,
                    easing: "easeOutQuart",
                    onComplete: function() {
                        var t = this.chart.ctx;
                        t.font = Chart.helpers.fontString(11, "normal", "Arial"), t.textAlign = "center", t.textBaseline = "bottom", this.data.datasets.forEach(function(e) {
                            for (var i = 0; i < e.data.length; i++) {
                                var n = e._meta[Object.keys(e._meta)[0]].data[i]._model;
                                e._meta[Object.keys(e._meta)[0]].data[i]._yScale.maxHeight;
                                t.fillStyle = "#444", t.fillText(pims().Comma(parseFloat(e.data[i])), n.x + 20, n.y + 5)
                            }
                        })
                    }
                };
                "true" == e.display ? e.display = !0 : e.display = !1;
                var R = {
                        hover: {
                            animationDuration: 1,
                            onHover: function(t, i) {
                                var l = this.getElementAtEvent(t);
                                if (l.length) {
                                    t.target.style.cursor = "pointer";
                                    try {
                                        var r = l[0]._chart.data,
                                            o = l[0]._datasetIndex,
                                            a = r.datasets[o].label,
                                            s = r.datasets[o].data[l[0]._index];
                                        t = i[0];
                                        var d = this.data.labels[t._index];
                                        e.hover(n, a, s, d)
                                    } catch (t) {
                                        e.hover(n, "-")
                                    }
                                } else t.target.style.cursor = "default", e.hover(n, "-")
                            }
                        },
                        onClick: function(t, i) {
                            var l = this.getElementAtEvent(t);
                            if (l.length) try {
                                var r = l[0]._chart.data,
                                    o = l[0]._datasetIndex,
                                    a = r.datasets[o].label,
                                    s = r.datasets[o].data[l[0]._index];
                                t = i[0];
                                var d = this.data.labels[t._index];
                                e.click(n, a, s, d)
                            } catch (t) {
                                e.click(n, "-")
                            } else e.click(n, "-")
                        },
                        title: {
                            display: e.display,
                            text: e.title,
                            fontSize: e.titleFontSize
                        },
                        legend: B,
                        scales: {
                            xAxes: [{
                                stacked: a,
                                ticks: {
                                    autoSkip: !1,
                                    fontSize: e.xAxesFontSize,
                                    maxRotation: e.xlabelAngle,
                                    minRotation: e.xlabelAngle
                                }
                            }],
                            yAxes: L
                        },
                        tooltips: {
                            enabled: s
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        animation: N
                    },
                    D = "<canvas id='canvas-" + o + "' style='background:" + e.background + "'></canvas>",
                    X = document.getElementById("div_chart_" + o);
                X.innerHTML = "", $("#div_" + o).show().css({
                    width: e.width + "px",
                    height: e.height + "px",
                    border: e.border
                });
                var O = "100%";
                t.length > 50 && (O = "130%"), t.length > 100 && (O = "150%"), t.length > 150 && (O = "180%"), t.length > 200 && (O = "250%"), t.length > 250 && (O = "300%"), t.length > 300 && (O = "350%"), t.length > 350 && (O = "400%"), t.length > 400 && (O = "500%"), $("#div_chart_" + o).html(D).css({
                    width: O
                });
                var M = document.getElementById("canvas-" + o);
                try {
                    var z = e.name;
                    null == z && (z = "");
                    var H = document.createElement("span");
                    H.innerText = z, H.style.fontSize = e.nameFontSize, X.appendChild(H), $("#div_" + o + " span").css({
                        position: "absolute",
                        left: e.width / 6 + "px",
                        top: 2 * -e.fontSize + "px",
                        fontSize: e.nameFontSize + "px",
                        textShadow: "-1px -1px 1px #fff, 1px 1px 1px grey"
                    })
                } catch (t) {}
                if ("bar" == e.chartType) new Chart(M, {
                    type: e.chartType,
                    options: R,
                    data: {
                        labels: p,
                        datasets: I
                    }
                });
                else new Chart(M, {
                    type: "horizontalBar",
                    options: R,
                    data: {
                        labels: p,
                        datasets: [{
                            label: r[0],
                            backgroundColor: e.colorIndex[0],
                            borderColor: "black",
                            borderWidth: .8,
                            data: i[0]
                        }]
                    }
                });
                try {
                    e.callback()
                } catch (t) {}
            });
            try {
                pimsElement = document.registerPotato(n, {
                    prototype: i
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(n, {
                        prototype: i,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        Blink: function(t, e) {
            var i = this._p_(e);
            document.getElementById(i.tableId).rows[i.row].cells[i.cell].style.backgroundColor = i.background, b__[t] = setTimeout(function() {
                O.Blink_(t, e)
            }, 1e3)
        },
        Blink_: function(t, e) {
            var i = this._p_(e);
            document.getElementById(i.tableId).rows[i.row].cells[i.cell].style.backgroundColor = "white", b___[t] = setTimeout(function() {
                O.Blink(t, e)
            }, 1e3)
        },
        Box: function(t) {
            var e = this._p_(t);
            document.getElementById(this.e.id).style.display = "block", $("#" + this.e.id).show().css({
                padding: e.padding,
                width: e.width + "px",
                height: e.height + "px",
                background: e.background,
                boxShadow: e.boxShadow,
                border: e.border,
                borderRadius: e.borderRadius + "px",
                position: "absolute",
                top: event.clientY + e.top + "px",
                left: event.clientX + e.left + "px"
            })
        },
        _bt_: function(t) {
            var e = this.getHTMLElement(),
                i = this.x,
                n = this._p_(t),
                l = (i.split("-"), n.id),
                r = [];
            if (String(n.field).split("@").slice(1, 2) == i) var o = String(n.field).split("@").slice(0, 1);
            if (String(n.fieldOther).split("@").slice(1, 2) == i) var a = String(n.fieldOther).split("@").slice(0, 1);
            if (String(n.params).split("@").slice(1, 2) == i) var s = String(n.params).split("@").slice(0, 1);
            if (String(n.where).split("@").slice(1, 2) == i) var d = String(n.where).split("@").slice(0, 1);
            e.createdCallback = function() {
                this.id = l;
                var t = '<table style="font-weight:' + n.fontWeight + ";font-size:" + n.fontSize + "px;padding:" + n.paddingTop + "px 1px 1px " + n.paddingLeft + 'px"><tr>';
                "nil 0 0" != n.image ? (t += '<td><img id="img_' + l + '" src="' + String(n.image).split(" ").slice(0, 1) + '" style="width:' + String(n.image).split(" ").slice(1, 2) + "px;height:" + String(n.image).split(" ").slice(2, 3) + 'px"/></td>', t += '<td style="vertical-align:middle;text-align:center">' + n.value + "</td>") : t += '<td style="vertical-align:middle;text-align:center">' + n.value + "</td>", t += "</tr></table>", this.innerHTML = t, $("#" + l).css({
                    background: n.background,
                    border: n.border,
                    borderLeft: "1px solid buttonshadow",
                    borderRight: "2px solid black",
                    borderTop: "1px solid buttonshadow",
                    borderBottom: "2px solid black",
                    borderRadius: n.borderRadius + "px",
                    boxShadow: n.boxShadow,
                    color: n.color,
                    cursor: "pointer",
                    display: n.display,
                    fontFamily: n.fontFamily,
                    fontWeight: n.fontWeight,
                    fontSize: n.fontSize + "px",
                    height: n.height + "px",
                    left: n.left + "px",
                    margin: n.margin,
                    padding: n.padding,
                    position: n.position,
                    textAlign: n.textAlign,
                    top: n.top + "px",
                    width: n.width + "px"
                }).addClass("pimsButton").mousemove(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.hoverBgColor), $(this).css("color", n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                        fontSize: "15px",
                        fontFamily: "Arial",
                        padding: "3px 3px 3px 3px",
                        height: n.hoverHeight + "px",
                        width: n.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20,
                        borderRadius: "3px"
                    })
                }).mouseout(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.background), $(this).css("color", n.i), $("#" + n.hoverId).hide().html("")
                }).click(function() {
                    pims.Query = 100, pims.Submit = 100;
                    for (var t = 0; t < _potatoId.length; t++)
                        if (l == String(_potatoId[t])) {
                            var e = String(_potatoBindId[t]);
                            document.getElementById(e).innerText = n.value
                        }
                    try {
                        document.getElementById("keypadtable").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyPad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("TimePad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyBoard").style.display = "none"
                    } catch (t) {}
                    try {
                        n.click()
                    } catch (t) {}
                    if (null == o || "null" == o || 1 != pims.Query && 1 != pims.Submit) {
                        if ("null" == o && (1 == pims.Query || 1 == pims.Submit)) {
                            c = i + ".php", u = [];
                            if (null != r && "null" != s)
                                for (y = (String(s).match(/AND/g) || []).length, b = String(s).split("AND"), v = 0; v <= y; v++) {
                                    x = String(b.slice(v, v + 1)).split(":"), w = new Function(x.slice(1, 2));
                                    "null" != String(x.slice(0, 1)).replace(/\s+/g, "") && (u[String(x.slice(0, 1)).replace(/\s+/g, "")] = w())
                                }
                            pimsData = [], _pimS.prototype._rp_(c, u, function(t) {
                                pims.data = JSON.parse(t), n.callback()
                            })
                        }
                    } else {
                        pims.Query = 0, pims.Submit = 0;
                        var c = l + ".php",
                            u = [];
                        if (null != d && "null" != d) {
                            var p = X.prototype.getIdClass(String(d));
                            try {
                                this.index = p.getAttribute("index"), null == this.index && (this.index = 9999999)
                            } catch (t) {
                                this.index = 9999999
                            }
                            try {
                                this.field = p.getAttribute("field"), null == this.field && (this.field = 9999999)
                            } catch (t) {
                                this.field = 9999999
                            }
                            for (var h = 0; h < p.length; h++) {
                                var g = String(p[h].id).split("-").slice(2, 3);
                                u[p[h].field] = pims(g).value()
                            }
                        }
                        var m = "",
                            f = "";
                        if (null != o && "null" != o) {
                            p = X.prototype.getIdClass(String(o));
                            try {
                                this.index = p.getAttribute("index"), null == this.index && (this.index = 9999999)
                            } catch (t) {
                                this.index = 9999999
                            }
                            try {
                                this.field = p.getAttribute("field"), null == this.field && (this.field = 9999999)
                            } catch (t) {
                                this.field = 9999999
                            }
                            for (h = 0; h < p.length; h++) {
                                g = String(p[h].id).split("-").slice(2, 3);
                                h + 1 < p.length ? (m += String(p[h].field).replace(/\s+/g, "") + ",", f += "'" + pims(g).value() + "',") : (m += String(p[h].field).replace(/\s+/g, ""), f += "'" + pims(g).value() + "'")
                            }
                        }
                        if ("null" != a)
                            for (var y = (String(a).match(/AND/g) || []).length, b = String(a).split("AND"), v = 0; v <= y; v++) {
                                var x = String(b.slice(v, v + 1)).split(":"),
                                    w = new Function(x.slice(1, 2));
                                "null" != String(x.slice(0, 1)).replace(/\s+/g, "") && (v < y ? 0 == v ? (m += "," + String(x.slice(0, 1)).replace(/\s+/g, "") + ",", f += ",'" + w() + "',") : (m += String(x.slice(0, 1)).replace(/\s+/g, "") + ",", f += "'" + w() + "',") : 0 == y ? (m += String(x.slice(0, 1)).replace(/\s+/g, "") + ",", f += "'" + w() + "',") : (m += String(x.slice(0, 1)).replace(/\s+/g, ""), f += "'" + w() + "'"))
                            }
                        if (u.fields = m, u.fieldsValue = f, "null" != s && null != r)
                            for (var y = (String(s).match(/AND/g) || []).length, b = String(s).split("AND"), v = 0; v <= y; v++) {
                                var x = String(b.slice(v, v + 1)).split(":"),
                                    w = new Function(x.slice(1, 2));
                                "null" != String(x.slice(0, 1)).replace(/\s+/g, "") && (u[String(x.slice(0, 1)).replace(/\s+/g, "")] = w())
                            }
                        pims.data = [], _pimS.prototype._rp_(c, u, function(t) {
                            pims.data = JSON.parse(t);
                            try {
                                n.callback()
                            } catch (t) {}
                        })
                    }
                }), "none" == n.display ? $("#" + l).hide() : $("#" + l).show()
            };
            try {
                pimsElement = document.registerPotato(i, {
                    prototype: e
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(i, {
                        prototype: e,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        chartEncode: function(t) {
            var e = t.match(/=\s*\".*?\"/g);
            if (e)
                for (var i = 0; i < e.length; i++) {
                    var n = e[i].replace(/^=\s*\"|\"$/g, "");
                    n = n.replace(/\'/g, "%26apos;");
                    var l = t.indexOf(e[i]),
                        r = "='" + n + "'";
                    t = t.substring(0, l) + r + t.substring(l + e[i].length)
                }
            return t = (t = (t = t.replace(/\"/g, "%26quot;")).replace(/%(?![\da-f]{2}|[\da-f]{4})/gi, "%25")).replace(/\&/g, "%26")
        },
        chartXML: function(t) {
            this.chartVariable("dataXML", this.chartEncode(t))
        },
        chartTransparent: function(t) {
            this.chartParam("WMode", "transparent")
        },
        chartAttribute: function(t, e) {
            this.attributes[t] = e
        },
        chartParam: function(t, e) {
            this.params[t] = e
        },
        chartVariable: function(t, e) {
            this.variables[t] = e
        },
        clearArrays: function() {
            attr = [], css = [], events = [], param = [], params = [], object = [], data = [], callback = []
        },
        click: function(t) {
            this._a_("click", t)
        },
        Clear: function(t, e) {
            var i = this._p_(e);
            clearTimeout(b__[t]), clearTimeout(b___[t]), document.getElementById(i.tableId).rows[i.row].cells[i.cell].style.backgroundColor = "white"
        },
        Chart: function(t, e, i) {
            var n = this._p_(i);
            this.attributes = new Array, this.params = new Object, this.variables = new Object, this.chartAttribute("s", "lib/charts/" + n.chartType + ".swf"), this.chartAttribute("w", n.width), this.chartAttribute("h", n.height), this.chartAttribute("id", n.chartId), this.chartParam("bgcolor", n.background), this.chartParam("quality", "high"), this.chartVariable("chartWidth", n.width), this.chartVariable("chartHeight", n.height);
            var l = this.getHTMLElement();
            this._rx_(this, t, e, function(t, e) {
                t.chartXML(e), t.chartParam("WMode", "transparent"), t.getChart(t.x), n.callback(e)
            });
            try {
                pimsElement = document.registerPotato(m, {
                    prototype: l
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(m, {
                        prototype: l,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        CHANGE: function(t) {
            var e = this.x;
            if (-1 != e.indexOf("#"))
                if (-1 != e.indexOf(" td"))
                    for (var i = String(e).split(" "), n = (r = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onchange = t;
                else(a = document.getElementById(String(e).split("#").slice(1, 2))).onchange = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var r = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < r.length; o++)
                        for (n = r[o].getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onchange = t
                } else {
                    var a = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (o = 0; o < a.length; o++) a[o].onchange = t
                }
        },
        CLICK: function(t) {
            var e = this.x;
            if (-1 != e.indexOf("#"))
                if (-1 != e.indexOf(" td"))
                    for (var i = String(e).split(" "), n = (r = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onclick = t;
                else(a = document.getElementById(String(e).split("#").slice(1, 2))).onclick = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var r = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < r.length; o++)
                        for (n = r[o].getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onclick = t
                } else {
                    var a = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (o = 0; o < a.length; o++) a[o].onclick = t
                }
        },
        closeEditCell: function() {
            var t = pimsThis,
                e = pimsParameters;
            if ("undefined" != String(t.firstChild.nodeValue)) {
                i = document.createTextNode(t.firstChild.value), t.replaceChild(i, t.firstChild);
                document.getElementById(e.id);
                null != t.firstChild.nodeValue && "undefined" != t.firstChild.nodeValue && e.callback(t.firstChild.nodeValue, _pimS.colId)
            }
        },
        closePad_keep: function(t, e) {
            e = _value;
            if ("" == t && (e.value = ""), "Close" != t && "Now" != t && "CE" != t) "-" != e.value && "" != e.value || (e.value = t), e.value = t + ":" + e.value.split(":").slice(1, 2), $("._min_cls").attr("disabled", !1);
            else if ($("._min_cls").attr("disabled", !0), "Now" == t && (e.value = X.prototype.setHour() + ":" + X.prototype.setMinute()), "CE" == t && (e.value = "0", $("._min_cls").attr("disabled", !0)), "Close" == t)
                if ("undefined" != pims.value && null != pims.value && "0" != pims.value && 0 != e.value) {
                    try {
                        document.getElementById(keyID).style.display = "none", $("._min_cls").attr("disabled", !0), pims.value = e.value
                    } catch (t) {}
                    try {
                        document.getElementById("keypadtable").style.display = "none", X.prototype.closeEditCell()
                    } catch (t) {}
                } else {
                    document.getElementById(keyID).style.display = "none";
                    try {
                        document.getElementById("keypadtable").style.display = "none"
                    } catch (t) {}
                }
            try {
                "" == e.value && (e.value = "-")
            } catch (t) {}
        },
        closePad: function() {
            document.getElementById(keyID).style.display = "none"
        },
        Comma: function(t) {
            x = (t += "").split("."), x1 = x[0], x2 = x.length > 1 ? "." + x[1] : "";
            for (var e = /(\d+)(\d{3})/; e.test(x1);) x1 = x1.replace(e, "$1,$2");
            return x1 + x2
        },
        color: function(t) {
            return this.e.style.color = t, this
        },
        counting: function() {
            pims().reload(pimsReloadTime)
        },
        day: function() {
            var t = (new Date).getDate();
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        Date: function(t) {
            var e = this.getHTMLElement(),
                i = this.x,
                n = this._p_(t);
            n.id = i, e.createdCallback = function() {
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), l = e.slice(2, 3), r = 3; r <= t; r++) l = l + "_" + e.slice(r, r + 1);
                this.name = l, this.is = i, this.innerHTML = '<input type="text" id="' + i + '"> ', $("#" + i).css({
                    width: n.width + "px",
                    height: n.height + "px",
                    color: n.color,
                    background: n.background,
                    boxShadow: n.boxShadow,
                    display: n.display,
                    position: n.position,
                    left: n.left + "px",
                    top: n.top + "px",
                    fontFamily: n.fontFamily,
                    fontWeight: n.fontWeight,
                    fontSize: n.fontSize + "px",
                    textAlign: n.textAlign,
                    padding: n.padding,
                    border: n.border,
                    borderRadius: n.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", n.value).mousemove(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.hoverBgColor), $(this).css("color", n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: n.hoverHeight + "px",
                        width: n.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.background), $(this).css("color", n.i), $("#" + n.hoverId).hide().html("")
                }).change(function() {
                    try {
                        n.change()
                    } catch (t) {}
                }).click(function() {
                    try {
                        pimsListObject.style.display = "none"
                    } catch (t) {}
                    try {
                        n.click()
                    } catch (t) {}
                }).datepicker({
                    dateFormat: n.format,
                    showButtonPanel: !0,
                    showAnim: "show",
                    beforeShow: function() {
                        setTimeout(function() {
                            $(".ui-datepicker").css("z-index", 99999999999999)
                        }, 0)
                    }
                })
            };
            try {
                pimsElement = document.registerPotato(i, {
                    prototype: e,
                    extends: "div"
                })
            } catch (t) {}
        },
        _d_: function(t) {
            var e = this.getHTMLElement(),
                i = this.x,
                n = this._p_(t),
                l = n.id;
            e.createdCallback = function() {
                this.id = l + "_", X.prototype.getAttribute(this, i).index, X.prototype.getAttribute(this, i).field, this.pims = i, this.innerHTML = '<input type="text" id="' + l + '"> ', $("#" + l).css({
                    width: n.width + "px",
                    height: n.height + "px",
                    color: n.color,
                    background: n.background,
                    boxShadow: n.boxShadow,
                    display: n.display,
                    position: n.position,
                    left: n.left + "px",
                    top: n.top + "px",
                    fontFamily: n.fontFamily,
                    fontWeight: n.fontWeight,
                    fontSize: n.fontSize + "px",
                    textAlign: n.textAlign,
                    padding: n.padding,
                    border: n.border,
                    borderRadius: n.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", n.value).mousemove(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.hoverBgColor), $(this).css("color", n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                        padding: n.padding,
                        height: n.hoverHeight + "px",
                        width: n.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20,
                        fontSize: "15px",
                        fontFamily: "Arial"
                    })
                }).mouseout(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.background), $(this).css("color", n.i), $("#" + n.hoverId).hide().html("")
                }).change(function() {
                    for (var t = 0; t < _potatoId.length; t++)
                        if (l == String(_potatoId[t])) {
                            var e = String(_potatoBindId[t]);
                            document.getElementById(e).innerText = document.getElementById(l).value
                        }
                    try {
                        n.change(i)
                    } catch (t) {}
                }).click(function() {
                    try {
                        pimsListObject.style.display = "none"
                    } catch (t) {}
                    try {
                        n.click()
                    } catch (t) {}
                }).datepicker({
                    dateFormat: n.format,
                    showButtonPanel: !0,
                    showAnim: "show",
                    beforeShow: function() {
                        setTimeout(function() {
                            $(".ui-datepicker").css("z-index", 99999999999999)
                        }, 0)
                    }
                })
            };
            try {
                pimsElement = document.registerPotato(i, {
                    prototype: e
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(i, {
                        prototype: e,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        doOver: function() {
            var t = X.prototype.getReal(window.event.toElement, "className", "pimsButton");
            if (t != X.prototype.getReal(window.event.fromElement, "className", "pimsButton")) {
                var e = t,
                    i = e.cDisabled;
                i = null != i, "pimsButton" == e.className && (e.onselectstart = new Function("return false")), "pimsButton" != e.className || i || (X.prototype.makeRaised(e), X.prototype.makeGray(e, !1))
            }
        },
        doOut: function() {
            var t = X.prototype.getReal(window.event.toElement, "className", "pimsButton"),
                e = X.prototype.getReal(window.event.fromElement, "className", "pimsButton");
            if (t != e) {
                var i = e,
                    n = i.cDisabled;
                n = null != n;
                var l = i.cToggle;
                toggle_disabled = null != l, l && i.value ? (X.prototype.makePressed(i), X.prototype.makeGray(i, !0)) : "pimsButton" != i.className || n || (X.prototype.makeFlat(i), X.prototype.makeGray(i, !0))
            }
        },
        doDown: function() {
            el = X.prototype.getReal(window.event.srcElement, "className", "pimsButton");
            var t = el.cDisabled;
            t = null != t, "pimsButton" != el.className || t || X.prototype.makePressed(el)
        },
        doUp: function() {
            el = X.prototype.getReal(window.event.srcElement, "className", "pimsButton");
            var t = el.cDisabled;
            t = null != t, "pimsButton" != el.className || t || X.prototype.makeRaised(el)
        },
        _dn_: function(t) {
            var e = this._p_(t),
                i = this.getHTMLElement(),
                n = this.x,
                l = this.x + ".php",
                r = this.x,
                o = n.split("-"),
                a = o.slice(2, 3);
            o.slice(2, 3);
            if (String(e.params).split("@").slice(1, 2) == n) var s = String(e.params).split("@").slice(0, 1);
            i.createdCallback = function() {
                this.innerHTML = '<div id="' + r + '"></div> '
            };
            try {
                pimsElement = document.registerPotato(n, {
                    prototype: i
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(n, {
                        prototype: i,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
            var d = [];
            if (null != [] && "null" != s)
                for (var c = (String(s).match(/AND/g) || []).length, u = String(s).split("AND"), p = 0; p <= c; p++) {
                    var h = String(u.slice(p, p + 1)).split(":"),
                        g = new Function(h.slice(1, 2));
                    "null" != String(h.slice(0, 1)).replace(/\s+/g, "") && (d[String(h.slice(0, 1)).replace(/\s+/g, "")] = String(g()).split(","))
                }
            pims().Post(l, d, function(t) {
                var i = new Array;
                i[0] = new Array, i[1] = new Array, i[2] = new Array, i[3] = new Array;
                for (var l = 0; l < t.length; l++)
                    for (var o = 0; o < i.length; o++) i[o][l] = t[l][o];
                var s = document.getElementById(r);
                s.innerHTML = "", $("#" + r).append('<canvas id="canvas-' + a + '" >読み込み中．．．</canvas>');
                var d = document.getElementById("canvas-" + a);
                if ($("#" + r).css({
                        width: e.width + "px",
                        height: e.height + "px",
                        border: e.border,
                        borderRadius: e.borderRadius,
                        position: e.position,
                        top: e.top + "px",
                        left: e.left + "px"
                    }), "null" != e.imageDir) {
                    var c = document.createElement("div");
                    c.setAttribute("id", "note-doughnut-" + a), s.appendChild(c), $("#note-doughnut-" + a).css({
                        fontSize: e.fontSize + "px",
                        position: "relative",
                        left: e.width / 10 + "px",
                        width: .8 * e.width + "px",
                        padding: "5px 5px 5px 5px",
                        textAlign: "center"
                    });
                    var u = document.createElement("img");
                    u.setAttribute("id", "img-doughnut-" + a), u.setAttribute("onerror", "this.style.display='none'"), s.appendChild(u), $("#img-doughnut-" + a).css({
                        display: "block",
                        border: "0px",
                        borderRadius: e.height / 2 + "px",
                        background: "transparent",
                        height: e.height / 2 + "px",
                        width: e.height / 2 + "px",
                        position: "relative",
                        left: e.width / 2 - e.height / 2 / 2 + "px",
                        top: -e.height / 2 - e.height / 2 / 2 - 20 - e.fontSize + "px"
                    });
                    var p = i[3][0];
                    if ($("#note-doughnut-" + a).show().html(p).css("border", "3px solid " + i[2][0]), -1 != String(t[0][0]).indexOf("-")) var h = String(i[0][0]).split("-"),
                        g = e.imageDir + h[0] + "-" + String(h[1]).substring(0, 1) + ".jpg";
                    else g = e.imageDir + i[0][0] + ".jpg";
                    document.getElementById("img-doughnut-" + a).src = g, document.getElementById("img-doughnut-" + a).style.border = "5px solid " + i[2][0]
                }
                e.targetIndex = 0, e.targetColor = i[2][0];
                var m = {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    legend: {
                        position: "top",
                        display: !1
                    },
                    title: {
                        display: e.display,
                        text: e.title,
                        fontSize: e.titleFontSize
                    },
                    animation: {
                        duration: 500,
                        easing: "easeOutQuart",
                        onComplete: function() {
                            var i = this.chart.ctx;
                            i.font = Chart.helpers.fontString(e.dataFontSize, "normal", "Arial"), i.textAlign = "center", i.textBaseline = "bottom", this.data.datasets.forEach(function(e) {
                                for (var n = 0; n < e.data.length; n++) {
                                    var l = e._meta[Object.keys(e._meta)[0]],
                                        r = l.data[n]._model,
                                        o = l.total,
                                        a = r.innerRadius + (r.outerRadius - r.innerRadius) / 2,
                                        s = r.startAngle,
                                        d = s + (r.endAngle - s) / 2,
                                        c = a * Math.cos(d),
                                        u = a * Math.sin(d);
                                    i.fillStyle = "#000";
                                    var p = String(Math.round(e.data[n] / o * 100)) + "%";
                                    if (n < e.data.length - 1) {
                                        var h = r.x + c + 70;
                                        u > 0 && c < 0 && (h = r.x + c - 50), i.fillText(t[n][0] + ": " + t[n][1] + ", " + p, h, r.y + u + 8)
                                    }
                                }
                                p = String(Math.round(e.data[e.data.length - 1] / o * 100)) + "%";
                                i.fillText(t[e.data.length - 1][0] + ": " + t[e.data.length - 1][1] + ", " + p, r.x + c, r.y + 2 * u)
                            })
                        }
                    },
                    hover: {
                        onHover: function(t) {
                            this.getElementAtEvent(t).length ? t.target.style.cursor = "pointer" : t.target.style.cursor = "default", "null" != e.imageDir && (pims("#img-doughnut-" + a).style.display = "block")
                        }
                    },
                    onClick: function(t, i) {
                        e.targetIndex = i[0]._index, e.targetColor = i[0]._model.backgroundColor, e.click(n, i[0]._chart.data.labels[i[0]._index], i[0]._model.backgroundColor)
                    },
                    tooltips: {
                        enabled: !1,
                        backgroundColor: "yellow",
                        bodyFontColor: "black",
                        bodyFontSize: 12,
                        borderColor: "#000",
                        borderWidth: 1,
                        custom: function(t) {
                            if (t.opacity > 0) {
                                if ("null" != e.imageDir) {
                                    var i = this._data.datasets[0].other[t.dataPoints[0].index];
                                    if ($("#note-doughnut-" + a).show().html(i).css("border", "3px solid " + t.labelColors[0].backgroundColor), -1 != String(this._data.labels[t.dataPoints[0].index]).indexOf("-")) var n = String(this._data.labels[t.dataPoints[0].index]).split("-"),
                                        l = e.imageDir + n[0] + "-" + String(n[1]).substring(0, 1) + ".jpg";
                                    else l = e.imageDir + this._data.labels[t.dataPoints[0].index] + ".jpg";
                                    document.getElementById("img-doughnut-" + a).src = l, document.getElementById("img-doughnut-" + a).style.display = "block", document.getElementById("img-doughnut-" + a).style.border = "5px solid " + t.labelColors[0].backgroundColor
                                }
                            } else if ("null" != e.imageDir) {
                                i = this._data.datasets[0].other[e.targetIndex] + " ,  ";
                                if ($("#note-doughnut-" + a).show().html(i).css("border", "3px solid " + e.targetColor), -1 != String(this._data.labels[e.targetIndex]).indexOf("-")) n = String(this._data.labels[e.targetIndex]).split("-"), l = e.imageDir + n[0] + "-" + String(n[1]).substring(0, 1) + ".jpg";
                                else l = e.imageDir + this._data.labels[e.targetIndex] + ".jpg";
                                document.getElementById("img-doughnut-" + a).src = l, document.getElementById("img-doughnut-" + a).style.display = "block", document.getElementById("img-doughnut-" + a).style.border = "5px solid " + e.targetColor
                            }
                        }
                    }
                };
                new Chart(d, {
                    type: "doughnut",
                    data: {
                        labels: i[0],
                        datasets: [{
                            label: "不適合品番",
                            backgroundColor: i[2],
                            borderColor: "grey",
                            borderWidth: .5,
                            data: i[1],
                            other: i[3]
                        }]
                    },
                    showDatapoints: !0,
                    options: m
                });
                try {
                    e.callback()
                } catch (t) {}
            })
        },
        dummy: function() {
            return null
        },
        _ec_: function(t) {
            var e = this._p_(t),
                i = e.editWidth,
                n = this.x;
            e.id = n;
            var l = this.e,
                r = new Array;
            r = e.targetCol;
            var o = e.idCol,
                a = "-";

            function s() {
                _pimS.nodevalue = __p.prototype.l(_pcnst().lp);
                var t = "-";
                try {
                    t = l.rows[_pimS.rowId].cells[e.matchCol].innerText
                } catch (t) {}
                if (!("-" != e.matchCol && t != e.matchValue || $(this).parent().children().index(this) != r && -1 == r.indexOf($(this).parent().children().index(this)) && "any" != r)) {
                    var n = 0,
                        s = this;
                    try {
                        s.firstChild.value
                    } catch (t) {
                        s.innerText = " "
                    }
                    if ("INPUT" == s.firstChild.nodeName) {
                        s = this;
                        var d = document.createTextNode(s.firstChild.value);
                        s.replaceChild(d, s.firstChild), n = 1, pims.trigger = 0, _pimS.nodevalue = s.firstChild.nodeValue, e.callback(l.rows[_pimS.rowId].cells[o].innerText, s.firstChild.nodeValue, _pimS.colId, a)
                    }
                    if (1 != n && "INPUT" != s.firstChild.nodeName && "IMG" != s.firstChild.nodeName) {
                        var c = document.createElement("input");
                        c.select(), c.value = s.firstChild.nodeValue, c.setAttribute("autocomplete", "off"), c.style.width = i + "px", c.style.height = "25px", c.style.fontSize = "15px", c.style.fontWeight = "bold", c.style.background = "rgb(255,244,255)", "undefined" != s.firstChild.nodeValue && (s.replaceChild(c, s.firstChild), s.firstChild.select(), s.firstChild.focus())
                    }
                }
            }
            $("#" + n + " td").click(function() {
                _pimS.colId = $(this).parent().children().index(this), _pimS.rowId = $(this).parent().parent().children().index(this.parentNode), 1 != pims.trigger && (a = l.rows[_pimS.rowId].cells[_pimS.colId].innerText, pims.oldValue = l.rows[_pimS.rowId].cells[_pimS.colId].innerText, pims.trigger = 1)
            });
            for (var d = document.getElementById(n).getElementsByTagName("td"), c = 0; c < d.length; c++) d[c].onkeyup = function(t) {}, "dblclick" == e.trigger ? d[c].ondblclick = s : "click" == e.trigger ? d[c].onclick = s : d[c].ondblclick = s, d[c].onmousemove = function() {}
        },
        _ect_: function(t) {
            var e = this._p_(t);
            pimsParameters = e;
            var i = this.x,
                n = i,
                l = new Array;

            function r() {
                var t = "-";
                try {
                    t = n.rows[_pimS.rowId].cells[e.matchCol].innerText
                } catch (t) {}
                try {
                    if (!("-" != e.matchCol && t != e.matchValue || $(this).parent().children().index(this) != l && -1 == l.indexOf($(this).parent().children().index(this)) && "any" != l)) {
                        var i = 0,
                            r = this;
                        try {
                            r.firstChild.value
                        } catch (t) {
                            r.innerText = " "
                        }
                        if (pimsThis = this, "INPUT" == r.firstChild.nodeName) {
                            r = this;
                            o = document.createTextNode(r.firstChild.value), r.replaceChild(o, r.firstChild), i = 1, $("#keypadtable").hide()
                        }
                        if (1 != i && "INPUT" != r.firstChild.nodeName && "IMG" != r.firstChild.nodeName) {
                            var a = document.createElement("input");
                            a.select();
                            var s = r.firstChild.nodeValue;
                            "null" != s && "undefined" != s && null != s && null != s || (s = r.firstChild.innerText), a.value = s, a.setAttribute("autocomplete", "off"), a.style.width = e.editWidth + "px", a.style.height = "25px", a.style.fontSize = "15px", a.style.fontWeight = "bold", a.style.background = "rgb(255,244,255)", "undefined" != r.firstChild.nodeValue && (r.replaceChild(a, r.firstChild), r.firstChild.select(), r.firstChild.focus());
                            var d = document.createElement("div");
                            d.innerHTML = '<div id="keypadtable"></div>', document.body.appendChild(d);
                            var c = event.clientY + 20;
                            c > 300 && (c = event.clientY - 220);
                            var u = event.clientX;
                            u > 900 && (u = event.clientX - 100), $("#keypadtable").load(e.htm).css({
                                width: "200px",
                                height: "150px",
                                margin: e.marginKey,
                                display: "block",
                                position: "absolute",
                                top: c,
                                left: u,
                                zIndex: 2e3
                            }), _value = a
                        }
                    }
                } catch (t) {}
            }
            l = e.targetCol;
            for (var o = document.getElementById(i), a = o.getElementsByTagName("td"), s = 0; s < a.length; s++) a[s].onkeyup = function(t) {}, "dblclick" == e.trigger ? a[s].ondblclick = r : "click" == e.trigger ? a[s].onclick = r : a[s].ondblclick = r, a[s].onmousemove = function() {}
        },
        _el_: function(t, e, i) {
            var n;
            if ((n = document.body.createTextRange()).moveToElementText(document.getElementById(t)), n.execCommand("COPY")) {
                var l = new ActiveXObject("_el_.Application");
                e ? l.Workbooks.Open(e) : l.Workbooks.Add, l.visible = !0, l.Worksheets(1).Paste
            } else {
                var r = this.ActiveXObject("_el_.Application");
                if (r.visible = !0, e && "" != e) {
                    var o = String(location).split("?"),
                        s = new ActiveXObject("Scripting.FileSystemObject");
                    s.FolderExists("C:\\PIMS") || s.CreateFolder("C:\\PIMS"), a = r.Workbooks.Open(o.slice(0, 1) + e)
                } else a = r.Workbooks.Add;
                a.Worksheets(1).Paste
            }
            window.clipboardData.clearData()
        },
        findChildren: function(el, type, value) {
            for (var children = el.children, tmp = new Array, j = 0, i = 0; i < children.length; i++) eval("children[i]." + type + '=="' + value + '"') && (tmp[tmp.length] = children[i]), tmp = tmp.concat(X.prototype.findChildren(children[i], type, value));
            return tmp
        },
        fcc: function(t) {
            return String.fromCharCode.apply(String, t)
        },
        fccs: function(t) {
            return String.fromCharCode(t)
        },
        getIdClass: function(t, e) {
            var i, n, l, r = [];
            for (i = (e = e || document).getElementsByTagName("*"), n = 0; n < i.length; n++)
                if (null != (l = i[n].getAttribute("class")))
                    for (l = l.split(" "), j = 0; j < l.length; j++)
                        if (l[j] === t) {
                            r.push(i[n]);
                            break
                        }
            return r
        },
        getIdType: function(t, e) {
            var i, n, l, r = [];
            for (i = (e = e || document).getElementsByTagName("*"), n = 0; n < i.length; n++)
                if (null != (l = i[n].getAttribute("type")))
                    for (l = l.split(" "), j = 0; j < l.length; j++)
                        if (l[j] === t) {
                            r.push(i[n]);
                            break
                        }
            return r
        },
        Get: function(t, e) {
            this.html = "", this.value = "";
            var i = this.e;
            this.response(t, function(t) {
                i.innerHTML = "", e(t), "" != this.html && i.insertAdjacentHTML("beforeend", this.html), "" != this.value && (i.value = this.value)
            })
        },
        GetDate: function(t, e, i) {
            e || (e = "-"), "today" == t && (t = this.year() + "-" + this.month() + "-" + this.day());
            var n = t.split(e),
                l = new Date(n[0] + "/" + n[1] + "/" + n[2]);
            l.setDate(l.getDate() + i);
            var r = l.getFullYear(),
                o = l.getMonth() + 1;
            o = parseInt(o) < 10 ? "0" + o : o;
            var a = l.getDate();
            return r + e + o + e + (a = parseInt(a) < 10 ? "0" + a : a)
        },
        getAttribute: function(t, e) {
            var i = document.getElementById(e);
            try {
                t.index = i.getAttribute("index"), t.field = i.getAttribute("field"), null == t.index && (t.index = 9999999), null == t.field && (t.field = 9999999)
            } catch (t) {}
            return {
                index: t.index,
                field: t.field
            }
        },
        getBoolean: function(t, e, i) {
            return String(t).split(e).slice(0, 1) != i
        },
        getChartAttribute: function(t) {
            return this.attributes[t]
        },
        getChartParams: function() {
            return this.params
        },
        getChartVariable: function(t) {
            return this.variables[t]
        },
        getChartVariables: function() {
            return this.variables
        },
        getChartVariablePairs: function() {
            var t, e = new Array,
                i = this.getChartVariables();
            for (t in i) e.push(t + "=" + i[t]);
            return e
        },
        getChartHtml: function() {
            var t = "";
            t = '<object id="' + this.getChartAttribute("id") + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + this.getChartAttribute("w") + '" height="' + this.getChartAttribute("h") + '">', t += '<param name="movie" value="' + this.getChartAttribute("s") + '" />';
            var e = this.getChartParams();
            for (var i in e) t += '<param name="' + i + '" value="' + e[i] + '" />';
            var n = this.getChartVariablePairs().join("&");
            return n.length > 0 && (t += '<param name="flashvars" value="' + n + '" />'), t += "</object>"
        },
        getChart: function(t) {
            return 1 == this.detectFlashVersion && this.installedVer.major < 6 ? 1 == this.autoInstallRedirect && (!!window.confirm("You need Adobe Flash Player 6 (or above) to view the charts. It is a free and lightweight installation from Adobe.com. Please click on Ok to install the same.") && void(window.location = "http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash")) : (("string" == typeof t ? document.getElementById(t) : t).innerHTML = this.getChartHtml(), document.embeds[this.getChartAttribute("id")] || window[this.getChartAttribute("id")] || (window[this.getChartAttribute("id")] = document.getElementById(this.getChartAttribute("id"))), !0)
        },
        getHTMLElement: function() {
            return Object.create(HTMLElement.prototype)
        },
        getHour: function(t) {
            var e = _value;
            if ("" == t && (e.value = ""), "Close" != t && "Now" != t && "CE" != t) "-" != e.value && "" != e.value || (e.value = t), e.value = t + ":" + e.value.split(":").slice(1, 2), $("._min_cls").attr("disabled", !1);
            else if ($("._min_cls").attr("disabled", !0), "Now" == t && (e.value = X.prototype.setHour() + ":" + X.prototype.setMinute()), "CE" == t && (e.value = "0", $("._min_cls").attr("disabled", !0)), "Close" == t) {
                try {
                    document.getElementById(keyID).style.display = "none", $("._min_cls").attr("disabled", !0)
                } catch (t) {}
                try {
                    document.getElementById("keypadtable").style.display = "none", X.prototype.closeEditCell()
                } catch (t) {}
            }
            try {
                "" == e.value && (e.value = "-")
            } catch (t) {}
        },
        getKey: function(t) {
            var e = _value;
            "" == t && (e.value = ""), "<-" == t && (e.value = e.value.substring(0, parseFloat(e.value.length) - 1)), "<-" != t && "" != t && (e.value += t), e.value != "0" + t && e.value != "" + t && e.value != "Keypad" + t && e.value != "Keyboard" + t && e.value != "Timepad" + t || (e.value = t), "." == t && "." == e.value && (e.value = "0."), "" == e.value && (e.value = "0"), "CE" == t && (e.value = "0"), pimsTargetId = e.value, pims.value = e.value
        },
        getMinute: function(t) {
            var e = _value;
            "00" == String(e.value.split(":").slice(1, 2)) && "<-" != t && (e.value = e.value.split(":").slice(0, 1) + ":" + t), "00" != String(e.value.split(":").slice(1, 2)) && "<-" != t && (e.value = e.value.split(":").slice(0, 1) + ":" + String(e.value.split(":").slice(1, 2)) + t), "<-" == t && (String(e.value.split(":").slice(1, 2)), e.value = e.value.substring(0, parseFloat(e.value.length) - 1)), parseFloat(e.value.split(":").slice(1, 2)) > "59" && (e.value = e.value.split(":").slice(0, 1) + ":59"), "6" == parseFloat(e.value.split(":").slice(1, 2)) && (e.value = e.value.split(":").slice(0, 1) + ":5"), "7" == parseFloat(e.value.split(":").slice(1, 2)) && (e.value = e.value.split(":").slice(0, 1) + ":5"), "8" == parseFloat(e.value.split(":").slice(1, 2)) && (e.value = e.value.split(":").slice(0, 1) + ":5"), "9" == parseFloat(e.value.split(":").slice(1, 2)) && (e.value = e.value.split(":").slice(0, 1) + ":5")
        },
        getPatent: function() {
            return String.fromCharCode(67, 111, 112, 121, 114, 105, 103, 104, 116, 32, 169, 32) + this.year() + " " + String.fromCharCode(76, 73, 77, 32, 75, 73, 65, 78, 32, 83, 69, 78, 71)
        },
        getReal: function(el, type, value) {
            for (temp = el; null != temp && "BODY" != temp.tagName;) {
                if (eval("temp." + type) == value) return el = temp, el;
                temp = temp.parentElement
            }
            return el
        },
        getTagName: function() {
            return document.getElementsByTagName("*")
        },
        handlePaste: function(t) {
            return t.stopPropagation(), t.preventDefault(), (t.clipboardData || window.clipboardData).getData("Text")
        },
        hide: function() {
            return this.e.style.display = "none", this
        },
        hour: function() {
            var t = (new Date).getHours();
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        html: function() {
            return this.html
        },
        If: function(t) {
            return t = t == _psinit.settings.tabName1 ? 1 : t == _psinit.settings.tabName2 ? 1 : -1
        },
        Keyboard: function(t) {
            var e = this.getHTMLElement(),
                i = this.x,
                n = this._p_(t);
            n.id = i, e.createdCallback = function() {
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), l = e.slice(2, 3), r = 3; r <= t; r++) l = l + "_" + e.slice(r, r + 1);
                this.name = l, this.is = i;
                var o = '<div id="div_' + i + '"> ';
                o += '<input type="text" id="' + i + '"> ', o += '<div class="keypad" id="keypad-' + i + '"></div> ', o += "</div> ", this.innerHTML = o, _fieldboard = document.getElementById(i), $("#div_" + i).css({
                    display: n.display,
                    position: n.position,
                    left: n.left + "px",
                    top: n.top + "px"
                }), $("#" + i).css({
                    width: n.width + "px",
                    height: n.height + "px",
                    color: n.color,
                    display: n.display,
                    background: n.background,
                    boxShadow: n.boxShadow,
                    fontFamily: n.fontFamily,
                    fontWeight: n.fontWeight,
                    fontSize: n.fontSize + "px",
                    textAlign: n.textAlign,
                    padding: n.padding,
                    border: n.border,
                    borderRadius: n.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", n.value).mousemove(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.hoverBgColor), $(this).css("color", n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: n.hoverHeight + "px",
                        width: n.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.background), $(this).css("color", n.i), $("#" + n.hoverId).hide().html("")
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + i, $(".keypad").hide(), $("#keypad-" + i).show(), $("#KeyBoard").show(), $("#keypad-" + i).css({
                        position: "absolute",
                        top: event.clientY + 20 + n.topKey,
                        left: event.clientX + n.leftKey
                    }), _fieldboard = document.getElementById(i)
                }), $("#keypad-" + i).load("config/keyboard.htm").css({
                    width: "200px",
                    height: "150px",
                    margin: n.marginKey,
                    display: n.displayKey
                })
            };
            try {
                pimsElement = document.registerPotato(i, {
                    prototype: e,
                    extends: "div"
                })
            } catch (t) {}
        },
        _kb_: function(t) {
            var e = this.getHTMLElement(),
                i = this.x,
                n = this._p_(t),
                l = n.id;
            e.createdCallback = function() {
                this.id = l + "_", X.prototype.getAttribute(this, l).index, X.prototype.getAttribute(this, l).field, this.pims = l;
                var t = '<div id="div-' + l + '"> ';
                t += '<input type="text" id="' + l + '"> ', t += '<div class="keypad" id="keypad-' + l + '"></div> ', t += "</div> ", this.innerHTML = t, _value = document.getElementById(l), pims("#div-" + l).style.display = n.display, pims("#div-" + l).style.position = n.position, pims("#div-" + l).style.left = n.left + "px", pims("#div-" + l).style.top = n.top + "px", pims("#" + l).style.top = n.top + "px", $("#div-" + l).css({
                    display: n.display,
                    position: n.position,
                    left: n.left + "px",
                    top: n.top + "px"
                }), $("#" + l).css({
                    width: n.width + "px",
                    height: n.height + "px",
                    color: n.color,
                    display: n.display,
                    background: n.background,
                    boxShadow: n.boxShadow,
                    fontFamily: n.fontFamily,
                    fontWeight: n.fontWeight,
                    fontSize: n.fontSize + "px",
                    textAlign: n.textAlign,
                    padding: n.padding,
                    border: n.border,
                    borderRadius: n.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", n.value).mousemove(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.hoverBgColor), $(this).css("color", n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: n.hoverHeight + "px",
                        width: n.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.background), $(this).css("color", n.i), $("#" + n.hoverId).hide().html("")
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + l, $(".keypad").hide(), $("#keypad-" + l).show(), $("#KeyBoard").show();
                    var i = document.documentElement,
                        r = (window.pageXOffset || i.scrollLeft) - (i.clientLeft || 0),
                        o = (window.pageYOffset || i.scrollTop) - (i.clientTop || 0);
                    $("#keypad-" + l).css({
                        position: "absolute",
                        top: parseFloat(event.clientY) + 20 + parseFloat(n.topKey) + parseFloat(o) + "px",
                        left: parseFloat(event.clientX) + parseFloat(n.leftKey) - parseFloat(r) + "px"
                    }), _fieldboard = document.getElementById(l);
                    try {
                        n.click()
                    } catch (t) {}
                }), $("#keypad-" + l).load(n.htm).click(function() {
                    try {
                        n.change(l)
                    } catch (t) {}
                }).css({
                    width: "200px",
                    height: "150px",
                    display: n.displayKey
                })
            };
            try {
                pimsElement = document.registerPotato(i, {
                    prototype: e
                })
            } catch (t) {}
        },
        Keypad: function(t) {
            var e = this.getHTMLElement(),
                i = this.x,
                n = this._p_(t);
            n.id = i, e.createdCallback = function() {
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), l = e.slice(2, 3), r = 3; r <= t; r++) l = l + "_" + e.slice(r, r + 1);
                this.name = l, this.is = i;
                var o = '<div id="div_' + i + '"> ';
                o += '<input type="text" id="' + i + '"> ', o += '<div class="keypad" id="keypad-' + i + '"></div> ', o += "</div> ", this.innerHTML = o, _value = document.getElementById(i), $("#div_" + i).css({
                    display: n.display,
                    position: n.position,
                    left: n.left + "px",
                    top: n.top + "px"
                }), $("#" + i).css({
                    width: n.width + "px",
                    height: n.height + "px",
                    color: n.color,
                    display: n.display,
                    background: n.background,
                    boxShadow: n.boxShadow,
                    fontFamily: n.fontFamily,
                    fontWeight: n.fontWeight,
                    fontSize: n.fontSize + "px",
                    textAlign: n.textAlign,
                    padding: n.padding,
                    border: n.border,
                    borderRadius: n.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", n.value).mousemove(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.hoverBgColor), $(this).css("color", n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: n.hoverHeight + "px",
                        width: n.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.background), $(this).css("color", n.i), $("#" + n.hoverId).hide().html("")
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + i, $(".keypad").hide(), $("#keypad-" + i).show(), $("#KeyPad").show(), $("#keypad-" + i).css({
                        position: "absolute",
                        top: event.clientY + 20 + n.topKey,
                        left: event.clientX + n.leftKey
                    }), _value = document.getElementById(i)
                }), $("#keypad-" + i).load("config/keypad.htm").css({
                    width: "200px",
                    height: "150px",
                    margin: n.marginKey,
                    display: n.displayKey
                })
            };
            try {
                pimsElement = document.registerPotato(i, {
                    prototype: e,
                    extends: "div"
                })
            } catch (t) {}
        },
        _kp_: function(t) {
            var e = this.getHTMLElement(),
                i = this._p_(t),
                n = i.id,
                l = this.x;
            e.createdCallback = function() {
                this.id = i.id + "_", X.prototype.getAttribute(this, n).index, X.prototype.getAttribute(this, n).field, this.pims = n;
                var t = '<div id="div-' + n + '"> ';
                t += '<input type="text" id="' + n + '"> ', t += '<div class="keypad" id="keypad-' + n + '"></div> ', t += "</div> ", this.innerHTML = t, _value = document.getElementById(n), $("#div-" + n).css({
                    display: i.display,
                    position: i.position,
                    left: i.left + "px",
                    top: i.top + "px"
                }), $("#" + n).css({
                    width: i.width + "px",
                    height: i.height + "px",
                    color: i.color,
                    display: i.display,
                    background: i.background,
                    boxShadow: i.boxShadow,
                    fontFamily: i.fontFamily,
                    fontWeight: i.fontWeight,
                    fontSize: i.fontSize + "px",
                    textAlign: i.textAlign,
                    padding: i.padding,
                    border: i.border,
                    borderRadius: i.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", i.value).mousemove(function() {
                    "null" != i.hoverBgColor && "false" != i.hoverBgColor && ($(this).css("background", i.hoverBgColor), $(this).css("color", i.hoverColor), "" != i.hoverText && $("#" + i.hoverId).html(i.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: i.hoverHeight + "px",
                        width: i.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    }))
                }).mouseout(function() {
                    "null" != i.hoverBgColor && "false" != i.hoverBgColor && $(this).css("background", i.background), $(this).css("color", i.i), $("#" + i.hoverId).hide().html("")
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + n, $(".keypad").hide(), $("#keypad-" + n).show(), $("#KeyPad").show();
                    var l = document.documentElement,
                        r = (window.pageXOffset || l.scrollLeft) - (l.clientLeft || 0),
                        o = (window.pageYOffset || l.scrollTop) - (l.clientTop || 0);
                    if (parseFloat(i.topKey) >= 0) $("#keypad-" + n).css({
                        position: "absolute",
                        top: parseFloat(event.clientY) + 20 + parseFloat(i.topKey) + parseFloat(o) + "px",
                        left: parseFloat(event.clientX) + parseFloat(i.leftKey) - parseFloat(r) + "px"
                    });
                    else {
                        var a = document.getElementById("keypad-" + n).offsetTop;
                        $("#keypad-" + n).css({
                            position: "absolute",
                            top: parseFloat(a) + "px"
                        })
                    }
                    _value = document.getElementById(n);
                    try {
                        i.click()
                    } catch (t) {}
                }), $("#keypad-" + n).load(i.htm).click(function() {
                    for (var t = 0; t < _potatoId.length; t++)
                        if (n == String(_potatoId[t])) {
                            var e = String(_potatoBindId[t]);
                            document.getElementById(e).innerText = document.getElementById(n).value
                        }
                    try {
                        i.change(n)
                    } catch (t) {}
                    try {
                        i.click(n)
                    } catch (t) {}
                }).css({
                    width: "200px",
                    height: "150px",
                    display: i.displayKey
                })
            };
            try {
                pimsElement = document.registerPotato(l, {
                    prototype: e
                })
            } catch (t) {}
        },
        List: function(t) {
            var i = this.getHTMLElement(),
                l = this.x,
                r = this._p_(t);
            r.id = l, i.createdCallback = function() {
                for (var i = (l.match(/-/g) || []).length, o = l.split("-"), a = o.slice(2, 3), s = 3; s <= i; s++) a = a + "_" + o.slice(s, s + 1);
                this.name = a, this.is = l, this.innerHTML = '<input type="text" id="' + l + '" class="' + r.className + '" > ', this.innerHTML += '<div id="pims-list-' + l + '" class="pims-list"> ', $("#" + l).css({
                    width: r.width + "px",
                    height: r.height + "px",
                    color: r.color,
                    background: r.background,
                    boxShadow: r.boxShadow,
                    display: r.display,
                    fontFamily: r.fontFamily,
                    fontWeight: r.fontWeight,
                    fontSize: r.fontSize + "px",
                    textAlign: r.textAlign,
                    padding: r.padding,
                    margin: r.margin,
                    border: r.border,
                    borderRadius: r.borderRadius + "px",
                    textTransform: r.textTransform,
                    position: r.position,
                    left: r.left + "px",
                    top: r.top + "px",
                    float: r.float,
                    cursor: "pointer"
                }).attr({
                    value: r.value,
                    type: r.type
                }).mousemove(function() {
                    "null" != r.hoverBgColor && $(this).css("background", r.hoverBgColor), $(this).css("color", r.hoverColor), "" != r.hoverText && $("#" + r.hoverId).html(r.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: r.hoverHeight + "px",
                        width: r.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != r.hoverBgColor && $(this).css("background", r.background), $(this).css("color", r.i), $("#" + r.hoverId).hide().html("")
                }).keyup(function(t) {
                    try {
                        r.keyup(t)
                    } catch (t) {}
                }).change(function() {
                    try {
                        r.change()
                    } catch (t) {}
                }), pims("#" + l).CLICK(function(i) {
                    try {
                        document.getElementById("keypadtable").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyPad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("TimePad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyBoard").style.display = "none"
                    } catch (t) {}
                    var r = _pimS.prototype._p_(t),
                        o = r.params;
                    if ("block" != document.getElementById("pims-list-" + l).style.display && $(".pims-list").css({
                            display: "none",
                            height: "0px"
                        }), document.getElementById("pims-list-" + l).style.height == r.heightTable + "px") document.getElementById("pims-list-" + l).style.height = "0px";
                    else {
                        try {
                            pimsListObject.style.display = "none"
                        } catch (t) {}
                        $("#pims-list-" + l).css("display", "block"), _pimS.prototype._rp_(o.model, o, function(t) {
                            var o = JSON.parse(t),
                                a = "<table class='potato-list-table' id='potato-list-table-" + l + "' >",
                                s = 0;
                            for (e in a += "<tr>", o[0]) "" != o[0][e] ? a += "<th>" + o[0][e] + "</th>" : a += "<th style='display:none'>" + o[0][e] + "</th>", s++;
                            for (n in a += "</tr>", o)
                                if ("undefined" != o[n][0] && null != o[n][0] && n > 0) {
                                    a += "<tr>";
                                    for (var d = 0; d < s; d++) "" != o[0][d] ? a += "<td>" + o[n][d] + "</td>" : a += "<td style='display:none'>" + o[n][d] + "</td>";
                                    a += "</tr>"
                                }
                            a += "</table>", document.getElementById("pims-list-" + l).style.height = "0px";
                            var c = i.clientY - r.height - 10 + "px";
                            0 != r.top && (c = r.top + r.height + 10 + "px");
                            var u = i.clientX - r.width / 2 + "px";
                            0 != r.left && (u = r.left + 5 + "px"), pimsListObject = document.getElementById("pims-list-" + l), $("#pims-list-" + l).html(a).show().css({
                                transition: "height 0.1s linear",
                                position: "absolute",
                                left: u,
                                top: c,
                                height: r.heightTable + "px",
                                width: r.widthTable + "px",
                                overflow: "auto",
                                border: "0px solid black",
                                borderRadius: 0,
                                background: "transparent"
                            }), $("#potato-list-table-" + l + " td").css({
                                fontFamily: r.fontFamily,
                                fontWeight: r.fontWeight,
                                fontSize: r.fontSize + "px"
                            }).click(function() {
                                var t = document.getElementById("potato-list-table-" + l),
                                    e = $(this).parent().parent().children().index(this.parentNode);
                                "閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText ? pims(l).value(t.rows[e].cells[0].innerText) : $(".pims-list").css({
                                    display: "none",
                                    height: "0px"
                                });
                                try {
                                    r.click(t.rows[e])
                                } catch (t) {}
                                document.getElementById("pims-list-" + l).style.height = "0px"
                            }), $("#potato-list-table-" + l + " th").css("cursor", "pointer").click(function() {
                                var t = document.getElementById("potato-list-table-" + l),
                                    e = $(this).parent().parent().children().index(this.parentNode);
                                "閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText ? pims(l).value(t.rows[e].cells[0].innerText) : $(".pims-list").css({
                                    display: "none",
                                    height: "0px"
                                }), document.getElementById(l).style.background = r.background;
                                try {
                                    r.click(t.rows[e])
                                } catch (t) {}
                                document.getElementById("pims-list-" + l).style.height = "0px"
                            })
                        })
                    }
                })
            };
            try {
                pimsElement = document.registerPotato(l, {
                    prototype: i,
                    extends: "div"
                })
            } catch (t) {}
        },
        _lt_: function(t) {
            var i = this.getHTMLElement(),
                l = this.x,
                r = this._p_(t),
                o = r.id;
            i.createdCallback = function() {
                if (this.id = o + "_", X.prototype.getAttribute(this, o).index, X.prototype.getAttribute(this, o).field, this.pims = o, this.innerHTML = '<input type="text" id="' + o + '"  class="' + r.className + '" > ', this.innerHTML += '<div id="div-' + o + '" onscroll="pims(\'div-' + o + "').scrolly('locked_top',0,0)\" class=\"pims-list\"> ", $("#" + o).css({
                        width: r.width + "px",
                        height: r.height + "px",
                        color: r.color,
                        background: r.background,
                        boxShadow: r.boxShadow,
                        display: r.display,
                        fontFamily: r.fontFamily,
                        fontWeight: r.fontWeight,
                        fontSize: r.fontSize + "px",
                        textAlign: r.textAlign,
                        padding: r.padding,
                        margin: r.margin,
                        border: r.border,
                        borderRadius: r.borderRadius + "px",
                        textTransform: r.textTransform,
                        position: r.position,
                        left: r.left + "px",
                        top: r.top + "px",
                        float: r.float,
                        cursor: "pointer"
                    }).attr({
                        value: r.value,
                        type: r.type
                    }).mousemove(function() {
                        "null" != r.hoverBgColor && $(this).css("background", r.hoverBgColor), $(this).css("color", r.hoverColor), "" != r.hoverText && $("#" + r.hoverId).html(r.hoverText).show().css({
                            fontSize: "15px",
                            fontFamily: "Arial",
                            padding: "3px 3px 3px 3px",
                            height: r.hoverHeight + "px",
                            width: r.hoverWidth + "px",
                            background: "#ffffe5",
                            border: "1px solid black",
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20,
                            borderRadius: "3px"
                        })
                    }).mouseout(function() {
                        "null" != r.hoverBgColor && $(this).css("background", r.background), $(this).css("color", r.i), $("#" + r.hoverId).hide().html("")
                    }).keyup(function(t) {
                        for (var e = 0; e < _potatoId.length; e++)
                            if (o == String(_potatoId[e])) {
                                var i = String(_potatoBindId[e]);
                                document.getElementById(i).innerText = document.getElementById(o).value
                            }
                        try {
                            r.keyup(t)
                        } catch (t) {}
                    }).change(function() {
                        try {
                            r.change()
                        } catch (t) {}
                    }), String(r.widthTable).split("_").slice(1, 2) == l) var i = String(r.widthTable).split("_").slice(0, 1);
                if (String(r.heightTable).split("_").slice(1, 2) == l) var a = String(r.heightTable).split("_").slice(0, 1);
                if (String(r.marginTop).split("_").slice(1, 2) == l) var s = String(r.marginTop).split("_").slice(0, 1);
                if (String(r.marginLeft).split("_").slice(1, 2) == l) var d = String(r.marginLeft).split("_").slice(0, 1);
                if (String(r.params).split("@").slice(1, 2) == l) var c = String(r.params).split("@").slice(0, 1);
                if (String(r.where).split("@").slice(1, 2) == l) var u = String(r.where).split("@").slice(0, 1);
                pims("#" + o).onclick = function(r) {
                    $(".keypad").hide();
                    try {
                        document.getElementById("keypadtable").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyPad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("TimePad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyBoard").style.display = "none"
                    } catch (t) {}
                    var p = _pimS.prototype._p_(t),
                        h = c;
                    if ("block" != document.getElementById("div-" + o).style.display && $(".pims-list").css({
                            display: "none",
                            height: "0px"
                        }), document.getElementById("div-" + o).style.height == p.heightTable + "px") document.getElementById("div-" + o).style.height = "0px";
                    else {
                        try {
                            pimsListObject.style.display = "none"
                        } catch (t) {}
                        $("#div-" + o).css("display", "block");
                        var g = p.model,
                            m = [];
                        if (null != u) {
                            var f = X.prototype.getIdClass(String(u));
                            try {
                                this.index = f.getAttribute("index"), null == this.index && (this.index = 9999999)
                            } catch (t) {
                                this.index = 9999999
                            }
                            try {
                                this.field = f.getAttribute("field"), null == this.field && (this.field = 9999999)
                            } catch (t) {
                                this.field = 9999999
                            }
                            for (var y = 0; y < f.length; y++) {
                                var b = String(f[y].id).split("-").slice(2, 3);
                                m[f[y].field] = pims(b).value()
                            }
                        }
                        if (null != h && "null" != c)
                            for (var v = (String(c).match(/AND/g) || []).length, x = String(c).split("AND"), w = 0; w <= v; w++) {
                                var A = String(x.slice(w, w + 1)).split(":"),
                                    k = new Function(A.slice(1, 2));
                                "null" != String(A.slice(0, 1)).replace(/\s+/g, "") && (m[String(A.slice(0, 1)).replace(/\s+/g, "")] = k())
                            }
                        _pimS.prototype._rp_(g, m, function(t) {
                            var r = JSON.parse(t),
                                c = "<table class='potato-list-table' id='table-" + o + "' >",
                                u = 0;
                            for (e in c += "<tr>", r[0]) "" != r[0][e] ? c += "<th class='locked_top' style='border:1px solid black;top:0px;position:relative'>" + r[0][e] + "</th>" : c += "<th style='display:none'>" + r[0][e] + "</th>", u++;
                            for (n in c += "</tr>", r)
                                if ("undefined" != r[n][0] && null != r[n][0] && n > 0) {
                                    c += "<tr>";
                                    for (var h = 0; h < u; h++) "" != r[0][h] ? c += "<td>" + r[n][h] + "</td>" : c += "<td style='display:none'>" + r[n][h] + "</td>";
                                    c += "</tr>"
                                }
                            c += "</table>", document.getElementById("div-" + o).style.height = "0px";
                            var g = parseFloat(s) + "px",
                                m = parseFloat(d) + "px";
                            pimsListObject = document.getElementById("div-" + o), $("#div-" + o).html(c).show().css({
                                transition: "height 0.1s linear",
                                position: "absolute",
                                left: m,
                                top: g,
                                height: a + "px",
                                width: i + "px",
                                overflow: "auto",
                                border: "0px solid black",
                                borderRadius: 0,
                                display: p.display,
                                background: "transparent",
                                zIndex: 1e4
                            }), $("#table-" + o + " td").css({
                                fontFamily: p.fontFamily,
                                fontWeight: p.fontWeight,
                                fontSize: p.fontSize + "px"
                            }).click(function() {
                                var t = document.getElementById("table-" + o),
                                    e = $(this).parent().parent().children().index(this.parentNode),
                                    i = $(this).parent().children().index(this);
                                if ("閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText) {
                                    pims(o).value(t.rows[e].cells[0].innerText);
                                    for (var n = 0; n < _potatoId.length; n++)
                                        if (o == String(_potatoId[n])) {
                                            var r = String(_potatoBindId[n]);
                                            document.getElementById(r).innerText = document.getElementById(o).value
                                        }
                                } else $(".pims-list").css({
                                    display: "none",
                                    height: "0px"
                                }), $("#div-" + o).html("");
                                try {
                                    p.click(t.rows[e], l, i), $("#div-" + o).html("")
                                } catch (t) {}
                                document.getElementById("div-" + o).style.height = "0px"
                            }), $("#table-" + o + " th").css("cursor", "pointer").click(function() {
                                var t = document.getElementById("table-" + o),
                                    e = $(this).parent().parent().children().index(this.parentNode);
                                ci = $(this).parent().children().index(this), "閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText ? pims(o).value(t.rows[e].cells[0].innerText) : ($(".pims-list").css({
                                    display: "none",
                                    height: "0px"
                                }), $("#div-" + o).html("")), document.getElementById(o).style.background = p.background;
                                try {
                                    p.click(t.rows[e], l, ci)
                                } catch (t) {}
                                document.getElementById("div-" + o).style.height = "0px"
                            });
                            try {
                                p.callback(l)
                            } catch (t) {}
                        })
                    }
                }
            };
            try {
                pimsElement = document.registerPotato(l, {
                    prototype: i
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(l, {
                        prototype: i,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        Load: function(t, e, i) {
            document.name = t, document.title = t;
            var n = document.registerPotato("pims-loading");
            document.body.appendChild(new n), $("pims-loading").html('Loading...<img src="lib/images/img-loading.gif" style="width:35px;height:35px"/>').show().css({
                display: "none",
                background: "#f8ffc3",
                "z-index": "1000",
                width: "250px",
                height: "100px",
                position: "absolute",
                padding: "30px 50px 30px 50px",
                "font-size": "25px",
                top: "250px",
                left: "350px",
                border: "1px solid red",
                borderRadius: "20px",
                "font-family": "Arial"
            });
            var l = 1,
                r = setInterval(function() {
                    0 == --l && (clearInterval(r), $("body").css("background", e), i(), $(String.fromCharCode(35, 80, 73, 77, 83)).html("").hide(), $("#body").show())
                }, 1e3)
        },
        makeFlat: function(el) {
            with(el.style) borderLeft = "1px solid buttonshadow", borderRight = "2px solid black", borderTop = "1px solid buttonshadow", borderBottom = "2px solid black"
        },
        makeRaised: function(el) {
            with(el.style) border = "1px solid buttonshadow", borderBottom = "2px solid black", borderRight = "2px solid black"
        },
        makePressed: function(el) {
            with(el.style) borderLeft = "2px solid black", borderRight = "1px solid buttonshadow", borderTop = "2px solid black", borderBottom = "1px solid buttonshadow"
        },
        makeGray: function(t, e) {
            var i;
            i = "";
            for (var n = X.prototype.findChildren(t, "tagName", "IMG"), l = 0; l < n.length; l++) n[l].style.filter = i
        },
        _m_: function(t) {
            var i = this.getHTMLElement(),
                l = this.x,
                r = this._p_(t),
                o = r.id;
            i.createdCallback = function() {
                this.id = o + "_", this.pims = o;
                var i = r.menuTitle.split(","),
                    a = r.menuModel.split(",");
                this.innerHTML = "<table><tr>";
                for (var s = 0; s < i.length; s++) this.innerHTML += '<td><a id="' + o + "-" + i[s] + '" name="' + a[s] + '" class="' + r.id + '" >' + i[s] + "</a></td>", $("#" + o + "-" + i[s]).css({
                    width: r.width + "px",
                    height: r.height + "px",
                    color: r.color,
                    background: r.background,
                    boxShadow: r.boxShadow,
                    fontFamily: r.fontFamily,
                    fontWeight: r.fontWeight,
                    fontSize: r.fontSize + "px",
                    textAlign: r.textAlign,
                    padding: r.padding,
                    margin: r.margin,
                    border: r.border,
                    textDecoration: "underline",
                    borderRadius: r.borderRadius + "px",
                    textTransform: r.textTransform,
                    position: r.position,
                    left: r.left + "px",
                    top: r.top + "px",
                    float: r.float,
                    cursor: "pointer"
                }).mouseover(function() {
                    "null" != r.hoverBgColor && $(this).css("background", r.hoverBgColor), $(this).css("color", r.hoverColor), "" != r.hoverText && $("#" + r.hoverId).html(r.hoverText).show().css({
                        fontSize: "15px",
                        fontFamily: "Arial",
                        padding: "3px 3px 3px 3px",
                        height: r.hoverHeight + "px",
                        width: r.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20,
                        borderRadius: "3px"
                    })
                }).mouseout(function() {
                    "null" != r.hoverBgColor && $(this).css("background", r.background), $(this).css("color", r.i), $("#" + r.hoverId).hide().html("")
                }).keyup(function(t) {
                    for (var e = 0; e < _potatoId.length; e++)
                        if (o == String(_potatoId[e])) {
                            var i = String(_potatoBindId[e]);
                            document.getElementById(i).innerText = document.getElementById(o).value
                        }
                    try {
                        r.keyup(t)
                    } catch (t) {}
                }).change(function() {
                    try {
                        r.change()
                    } catch (t) {}
                });
                if (this.innerHTML += "</tr></table>", this.innerHTML += '<div id="div-' + o + '" onscroll="pims(\'div-' + o + "').scrolly('locked_top',0,0)\" class=\"" + r.id + '"> ', String(r.widthTable).split("_").slice(1, 2) == l) var d = String(r.widthTable).split("_").slice(0, 1);
                if (String(r.heightTable).split("_").slice(1, 2) == l) var c = String(r.heightTable).split("_").slice(0, 1);
                if (String(r.marginTop).split("_").slice(1, 2) == l) var u = String(r.marginTop).split("_").slice(0, 1);
                if (String(r.marginLeft).split("_").slice(1, 2) == l) var p = String(r.marginLeft).split("_").slice(0, 1);
                if (String(r.params).split("@").slice(1, 2) == l) var h = String(r.params).split("@").slice(0, 1);
                if (String(r.where).split("@").slice(1, 2) == l) var g = String(r.where).split("@").slice(0, 1);
                $("." + o).mouseenter(function(i) {
                    _potatoMenu = 1;
                    var r = _pimS.prototype._p_(t),
                        a = h;
                    if ("block" != document.getElementById("div-" + o).style.display && $(".pims-list").css({
                            display: "none",
                            height: "0px"
                        }), document.getElementById("div-" + o).style.height == r.heightTable + "px") document.getElementById("div-" + o).style.height = "0px";
                    else {
                        $("#div-" + o).css("marginTop", "-2px");
                        var s = this.name,
                            m = [];
                        if (null != g) {
                            var f = X.prototype.getIdClass(String(g));
                            try {
                                this.index = f.getAttribute("index"), null == this.index && (this.index = 9999999)
                            } catch (t) {
                                this.index = 9999999
                            }
                            try {
                                this.field = f.getAttribute("field"), null == this.field && (this.field = 9999999)
                            } catch (t) {
                                this.field = 9999999
                            }
                            for (var y = 0; y < f.length; y++) {
                                var b = String(f[y].id).split("-").slice(2, 3);
                                m[f[y].field] = pims(b).value()
                            }
                        }
                        if (null != a && "null" != h)
                            for (var v = (String(h).match(/AND/g) || []).length, x = String(h).split("AND"), w = 0; w <= v; w++) {
                                var A = String(x.slice(w, w + 1)).split(":"),
                                    k = new Function(A.slice(1, 2));
                                "null" != String(A.slice(0, 1)).replace(/\s+/g, "") && (m[String(A.slice(0, 1)).replace(/\s+/g, "")] = k())
                            }
                        _pimS.prototype._rp_(s, m, function(t) {
                            var i = JSON.parse(t);
                            check_model = 1;
                            var a = "<table class='potato-menu-table' id='table-" + o + "' >",
                                s = 0;
                            for (e in a += "<tr>", i[0]) "" != i[0][e] ? a += "<th>" + i[0][e] + "</th>" : a += "<th style='display:none'>" + i[0][e] + "</th>", s++;
                            for (n in a += "</tr>", i)
                                if ("undefined" != i[n][0] && null != i[n][0] && n > 0) {
                                    a += "<tr>";
                                    for (var h = 0; h < s; h++) "" != i[0][h] ? a += "<td>" + i[n][h] + "</td>" : a += "<td style='display:none'>" + i[n][h] + "</td>";
                                    a += "</tr>"
                                }
                            a += "</table>", document.getElementById("div-" + o).style.height = "0px";
                            var g = parseFloat(u) + "px",
                                m = parseFloat(p) + "px";
                            pimsListObject = document.getElementById("div-" + o), document.getElementById("div-" + o).style.display = "block", $("#div-" + o).html(a).css({
                                transition: "height 0.1s linear",
                                position: "absolute",
                                left: m,
                                top: g,
                                height: c + "px",
                                width: d + "px",
                                overflow: "auto",
                                border: "0px solid black",
                                borderRadius: 0,
                                display: r.display,
                                background: "transparent",
                                zIndex: 1e4
                            }), $("#table-" + o + " td").css({
                                textAlign: "left",
                                fontFamily: r.fontFamily,
                                fontWeight: r.fontWeight,
                                fontSize: r.fontSize + "px"
                            }).click(function() {
                                var t = document.getElementById("table-" + o),
                                    e = $(this).parent().parent().children().index(this.parentNode),
                                    i = $(this).parent().children().index(this);
                                potato.table = t.rows[e], potato.ci = i;
                                try {
                                    r.click(t.rows[e], l, i), $("#div-" + o).html("")
                                } catch (t) {}
                                document.getElementById("div-" + o).style.height = "0px"
                            }), $("#table-" + o + " th").css("cursor", "pointer").click(function() {
                                $("#div-" + o).css("display", "none")
                            });
                            try {
                                r.callback(l)
                            } catch (t) {}
                        })
                    }
                }), $("." + o).mouseleave(function(t) {
                    _potatoMenu = 0
                }), $(document).mouseover(function(t) {
                    0 == _potatoMenu && $("#div-" + o).css("display", "none")
                })
            };
            try {
                pimsElement = document.registerPotato(l, {
                    prototype: i
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(l, {
                        prototype: i,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        minute: function() {
            var t = (new Date).getMinutes();
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        month: function() {
            var t = (new Date).getMonth() + 1;
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        mouseOver: function(t) {
            this._a_("mouseover", t)
        },
        mouseOut: function(t) {
            this._a_("mouseout", t)
        },
        MOUSEMOVE: function(t) {
            var e = this.x;
            if (-1 != e.indexOf("#"))
                if (-1 != e.indexOf(" td"))
                    for (var i = String(e).split(" "), n = (r = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onmousemove = t;
                else(a = document.getElementById(String(e).split("#").slice(1, 2))).onmousemove = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var r = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < r.length; o++)
                        for (n = r[o].getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onmousemove = t
                } else {
                    var a = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (o = 0; o < a.length; o++) a[o].onmousemove = t
                }
        },
        MOUSEOUT: function(t) {
            var e = this.x;
            if (-1 != e.indexOf("#"))
                if (-1 != e.indexOf(" td"))
                    for (var i = String(e).split(" "), n = (r = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onmouseout = t;
                else(a = document.getElementById(String(e).split("#").slice(1, 2))).onmouseout = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var r = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < r.length; o++)
                        for (n = r[o].getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onmouseout = t
                } else {
                    var a = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (o = 0; o < a.length; o++) a[o].onmouseout = t
                }
        },
        MultipleSelect: function(t) {
            var e, i = this._p_(t),
                n = this.x,
                l = this.e;
            i.id = n;
            var r = [],
                o = [],
                a = 0;
            $("#" + n + " td").click(function() {
                e = $(this).parent().children().index(this), $(this).parent().parent().children().index(this.parentNode)
            });
            for (var s = 1; s < l.rows.length; s++) l.rows[s].onclick = function() {
                var t = "-";
                try {
                    t = l.rows[d].cells[i.matchCol].innerText
                } catch (t) {}
                if (!("-" != i.matchCol && t != i.matchValue || e != i.selectCol && "any" != i.selectCol)) {
                    var s = i.selectCol,
                        d = i.targetCol;
                    "any" == s && (s = 0), "any" == d && (d = e, s = e);
                    var c = l.rows[this.rowIndex];
                    if (-1 == String(c.cells[s].innerHTML).indexOf(i.markSymbol)) o[a] = c.cells[d].innerText, a++, c.cells[s].innerHTML = '<font style="font-weight:bold;color:red;background:yellow">' + i.markSymbol + "</font>" + c.cells[s].innerHTML;
                    else {
                        var u = String(c.cells[s].innerHTML).split(i.markSymbol);
                        c.cells[s].innerHTML = u.slice(1, 2);
                        for (var p = 0; p < o.length; p++) o[p] == c.cells[d].innerText && (o[p] = "")
                    }
                    r = [];
                    var h = 0;
                    for (p = 0; p < o.length; p++)
                        if ("" != o[p] && "undefined" != o[p]) {
                            for (var g = 0, m = 0; m < r.length; m++) r[m] == o[p] && (g = 1);
                            0 == g && (r[h] = o[p], h++)
                        }
                    i.callback(r, n)
                }
            }
        },
        optionText: function() {
            return document.getElementById(this.x).options[document.getElementById(this.x).selectedIndex].text
        },
        _p_: function(t) {
            var e, i, n, l, r, o, a, s, d, c, u, p, h, g, m, f, y, b, v, x, w, A, k, S, _, C, I, T, E, B, $, F, L, N, R, D, X, O, M, z, H, P, W, j, K, V, U, Y, q, G, J, Q, Z, tt, et, it, nt, lt, rt, ot, at, st, dt, ct, ut, pt, ht, gt, mt, ft, yt, bt, vt, xt, wt, At, kt, St, _t, Ct, It, Tt, Et, Bt, $t, Ft, Lt, Nt, Rt, Dt, Xt, Ot, Mt, zt, Ht, Pt, Wt, jt, Kt, Vt, Ut, Yt, qt, Gt, Jt = new Array;
            return this.clearArrays(), t(), null == (Lt = css.textTransform) && (Lt = "none"), null == (e = css.background) && (e = "white"), null == (i = css.border) && (i = "1px solid black"), null == (n = css.borderRadius) && (n = 10), null == (l = css.boxShadow) && (l = "0 0 0px rgba(0,0,0,0)"), null == (r = events.callback) && (r = this.dummy()), null == (o = attr.canvas) && (o = "chart"), null == (a = param.cell) && (a = "0"), null == (d = attr.chartType) && (d = "pie"), null == (c = attr.chartId) && (c = "chart1Id"), null == (g = param.col) && (g = 1e3), null == (f = css.colorIndex) && (f = ["#c5ffb3"]), null == (s = events.change) && (s = this.dummy()), null == (u = attr.className) && (u = "pimsClassName"), null == (p = events.click) && (p = this.dummy()), null == (h = attr.cls) && (h = ""), null == (y = attr.container) && (y = "container"), null == (m = css.color) && (m = "black"), null == (b = css.cursor) && (b = "default"), null == (v = css.dataFontSize) && (v = 12), null == (x = attr.dataLabel) && (x = "data"), null == (w = attr.dataLabel2) && (w = "data"), null == (A = attr.disabled) && (A = !1), null == (k = css.display) && (k = "block"), null == (S = css.displayKey) && (S = "none"), null == (_ = param.editWidth) && (_ = 100), null == (C = param.fieldClass) && (C = 0), null == (E = css.float) && (E = ""), null == (I = css.fontSize) && (I = 18), null == (B = css.fontWeight) && (B = "normal"), null == ($ = css.fontFamily) && ($ = "Helvetica"), null == (T = attr.format) && (T = "yy-mm-dd"), null == (F = param.header) && (F = "0"), null == (L = css.height) && (L = 30), null == (N = css.heightTable) && (N = 450), null == (R = events.hover) && (R = this.dummy()), D = css.hoverColor, null == (X = css.hoverBgColor) && (X = "null"), null == (O = attr.hoverId) && (O = "pims-hovertext"), null == (M = attr.hoverText) && (M = ""), null == (H = css.hoverHeight) && (H = 30), null == (z = css.hoverWidth) && (z = ""), null == (P = param.htm) && (P = "config/keypad.htm"), null == (W = attr.id) && (W = "x"), null == (j = param.idCol) && (j = 0), image = attr.image, null == image && (image = "nil 0 0"), K = attr.imageDir, null == (V = css.imgWidth) && (V = 45), null == (U = css.imgHeight) && (U = 45), null == (Y = events.keyup) && (Y = this.dummy()), null == (J = css.labelFontSize) && (J = 12), null == (Q = css.label2FontSize) && (Q = 12), null == (q = attr.labelString) && (q = ""), null == (G = attr.label2String) && (G = ""), null == (et = css.left) && (et = 0), null == (it = css.leftKey) && (it = 0), null == (Z = css.legendDisplay) && (Z = !1), null == (tt = css.legendPosition) && (tt = "bottom"), null == (ot = param.markSymbol) && (ot = ""), null == (lt = param.matchCol) && (lt = "-"), null == (rt = param.matchValue) && (rt = "-"), null == (nt = css.margin) && (nt = "0px 0px 0px 0px"), null == (ct = css.marginKey) && (ct = "0px 0px 0px 0px"), null == (ut = css.marginLeft) && (ut = "0"), null == (pt = css.marginTop) && (pt = "0"), null == (at = param.menuModel) && (at = "null"), null == (st = param.menuTitle) && (st = "null"), ht = param.model, null == (dt = attr.multiple) && (dt = !1), null == (gt = attr.name) && (gt = ""), null == (mt = attr.onscroll) && (mt = this.dummy()), null == (ft = css.padding) && (ft = "3px 0px 0px 3px"), null == (ft = css.padding) && (ft = "3px 0px 0px 3px"), null == (yt = css.paddingLeft) && (yt = "1"), null == (bt = css.paddingTop) && (bt = "1"), null == (vt = css.pointBorderColorIndex) && (vt = ["#000000"]), null == (xt = css.pointBorderDash) && (xt = [0]), null == (wt = css.pointBorderWidth) && (wt = [1]), null == (At = css.pointColorIndex) && (At = ["#c5ffb3"]), null == (kt = css.pointRadius) && (kt = ["5"]), null == (St = css.pointStyle) && (St = ["triangle"]), null == (_t = css.position) && (_t = "static"), null == (Ct = param.row) && (Ct = "0"), null == (It = param.selectCol) && (It = ""), null == (Tt = css.showDay) && (Tt = !1), null == (Et = attr.stacked) && (Et = !1), null == (Bt = attr.tableId) && (Bt = "tableId"), null == ($t = attr.targetIndex) && ($t = 0), null == (Jt = param.targetCol) && (Jt = ""), null == (Ft = attr.targetColor) && (Ft = "WHITE"), null == (Nt = css.textAlign) && (Nt = "center"), null == (Rt = attr.title) && (Rt = ""), null == (Dt = css.titleFontSize) && (Dt = 25), null == (Xt = attr.tooltips) && (Xt = !0), null == (Ot = css.top) && (Ot = 0), null == (Mt = css.topKey) && (Mt = 0), null == (zt = events.trigger) && (zt = "ondblclick"), null == (Ht = attr.type) && (Ht = "text"), null == (Pt = attr.value) && (Pt = ""), null == (Kt = param.whereClass) && (Kt = 0), null == (Wt = css.width) && (Wt = 119), null == (jt = css.widthTable) && (jt = 130), null == (Vt = css.xAxesFontSize) && (Vt = 12), null == (Ut = css.xlabelAngle) && (Ut = 0), null == (Yt = css.yAxesFontSize) && (Yt = 12), null == (qt = css.y2AxesFontSize) && (qt = 12), null == (Gt = attr.y2AxesType) && (Gt = ""), {
                background: e,
                border: i,
                borderRadius: n,
                boxShadow: l,
                canvas: o,
                change: s,
                callback: r,
                cell: a,
                chartId: c,
                chartType: d,
                className: u,
                click: p,
                cls: h,
                col: g,
                color: m,
                colorIndex: f,
                container: y,
                cursor: b,
                data: data,
                dataFontSize: v,
                dataLabel: x,
                dataLabel2: w,
                disabled: A,
                display: k,
                displayKey: S,
                editWidth: _,
                field: field,
                fieldClass: C,
                fieldOther: fieldOther,
                float: E,
                fontFamily: $,
                fontSize: I,
                fontWeight: B,
                format: T,
                header: F,
                height: L,
                heightTable: N,
                hover: R,
                hoverBgColor: X,
                hoverColor: D,
                hoverHeight: H,
                hoverId: O,
                hoverText: M,
                hoverWidth: z,
                htm: P,
                id: W,
                idCol: j,
                image: image,
                imageDir: K,
                imgHeight: U,
                imgWidth: V,
                keyup: Y,
                labelString: q,
                label2String: G,
                labelFontSize: J,
                label2FontSize: Q,
                left: et,
                leftKey: it,
                legendDisplay: Z,
                legendPosition: tt,
                marginKey: ct,
                markSymbol: ot,
                margin: nt,
                marginLeft: ut,
                marginTop: pt,
                matchCol: lt,
                matchValue: rt,
                menuModel: at,
                menuTitle: st,
                model: ht,
                multiple: dt,
                name: gt,
                onscroll: mt,
                padding: ft,
                paddingLeft: yt,
                paddingTop: bt,
                params: params,
                pointBorderColorIndex: vt,
                pointBorderDash: xt,
                pointBorderWidth: wt,
                pointColorIndex: At,
                pointRadius: kt,
                pointStyle: St,
                position: _t,
                row: Ct,
                selectCol: It,
                showDay: Tt,
                stacked: Et,
                tableId: Bt,
                targetIndex: $t,
                targetColor: Ft,
                targetCol: Jt,
                textAlign: Nt,
                textTransform: Lt,
                title: Rt,
                titleFontSize: Dt,
                tooltips: Xt,
                top: Ot,
                topKey: Mt,
                trigger: zt,
                type: Ht,
                value: Pt,
                where: where,
                whereClass: Kt,
                width: Wt,
                widthTable: jt,
                xAxesFontSize: Vt,
                xlabelAngle: Ut,
                yAxesFontSize: Yt,
                y2AxesFontSize: qt,
                y2AxesType: Gt
            }
        },
        Post: function(t, e, i) {
            this._rp_(t, e, function(t) {
                i(JSON.parse(t))
            })
        },
        POST: function(t, e) {
            var i = this.x,
                n = [],
                l = 0;
            for (var r in t) {
                if ("WHERE" == r) {
                    l = 1;
                    for (var o in t[r]) {
                        if ("class" == o)
                            for (var a = X.prototype.getIdClass(t[r][o]), s = 0; s < a.length; s++) {
                                var d = String(a[s].id).split("-").slice(2, 3);
                                n[a[s].field] = pims("#" + d).value
                            }
                        "class" != o && (n[o] = t[r][o])
                    }
                }
                if ("FIELD" == r) {
                    l = 1;
                    var c = "",
                        u = "";
                    for (var o in t[r]) {
                        if ("class" == o)
                            for (a = X.prototype.getIdClass(t[r][o]), s = 1; s < a.length; s++) {
                                c += a[s].field + ",";
                                d = String(a[s].id).split("-").slice(2, 3);
                                u += "'" + pims("#" + d).value + "',"
                            }
                        "class" != o && (c += o + ",", u += "'" + t[r][o] + "',", s++)
                    }
                    c += a[0].field;
                    d = String(a[0].id).split("-").slice(2, 3);
                    u += "'" + pims("#" + d).value + "'", n.fields = c, n.fieldsValue = u
                }
            }
            0 == l && (n = t), this._rp_(i, n, function(t) {
                try {
                    e(JSON.parse(t))
                } catch (t) {}
            })
        },
        Radar: function(t) {
            var e = this._p_(t),
                i = this.getHTMLElement(),
                n = this.x,
                l = this.x + ".php",
                r = this.x,
                o = n.split("-"),
                a = o.slice(2, 3);
            o.slice(2, 3);
            if (String(e.params).split("@").slice(1, 2) == n) var s = String(e.params).split("@").slice(0, 1);
            i.createdCallback = function() {
                this.innerHTML = '<div id="' + r + '"></div> '
            };
            try {
                pimsElement = document.registerPotato(n, {
                    prototype: i
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(n, {
                        prototype: i,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
            var d = [];
            if (null != [] && "null" != s)
                for (var c = (String(s).match(/AND/g) || []).length, u = String(s).split("AND"), p = 0; p <= c; p++) {
                    var h = String(u.slice(p, p + 1)).split(":"),
                        g = new Function(h.slice(1, 2));
                    "null" != String(h.slice(0, 1)).replace(/\s+/g, "") && (d[String(h.slice(0, 1)).replace(/\s+/g, "")] = String(g()).split(","))
                }
            pims().Post(l, d, function(t) {
                var i = new Array;
                i[0] = new Array, i[1] = new Array, i[2] = new Array, i[3] = new Array;
                for (var l = 0; l < t.length; l++)
                    for (var o = 0; o < i.length; o++) i[o][l] = t[l][o];
                var s = document.getElementById(r);
                s.innerHTML = "", $("#" + r).append('<canvas id="canvas-' + a + '" >読み込み中．．．</canvas>');
                var d = document.getElementById("canvas-" + a);
                $("#" + r).css({
                    width: e.width + "px",
                    height: e.height + "px",
                    border: e.border,
                    borderRadius: e.borderRadius,
                    position: e.position,
                    top: e.top + "px",
                    left: e.left + "px"
                });
                var c = document.createElement("div");
                c.setAttribute("id", "note-doughnut-" + a), s.appendChild(c), $("#note-doughnut-" + a).css({
                    fontSize: e.fontSize + "px",
                    position: "relative",
                    left: e.width / 10 + "px",
                    width: .8 * e.width + "px",
                    padding: "5px 5px 5px 5px",
                    textAlign: "center"
                });
                var u = document.createElement("img");
                u.setAttribute("id", "img-doughnut-" + a), u.setAttribute("onerror", "this.style.display='none'"), s.appendChild(u), $("#img-doughnut-" + a).css({
                    display: "block",
                    border: "0px",
                    borderRadius: e.height / 2 + "px",
                    background: "transparent",
                    height: e.height / 2 + "px",
                    width: e.height / 2 + "px",
                    position: "relative",
                    left: e.width / 2 - e.height / 2 / 2 + "px",
                    top: -e.height / 2 - e.height / 2 / 2 - 20 - e.fontSize + "px"
                });
                var p = i[3][0];
                if ($("#note-doughnut-" + a).show().html(p).css("border", "3px solid " + i[2][0]), -1 != String(t[0][0]).indexOf("-")) var h = String(i[0][0]).split("-"),
                    g = e.imageDir + h[0] + "-" + String(h[1]).substring(0, 1) + ".jpg";
                else g = e.imageDir + i[0][0] + ".jpg";
                document.getElementById("img-doughnut-" + a).src = g, document.getElementById("img-doughnut-" + a).style.border = "5px solid " + i[2][0], e.targetIndex = 0, e.targetColor = i[2][0];
                var m = {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    legend: {
                        position: "top",
                        display: !1
                    },
                    title: {
                        display: e.display,
                        text: e.title,
                        fontSize: e.titleFontSize
                    },
                    animation: {
                        duration: 500,
                        easing: "easeOutQuart",
                        onComplete: function() {
                            var i = this.chart.ctx;
                            i.font = Chart.helpers.fontString(e.dataFontSize, "normal", "Arial"), i.textAlign = "center", i.textBaseline = "bottom", this.data.datasets.forEach(function(e) {
                                for (var n = 0; n < e.data.length; n++) {
                                    var l = e._meta[Object.keys(e._meta)[0]],
                                        r = l.data[n]._model,
                                        o = l.total,
                                        a = r.innerRadius + (r.outerRadius - r.innerRadius) / 2,
                                        s = r.startAngle,
                                        d = s + (r.endAngle - s) / 2,
                                        c = a * Math.cos(d),
                                        u = a * Math.sin(d);
                                    i.fillStyle = "#000";
                                    var p = String(Math.round(e.data[n] / o * 100)) + "%";
                                    if (n < e.data.length - 1) {
                                        var h = r.x + c + 70;
                                        u > 0 && c < 0 && (h = r.x + c - 50), i.fillText(t[n][0] + ": " + t[n][1] + ", " + p, h, r.y + u + 8)
                                    }
                                }
                                p = String(Math.round(e.data[e.data.length - 1] / o * 100)) + "%";
                                i.fillText(t[e.data.length - 1][0] + ": " + t[e.data.length - 1][1] + ", " + p, r.x + c, r.y + 2 * u)
                            })
                        }
                    },
                    hover: {
                        onHover: function(t) {
                            this.getElementAtEvent(t).length ? t.target.style.cursor = "pointer" : t.target.style.cursor = "default", pims("#img-doughnut-" + a).style.display = "block"
                        }
                    },
                    onClick: function(t, i) {
                        e.targetIndex = i[0]._index, e.targetColor = i[0]._model.backgroundColor, e.click(n, i[0]._chart.data.labels[i[0]._index], i[0]._model.backgroundColor)
                    },
                    tooltips: {
                        enabled: !1,
                        backgroundColor: "yellow",
                        bodyFontColor: "black",
                        bodyFontSize: 12,
                        borderColor: "#000",
                        borderWidth: 1,
                        custom: function(t) {
                            if (t.opacity > 0) {
                                var i = this._data.datasets[0].other[t.dataPoints[0].index];
                                if ($("#note-doughnut-" + a).show().html(i).css("border", "3px solid " + t.labelColors[0].backgroundColor), -1 != String(this._data.labels[t.dataPoints[0].index]).indexOf("-")) var n = String(this._data.labels[t.dataPoints[0].index]).split("-"),
                                    l = e.imageDir + n[0] + "-" + String(n[1]).substring(0, 1) + ".jpg";
                                else l = e.imageDir + this._data.labels[t.dataPoints[0].index] + ".jpg";
                                document.getElementById("img-doughnut-" + a).src = l, document.getElementById("img-doughnut-" + a).style.display = "block", document.getElementById("img-doughnut-" + a).style.border = "5px solid " + t.labelColors[0].backgroundColor
                            } else {
                                i = this._data.datasets[0].other[e.targetIndex] + " ,  ";
                                if ($("#note-doughnut-" + a).show().html(i).css("border", "3px solid " + e.targetColor), -1 != String(this._data.labels[e.targetIndex]).indexOf("-")) n = String(this._data.labels[e.targetIndex]).split("-"), l = e.imageDir + n[0] + "-" + String(n[1]).substring(0, 1) + ".jpg";
                                else l = e.imageDir + this._data.labels[e.targetIndex] + ".jpg";
                                document.getElementById("img-doughnut-" + a).src = l, document.getElementById("img-doughnut-" + a).style.display = "block", document.getElementById("img-doughnut-" + a).style.border = "5px solid " + e.targetColor
                            }
                        }
                    }
                };
                new Chart(d, {
                    type: "doughnut",
                    data: {
                        labels: i[0],
                        datasets: [{
                            label: "不適合品番",
                            backgroundColor: i[2],
                            borderColor: "grey",
                            borderWidth: .5,
                            data: i[1],
                            other: i[3]
                        }]
                    },
                    showDatapoints: !0,
                    options: m
                });
                try {
                    e.callback()
                } catch (t) {}
            })
        },
        reload: function(t) {
            pimsReloadTime = t;
            var e = new Date,
                i = pims().timeNow();
            document.name = e.toLocaleDateString() + i, setTimeout(pims().counting, 1e3), i == t && (window.onbeforeunload = function(t) {}, location.reload())
        },
        reloadBar: function(t, e) {
            var i = [],
                n = [],
                l = pims.elementbar;
            if (t) switch (t) {
                case 1:
                    l = pims.element1bar;
                    break;
                case 2:
                    l = pims.element2bar;
                    break;
                case 3:
                    l = pims.element3bar;
                    break;
                case 4:
                    l = pims.element4bar;
                    break;
                case 5:
                    l = pims.element5bar;
                    break;
                case 6:
                    l = pims.element6bar;
                    break;
                case 7:
                    l = pims.element7bar;
                    break;
                case 8:
                    l = pims.element8bar;
                    break;
                case 9:
                    l = pims.element9bar
            }
            var r = l.getAttribute("chartType");
            null == r && (r = "bar");
            var o = l.getAttribute("border");
            null == o && (o = "1px solid black");
            var a = l.getAttribute("background");
            null == a && (a = "transparent");
            var s = l.getAttribute("titleDisplay");
            null == s && (s = !0);
            var d = l.getAttribute("titleFontSize");
            null == d && (d = 25);
            var c = l.getAttribute("legendDisplay");
            null == c && (c = !0);
            var u = l.getAttribute("legendPosition");
            null == u && (u = "bottom");
            var p = l.getAttribute("labelFontSize");
            null == p && (p = 12);
            var h = l.getAttribute("label2FontSize");
            null == h && (h = 12);
            var g = l.getAttribute("yAxesFontSize");
            null == g && (g = 12);
            var m = l.getAttribute("y2AxesFontSize");
            null == m && (m = 12);
            var f = l.getAttribute("xAxesFontSize");
            null == f && (f = 12);
            var y = l.getAttribute("dataFontSize");
            null == y && (y = 12);
            var b = l.getAttribute("fontSize");
            null == b && (b = 15);
            var v = l.getAttribute("title");
            null == v && (v = "_b_ Chart");
            var x = l.getAttribute("y2AxesType");
            null == x && (x = "");
            var w = l.getAttribute("click");
            if (null != w) {
                var A = l.localName;
                n[String(A)] = new Function(w)
            }
            var k = l.getAttribute("hover");
            if (null != k) {
                A = l.localName;
                i[String(A)] = new Function(k)
            }
            S = 'dataLabel:"-"';
            try {
                var S = l.getAttribute("params");
                null == S && (S = 'dataLabel:"-"')
            } catch (t) {}
            var _ = new Function(l.getAttribute("callback"));
            try {
                C = (C = new Function(l.getAttribute("stacked")))()
            } catch (t) {
                var C;
                null == (C = l.getAttribute("stacked")) && (C = !1)
            }
            null != C && "undefined" != C || null == (C = l.getAttribute("stacked")) && (C = !1);
            try {
                I = (I = new Function(l.getAttribute("tooltips")))()
            } catch (t) {
                var I;
                null == (I = l.getAttribute("tooltips")) && (I = !1)
            }
            null != I && "undefined" != I || null == (I = l.getAttribute("tooltips")) && (I = !0);
            try {
                T = (T = new Function(l.getAttribute("yAxesTitle")))()
            } catch (t) {
                var T;
                null == (T = l.getAttribute("yAxesTitle")) && (T = "")
            }
            null != T && "undefined" != T || null == (T = l.getAttribute("yAxesTitle")) && (T = "");
            try {
                E = (E = new Function(l.getAttribute("y2AxesTitle")))()
            } catch (t) {
                var E;
                null == (E = l.getAttribute("y2AxesTitle")) && (E = "")
            }
            null != E && "undefined" != E || null == (E = l.getAttribute("y2AxesTitle")) && (E = "");
            try {
                B = (B = new Function(l.getAttribute("showDay")))()
            } catch (t) {
                var B;
                null == (B = l.getAttribute("showDay")) && (B = !0)
            }
            null != B && "undefined" != B || null == (B = l.getAttribute("showDay")) && (B = !0);
            try {
                $ = ($ = new Function(l.getAttribute("height")))()
            } catch (t) {
                var $;
                null == ($ = l.getAttribute("height")) && ($ = 350)
            }
            null != $ && "undefined" != $ || null == ($ = l.getAttribute("height")) && ($ = 350);
            try {
                F = (F = new Function(l.getAttribute("width")))()
            } catch (t) {
                var F;
                null == (F = l.getAttribute("width")) && (F = 600)
            }
            null != F && "undefined" != F || null == (F = l.getAttribute("width")) && (F = 600);
            try {
                L = (L = new Function(l.getAttribute("xlabelAngle")))()
            } catch (t) {
                var L;
                null == (L = l.getAttribute("xlabelAngle")) && (L = 0)
            }
            null != L && "undefined" != L || null == (L = l.getAttribute("xlabelAngle")) && (L = 0);
            try {
                N = (N = new Function(l.getAttribute("dataLabel")))()
            } catch (t) {
                var N;
                null == (N = l.getAttribute("dataLabel")) && (N = "data")
            }
            null != N && "undefined" != N || null == (N = l.getAttribute("dataLabel")) && (N = "data");
            try {
                R = (R = new Function(l.getAttribute("dataLabel2")))()
            } catch (t) {
                var R;
                null == (R = l.getAttribute("dataLabel2")) && (R = "data")
            }
            null != R && "undefined" != R || null == (R = l.getAttribute("dataLabel2")) && (R = "data");
            try {
                var D = new Function(l.getAttribute("colorIndex"));
                D = String(D()).split(",")
            } catch (t) {
                try {
                    D = l.getAttribute("colorIndex").split(",")
                } catch (t) {}
                null == D && (D = ["#ffcfcf", "#ffbe42", "#fff630", "#90ff39", "#01ff1f", "#2affc4", "#15beff", "#a4b3ff", "#b54aff", "#e5c0ff", "#f32eff", "#ffc4f4", "#dbd6da", "#ffffff"])
            }
            if (null == D || "undefined" == D) {
                try {
                    D = String(l.getAttribute("colorIndex")).split(",")
                } catch (t) {}
                null == D && (D = ["#ffcfcf", "#ffbe42", "#fff630", "#90ff39", "#01ff1f", "#2affc4", "#15beff", "#a4b3ff", "#b54aff", "#e5c0ff", "#f32eff", "#ffc4f4", "#dbd6da", "#ffffff"])
            }
            try {
                var X = new Function(l.getAttribute("pointBorderColorIndex"));
                X = String(X()).split(",")
            } catch (t) {
                try {
                    X = String(l.getAttribute("pointBorderColorIndex")).split(",")
                } catch (t) {}
                null == X && (X = ["#000000", "#000000", "#000000", "#000000", "#000000"])
            }
            if (null == X || "undefined" == X) {
                try {
                    X = l.getAttribute("pointBorderColorIndex").split(",")
                } catch (t) {}
                null == X && (X = ["#000000", "#000000", "#000000", "#000000", "#000000"])
            }
            try {
                var O = new Function(l.getAttribute("pointBorderDash"));
                O = String(O()).split(",")
            } catch (t) {
                try {
                    O = String(l.getAttribute("pointBorderDash")).split(",")
                } catch (t) {}
                null == O && (O = [0, 0, 0, 0, 0])
            }
            if (null == O || "undefined" == O) {
                try {
                    O = l.getAttribute("pointBorderDash").split(",")
                } catch (t) {}
                null == O && (O = [0, 0, 0, 0, 0])
            }
            try {
                var M = new Function(l.getAttribute("pointBorderWidth"));
                M = String(M()).split(",")
            } catch (t) {
                try {
                    M = String(l.getAttribute("pointBorderWidth")).split(",")
                } catch (t) {}
                null == M && (M = ["1", "1", "1", "1", "1"])
            }
            if (null == M || "undefined" == M) {
                try {
                    M = l.getAttribute("pointBorderWidth").split(",")
                } catch (t) {}
                null == M && (M = ["1", "1", "1", "1", "1"])
            }
            try {
                var z = new Function(l.getAttribute("pointColorIndex"));
                z = String(z()).split(",")
            } catch (t) {
                try {
                    z = String(l.getAttribute("pointColorIndex")).split(",")
                } catch (t) {}
                null == z && (z = ["#000000", "#ffe184", "#b54aff", "#dbd6da", "#a0b9ff"])
            }
            if (null == z || "undefined" == z) {
                try {
                    z = l.getAttribute("pointColorIndex").split(",")
                } catch (t) {}
                null == z && (z = ["#000000", "#ffe184", "#b54aff", "#dbd6da", "#a0b9ff"])
            }
            try {
                var H = new Function(l.getAttribute("pointStyle"));
                H = String(H()).split(",")
            } catch (t) {
                try {
                    H = l.getAttribute("pointStyle").split(",")
                } catch (t) {}
                null == H && (H = ["triangle", "rect", "cross", "rectRot", "star", "dash"])
            }
            if (null == H || "undefined" == H) {
                try {
                    H = l.getAttribute("pointStyle").split(",")
                } catch (t) {}
                null == H && (H = ["triangle", "rect", "cross", "rectRot", "star", "dash"])
            }
            try {
                var P = new Function(l.getAttribute("pointRadius"));
                P = String(P()).split(",")
            } catch (t) {
                try {
                    P = l.getAttribute("pointRadius").split(",")
                } catch (t) {}
                null == P && (P = ["5", "5", "8", "8"])
            }
            if (null == P || "undefined" == P) {
                try {
                    P = l.getAttribute("pointRadius").split(",")
                } catch (t) {}
                null == P && (P = ["5", "5", "8", "8"])
            }
            "false" != e && 0 != e && pims(l.localName)._b_(function() {
                params = S + "@" + l.localName, css = {
                    display: s,
                    background: a,
                    border: o,
                    height: $,
                    width: F,
                    fontSize: b,
                    legendDisplay: c,
                    legendPosition: u,
                    colorIndex: D,
                    pointBorderColorIndex: X,
                    pointBorderDash: O,
                    pointBorderWidth: M,
                    pointColorIndex: z,
                    pointStyle: H,
                    pointRadius: P,
                    showDay: B,
                    xlabelAngle: L,
                    labelFontSize: p,
                    label2FontSize: h,
                    yAxesFontSize: g,
                    y2AxesFontSize: m,
                    xAxesFontSize: f,
                    dataFontSize: y,
                    titleFontSize: d
                }, attr = {
                    chartType: r,
                    title: v,
                    labelString: T,
                    label2String: E,
                    y2AxesType: x,
                    stacked: C,
                    tooltips: I,
                    dataLabel: N,
                    dataLabel2: R
                }, null != w && (events = {
                    callback: function() {
                        try {
                            _()
                        } catch (t) {}
                    },
                    click: function(t, e, i, l) {
                        for (var r in pims.chartLabel = e, pims.chartValue = i, pims.chartXvalue = l, n) {
                            String(r) == t && n[r]()
                        }
                    },
                    hover: function(t, e, n, l) {
                        for (var r in pims.chartLabel = e, pims.chartValue = n, pims.chartXvalue = l, i) {
                            String(r) == t && i[r]()
                        }
                    }
                })
            })
        },
        reloadDoughnut: function(t, e) {
            var i = [],
                n = pims.elementdoughnut;
            if (t) switch (t) {
                case 1:
                    n = pims.element1doughnut;
                    break;
                case 2:
                    n = pims.element2doughnut;
                    break;
                case 3:
                    n = pims.element3doughnut;
                    break;
                case 4:
                    n = pims.element4doughnut;
                    break;
                case 5:
                    n = pims.element5doughnut;
                    break;
                case 6:
                    n = pims.element6doughnut;
                    break;
                case 7:
                    n = pims.element7doughnut;
                    break;
                case 8:
                    n = pims.element8doughnut;
                    break;
                case 9:
                    n = pims.element9doughnut
            }
            var l = n.getAttribute("border");
            null == l && (l = "1px solid black");
            var r = n.getAttribute("height");
            null == r && (r = 350);
            var o = n.getAttribute("width");
            null == o && (o = 600);
            var a = n.getAttribute("dataFontSize");
            null == a && (a = 12);
            var s = n.getAttribute("fontSize");
            null == s && (s = 15);
            var d = n.getAttribute("imageDir");
            if (null == d) d = "null";
            else {
                var c = new Function(d);
                d = c()
            }
            var u = n.getAttribute("titleDisplay");
            null == u && (u = !1);
            var p = n.getAttribute("titleFontSize");
            null == p && (p = 25);
            var h = n.getAttribute("title");
            null == h && (h = "_dn_ Chart");
            var g = n.getAttribute("click");
            if (null != g) {
                var m = n.localName;
                i[String(m)] = new Function(g)
            }
            var f = new Function(n.getAttribute("callback")),
                y = n.getAttribute("params");
            "false" != e && pims(n.localName)._dn_(function() {
                params = y + "@" + n.localName, css = {
                    border: l,
                    height: r,
                    width: o,
                    fontSize: s,
                    display: u,
                    dataFontSize: a,
                    titleFontSize: p
                }, attr = {
                    imageDir: d,
                    title: h
                }, null != g && (events = {
                    callback: function() {
                        try {
                            f()
                        } catch (t) {}
                    },
                    click: function(t, e, n) {
                        for (var l in pims.chartLabel = n, pims.chartValue = e, i) {
                            String(l) == t && i[l]()
                        }
                    }
                })
            })
        },
        reloadRadar: function(t, e) {
            var i = [],
                n = pims.elementradar;
            if (t) switch (t) {
                case 1:
                    n = pims.element1radar;
                    break;
                case 2:
                    n = pims.element2radar;
                    break;
                case 3:
                    n = pims.element3radar;
                    break;
                case 4:
                    n = pims.element4radar;
                    break;
                case 5:
                    n = pims.element5radar;
                    break;
                case 6:
                    n = pims.element6radar;
                    break;
                case 7:
                    n = pims.element7radar;
                    break;
                case 8:
                    n = pims.element8radar;
                    break;
                case 9:
                    n = pims.element9radar
            }
            var l = n.getAttribute("border");
            null == l && (l = "1px solid black");
            var r = n.getAttribute("height");
            null == r && (r = 350);
            var o = n.getAttribute("width");
            null == o && (o = 600);
            var a = n.getAttribute("dataFontSize");
            null == a && (a = 12);
            var s = n.getAttribute("fontSize");
            null == s && (s = 15);
            var d = n.getAttribute("titleDisplay");
            null == d && (d = !1);
            var c = n.getAttribute("titleFontSize");
            null == c && (c = 25);
            var u = n.getAttribute("title");
            null == u && (u = "_dn_ Chart");
            var p = n.getAttribute("click");
            if (null != p) {
                var h = n.localName;
                i[String(h)] = new Function(p)
            }
            var g = new Function(n.getAttribute("callback")),
                m = n.getAttribute("params");
            "false" != e && pims(n.localName).Radar(function() {
                params = m + "@" + n.localName, css = {
                    border: l,
                    height: r,
                    width: o,
                    fontSize: s,
                    display: d,
                    dataFontSize: a,
                    titleFontSize: c
                }, attr = {
                    title: u
                }, null != p && (events = {
                    callback: function() {
                        try {
                            g()
                        } catch (t) {}
                    },
                    click: function(t, e, n) {
                        for (var l in pims.chartLabel = n, pims.chartValue = e, i) {
                            String(l) == t && i[l]()
                        }
                    }
                })
            })
        },
        reloadTable: function(t) {
            this.setBindTableElements();
            var e, i, n, l = pims.element;
            if (t) switch (t) {
                case 1:
                    l = pims.element1;
                    break;
                case 2:
                    l = pims.element2;
                    break;
                case 3:
                    l = pims.element3;
                    break;
                case 4:
                    l = pims.element4;
                    break;
                case 5:
                    l = pims.element5;
                    break;
                case 6:
                    l = pims.element6;
                    break;
                case 7:
                    l = pims.element7;
                    break;
                case 8:
                    l = pims.element8;
                    break;
                case 9:
                    l = pims.element9
            }
            var r = l.getAttribute("id"),
                o = String(l.localName).split("-");
            null == r && (r = o.slice(2, 3));
            var a = l.getAttribute("model");
            null == a && (a = String(o.slice(2, 3)).toLowerCase() + ".php");
            var s = l.getAttribute("header");
            null == s && (s = "");
            var d = l.getAttribute("border");
            null == d && (d = "0px solid black");
            var c = l.getAttribute("borderRadius");
            null == c && (c = 0), null != l.getAttribute("click") && (e = new Function(l.getAttribute("click")));
            var u = l.getAttribute("height");
            null == u && (u = window.innerHeight - 200);
            var p = l.getAttribute("width");
            null == p && (p = window.innerWidth - 30);
            var h = l.getAttribute("root");
            if (null == h) try {
                o = String(l.localName).split("-");
                h = String(o.slice(1, 2))
            } catch (t) {
                h = "getFIELD"
            }
            var g = l.getAttribute("whereClass");
            null == g && (g = "getWHERE");
            try {
                var m = l.getAttribute("params")
            } catch (t) {}
            var f = l.getAttribute("editCols");
            null != l.getAttribute("editCellCallback") && (i = new Function(l.getAttribute("editCellCallback")));
            var y = l.getAttribute("editWidth");
            null == y && (y = 50);
            var b = l.getAttribute("selectCols"),
                v = l.getAttribute("targetCol");
            null == v && (v = 0);
            var x = l.getAttribute("markSymbol");
            null == x && (x = "★"), null != l.getAttribute("selectCellCallback") && (n = new Function(l.getAttribute("selectCellCallback")));
            var w = new Function(l.getAttribute("callback"));
            pims(l.localName)._tb_({
                FIELD: {
                    class: h
                },
                WHERE: {
                    class: g
                }
            }, function() {
                params = m + "@" + l.localName, css = {
                    border: d,
                    borderRadius: c,
                    height: u,
                    width: p
                }, attr = {
                    id: r
                }, param = {
                    model: a,
                    header: s
                }, events = {
                    callback: function(t, e) {
                        try {
                            w()
                        } catch (t) {}
                        if (null != b) {
                            var i = [];
                            try {
                                i = b.split(",")
                            } catch (t) {
                                i = b
                            }
                            i.length > 0 && pims(e).MultipleSelect(function() {
                                param = {
                                    markSymbol: x,
                                    targetCol: v,
                                    selectCol: b
                                }, events = {
                                    callback: function(t) {
                                        pims.data = [], pims.data = t;
                                        try {
                                            n()
                                        } catch (t) {}
                                    }
                                }
                            })
                        }
                    },
                    click: function(t, n, l, r) {
                        potato.table = t, potato.ri = n, potato.ci = l;
                        try {
                            e()
                        } catch (t) {}
                        var o = [];
                        try {
                            o = f.split(",")
                        } catch (t) {}
                        o.length > 0 && -1 != o.indexOf(String(l)) && pims(r)._ec_(function() {
                            param = {
                                editWidth: y,
                                targetCol: l
                            }, events = {
                                callback: function(t, e, n, l) {
                                    pims.dataID = t, pims.value = e, pims.ci = n;
                                    try {
                                        i()
                                    } catch (t) {}
                                }
                            }
                        })
                    }
                }
            })
        },
        response: function(t, e) {
            var i = new XMLHttpRequest;
            i.open("GET", _pdir().potatoModelDir2 + t), i.onload = function() {
                e(JSON.parse(i.responseText))
            }, i.send()
        },
        _rp_: function(t, e, i) {
            var n = "string" == typeof e ? e : Object.keys(e).map(function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                }).join("&"),
                l = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            l.open("POST", t);
            return l.onreadystatechange = function() {
                l.readyState > 3 && 200 == l.status && (pims_console = l.responseText, i(l.responseText))
            }, l.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), l.setRequestHeader("Chartset", "UTF-8"), l.send(n), l
        },
        _re_: function(t, e, i) {
            var n = "string" == typeof e ? e : Object.keys(e).map(function(t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
            }).join("&");
            n += "& model=" + _pdir().potatoModelDir + t;
            var l = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            return l.open("POST", "config/excel.php"), l.onreadystatechange = function() {
                l.readyState > 3 && 200 == l.status && (pims_console = l.responseText, i(l.responseText))
            }, l.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), l.setRequestHeader("Chartset", "UTF-8"), l.setRequestHeader("Content-length", n.length), l.setRequestHeader("Connection", "close"), l.send(n), l
        },
        _rx_: function(t, e, i, n) {
            var l = "string" == typeof i ? i : Object.keys(i).map(function(t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(i[t])
            }).join("&");
            l += "& model=../apps/" + String(String(window.location.href).split("=").slice(1, 2)).split("-").slice(0, 1) + "/Models/" + e;
            var r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            return r.open("POST", "config/xml.php"), r.onreadystatechange = function() {
                r.readyState > 3 && 200 == r.status && (pims_console = r.responseText, n(t, r.responseText))
            }, r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.setRequestHeader("Chartset", "UTF-8"), r.setRequestHeader("Content-length", l.length), r.setRequestHeader("Connection", "close"), r.send(l), r
        },
        second: function() {
            var t = (new Date).getSeconds();
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        Select: function(t, e, i) {
            var n = this.getHTMLElement(),
                l = this.x,
                r = this._p_(i);
            r.id = l, n.createdCallback = function() {
                this.innerHTML = '<Select id="' + l + '"></Select> ';
                for (var t = (l.match(/-/g) || []).length, e = l.split("-"), i = e.slice(2, 3), n = 3; n <= t; n++) i = i + "_" + e.slice(n, n + 1);
                this.name = i, this.is = l, $("#" + l).css({
                    width: r.width + "px",
                    height: r.height + "px",
                    color: r.color,
                    background: r.background,
                    boxShadow: r.boxShadow,
                    display: r.display,
                    fontFamily: r.fontFamily,
                    fontWeight: r.fontWeight,
                    fontSize: r.fontSize + "px",
                    textAlign: r.textAlign,
                    padding: r.padding,
                    border: r.border,
                    position: r.position,
                    left: r.left + "px",
                    top: r.top + "px",
                    borderRadius: r.borderRadius + "px",
                    textTransform: r.textTransform,
                    cursor: "pointer"
                }).attr("multiple", r.multiple).mousemove(function() {
                    "null" != r.hoverBgColor && $(this).css("background", r.hoverBgColor), $(this).css("color", r.hoverColor), "" != r.hoverText && $("#" + r.hoverId).html(r.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: r.hoverHeight + "px",
                        width: r.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 50
                    })
                }).mouseout(function() {
                    "null" != r.hoverBgColor && $(this).css("background", r.background), $(this).css("color", r.i), $("#" + r.hoverId).hide().html("")
                }).change(function() {
                    try {
                        r.change()
                    } catch (t) {}
                }).click(function() {
                    try {
                        document.getElementById("keypadtable").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyPad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("TimePad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyBoard").style.display = "none"
                    } catch (t) {}
                    try {
                        pimsListObject.style.display = "none"
                    } catch (t) {}
                    try {
                        r.click()
                    } catch (t) {}
                })
            }, this._rp_(t, e, function(t) {
                var e = document.getElementById(l),
                    i = JSON.parse(t);
                e.length = 0;
                var n = 0;
                for (var o in i)
                    if ("undefined" != i[o].d0 && null != i[o].d0) {
                        var a = i[o].d1;
                        T = i[o].d0, e[n] = new Option(a, T), n++
                    }
                r.callback()
            });
            try {
                pimsElement = document.registerPotato(l, {
                    prototype: n,
                    extends: "div"
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(l, {
                        prototype: n,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        SELECT: function(t, e) {
            var i = this._p_(e),
                n = this.getHTMLElement(),
                l = this.x,
                r = String(l).split("-").slice(2, 3),
                o = l + ".php",
                a = "",
                s = [],
                d = 0;
            for (var c in t) {
                if (d++, "WHERE" == c) {
                    var u = 0;
                    for (var p in t[c]) {
                        if ("class" == p)
                            for (var h = X.prototype.getIdClass(t[c][p]), g = 0; g < h.length; g++) s[h[g].field] = pims(h[g].is).value();
                        "class" != p && (s[p] = t[c][p])
                    }
                }
                if ("FIELD" == c) {
                    u = 0, a = "";
                    var m, f = [],
                        y = [],
                        b = 0;
                    for (var p in t[c]) {
                        if ("class" == p) {
                            b = 1, m = (h = X.prototype.getIdClass(t[c][p]))[0].field;
                            for (g = 0; g < h.length; g++) {
                                var v = String(h[g].pims).split("-");
                                f[v.slice(1, 2)] = h[g].field + ",", y[v.slice(1, 2)] = h[g].pims
                            }
                            u = parseFloat(v.slice(1, 2))
                        }
                        "class" != p && (1 == b ? f[u + 1] = p + "," : f[u] = p + ",", m = p, u++)
                    }
                    f[f.length] = m;
                    for (g = 0; g < f.length; g++) a += f[g];
                    s.fields = a
                }
            }
            d > 0 ? s.fieldsLength = 2 : s = {}, n.createdCallback = function() {
                this.id = r + "_";
                var t = document.getElementById(l);
                try {
                    this.index = t.getAttribute("index"), this.field = t.getAttribute("field"), null == this.index && (this.index = 0), null == this.field && (this.field = 0)
                } catch (t) {}
                this.pims = l, this.innerHTML = '<Select id="pims-' + l + '"></Select> ', (t = document.getElementById(r)).style.width = i.width + "px", "string" == typeof i.width && (t.style.width = i.width), t.style.height = i.height + "px", "string" == typeof i.height && (t.style.height = i.height), t.style.background = i.background, t.style.boxShadow = i.boxShadow, t.style.color = i.color, t.style.display = i.display, t.style.fontFamily = i.fontFamily, t.style.fontWeight = i.fontWeight, t.style.fontSize = i.fontSize + "px", "string" == typeof i.fontSize && (t.style.fontSize = i.fontSize), t.style.textAlign = i.textAlign, t.style.padding = i.padding, t.style.border = i.border, t.style.position = i.position, t.style.left = i.left + "px", "string" == typeof i.left && (t.style.left = i.left), t.style.top = i.top + "px", "string" == typeof i.top && (t.style.top = i.top), t.style.borderRadius = i.borderRadius + "px", "string" == typeof i.borderRadius && (t.style.borderRadius = i.borderRadius), t.style.textTransform = i.textTransform, t.style.cursor = "pointer", t.multiple = i.multiple, X("#" + r).CLICK(function() {
                    try {
                        document.getElementById("keypadtable").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyPad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("TimePad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyBoard").style.display = "none"
                    } catch (t) {}
                    try {
                        pimsListObject.style.display = "none"
                    } catch (t) {}
                    try {
                        i.click()
                    } catch (t) {}
                }), X("#" + r).MOUSEMOVE(function() {
                    "null" != i.hoverBgColor && $(this).css("background", i.hoverBgColor), $(this).css("color", i.hoverColor), "" != i.hoverText && $("#" + i.hoverId).html(i.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: i.hoverHeight + "px",
                        width: i.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 50
                    })
                }), X("#" + r).MOUSEOUT(function() {
                    "null" != i.hoverBgColor && $(this).css("background", i.background), $(this).css("color", i.i), $("#" + i.hoverId).hide().html("")
                }), X("#" + l).CHANGE(function() {
                    try {
                        i.change()
                    } catch (t) {}
                })
            }, this._rp_(o, s, function(t) {
                var e = document.getElementById(r),
                    n = JSON.parse(t);
                e.length = 0;
                var l = 0;
                for (var o in n)
                    if ("undefined" != n[o][0] && null != n[o][0]) {
                        var a = n[o][1];
                        T = n[o][0], e[l] = new Option(a, T), l++
                    }
                i.callback()
            });
            try {
                pimsElement = document.registerPotato(l, {
                    prototype: n,
                    extends: "div"
                })
            } catch (t) {}
        },
        scrollx: function(t, e, i) {
            for (var n = this.x, l = document.getElementsByClassName(t), r = 0; r < l.length; r++) parseFloat(document.getElementById(n).scrollLeft) > e ? l[r].style.left = i ? parseFloat(document.getElementById(n).scrollLeft) + parseFloat(i) + "px" : document.getElementById(n).scrollLeft + "px" : l[r].style.left = "0px"
        },
        scrolly: function(t, e, i) {
            for (var n = this.x, l = document.getElementsByClassName(t), r = 0; r < l.length; r++) parseFloat(document.getElementById(n).scrollTop) > e ? l[r].style.top = i ? parseFloat(document.getElementById(n).scrollTop) + parseFloat(i) + "px" : document.getElementById(n).scrollTop + "px" : l[r].style.top = "0px"
        },
        setBindTableElements: function() {
            _potatoArray = [];
            for (var t = document.getElementsByTagName("*"), e = 0; e < t.length; e++) {
                var i = t[e].getAttribute("bind");
                try {
                    if (null != i && -1 != i.indexOf(",")) {
                        var n = String(i).split(","),
                            l = String(t[e].getAttribute("id")).split("_").slice(0, 1),
                            r = n[2];
                        null == r && (r = l), _potatoArray.push({
                            id: n[1],
                            field: r,
                            value: document.getElementById(l).value,
                            bind: n[0]
                        })
                    }
                } catch (t) {}
            }
        },
        _se_: function() {
            var t, e = document.getElementsByTagName("*"),
                i = [],
                n = [],
                l = [],
                r = [],
                o = [],
                a = [],
                s = [],
                d = [],
                c = 0;
            for (t = 0; t < e.length; t++) {
                var u = e[t].getAttribute("bind");
                if (null != u) {
                    if (_potatoId[c] = u, null != e[t].getAttribute("id")) _potatoBindId[c] = e[t].getAttribute("id");
                    else {
                        var p = String(e[t].tagName).split("-");
                        _potatoBindId[c] = String(p.slice(2, 3)).toLowerCase()
                    }
                    c++
                }
                var h = String(e[t].tagName).split("-");
                if (-1 != this.If(h.slice(0, 1))) {
                    var g, m, f, y = String(e[t].tagName).split("-");
                    if ("BUTTON" == y.slice(1, 2)) {
                        var b = e[t].getAttribute("id");
                        null == b && (b = y.slice(2, 3));
                        var v = e[t].getAttribute("background");
                        null == v && (v = "#eeeeee");
                        var x = e[t].getAttribute("border");
                        null == x && (x = "1px solid black");
                        var w = e[t].getAttribute("borderRadius");
                        null == w && (w = 5);
                        var A = e[t].getAttribute("boxShadow");
                        null == A && (A = "0 0 0px rgba(0,0,0,0)");
                        var k = e[t].getAttribute("color");
                        null == k && (k = "black");
                        var S = e[t].getAttribute("display");
                        null == S && (S = "block");
                        var _ = e[t].getAttribute("fontFamily");
                        null == _ && (_ = "Arial");
                        var C = e[t].getAttribute("fontSize");
                        null == C && (C = 15);
                        var I = e[t].getAttribute("fontWeight");
                        null == I && (I = "normal");
                        var T = e[t].getAttribute("submit"),
                            E = e[t].getAttribute("fieldOther"),
                            B = e[t].getAttribute("height");
                        null == B && (B = 30);
                        var F = e[t].getAttribute("hoverBgColor");
                        null == F && (F = "yellow");
                        var L = e[t].getAttribute("hoverText");
                        null == L && (L = "");
                        var N = e[t].getAttribute("left");
                        null == N && (N = 0);
                        var R = e[t].getAttribute("margin");
                        null == R && (R = "2px 2px 2px 2px");
                        var D = e[t].getAttribute("padding");
                        null == D && (D = "5px 0px 5px 5px");
                        var O = e[t].getAttribute("paddingLeft");
                        null == O && (O = 1);
                        var M = e[t].getAttribute("paddingTop");
                        null == M && (M = 1);
                        var z = e[t].getAttribute("params"),
                            H = e[t].getAttribute("position");
                        null == H && (H = "static");
                        var P = e[t].getAttribute("textAlign");
                        null == P && (P = "center");
                        var W = e[t].getAttribute("top");
                        null == W && (W = 0);
                        var j = e[t].getAttribute("width");
                        null == j && (j = 100);
                        var K, V, U = e[t].getAttribute("whereClass");
                        pims(e[t].localName)._bt_(function() {
                            if (where = U + "@" + e[t].localName, field = T + "@" + e[t].localName, fieldOther = E + "@" + e[t].localName, params = z + "@" + e[t].localName, css = {
                                    background: v,
                                    border: x,
                                    borderRadius: w,
                                    boxShadow: A,
                                    color: k,
                                    display: S,
                                    fontFamily: _,
                                    fontSize: C,
                                    fontWeight: I,
                                    height: B,
                                    hoverBgColor: F,
                                    left: N,
                                    margin: R,
                                    padding: D,
                                    position: H,
                                    paddingTop: M,
                                    paddingLeft: O,
                                    textAlign: P,
                                    top: W,
                                    width: j
                                }, null != e[t].getAttribute("value") && null != e[t].getAttribute("image") ? attr = {
                                    value: e[t].getAttribute("value"),
                                    image: e[t].getAttribute("image"),
                                    hoverText: L,
                                    id: b
                                } : null != e[t].getAttribute("value") && null == e[t].getAttribute("image") ? attr = {
                                    value: e[t].getAttribute("value"),
                                    hoverText: L
                                } : null == e[t].getAttribute("value") && null != e[t].getAttribute("image") && (attr = {
                                    image: e[t].getAttribute("image"),
                                    hoverText: L
                                }), null != e[t].getAttribute("click")) try {
                                K = new Function(e[t].getAttribute("click")), null != e[t].getAttribute("callback") && (V = new Function(e[t].getAttribute("callback"))), events = {
                                    click: K,
                                    callback: V
                                }
                            } catch (t) {} else try {
                                try {
                                    K = new Function("_pims." + String(y.slice(2, 3)).toLowerCase() + "()")
                                } catch (t) {
                                    K = new Function(b + "()")
                                }
                                null != e[t].getAttribute("callback") && (V = new Function(e[t].getAttribute("callback"))), events = {
                                    click: K,
                                    callback: V
                                }
                            } catch (t) {}
                        })
                    }
                    if ("CALENDAR" == y.slice(1, 2)) {
                        var Y = e[t].getAttribute("background");
                        null == Y && (Y = "#ffffff");
                        var q = e[t].getAttribute("border");
                        null == q && (q = "1px solid grey");
                        var G = e[t].getAttribute("borderRadius");
                        null == G && (G = 7);
                        var J = e[t].getAttribute("fontSize"),
                            Q = e[t].getAttribute("display");
                        null == Q && (Q = "block"), null == J && (J = 15);
                        var Z = e[t].getAttribute("height");
                        null == Z && (Z = 30);
                        var tt = e[t].getAttribute("hoverBgColor");
                        null == tt && (tt = "yellow");
                        var et = e[t].getAttribute("hoverText");
                        null == et && (et = "");
                        var it = e[t].getAttribute("value"); - 1 != String(it).indexOf("return") && (it = new Function(e[t].getAttribute("value"))), null == it && (it = pims().GetDate("today", "-", 0));
                        var nt = e[t].getAttribute("width");
                        null == nt && (nt = 100);
                        var lt = e[t].getAttribute("padding");
                        null == lt && (lt = "0px 0px 0px 0px");
                        var rt = e[t].getAttribute("id");
                        null == rt && (rt = y.slice(2, 3));
                        var ot = e[t].getAttribute("class");
                        if (null == ot && (ot = "getFIELD"), $(e[t].localName).addClass(ot), null != (Te = e[t].getAttribute("change"))) {
                            h = e[t].localName;
                            l[String(h)] = new Function(Te)
                        }
                        pims(e[t].localName)._d_(function() {
                            css = {
                                height: Z,
                                width: nt,
                                fontSize: J,
                                hoverBgColor: tt,
                                border: q,
                                borderRadius: G,
                                background: Y,
                                padding: lt,
                                display: Q
                            }, attr = {
                                value: it,
                                hoverText: et,
                                id: rt
                            }, null != Te && (events = {
                                change: function(t) {
                                    for (var e in l) {
                                        String(e) == t && l[e]()
                                    }
                                }
                            })
                        })
                    }
                    if ("KEYPAD" == y.slice(1, 2)) {
                        var at = e[t].getAttribute("background");
                        null == at && (at = "#ffffff");
                        var st = e[t].getAttribute("borderRadius");
                        null == st && (st = 7);
                        var dt = e[t].getAttribute("fontSize");
                        null == dt && (dt = 15);
                        var ct = e[t].getAttribute("height");
                        null == ct && (ct = 30);
                        var ut = e[t].getAttribute("hoverBgColor");
                        null == ut && (ut = "yellow");
                        var pt = e[t].getAttribute("htm");
                        null == pt && (pt = "config/keypad.htm");
                        var ht = e[t].getAttribute("left");
                        null == ht && (ht = 0);
                        var gt = e[t].getAttribute("top");
                        null == gt && (gt = 0);
                        var mt = e[t].getAttribute("value");
                        null == mt && (mt = "0");
                        var ft = e[t].getAttribute("width");
                        null == ft && (ft = 100);
                        var yt = e[t].getAttribute("id");
                        null == yt && (yt = String(y.slice(2, 3)).toLowerCase());
                        var bt = e[t].getAttribute("border");
                        null == bt && (bt = "1px solid black");
                        var vt = e[t].getAttribute("class");
                        null == vt && (vt = "getFIELD"), $(e[t].localName).addClass(vt);
                        var xt = new Function(e[t].getAttribute("change")),
                            wt = new Function(e[t].getAttribute("click"));
                        pims(e[t].localName)._kp_(function() {
                            param = {
                                htm: pt
                            }, css = {
                                height: ct,
                                width: ft,
                                fontSize: dt,
                                hoverBgColor: ut,
                                borderRadius: st,
                                background: at,
                                topKey: gt,
                                leftKey: ht,
                                border: bt
                            }, attr = {
                                value: mt,
                                id: yt,
                                name: yt
                            }, events = {
                                change: xt,
                                click: wt
                            }
                        })
                    }
                    if ("LIST" == y.slice(1, 2)) {
                        var At = e[t].getAttribute("background");
                        null == At && (At = "#ffffff");
                        var kt = e[t].getAttribute("borderRadius");
                        null == kt && (kt = 7);
                        var St = e[t].getAttribute("fontSize");
                        null == St && (St = 15);
                        var _t = e[t].getAttribute("height");
                        null == _t && (_t = 30);
                        var Ct = e[t].getAttribute("hoverBgColor");
                        null == Ct && (Ct = "yellow");
                        var It = e[t].getAttribute("hoverText");
                        null == It && (It = "");
                        var Tt = e[t].getAttribute("value");
                        null == Tt && (Tt = "0");
                        var Et = e[t].getAttribute("width");
                        null == Et && (Et = 100);
                        var Bt = e[t].getAttribute("widthTable");
                        null == Bt && (Bt = 550);
                        var $t = e[t].getAttribute("heightTable");
                        null == $t && ($t = 450);
                        var Ft = e[t].getAttribute("id");
                        null == Ft && (Ft = String(y.slice(2, 3)).toLowerCase());
                        var Lt = e[t].getAttribute("model");
                        null == Lt && (Lt = String(y.slice(2, 3)).toLowerCase() + ".php");
                        var Nt = e[t].getAttribute("class");
                        null == Nt && (Nt = "getFIELD"), $(e[t].localName).addClass(Nt);
                        var Rt = e[t].getAttribute("whereClass"),
                            Dt = e[t].getAttribute("params"),
                            Xt = e[t].getAttribute("onscroll");
                        if (null != (Ie = e[t].getAttribute("click"))) {
                            h = e[t].localName;
                            n[String(h)] = new Function(Ie)
                        } else try {
                            h = e[t].localName;
                            n[String(h)] = new Function(String(y.slice(2, 3)).toLowerCase() + "()")
                        } catch (t) {}
                        if (null != (oe = e[t].getAttribute("callback"))) {
                            h = e[t].localName;
                            i[String(h)] = new Function(oe)
                        }
                        var Ot = e[t].getAttribute("topTable"),
                            Mt = e[t].getAttribute("leftTable"),
                            zt = e[t].getAttribute("display"),
                            Ht = String(e[t].localName);
                        pims(Ht)._lt_(function() {
                            try {
                                where = Rt + "@" + Ht
                            } catch (t) {}
                            try {
                                params = Dt + "@" + Ht
                            } catch (t) {}
                            css = {
                                display: zt,
                                height: _t,
                                width: Et,
                                fontSize: St,
                                hoverBgColor: Ct,
                                borderRadius: kt,
                                background: At,
                                marginTop: Ot + "_" + Ht,
                                marginLeft: Mt + "_" + Ht,
                                widthTable: Bt + "_" + Ht,
                                heightTable: $t + "_" + Ht
                            }, param = {
                                model: Lt
                            }, attr = {
                                onscroll: Xt,
                                value: Tt,
                                hoverText: It,
                                id: Ft
                            }, events = {
                                click: function(t, e, i) {
                                    for (var l in pims.table = t, pims.ci = i, n) {
                                        String(l) == e && n[l]()
                                    }
                                },
                                callback: function(t) {
                                    for (var e in i) {
                                        String(e) == t && i[e]()
                                    }
                                }
                            }
                        })
                    }
                    if ("MENU" == y.slice(1, 2)) {
                        var Pt = e[t].getAttribute("background");
                        null == Pt && (Pt = "#ffffff");
                        var Wt = e[t].getAttribute("border");
                        null == Wt && (Wt = "0px");
                        var jt = e[t].getAttribute("menuModel");
                        null == jt && (jt = "null");
                        var Kt = e[t].getAttribute("menuTitle");
                        null == Kt && (Kt = "null");
                        var Vt = e[t].getAttribute("padding"),
                            Ut = e[t].getAttribute("color");
                        null == Ut && (Ut = "BLUE");
                        var Yt = e[t].getAttribute("borderRadius");
                        null == Yt && (Yt = 7);
                        var qt = e[t].getAttribute("fontSize");
                        null == qt && (qt = 15);
                        var Gt = e[t].getAttribute("height");
                        null == Gt && (Gt = 30);
                        var Jt = e[t].getAttribute("hoverBgColor");
                        null == Jt && (Jt = "yellow");
                        var Qt = e[t].getAttribute("hoverText");
                        null == Qt && (Qt = "");
                        var Zt = e[t].getAttribute("value");
                        null == Zt && (Zt = "0");
                        var te = e[t].getAttribute("width");
                        null == te && (te = document.innerWidth + "px");
                        var ee = e[t].getAttribute("widthMenu");
                        null == ee && (ee = 550);
                        var ie = e[t].getAttribute("heightTable");
                        null == ie && (ie = 450);
                        var ne = e[t].getAttribute("id");
                        null == ne && (ne = String(y.slice(2, 3)).toLowerCase());
                        var le = e[t].getAttribute("model");
                        null == le && (le = String(y.slice(2, 3)).toLowerCase() + ".php");
                        var re = e[t].getAttribute("class");
                        null == re && (re = "getFIELD"), $(e[t].localName).addClass(re);
                        var oe, ae = e[t].getAttribute("whereClass"),
                            se = e[t].getAttribute("params"),
                            de = e[t].getAttribute("onscroll");
                        if (null != (Ie = e[t].getAttribute("click"))) {
                            h = e[t].localName;
                            d[String(h)] = new Function(Ie)
                        } else try {
                            h = e[t].localName;
                            d[String(h)] = new Function(String(y.slice(2, 3)).toLowerCase() + "()")
                        } catch (t) {}
                        if (null != (oe = e[t].getAttribute("callback"))) {
                            h = e[t].localName;
                            s[String(h)] = new Function(oe)
                        }
                        var ce = e[t].getAttribute("topTable"),
                            ue = e[t].getAttribute("leftTable"),
                            pe = e[t].getAttribute("display");
                        Ht = String(e[t].localName);
                        pims(Ht)._m_(function() {
                            try {
                                where = ae + "@" + Ht
                            } catch (t) {}
                            try {
                                params = se + "@" + Ht
                            } catch (t) {}
                            css = {
                                display: pe,
                                height: Gt,
                                width: te,
                                color: Ut,
                                fontSize: qt,
                                hoverBgColor: Jt,
                                borderRadius: Yt,
                                border: Wt,
                                background: Pt,
                                padding: Vt,
                                marginTop: ce + "_" + Ht,
                                marginLeft: ue + "_" + Ht,
                                widthTable: ee + "_" + Ht,
                                heightTable: ie + "_" + Ht
                            }, param = {
                                model: le,
                                menuTitle: Kt,
                                menuModel: jt
                            }, attr = {
                                onscroll: de,
                                value: Zt,
                                hoverText: Qt,
                                id: ne
                            }, events = {
                                click: function(t, e, i) {
                                    for (var n in pims.table = t, pims.ci = i, d) {
                                        String(n) == e && d[n]()
                                    }
                                },
                                callback: function(t) {
                                    for (var e in s) {
                                        String(e) == t && s[e]()
                                    }
                                }
                            }
                        })
                    }
                    if ("TABLE" == y.slice(1, 2) && (pims.element = e[t], window.onload = function() {
                            X.prototype.reloadTable()
                        }), "TABLE1" == y.slice(1, 2) && (pims.element1 = e[t], window.onload = function() {
                            X.prototype.reloadTable(1)
                        }), "TABLE2" == y.slice(1, 2) && (pims.element2 = e[t], window.onload = function() {
                            X.prototype.reloadTable(2)
                        }), "TABLE3" == y.slice(1, 2) && (pims.element3 = e[t], window.onload = function() {
                            X.prototype.reloadTable(3)
                        }), "TABLE4" == y.slice(1, 2) && (pims.element4 = e[t], window.onload = function() {
                            X.prototype.reloadTable(4)
                        }), "TABLE5" == y.slice(1, 2) && (pims.element5 = e[t], window.onload = function() {
                            X.prototype.reloadTable(5)
                        }), "TABLE6" == y.slice(1, 2) && (pims.element6 = e[t], window.onload = function() {
                            X.prototype.reloadTable(6)
                        }), "TABLE7" == y.slice(1, 2) && (pims.element7 = e[t], window.onload = function() {
                            X.prototype.reloadTable(7)
                        }), "TABLE8" == y.slice(1, 2) && (pims.element8 = e[t], window.onload = function() {
                            X.prototype.reloadTable(8)
                        }), "TABLE9" == y.slice(1, 2) && (pims.element9 = e[t], window.onload = function() {
                            X.prototype.reloadTable(9)
                        }), "TEXT" == y.slice(1, 2)) {
                        var he = e[t].getAttribute("background");
                        null == he && (he = "#ffffff");
                        var ge = e[t].getAttribute("border");
                        null == ge && (ge = "1px solid black");
                        var me = e[t].getAttribute("borderRadius");
                        null == me && (me = 7);
                        var fe = e[t].getAttribute("color");
                        null == fe && (fe = "black");
                        var ye = e[t].getAttribute("cursor");
                        null == ye && (ye = "default");
                        var be = e[t].getAttribute("display");
                        null == be && (be = "block");
                        var ve = e[t].getAttribute("disabled"),
                            xe = e[t].getAttribute("fontSize");
                        null == xe && (xe = 15);
                        var we = e[t].getAttribute("height");
                        null == we && (we = 30);
                        var Ae = e[t].getAttribute("hoverBgColor");
                        null == Ae && (Ae = "yellow");
                        var ke = e[t].getAttribute("hoverText");
                        null == ke && (ke = "");
                        var Se = e[t].getAttribute("value");
                        null == Se && (Se = "0");
                        var _e = e[t].getAttribute("width");
                        null == _e && (_e = 100);
                        var Ce = e[t].getAttribute("id");
                        null == Ce && (Ce = y.slice(2, 3));
                        var Ie, Te, Ee = e[t].getAttribute("class");
                        if (null == Ee && (Ee = "getFIELD"), $(e[t].localName).addClass(Ee), null != (Ie = e[t].getAttribute("click"))) {
                            h = e[t].localName;
                            r[String(h)] = new Function(Ie)
                        }
                        if (null != (Te = e[t].getAttribute("change"))) {
                            h = e[t].localName;
                            a[String(h)] = new Function(Te)
                        }
                        var Be = e[t].getAttribute("keyup");
                        if (null != Be) {
                            h = e[t].localName;
                            o[String(h)] = new Function(Be)
                        }
                        pims(e[t].localName)._tx_(function() {
                            css = {
                                height: we,
                                width: _e,
                                fontSize: xe,
                                hoverBgColor: Ae,
                                border: ge,
                                borderRadius: me,
                                background: he,
                                display: be,
                                color: fe,
                                cursor: ye
                            }, attr = {
                                disabled: ve,
                                value: Se,
                                hoverText: ke,
                                id: Ce
                            }, events = {
                                click: function(t) {
                                    for (var e in r) {
                                        String(e) == t && r[e]()
                                    }
                                },
                                change: function(t) {
                                    for (var e in a) {
                                        String(e) == t && a[e]()
                                    }
                                },
                                keyup: function(t, e) {
                                    for (var i in o) {
                                        String(i) == t && o[i]()
                                    }
                                }
                            }
                        })
                    }
                    if ("BAR" == y.slice(1, 2)) pims.elementbar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(0) : X.prototype.reloadBar(0, "false");
                    if ("BAR1" == y.slice(1, 2)) pims.element1bar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(1) : X.prototype.reloadBar(1, "false");
                    if ("BAR2" == y.slice(1, 2)) pims.element2bar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(2) : X.prototype.reloadBar(2, "false");
                    if ("BAR3" == y.slice(1, 2)) pims.element3bar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(3) : X.prototype.reloadBar(3, "false");
                    if ("BAR4" == y.slice(1, 2)) pims.element4bar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(4) : X.prototype.reloadBar(4, "false");
                    if ("BAR5" == y.slice(1, 2)) pims.element5bar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(5) : X.prototype.reloadBar(5, "false");
                    if ("BAR6" == y.slice(1, 2)) pims.element6bar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(6) : X.prototype.reloadBar(6, "false");
                    if ("BAR7" == y.slice(1, 2)) pims.element7bar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(7) : X.prototype.reloadBar(7, "false");
                    if ("BAR8" == y.slice(1, 2)) pims.element8bar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(8) : X.prototype.reloadBar(8, "false");
                    if ("BAR9" == y.slice(1, 2)) pims.element9bar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(9) : X.prototype.reloadBar(9, "false");
                    if ("DOUGHNUT" == y.slice(1, 2)) pims.elementdoughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(0) : X.prototype.reloadDoughnut(0, "false");
                    if ("DOUGHNUT1" == y.slice(1, 2)) pims.element1doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(1) : X.prototype.reloadDoughnut(1, "false");
                    if ("DOUGHNUT2" == y.slice(1, 2)) pims.element2doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(2) : X.prototype.reloadDoughnut(2, "false");
                    if ("DOUGHNUT3" == y.slice(1, 2)) pims.element3doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(3) : X.prototype.reloadDoughnut(3, "false");
                    if ("DOUGHNUT4" == y.slice(1, 2)) pims.element4doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(4) : X.prototype.reloadDoughnut(4, "false");
                    if ("DOUGHNUT5" == y.slice(1, 2)) pims.element5doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(5) : X.prototype.reloadDoughnut(5, "false");
                    if ("DOUGHNUT6" == y.slice(1, 2)) pims.element6doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(6) : X.prototype.reloadDoughnut(6, "false");
                    if ("DOUGHNUT7" == y.slice(1, 2)) pims.element7doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(7) : X.prototype.reloadDoughnut(7, "false");
                    if ("DOUGHNUT8" == y.slice(1, 2)) pims.element8doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(8) : X.prototype.reloadDoughnut(8, "false");
                    if ("DOUGHNUT9" == y.slice(1, 2)) pims.element9doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(9) : X.prototype.reloadDoughnut(9, "false");
                    if ("RADAR" == y.slice(1, 2)) pims.elementradar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(0) : X.prototype.reloadRadar(0, "false");
                    if ("RADAR1" == y.slice(1, 2)) pims.element1radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(1) : X.prototype.reloadRadar(1, "false");
                    if ("RADAR2" == y.slice(1, 2)) pims.element2radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(2) : X.prototype.reloadRadar(2, "false");
                    if ("RADAR3" == y.slice(1, 2)) pims.element3radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(3) : X.prototype.reloadRadar(3, "false");
                    if ("RADAR4" == y.slice(1, 2)) pims.element4radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(4) : X.prototype.reloadRadar(4, "false");
                    if ("RADAR5" == y.slice(1, 2)) pims.element5radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(5) : X.prototype.reloadRadar(5, "false");
                    if ("RADAR6" == y.slice(1, 2)) pims.element6radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(6) : X.prototype.reloadRadar(6, "false");
                    if ("RADAR7" == y.slice(1, 2)) pims.element7radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(7) : X.prototype.reloadRadar(7, "false");
                    if ("RADAR8" == y.slice(1, 2)) pims.element8radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(8) : X.prototype.reloadRadar(8, "false");
                    if ("RADAR9" == y.slice(1, 2)) pims.element9radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(9) : X.prototype.reloadRadar(9, "false")
                }
            }
            _potatoArray.sort(function(t, e) {
                var i = t.id,
                    n = e.id,
                    l = 0;
                return i > n ? l = 1 : i < n && (l = -1), l
            })
        },
        setHour: function() {
            var t = (new Date).getHours();
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        setMinute: function() {
            var t = (new Date).getMinutes();
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        show: function() {
            return this.e.style.display = "block", this
        },
        TableExcel: function(t, e) {
            var i = this._p_(e),
                n = this.x,
                l = n + ".php";
            if (null != i.model && (l = i.model + ".php"), i.id = n, "string" == typeof t)
                for (var r = X.prototype.getIdClass(t), o = (t = [], 0); o < r.length; o++) "length" != r[o].name && (t[r[o].name] = pims(r[o].is).value());
            this._re_(l, t, function(t) {
                try {
                    i.callback()
                } catch (t) {}
            })
        },
        Table: function(t, e) {
            var i = this._p_(e),
                n = this.x,
                l = n + ".php";
            if (null != i.model && (l = i.model + ".php"), i.id = n, "string" == typeof t)
                for (var r = X.prototype.getIdClass(t), o = (t = [], 0); o < r.length; o++) "length" != r[o].name && (t[r[o].name] = pims(r[o].is).value());
            this._rp_(l, t, function(t) {
                "tableId" == i.tableId && (i.tableId = "table_" + n);
                var e = JSON.parse(t),
                    l = "<table id=" + i.tableId + " class=" + i.cls + ">";
                if (null != i.data.d0) {
                    var r, o = (new Array, 0);
                    for (r in l += "<tr>", i.data) l += "<th>" + i.data["d" + o] + "</th>", o += 1;
                    for (var a in l += "</tr>", e)
                        if ("undefined" != e[a].d0 && null != e[a].d0) {
                            l += "<tr>";
                            for (var s = 0; o > s; s++) l += "<td>" + e[a]["d" + s] + "</td>";
                            l += "</tr>"
                        }
                } else {
                    o = 0;
                    for (r in l += "<tr>", e[0]) "" != e[0][r] ? l += "<th>" + e[0][r] + "</th>" : l += "<th style='display:none'>" + e[0][r] + "</th>", o++;
                    for (var a in l += "</tr>", e)
                        if ("undefined" != e[a][0] && null != e[a][0] && a > 0) {
                            l += "<tr>";
                            for (s = 0; o > s; s++) "" != e[0][s] ? l += "<td>" + e[a][s] + "</td>" : l += "<td style='display:none'>" + e[a][s] + "</td>";
                            l += "</tr>"
                        }
                }
                l += "</table>", $("#" + n).html(l).show().css({
                    overflow: "auto",
                    width: i.width + "px",
                    height: i.height + "px",
                    background: i.background,
                    display: i.display,
                    border: i.border,
                    position: i.position,
                    left: i.left + "px",
                    top: i.top + "px",
                    borderRadius: i.borderRadius + "px"
                });
                var d = document.getElementById(i.tableId),
                    c = $("#" + i.tableId + " tbody").on("click", "tr", function() {
                        X.prototype.tableHighlight($(this)[0].rowIndex, i.tableId)
                    });
                $(document).keydown(function(t) {
                    if (c.find(".highlight").length)
                        if (40 == t.which) {
                            var e = c.find(".highlight").next();
                            X.prototype.tableHighlight(e[0].rowIndex, i.tableId)
                        } else if (38 == t.which) {
                        var n = c.find(".highlight").prev();
                        X.prototype.tableHighlight(n[0].rowIndex, i.tableId)
                    }
                });
                try {
                    i.callback(d, i.tableId)
                } catch (t) {}
                $("#" + i.tableId + " td").click(function() {
                    try {
                        $("table tbody tr").removeClass("highlight");
                        for (var t = 0; t < o; t++) d.rows[ri].cells[t].style.background = "#dfdfdf"
                    } catch (t) {}
                    ci = $(this).parent().children().index(this), ri = $(this).parent().parent().children().index(this.parentNode);
                    for (t = 0; t < o; t++) d.rows[ri].cells[t].style.background = "yellow";
                    i.click(d.rows[ri], ri, ci)
                })
            })
        },
        _tb_: function(t, i) {
            for (var n = this._p_(i), l = this.getHTMLElement(), r = this.x, o = [], a = n.id, s = String(n.header).split(","), d = 0, c = 0; c < _potatoArray.length; c++) a == String(_potatoArray[c].bind) && (o[d] = _potatoArray[c].field + "&" + _potatoArray[c].value, d++);
            l.createdCallback = function() {
                this.innerHTML = '<div id="div-' + a + '" ></div> '
            }, this._rp_(n.model, o, function(t) {
                var i = JSON.parse(t);
                "tableId" == n.tableId && (n.tableId = "table-" + a);
                var l = "<table id=" + n.tableId + " style='border-collapse:collapse;width:99%'>";
                if (null != s && s.length > 0) {
                    var r = 0;
                    for (e in l += "<tr>", s) "" != s[e] ? l += "<th style='border:1px solid black'>" + s[e] + "</th>" : l += "<th style='display:none'>" + s[e] + "</th>", r++;
                    for (var o in l += "</tr>", i)
                        if ("undefined" != i[o][0] && null != i[o][0] && o >= 0) {
                            l += "<tr>";
                            for (var d = 0; d < r; d++) "" != s[d] && null != s[d] ? l += "<td style='border:1px solid black;padding-left:5px'>" + i[o][d] + "</td>" : l += "<td style='display:none'>" + i[o][d] + "</td>";
                            l += "</tr>"
                        }
                } else {
                    r = 0;
                    for (e in l += "<tr>", i[0]) "" != i[0][e] ? l += "<th style='border:1px solid black'>" + i[0][e] + "</th>" : l += "<th style='display:none'>" + i[0][e] + "</th>", r++;
                    for (var o in l += "</tr>", i)
                        if ("undefined" != i[o][0] && null != i[o][0] && o > 0) {
                            l += "<tr>";
                            for (d = 0; r > d; d++) "" != i[0][d] && null != i[0][d] && "undefined" != i[0][d] ? l += "<td style='border:1px solid black'>" + i[o][d] + "</td>" : l += "<td style='display:none'>" + i[o][d] + "</td>";
                            l += "</tr>"
                        }
                }
                l += "</table>", $("#div-" + a).html(l).show().css({
                    overflow: "auto",
                    width: n.width + "px",
                    height: n.height + "px",
                    background: n.background,
                    display: n.display,
                    border: n.border,
                    position: n.position,
                    left: n.left + "px",
                    top: n.top + "px",
                    borderRadius: n.borderRadius + "px"
                });
                var c = document.getElementById(n.tableId),
                    u = $("#" + n.tableId + " tbody");
                $(document).keydown(function(t) {
                    if (u.find(".highlight").length)
                        if (40 == t.which) {
                            var e = u.find(".highlight").next();
                            X.prototype.tableHighlight(e[0].rowIndex, n.tableId)
                        } else if (38 == t.which) {
                        var i = u.find(".highlight").prev();
                        X.prototype.tableHighlight(i[0].rowIndex, n.tableId)
                    }
                });
                try {
                    c = document.getElementById(n.tableId);
                    n.callback(c, n.tableId)
                } catch (t) {}
                $("#" + n.tableId + " td").click(function() {
                    ci = $(this).parent().children().index(this), ri = $(this).parent().parent().children().index(this.parentNode);
                    for (var t = 0; t < r; t++) 0;
                    n.click(c.rows[ri], ri, ci, n.tableId)
                })
            });
            try {
                pimsElement = document.registerPotato(r, {
                    prototype: l
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(r, {
                        prototype: l,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        tableHighlight: function(t, e) {
            t + 1 > $("#" + e + " tbody tr").length && (t = 0), $("#" + e + " tbody tr:eq(" + t + ")").length > 0 && ($("#" + e + " tbody tr").removeClass("highlight"), $("#" + e + " tbody tr:eq(" + t + ")").addClass("highlight"))
        },
        Text: function(t) {
            var e = this.getHTMLElement(),
                i = this.x,
                n = this._p_(t);
            n.id = i, e.createdCallback = function() {
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), l = e.slice(2, 3), r = 3; r <= t; r++) l = l + "_" + e.slice(r, r + 1);
                this.name = l, this.is = i, this.innerHTML = '<input type="text" id="' + i + '" class="' + n.className + '"> ', $("#" + i).css({
                    width: n.width + "px",
                    height: n.height + "px",
                    color: n.color,
                    background: n.background,
                    boxShadow: n.boxShadow,
                    display: n.display,
                    fontFamily: n.fontFamily,
                    fontWeight: n.fontWeight,
                    fontSize: n.fontSize + "px",
                    textAlign: n.textAlign,
                    padding: n.padding,
                    border: n.border,
                    borderRadius: n.borderRadius + "px",
                    textTransform: n.textTransform,
                    cursor: n.cursor
                }).attr({
                    value: n.value,
                    type: n.type
                }).mousemove(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.hoverBgColor), $(this).css("color", n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: n.hoverHeight + "px",
                        width: n.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.background), $(this).css("color", n.i), $("#" + n.hoverId).hide().html("")
                }).keyup(function(t) {
                    try {
                        n.keyup(t)
                    } catch (t) {}
                }).change(function() {
                    try {
                        n.change()
                    } catch (t) {}
                }).click(function() {
                    try {
                        document.getElementById("keypadtable").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyPad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("TimePad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyBoard").style.display = "none"
                    } catch (t) {}
                    try {
                        pimsListObject.style.display = "none"
                    } catch (t) {}
                    try {
                        n.click()
                    } catch (t) {}
                })
            };
            try {
                pimsElement = document.registerPotato(i, {
                    prototype: e,
                    extends: "div"
                })
            } catch (t) {}
        },
        _tx_: function(t) {
            var e = this._p_(t),
                i = this.getHTMLElement(),
                n = this.x,
                l = e.id;
            i.createdCallback = function() {
                this.id = l + "_", X.prototype.getAttribute(this, n).index, X.prototype.getAttribute(this, n).field, this.pims = n, this.innerHTML = '<input type="text" id="' + l + '" class="' + e.className + '"> ', $("#" + l).css({
                    width: e.width + "px",
                    height: e.height + "px",
                    color: e.color,
                    background: e.background,
                    boxShadow: e.boxShadow,
                    display: e.display,
                    fontFamily: e.fontFamily,
                    fontWeight: e.fontWeight,
                    fontSize: e.fontSize + "px",
                    textAlign: e.textAlign,
                    padding: e.padding,
                    border: e.border,
                    borderRadius: e.borderRadius + "px",
                    textTransform: e.textTransform,
                    cursor: e.cursor
                }).attr({
                    value: e.value,
                    disabled: e.disabled,
                    type: e.type
                }).mousemove(function() {
                    "null" != e.hoverBgColor && $(this).css("background", e.hoverBgColor), $(this).css("color", e.hoverColor), "" != e.hoverText && $("#" + e.hoverId).html(e.hoverText).show().css({
                        fontSize: "15px",
                        fontFamily: "Arial",
                        padding: "3px 3px 3px 3px",
                        height: e.hoverHeight + "px",
                        width: e.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20,
                        borderRadius: "3px"
                    })
                }).mouseout(function() {
                    "null" != e.hoverBgColor && $(this).css("background", e.background), $(this).css("color", e.i), $("#" + e.hoverId).hide().html("")
                }).keyup(function(t) {
                    for (var i = 0; i < _potatoId.length; i++)
                        if (l == String(_potatoId[i])) {
                            var r = String(_potatoBindId[i]);
                            document.getElementById(r).innerText = document.getElementById(l).value
                        }
                    try {
                        e.keyup(n, t)
                    } catch (t) {}
                }).change(function() {
                    try {
                        e.change()
                    } catch (t) {}
                }).click(function() {
                    try {
                        document.getElementById("keypadtable").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyPad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("TimePad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyBoard").style.display = "none"
                    } catch (t) {}
                    try {
                        pimsListObject.style.display = "none"
                    } catch (t) {}
                    try {
                        e.click(n)
                    } catch (t) {}
                })
            };
            try {
                pimsElement = document.registerPotato(n, {
                    prototype: i
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(n, {
                        prototype: i,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        timeNow: function() {
            var t = new Date,
                e = t.getHours(),
                i = t.getMinutes(),
                n = t.getSeconds();
            return e >= 12 && "pm", i < 10 && (i = "0" + i), n < 10 && (n = "0" + n), e + ":" + i + ":" + n
        },
        Timepad: function(t) {
            var e = this.getHTMLElement(),
                i = this.x,
                n = this._p_(t);
            n.id = i, e.createdCallback = function() {
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), l = e.slice(2, 3), r = 3; r <= t; r++) l = l + "_" + e.slice(r, r + 1);
                this.name = l, this.is = i;
                var o = '<div id="div_' + i + '"> ';
                o += '<input type="text" id="' + i + '"> ', o += '<div class="keypad" id="keypad-' + i + '"></div> ', o += "</div> ", this.innerHTML = o, _fieldtime = document.getElementById("input-" + i), $("#div_" + i).css({
                    display: n.display,
                    position: n.position,
                    left: n.left + "px",
                    top: n.top + "px"
                }), $("#" + i).css({
                    width: n.width + "px",
                    height: n.height + "px",
                    color: n.color,
                    display: n.display,
                    background: n.background,
                    boxShadow: n.boxShadow,
                    fontFamily: n.fontFamily,
                    fontWeight: n.fontWeight,
                    fontSize: n.fontSize + "px",
                    textAlign: n.textAlign,
                    padding: n.padding,
                    border: n.border,
                    borderRadius: n.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", n.value).mousemove(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.hoverBgColor), $(this).css("color", n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: n.hoverHeight + "px",
                        width: n.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.background), $(this).css("color", n.i), $("#" + n.hoverId).hide().html("")
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + i, $(".keypad").hide(), $("#keypad-" + i).show().css({
                        position: "absolute",
                        top: event.clientY + 20 + n.topKey,
                        left: event.clientX + n.leftKey
                    }), $("#TimePad").show(), _fieldtime = document.getElementById(i)
                }), $("#keypad-" + i).load("config/timepad.htm").css({
                    width: "200px",
                    height: "150px",
                    margin: n.marginKey,
                    display: n.displayKey
                })
            };
            try {
                pimsElement = document.registerPotato(i, {
                    prototype: e,
                    extends: "div"
                })
            } catch (t) {}
        },
        value: function(t) {
            return t ? (this.e.value = t, this) : this.e.value
        },
        year: function() {
            return (new Date).getFullYear()
        }
    }, _pimS
}();

function maxArray(t) {
    for (var e = parseFloat(t[0]), i = t.length, n = 1; n < i; n++) parseFloat(t[n]) > e && (e = parseFloat(t[n]));
    return e
}

function findText(t) {
    var e = document.body.createTextRange();
    self.oRange = e;
    e.getBookmark();
    e.findText(t) && (e.select(), e.collapse(), e.moveStart("word", 1), e.moveEnd("textedit", 1))
}
_pcofig = function() {
    try {
        this.tl_ = tl_
    } catch (t) {
        this.tl_ = ""
    }
    try {
        this.dv_ = dv_
    } catch (t) {
        this.dv_ = ""
    }
    try {
        this.nk_ = nk_
    } catch (t) {
        this.nk_ = ""
    }
    this.ksl_ = "60, 102, 111, 110, 116, 32, 115, 116, 121, 108, 101, 61, 39, 119, 105, 100, 116, 104, 58, 51, 48, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 98, 108, 97, 99, 107, 59, 102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 51, 112, 120, 39, 62,", this.ksl_ += " 85, 115, 105, 110, 103, 32, 70, 114, 97, 109, 101, 87, 111, 114, 107, 32, 67, 114, 101, 97, 116, 101, 100, 32, 98, 121, 32, 76, 73, 77, 46, 32, 75, 73, 65, 78, 46, 32, 83, 69, 78, 71, 46, 32, 40, 66, 82, 85, 67, 69, 41 ", this.ksl_ = X().fcc(this.ksl_.split(","));
    try {
        this.lg_ = lg_
    } catch (t) {
        this.lg_ = ""
    }
    try {
        this.ld_ = ld_
    } catch (t) {
        this.ld_ = ""
    }
    return this._ksl = this.lg_ + this.tl_ + this.dv_ + this.nk_ + this.ksl_ + this.ld_, this
};
var _$, _$ = {
        settings: {},
        init: function() {
            _$ = this.settings, this.start(), this.setE()
        },
        setE: function() {},
        start: function() {
            X()._se_()
        }
    },
    _potato = new X;
! function(t, e) {
    t.fn.extend({
        box: function(e, i, n, l) {
            var r = t(this).attr("id");
            l ? "free" == l ? (_ = new PIMS, _.$ListFree(r, e, i, n)) : (_ = new PIMS, _.$ListFix(r, e, i, n)) : (_ = new PIMS, _.$ListFree(r, e, i, n))
        },
        excel: function(e, i) {
            _ = new PIMS, _.$_el_(t(this).attr("id"), e, i)
        },
        keyboard: function(e, i) {
            _ = new PIMS, _.$Keyboard(t(this).attr("id"), e, i), t(".tool_key_cls_o,.tool_key_cls_n").show()
        },
        keypad: function(e, i) {
            _ = new PIMS, _.$Keypad(t(this).attr("id"), e, i), t(".tool_key_cls_o,.tool_key_cls_n").show()
        },
        timepad: function(e, i) {
            _ = new PIMS, _.$Timepad(t(this).attr("id"), e, i)
        },
        multiselect: function(e, i, n, l) {
            _ = new PIMS, _.$MultipleSelect(e, t(this).attr("id"), i, n, l)
        },
        obj: function() {
            return document.getElementById(t(this).attr("id"))
        },
        pop: function(e) {
            var i = t(this).attr("id");
            _ = new PIMS, _.$Pop(e, i)
        },
        scrollx: function(e, i, n) {
            for (var l = t(this).attr("id"), r = document.getElementsByClassName(e), o = 0; o < r.length; o++) parseFloat(document.getElementById(l).scrollLeft) > i ? r[o].style.left = n ? parseFloat(document.getElementById(l).scrollLeft) + parseFloat(n) + "px" : document.getElementById(l).scrollLeft + "px" : r[o].style.left = "0px"
        },
        scrolly: function(e, i, n) {
            for (var l = t(this).attr("id"), r = document.getElementsByClassName(e), o = 0; o < r.length; o++) parseFloat(document.getElementById(l).scrollTop) > i ? r[o].style.top = n ? parseFloat(document.getElementById(l).scrollTop) + parseFloat(n) + "px" : document.getElementById(l).scrollTop + "px" : r[o].style.top = "0px"
        }
    }), t.extend({
        collapse: function(e, i, n) {
            var l = 1440,
                r = setInterval(function() {
                    0 != l ? (l -= 40, t(".link", e).stop().animate({
                        rotate: "+=40deg"
                    }, 0)) : clearInterval(r)
                }, 10);
            e.stop().animate({
                width: i + "px",
                height: n + "px"
            }, 500).find(".item_content").stop(!0, !0).fadeOut().find("p").stop(!0, !0).fadeOut()
        },
        comma: function(t) {
            return _ = new PIMS, _.$Commas(t)
        },
        countdown: function(t, e) {
            _ = new PIMS, _.$Countdown(t, e)
        },
        editcell: function(t, e, i) {
            _ = new PIMS, _.$_ec_(t, e, i)
        },
        editcellclick: function(t, e, i) {
            _ = new PIMS, _.$EditCellsClick(t, e, i)
        },
        expand: function(e, i, n) {
            var l = 0,
                r = setInterval(function() {
                    1440 != l ? (l += 40, t(".link", e).stop().animate({
                        rotate: "+=-40deg"
                    }, 0)) : clearInterval(r)
                }, 10);
            e.stop().animate({
                width: i + "px",
                height: n + "px"
            }, 500).find(".item_content").fadeIn(400, function() {
                t(this).find("p").stop(!0, !0).fadeIn(600)
            })
        },
        day: function() {
            var t = (new Date).getDate();
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        month: function() {
            var t = (new Date).getMonth() + 1;
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        year: function() {
            return (new Date).getFullYear()
        },
        date: function(t, e, i) {
            e || (e = "-"), "today" == t && (t = this.year() + "-" + this.month() + "-" + this.day());
            var n = t.split(e),
                l = new Date(n[0] + "/" + n[1] + "/" + n[2]);
            l.setDate(l.getDate() + i);
            var r = l.getFullYear(),
                o = l.getMonth() + 1;
            o = parseInt(o) < 10 ? "0" + o : o;
            var a = l.getDate();
            return r + e + o + e + (a = parseInt(a) < 10 ? "0" + a : a)
        },
        load: function(e, i, n) {
            document.name = e;
            var l = document.registerElement("pims-loading");
            document.body.appendChild(new l), t("pims-loading").html('Loading...<img src="lib/images/img-loading.gif" style="width:35px;height:35px"/>').show().css({
                display: "none",
                background: "#f8ffc3",
                "z-index": "1000",
                width: "250px",
                height: "100px",
                position: "absolute",
                padding: "30px 50px 30px 50px",
                "font-size": "25px",
                top: "250px",
                left: "350px",
                border: "1px solid red",
                borderRadius: "20px",
                "font-family": "Arial"
            });
            var r = 1,
                o = setInterval(function() {
                    0 == --r && (t("#body").show(), t("#PIMS").html("").hide(), n(), t("body").css("background", i), clearInterval(o))
                }, 1e3)
        },
        pop: function(t, e, i, n) {
            newwindow = this.getWindow(t, e, i, n), window.focus && newwindow.focus()
        }
    })
}($), PIMS();