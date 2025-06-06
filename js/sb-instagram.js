var sbi_js_exists = (typeof sbi_js_exists !== 'undefined') ? true : false;
if(!sbi_js_exists) {
	/*!
         * Isotope PACKAGED v3.0.6
         *
         * Licensed GPLv3 for open source use
         * or Isotope Commercial License for commercial use
         *
         * https://isotope.metafizzy.co
         * Copyright 2010-2018 Metafizzy
         */

	!function (t, e) {
		"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
			return e(t, i)
		}) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
	}(window, function (t, e) {
		"use strict";

		function i(i, s, a) {
			function u(t, e, o) {
				var n, s = "$()." + i + '("' + e + '")';
				return t.each(function (t, u) {
					var h = a.data(u, i);
					if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
					var d = h[e];
					if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
					var l = d.apply(h, o);
					n = void 0 === n ? l : n
				}), void 0 !== n ? n : t
			}

			function h(t, e) {
				t.each(function (t, o) {
					var n = a.data(o, i);
					n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
				})
			}

			a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
				a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
			}), a.fn[i] = function (t) {
				if ("string" == typeof t) {
					var e = n.call(arguments, 1);
					return u(this, t, e)
				}
				return h(this, t), this
			}, o(a))
		}

		function o(t) {
			!t || t && t.bridget || (t.bridget = i)
		}

		var n = Array.prototype.slice, s = t.console, r = "undefined" == typeof s ? function () {
		} : function (t) {
			s.error(t)
		};
		return o(e || t.jQuery), i
	}), function (t, e) {
		"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
	}("undefined" != typeof window ? window : this, function () {
		function t() {
		}

		var e = t.prototype;
		return e.on = function (t, e) {
			if (t && e) {
				var i = this._events = this._events || {}, o = i[t] = i[t] || [];
				return o.indexOf(e) == -1 && o.push(e), this
			}
		}, e.once = function (t, e) {
			if (t && e) {
				this.on(t, e);
				var i = this._onceEvents = this._onceEvents || {}, o = i[t] = i[t] || {};
				return o[e] = !0, this
			}
		}, e.off = function (t, e) {
			var i = this._events && this._events[t];
			if (i && i.length) {
				var o = i.indexOf(e);
				return o != -1 && i.splice(o, 1), this
			}
		}, e.emitEvent = function (t, e) {
			var i = this._events && this._events[t];
			if (i && i.length) {
				i = i.slice(0), e = e || [];
				for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
					var s = i[n], r = o && o[s];
					r && (this.off(t, s), delete o[s]), s.apply(this, e)
				}
				return this
			}
		}, e.allOff = function () {
			delete this._events, delete this._onceEvents
		}, t
	}), function (t, e) {
		"function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
	}(window, function () {
		"use strict";

		function t(t) {
			var e = parseFloat(t), i = t.indexOf("%") == -1 && !isNaN(e);
			return i && e
		}

		function e() {
		}

		function i() {
			for (var t = {
				width: 0,
				height: 0,
				innerWidth: 0,
				innerHeight: 0,
				outerWidth: 0,
				outerHeight: 0
			}, e = 0; e < h; e++) {
				var i = u[e];
				t[i] = 0
			}
			return t
		}

		function o(t) {
			var e = getComputedStyle(t);
			return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
		}

		function n() {
			if (!d) {
				d = !0;
				var e = document.createElement("div");
				e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
				var i = document.body || document.documentElement;
				i.appendChild(e);
				var n = o(e);
				r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e)
			}
		}

		function s(e) {
			if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
				var s = o(e);
				if ("none" == s.display) return i();
				var a = {};
				a.width = e.offsetWidth, a.height = e.offsetHeight;
				for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
					var f = u[l], c = s[f], m = parseFloat(c);
					a[f] = isNaN(m) ? 0 : m
				}
				var p = a.paddingLeft + a.paddingRight, y = a.paddingTop + a.paddingBottom,
					g = a.marginLeft + a.marginRight, v = a.marginTop + a.marginBottom,
					_ = a.borderLeftWidth + a.borderRightWidth, z = a.borderTopWidth + a.borderBottomWidth, I = d && r,
					x = t(s.width);
				x !== !1 && (a.width = x + (I ? 0 : p + _));
				var S = t(s.height);
				return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
			}
		}

		var r, a = "undefined" == typeof console ? e : function (t) {
				console.error(t)
			},
			u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
			h = u.length, d = !1;
		return s
	}), function (t, e) {
		"use strict";
		"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
	}(window, function () {
		"use strict";
		var t = function () {
			var t = window.Element.prototype;
			if (t.matches) return "matches";
			if (t.matchesSelector) return "matchesSelector";
			for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
				var o = e[i], n = o + "MatchesSelector";
				if (t[n]) return n
			}
		}();
		return function (e, i) {
			return e[t](i)
		}
	}), function (t, e) {
		"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
			return e(t, i)
		}) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
	}(window, function (t, e) {
		var i = {};
		i.extend = function (t, e) {
			for (var i in e) t[i] = e[i];
			return t
		}, i.modulo = function (t, e) {
			return (t % e + e) % e
		};
		var o = Array.prototype.slice;
		i.makeArray = function (t) {
			if (Array.isArray(t)) return t;
			if (null === t || void 0 === t) return [];
			var e = "object" == typeof t && "number" == typeof t.length;
			return e ? o.call(t) : [t]
		}, i.removeFrom = function (t, e) {
			var i = t.indexOf(e);
			i != -1 && t.splice(i, 1)
		}, i.getParent = function (t, i) {
			for (; t.parentNode && t != document.body;) if (t = t.parentNode, e(t, i)) return t
		}, i.getQueryElement = function (t) {
			return "string" == typeof t ? document.querySelector(t) : t
		}, i.handleEvent = function (t) {
			var e = "on" + t.type;
			this[e] && this[e](t)
		}, i.filterFindElements = function (t, o) {
			t = i.makeArray(t);
			var n = [];
			return t.forEach(function (t) {
				if (t instanceof HTMLElement) {
					if (!o) return void n.push(t);
					e(t, o) && n.push(t);
					for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
				}
			}), n
		}, i.debounceMethod = function (t, e, i) {
			i = i || 100;
			var o = t.prototype[e], n = e + "Timeout";
			t.prototype[e] = function () {
				var t = this[n];
				clearTimeout(t);
				var e = arguments, s = this;
				this[n] = setTimeout(function () {
					o.apply(s, e), delete s[n]
				}, i)
			}
		}, i.docReady = function (t) {
			var e = document.readyState;
			"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
		}, i.toDashed = function (t) {
			return t.replace(/(.)([A-Z])/g, function (t, e, i) {
				return e + "-" + i
			}).toLowerCase()
		};
		var n = t.console;
		return i.htmlInit = function (e, o) {
			i.docReady(function () {
				var s = i.toDashed(o), r = "data-" + s, a = document.querySelectorAll("[" + r + "]"),
					u = document.querySelectorAll(".js-" + s), h = i.makeArray(a).concat(i.makeArray(u)),
					d = r + "-options", l = t.jQuery;
				h.forEach(function (t) {
					var i, s = t.getAttribute(r) || t.getAttribute(d);
					try {
						i = s && JSON.parse(s)
					} catch (a) {
						return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
					}
					var u = new e(t, i);
					l && l.data(t, o, u)
				})
			})
		}, i
	}), function (t, e) {
		"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
	}(window, function (t, e) {
		"use strict";

		function i(t) {
			for (var e in t) return !1;
			return e = null, !0
		}

		function o(t, e) {
			t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
		}

		function n(t) {
			return t.replace(/([A-Z])/g, function (t) {
				return "-" + t.toLowerCase()
			})
		}

		var s = document.documentElement.style, r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
			a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
			u = {WebkitTransition: "webkitTransitionEnd", transition: "transitionend"}[r], h = {
				transform: a,
				transition: r,
				transitionDuration: r + "Duration",
				transitionProperty: r + "Property",
				transitionDelay: r + "Delay"
			}, d = o.prototype = Object.create(t.prototype);
		d.constructor = o, d._create = function () {
			this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
		}, d.handleEvent = function (t) {
			var e = "on" + t.type;
			this[e] && this[e](t)
		}, d.getSize = function () {
			this.size = e(this.element)
		}, d.css = function (t) {
			var e = this.element.style;
			for (var i in t) {
				var o = h[i] || i;
				e[o] = t[i]
			}
		}, d.getPosition = function () {
			var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"),
				i = this.layout._getOption("originTop"), o = t[e ? "left" : "right"], n = t[i ? "top" : "bottom"],
				s = parseFloat(o), r = parseFloat(n), a = this.layout.size;
			o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
		}, d.layoutPosition = function () {
			var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"),
				o = this.layout._getOption("originTop"), n = i ? "paddingLeft" : "paddingRight",
				s = i ? "left" : "right", r = i ? "right" : "left", a = this.position.x + t[n];
			e[s] = this.getXValue(a), e[r] = "";
			var u = o ? "paddingTop" : "paddingBottom", h = o ? "top" : "bottom", d = o ? "bottom" : "top",
				l = this.position.y + t[u];
			e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
		}, d.getXValue = function (t) {
			var e = this.layout._getOption("horizontal");
			return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
		}, d.getYValue = function (t) {
			var e = this.layout._getOption("horizontal");
			return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
		}, d._transitionTo = function (t, e) {
			this.getPosition();
			var i = this.position.x, o = this.position.y, n = t == this.position.x && e == this.position.y;
			if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();
			var s = t - i, r = e - o, a = {};
			a.transform = this.getTranslate(s, r), this.transition({
				to: a,
				onTransitionEnd: {transform: this.layoutPosition},
				isCleaning: !0
			})
		}, d.getTranslate = function (t, e) {
			var i = this.layout._getOption("originLeft"), o = this.layout._getOption("originTop");
			return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
		}, d.goTo = function (t, e) {
			this.setPosition(t, e), this.layoutPosition()
		}, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
			this.position.x = parseFloat(t), this.position.y = parseFloat(e)
		}, d._nonTransition = function (t) {
			this.css(t.to), t.isCleaning && this._removeStyles(t.to);
			for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
		}, d.transition = function (t) {
			if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
			var e = this._transn;
			for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
			for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
			if (t.from) {
				this.css(t.from);
				var o = this.element.offsetHeight;
				o = null
			}
			this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
		};
		var l = "opacity," + n(a);
		d.enableTransition = function () {
			if (!this.isTransitioning) {
				var t = this.layout.options.transitionDuration;
				t = "number" == typeof t ? t + "ms" : t, this.css({
					transitionProperty: l,
					transitionDuration: t,
					transitionDelay: this.staggerDelay || 0
				}), this.element.addEventListener(u, this, !1)
			}
		}, d.onwebkitTransitionEnd = function (t) {
			this.ontransitionend(t)
		}, d.onotransitionend = function (t) {
			this.ontransitionend(t)
		};
		var f = {"-webkit-transform": "transform"};
		d.ontransitionend = function (t) {
			if (t.target === this.element) {
				var e = this._transn, o = f[t.propertyName] || t.propertyName;
				if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
					var n = e.onEnd[o];
					n.call(this), delete e.onEnd[o]
				}
				this.emitEvent("transitionEnd", [this])
			}
		}, d.disableTransition = function () {
			this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
		}, d._removeStyles = function (t) {
			var e = {};
			for (var i in t) e[i] = "";
			this.css(e)
		};
		var c = {transitionProperty: "", transitionDuration: "", transitionDelay: ""};
		return d.removeTransitionStyles = function () {
			this.css(c)
		}, d.stagger = function (t) {
			t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
		}, d.removeElem = function () {
			this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
		}, d.remove = function () {
			return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
				this.removeElem()
			}), void this.hide()) : void this.removeElem()
		}, d.reveal = function () {
			delete this.isHidden, this.css({display: ""});
			var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
			e[i] = this.onRevealTransitionEnd, this.transition({
				from: t.hiddenStyle,
				to: t.visibleStyle,
				isCleaning: !0,
				onTransitionEnd: e
			})
		}, d.onRevealTransitionEnd = function () {
			this.isHidden || this.emitEvent("reveal")
		}, d.getHideRevealTransitionEndProperty = function (t) {
			var e = this.layout.options[t];
			if (e.opacity) return "opacity";
			for (var i in e) return i
		}, d.hide = function () {
			this.isHidden = !0, this.css({display: ""});
			var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
			e[i] = this.onHideTransitionEnd, this.transition({
				from: t.visibleStyle,
				to: t.hiddenStyle,
				isCleaning: !0,
				onTransitionEnd: e
			})
		}, d.onHideTransitionEnd = function () {
			this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
		}, d.destroy = function () {
			this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
		}, o
	}), function (t, e) {
		"use strict";
		"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
			return e(t, i, o, n, s)
		}) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
	}(window, function (t, e, i, o, n) {
		"use strict";

		function s(t, e) {
			var i = o.getQueryElement(t);
			if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
			this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
			var n = ++l;
			this.element.outlayerGUID = n, f[n] = this, this._create();
			var s = this._getOption("initLayout");
			s && this.layout()
		}

		function r(t) {
			function e() {
				t.apply(this, arguments)
			}

			return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
		}

		function a(t) {
			if ("number" == typeof t) return t;
			var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], o = e && e[2];
			if (!i.length) return 0;
			i = parseFloat(i);
			var n = m[o] || 1;
			return i * n
		}

		var u = t.console, h = t.jQuery, d = function () {
		}, l = 0, f = {};
		s.namespace = "outlayer", s.Item = n, s.defaults = {
			containerStyle: {position: "relative"},
			initLayout: !0,
			originLeft: !0,
			originTop: !0,
			resize: !0,
			resizeContainer: !0,
			transitionDuration: "0.4s",
			hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
			visibleStyle: {opacity: 1, transform: "scale(1)"}
		};
		var c = s.prototype;
		o.extend(c, e.prototype), c.option = function (t) {
			o.extend(this.options, t)
		}, c._getOption = function (t) {
			var e = this.constructor.compatOptions[t];
			return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
		}, s.compatOptions = {
			initLayout: "isInitLayout",
			horizontal: "isHorizontal",
			layoutInstant: "isLayoutInstant",
			originLeft: "isOriginLeft",
			originTop: "isOriginTop",
			resize: "isResizeBound",
			resizeContainer: "isResizingContainer"
		}, c._create = function () {
			this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
			var t = this._getOption("resize");
			t && this.bindResize()
		}, c.reloadItems = function () {
			this.items = this._itemize(this.element.children)
		}, c._itemize = function (t) {
			for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
				var s = e[n], r = new i(s, this);
				o.push(r)
			}
			return o
		}, c._filterFindItemElements = function (t) {
			return o.filterFindElements(t, this.options.itemSelector)
		}, c.getItemElements = function () {
			return this.items.map(function (t) {
				return t.element
			})
		}, c.layout = function () {
			this._resetLayout(), this._manageStamps();
			var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
			this.layoutItems(this.items, e), this._isLayoutInited = !0
		}, c._init = c.layout, c._resetLayout = function () {
			this.getSize()
		}, c.getSize = function () {
			this.size = i(this.element)
		}, c._getMeasurement = function (t, e) {
			var o, n = this.options[t];
			n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
		}, c.layoutItems = function (t, e) {
			t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
		}, c._getItemsForLayout = function (t) {
			return t.filter(function (t) {
				return !t.isIgnored
			})
		}, c._layoutItems = function (t, e) {
			if (this._emitCompleteOnItems("layout", t), t && t.length) {
				var i = [];
				t.forEach(function (t) {
					var o = this._getItemLayoutPosition(t);
					o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
				}, this), this._processLayoutQueue(i)
			}
		}, c._getItemLayoutPosition = function () {
			return {x: 0, y: 0}
		}, c._processLayoutQueue = function (t) {
			this.updateStagger(), t.forEach(function (t, e) {
				this._positionItem(t.item, t.x, t.y, t.isInstant, e)
			}, this)
		}, c.updateStagger = function () {
			var t = this.options.stagger;
			return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger)
		}, c._positionItem = function (t, e, i, o, n) {
			o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
		}, c._postLayout = function () {
			this.resizeContainer()
		}, c.resizeContainer = function () {
			var t = this._getOption("resizeContainer");
			if (t) {
				var e = this._getContainerSize();
				e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
			}
		}, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
			if (void 0 !== t) {
				var i = this.size;
				i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
			}
		}, c._emitCompleteOnItems = function (t, e) {
			function i() {
				n.dispatchEvent(t + "Complete", null, [e])
			}

			function o() {
				r++, r == s && i()
			}

			var n = this, s = e.length;
			if (!e || !s) return void i();
			var r = 0;
			e.forEach(function (e) {
				e.once(t, o)
			})
		}, c.dispatchEvent = function (t, e, i) {
			var o = e ? [e].concat(i) : i;
			if (this.emitEvent(t, o), h) if (this.$element = this.$element || h(this.element), e) {
				var n = h.Event(e);
				n.type = t, this.$element.trigger(n, i)
			} else this.$element.trigger(t, i)
		}, c.ignore = function (t) {
			var e = this.getItem(t);
			e && (e.isIgnored = !0)
		}, c.unignore = function (t) {
			var e = this.getItem(t);
			e && delete e.isIgnored
		}, c.stamp = function (t) {
			t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
		}, c.unstamp = function (t) {
			t = this._find(t), t && t.forEach(function (t) {
				o.removeFrom(this.stamps, t), this.unignore(t)
			}, this)
		}, c._find = function (t) {
			if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
		}, c._manageStamps = function () {
			this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
		}, c._getBoundingRect = function () {
			var t = this.element.getBoundingClientRect(), e = this.size;
			this._boundingRect = {
				left: t.left + e.paddingLeft + e.borderLeftWidth,
				top: t.top + e.paddingTop + e.borderTopWidth,
				right: t.right - (e.paddingRight + e.borderRightWidth),
				bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
			}
		}, c._manageStamp = d, c._getElementOffset = function (t) {
			var e = t.getBoundingClientRect(), o = this._boundingRect, n = i(t), s = {
				left: e.left - o.left - n.marginLeft,
				top: e.top - o.top - n.marginTop,
				right: o.right - e.right - n.marginRight,
				bottom: o.bottom - e.bottom - n.marginBottom
			};
			return s
		}, c.handleEvent = o.handleEvent, c.bindResize = function () {
			t.addEventListener("resize", this), this.isResizeBound = !0
		}, c.unbindResize = function () {
			t.removeEventListener("resize", this), this.isResizeBound = !1
		}, c.onresize = function () {
			this.resize()
		}, o.debounceMethod(s, "onresize", 100), c.resize = function () {
			this.isResizeBound && this.needsResizeLayout() && this.layout()
		}, c.needsResizeLayout = function () {
			var t = i(this.element), e = this.size && t;
			return e && t.innerWidth !== this.size.innerWidth
		}, c.addItems = function (t) {
			var e = this._itemize(t);
			return e.length && (this.items = this.items.concat(e)), e
		}, c.appended = function (t) {
			var e = this.addItems(t);
			e.length && (this.layoutItems(e, !0), this.reveal(e))
		}, c.prepended = function (t) {
			var e = this._itemize(t);
			if (e.length) {
				var i = this.items.slice(0);
				this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
			}
		}, c.reveal = function (t) {
			if (this._emitCompleteOnItems("reveal", t), t && t.length) {
				var e = this.updateStagger();
				t.forEach(function (t, i) {
					t.stagger(i * e), t.reveal()
				})
			}
		}, c.hide = function (t) {
			if (this._emitCompleteOnItems("hide", t), t && t.length) {
				var e = this.updateStagger();
				t.forEach(function (t, i) {
					t.stagger(i * e), t.hide()
				})
			}
		}, c.revealItemElements = function (t) {
			var e = this.getItems(t);
			this.reveal(e)
		}, c.hideItemElements = function (t) {
			var e = this.getItems(t);
			this.hide(e)
		}, c.getItem = function (t) {
			for (var e = 0; e < this.items.length; e++) {
				var i = this.items[e];
				if (i.element == t) return i
			}
		}, c.getItems = function (t) {
			t = o.makeArray(t);
			var e = [];
			return t.forEach(function (t) {
				var i = this.getItem(t);
				i && e.push(i)
			}, this), e
		}, c.remove = function (t) {
			var e = this.getItems(t);
			this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
				t.remove(), o.removeFrom(this.items, t)
			}, this)
		}, c.destroy = function () {
			var t = this.element.style;
			t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
				t.destroy()
			}), this.unbindResize();
			var e = this.element.outlayerGUID;
			delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
		}, s.data = function (t) {
			t = o.getQueryElement(t);
			var e = t && t.outlayerGUID;
			return e && f[e]
		}, s.create = function (t, e) {
			var i = r(s);
			return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
		};
		var m = {ms: 1, s: 1e3};
		return s.Item = n, s
	}), function (t, e) {
		"function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Smashotope = t.Smashotope || {}, t.Smashotope.Item = e(t.Outlayer))
	}(window, function (t) {
		"use strict";

		function e() {
			t.Item.apply(this, arguments)
		}

		var i = e.prototype = Object.create(t.Item.prototype), o = i._create;
		i._create = function () {
			this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
		}, i.updateSortData = function () {
			if (!this.isIgnored) {
				this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
				var t = this.layout.options.getSortData, e = this.layout._sorters;
				for (var i in t) {
					var o = e[i];
					this.sortData[i] = o(this.element, this)
				}
			}
		};
		var n = i.destroy;
		return i.destroy = function () {
			n.apply(this, arguments), this.css({display: ""})
		}, e
	}), function (t, e) {
		"function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Smashotope = t.Smashotope || {}, t.Smashotope.LayoutMode = e(t.getSize, t.Outlayer))
	}(window, function (t, e) {
		"use strict";

		function i(t) {
			this.smashotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
		}

		var o = i.prototype,
			n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
		return n.forEach(function (t) {
			o[t] = function () {
				return e.prototype[t].apply(this.smashotope, arguments)
			}
		}), o.needsVerticalResizeLayout = function () {
			var e = t(this.smashotope.element), i = this.smashotope.size && e;
			return i && e.innerHeight != this.smashotope.size.innerHeight
		}, o._getMeasurement = function () {
			this.smashotope._getMeasurement.apply(this, arguments)
		}, o.getColumnWidth = function () {
			this.getSegmentSize("column", "Width")
		}, o.getRowHeight = function () {
			this.getSegmentSize("row", "Height")
		}, o.getSegmentSize = function (t, e) {
			var i = t + e, o = "outer" + e;
			if (this._getMeasurement(i, o), !this[i]) {
				var n = this.getFirstItemSize();
				this[i] = n && n[o] || this.smashotope.size["inner" + e]
			}
		}, o.getFirstItemSize = function () {
			var e = this.smashotope.filteredItems[0];
			return e && e.element && t(e.element)
		}, o.layout = function () {
			this.smashotope.layout.apply(this.smashotope, arguments)
		}, o.getSize = function () {
			this.smashotope.getSize(), this.size = this.smashotope.size
		}, i.modes = {}, i.create = function (t, e) {
			function n() {
				i.apply(this, arguments)
			}

			return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
		}, i
	}), function (t, e) {
		"function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
	}(window, function (t, e) {
		var i = t.create("masonry");
		i.compatOptions.fitWidth = "isFitWidth";
		var o = i.prototype;
		return o._resetLayout = function () {
			this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
			for (var t = 0; t < this.cols; t++) this.colYs.push(0);
			this.maxY = 0, this.horizontalColIndex = 0
		}, o.measureColumns = function () {
			if (this.getContainerWidth(), !this.columnWidth) {
				var t = this.items[0], i = t && t.element;
				this.columnWidth = i && e(i).outerWidth || this.containerWidth
			}
			var o = this.columnWidth += this.gutter, n = this.containerWidth + this.gutter, s = n / o, r = o - n % o,
				a = r && r < 1 ? "round" : "floor";
			s = Math[a](s), this.cols = Math.max(s, 1)
		}, o.getContainerWidth = function () {
			var t = this._getOption("fitWidth"), i = t ? this.element.parentNode : this.element, o = e(i);
			this.containerWidth = o && o.innerWidth
		}, o._getItemLayoutPosition = function (t) {
			t.getSize();
			var e = t.size.outerWidth % this.columnWidth, i = e && e < 1 ? "round" : "ceil",
				o = Math[i](t.size.outerWidth / this.columnWidth);
			o = Math.min(o, this.cols);
			for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
				x: this.columnWidth * s.col,
				y: s.y
			}, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
			return r
		}, o._getTopColPosition = function (t) {
			var e = this._getTopColGroup(t), i = Math.min.apply(Math, e);
			return {col: e.indexOf(i), y: i}
		}, o._getTopColGroup = function (t) {
			if (t < 2) return this.colYs;
			for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
			return e
		}, o._getColGroupY = function (t, e) {
			if (e < 2) return this.colYs[t];
			var i = this.colYs.slice(t, t + e);
			return Math.max.apply(Math, i)
		}, o._getHorizontalColPosition = function (t, e) {
			var i = this.horizontalColIndex % this.cols, o = t > 1 && i + t > this.cols;
			i = o ? 0 : i;
			var n = e.size.outerWidth && e.size.outerHeight;
			return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {col: i, y: this._getColGroupY(i, t)}
		}, o._manageStamp = function (t) {
			var i = e(t), o = this._getElementOffset(t), n = this._getOption("originLeft"), s = n ? o.left : o.right,
				r = s + i.outerWidth, a = Math.floor(s / this.columnWidth);
			a = Math.max(0, a);
			var u = Math.floor(r / this.columnWidth);
			u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
			for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
		}, o._getContainerSize = function () {
			this.maxY = Math.max.apply(Math, this.colYs);
			var t = {height: this.maxY};
			return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
		}, o._getContainerFitWidth = function () {
			for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
			return (this.cols - t) * this.columnWidth - this.gutter
		}, o.needsResizeLayout = function () {
			var t = this.containerWidth;
			return this.getContainerWidth(), t != this.containerWidth
		}, i
	}), function (t, e) {
		"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Smashotope.LayoutMode, t.Masonry)
	}(window, function (t, e) {
		"use strict";
		var i = t.create("masonry"), o = i.prototype, n = {_getElementOffset: !0, layout: !0, _getMeasurement: !0};
		for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
		var r = o.measureColumns;
		o.measureColumns = function () {
			this.items = this.smashotope.filteredItems, r.call(this)
		};
		var a = o._getOption;
		return o._getOption = function (t) {
			return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.smashotope, arguments)
		}, i
	}), function (t, e) {
		"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Smashotope.LayoutMode)
	}(window, function (t) {
		"use strict";
		var e = t.create("fitRows"), i = e.prototype;
		return i._resetLayout = function () {
			this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
		}, i._getItemLayoutPosition = function (t) {
			t.getSize();
			var e = t.size.outerWidth + this.gutter, i = this.smashotope.size.innerWidth + this.gutter;
			0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
			var o = {x: this.x, y: this.y};
			return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
		}, i._getContainerSize = function () {
			return {height: this.maxY}
		}, e
	}), function (t, e) {
		"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Smashotope.LayoutMode)
	}(window, function (t) {
		"use strict";
		var e = t.create("vertical", {horizontalAlignment: 0}), i = e.prototype;
		return i._resetLayout = function () {
			this.y = 0
		}, i._getItemLayoutPosition = function (t) {
			t.getSize();
			var e = (this.smashotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
				i = this.y;
			return this.y += t.size.outerHeight, {x: e, y: i}
		}, i._getContainerSize = function () {
			return {height: this.y}
		}, e
	}), function (t, e) {
		"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
			return e(t, i, o, n, s, r, a)
		}) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Smashotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Smashotope.Item, t.Smashotope.LayoutMode)
	}(window, function (t, e, i, o, n, s, r) {
		function a(t, e) {
			return function (i, o) {
				for (var n = 0; n < t.length; n++) {
					var s = t[n], r = i.sortData[s], a = o.sortData[s];
					if (r > a || r < a) {
						var u = void 0 !== e[s] ? e[s] : e, h = u ? 1 : -1;
						return (r > a ? 1 : -1) * h
					}
				}
				return 0
			}
		}

		var u = t.jQuery, h = String.prototype.trim ? function (t) {
			return t.trim()
		} : function (t) {
			return t.replace(/^\s+|\s+$/g, "")
		}, d = e.create("smashotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
		d.Item = s, d.LayoutMode = r;
		var l = d.prototype;
		l._create = function () {
			this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
			for (var t in r.modes) this._initLayoutMode(t)
		}, l.reloadItems = function () {
			this.itemGUID = 0, e.prototype.reloadItems.call(this)
		}, l._itemize = function () {
			for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
				var o = t[i];
				o.id = this.itemGUID++
			}
			return this._updateItemsSortData(t), t
		}, l._initLayoutMode = function (t) {
			var e = r.modes[t], i = this.options[t] || {};
			this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
		}, l.layout = function () {
			return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
		}, l._layout = function () {
			var t = this._getIsInstant();
			this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
		}, l.arrange = function (t) {
			this.option(t), this._getIsInstant();
			var e = this._filter(this.items);
			this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
		}, l._init = l.arrange, l._hideReveal = function (t) {
			this.reveal(t.needReveal), this.hide(t.needHide)
		}, l._getIsInstant = function () {
			var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
			return this._isInstant = e, e
		}, l._bindArrangeComplete = function () {
			function t() {
				e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
			}

			var e, i, o, n = this;
			this.once("layoutComplete", function () {
				e = !0, t()
			}), this.once("hideComplete", function () {
				i = !0, t()
			}), this.once("revealComplete", function () {
				o = !0, t()
			})
		}, l._filter = function (t) {
			var e = this.options.filter;
			e = e || "*";
			for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
				var a = t[r];
				if (!a.isIgnored) {
					var u = s(a);
					u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
				}
			}
			return {matches: i, needReveal: o, needHide: n}
		}, l._getFilterTest = function (t) {
			return u && this.options.isJQueryFiltering ? function (e) {
				return u(e.element).is(t);
			} : "function" == typeof t ? function (e) {
				return t(e.element)
			} : function (e) {
				return o(e.element, t)
			}
		}, l.updateSortData = function (t) {
			var e;
			t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
		}, l._getSorters = function () {
			var t = this.options.getSortData;
			for (var e in t) {
				var i = t[e];
				this._sorters[e] = f(i)
			}
		}, l._updateItemsSortData = function (t) {
			for (var e = t && t.length, i = 0; e && i < e; i++) {
				var o = t[i];
				o.updateSortData()
			}
		};
		var f = function () {
			function t(t) {
				if ("string" != typeof t) return t;
				var i = h(t).split(" "), o = i[0], n = o.match(/^\[(.+)\]$/), s = n && n[1], r = e(s, o),
					a = d.sortDataParsers[i[1]];
				return t = a ? function (t) {
					return t && a(r(t))
				} : function (t) {
					return t && r(t)
				}
			}

			function e(t, e) {
				return t ? function (e) {
					return e.getAttribute(t)
				} : function (t) {
					var i = t.querySelector(e);
					return i && i.textContent
				}
			}

			return t
		}();
		d.sortDataParsers = {
			parseInt: function (t) {
				return parseInt(t, 10)
			}, parseFloat: function (t) {
				return parseFloat(t)
			}
		}, l._sort = function () {
			if (this.options.sortBy) {
				var t = n.makeArray(this.options.sortBy);
				this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
				var e = a(this.sortHistory, this.options.sortAscending);
				this.filteredItems.sort(e)
			}
		}, l._getIsSameSortBy = function (t) {
			for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;
			return !0
		}, l._mode = function () {
			var t = this.options.layoutMode, e = this.modes[t];
			if (!e) throw new Error("No layout mode: " + t);
			return e.options = this.options[t], e
		}, l._resetLayout = function () {
			e.prototype._resetLayout.call(this), this._mode()._resetLayout()
		}, l._getItemLayoutPosition = function (t) {
			return this._mode()._getItemLayoutPosition(t)
		}, l._manageStamp = function (t) {
			this._mode()._manageStamp(t)
		}, l._getContainerSize = function () {
			return this._mode()._getContainerSize()
		}, l.needsResizeLayout = function () {
			return this._mode().needsResizeLayout()
		}, l.appended = function (t) {
			var e = this.addItems(t);
			if (e.length) {
				var i = this._filterRevealAdded(e);
				this.filteredItems = this.filteredItems.concat(i)
			}
		}, l.prepended = function (t) {
			var e = this._itemize(t);
			if (e.length) {
				this._resetLayout(), this._manageStamps();
				var i = this._filterRevealAdded(e);
				this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
			}
		}, l._filterRevealAdded = function (t) {
			var e = this._filter(t);
			return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
		}, l.insert = function (t) {
			var e = this.addItems(t);
			if (e.length) {
				var i, o, n = e.length;
				for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
				var s = this._filter(e).matches;
				for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
				for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
				this.reveal(s)
			}
		};
		var c = l.remove;
		return l.remove = function (t) {
			t = n.makeArray(t);
			var e = this.getItems(t);
			c.call(this, t);
			for (var i = e && e.length, o = 0; i && o < i; o++) {
				var s = e[o];
				n.removeFrom(this.filteredItems, s)
			}
		}, l.shuffle = function () {
			for (var t = 0; t < this.items.length; t++) {
				var e = this.items[t];
				e.sortData.random = Math.random()
			}
			this.options.sortBy = "random", this._sort(), this._layout()
		}, l._noTransition = function (t, e) {
			var i = this.options.transitionDuration;
			this.options.transitionDuration = 0;
			var o = t.apply(this, e);
			return this.options.transitionDuration = i, o
		}, l.getFilteredItemElements = function () {
			return this.filteredItems.map(function (t) {
				return t.element
			})
		}, d
	});


	// Carousel
	!function (a, b, c, d) {
		function e(b, c) {
			this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
				time: null,
				target: null,
				pointer: null,
				stage: {start: null, current: null},
				direction: null
			}, this._states = {
				current: {},
				tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
			}, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
				this._handlers[c] = a.proxy(this[c], this)
			}, this)), a.each(e.Plugins, a.proxy(function (a, b) {
				this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
			}, this)), a.each(e.Workers, a.proxy(function (b, c) {
				this._pipe.push({filter: c.filter, run: a.proxy(c.run, this)})
			}, this)), this.setup(), this.initialize()
		}

		e.Defaults = {
			items: 3,
			loop: !1,
			center: !1,
			rewind: !1,
			mouseDrag: !0,
			touchDrag: !0,
			pullDrag: !0,
			freeDrag: !1,
			margin: 0,
			stagePadding: 0,
			merge: !1,
			mergeFit: !0,
			autoWidth: !1,
			startPosition: 0,
			rtl: !1,
			smartSpeed: 250,
			fluidSpeed: !1,
			dragEndSpeed: !1,
			responsive: {},
			responsiveRefreshRate: 200,
			responsiveBaseElement: b,
			fallbackEasing: "swing",
			info: !1,
			nestedItemSelector: !1,
			itemElement: "div",
			stageElement: "div",
			refreshClass: "sbi-owl-refresh",
			loadedClass: "sbi-owl-loaded",
			loadingClass: "sbi-owl-loading",
			rtlClass: "sbi-owl-rtl",
			responsiveClass: "sbi-owl-responsive",
			dragClass: "sbi-owl-drag",
			itemClass: "sbi-owl-item",
			stageClass: "sbi-owl-stage",
			stageOuterClass: "sbi-owl-stage-outer",
			grabClass: "sbi-owl-grab"
		}, e.Width = {Default: "default", Inner: "inner", Outer: "outer"}, e.Type = {
			Event: "event",
			State: "state"
		}, e.Plugins = {}, e.Workers = [{
			filter: ["width", "settings"], run: function () {
				this._width = this.$element.width()
			}
		}, {
			filter: ["width", "items", "settings"], run: function (a) {
				a.current = this._items && this._items[this.relative(this._current)]
			}
		}, {
			filter: ["items", "settings"], run: function () {
				this.$stage.children(".cloned").remove()
			}
		}, {
			filter: ["width", "items", "settings"], run: function (a) {
				var b = this.settings.margin || "", c = !this.settings.autoWidth, d = this.settings.rtl,
					e = {width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b};
				!c && this.$stage.children().css(e), a.css = e
			}
		}, {
			filter: ["width", "items", "settings"], run: function (a) {
				var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, c = null,
					d = this._items.length, e = !this.settings.autoWidth, f = [];
				for (a.items = {
					merge: !1,
					width: b
				}; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
				this._widths = f
			}
		}, {
			filter: ["items", "settings"], run: function () {
				var b = [], c = this._items, d = this.settings, e = Math.max(2 * d.items, 4),
					f = 2 * Math.ceil(c.length / 2), g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0, h = "",
					i = "";
				for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
				this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
			}
		}, {
			filter: ["width", "items", "settings"], run: function () {
				for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
				this._coordinates = f
			}
		}, {
			filter: ["width", "items", "settings"], run: function () {
				var a = this.settings.stagePadding, b = this._coordinates, c = {
					width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
					"padding-left": a || "",
					"padding-right": a || ""
				};
				this.$stage.css(c)
			}
		}, {
			filter: ["width", "items", "settings"], run: function (a) {
				var b = this._coordinates.length, c = !this.settings.autoWidth, d = this.$stage.children();
				if (c && a.items.merge) for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css); else c && (a.css.width = a.items.width, d.css(a.css))
			}
		}, {
			filter: ["items"], run: function () {
				this._coordinates.length < 1 && this.$stage.removeAttr("style")
			}
		}, {
			filter: ["width", "items", "settings"], run: function (a) {
				a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
			}
		}, {
			filter: ["position"], run: function () {
				this.animate(this.coordinates(this._current))
			}
		}, {
			filter: ["width", "position", "items", "settings"], run: function () {
				var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding,
					g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
				for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
				this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
			}
		}], e.prototype.initialize = function () {
			if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
				var b, c, e;
				b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
			}
			this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
		}, e.prototype.setup = function () {
			var b = this.viewport(), c = this.options.responsive, d = -1, e = null;
			c ? (a.each(c, function (a) {
				a <= b && a > d && (d = Number(a))
			}), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
				property: {
					name: "settings",
					value: e
				}
			}), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
				property: {
					name: "settings",
					value: this.settings
				}
			})
		}, e.prototype.optionsLogic = function () {
			this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
		}, e.prototype.prepare = function (b) {
			var c = this.trigger("prepare", {content: b});
			return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {content: c.data}), c.data
		}, e.prototype.update = function () {
			for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
				return this[a]
			}, this._invalidated), e = {}; b < c;) (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
			this._invalidated = {}, !this.is("valid") && this.enter("valid")
		}, e.prototype.width = function (a) {
			switch (a = a || e.Width.Default) {
				case e.Width.Inner:
				case e.Width.Outer:
					return this._width;
				default:
					return this._width - 2 * this.settings.stagePadding + this.settings.margin
			}
		}, e.prototype.refresh = function () {
			this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
		}, e.prototype.onThrottledResize = function () {
			b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
		}, e.prototype.onResize = function () {
			return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
		}, e.prototype.registerEventHandlers = function () {
			a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
				return !1
			})), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
		}, e.prototype.onDragStart = function (b) {
			var d = null;
			3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
				x: d[16 === d.length ? 12 : 4],
				y: d[16 === d.length ? 13 : 5]
			}) : (d = this.$stage.position(), d = {
				x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
				y: d.top
			}), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
				var d = this.difference(this._drag.pointer, this.pointer(b));
				a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
			}, this)))
		}, e.prototype.onDragMove = function (a) {
			var b = null, c = null, d = null, e = this.difference(this._drag.pointer, this.pointer(a)),
				f = this.difference(this._drag.stage.start, e);
			this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
		}, e.prototype.onDragEnd = function (b) {
			var d = this.difference(this._drag.pointer, this.pointer(b)), e = this._drag.stage.current,
				f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
			a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
				return !1
			})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
		}, e.prototype.closest = function (b, c) {
			var d = -1, e = 30, f = this.width(), g = this.coordinates();
			return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
				return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
			}, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
		}, e.prototype.animate = function (b) {
			var c = this.speed() > 0;
			this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
				transform: "translate3d(" + b + "px,0px,0px)",
				transition: this.speed() / 1e3 + "s"
			}) : c ? this.$stage.animate({left: b + "px"}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: b + "px"})
		}, e.prototype.is = function (a) {
			return this._states.current[a] && this._states.current[a] > 0
		}, e.prototype.current = function (a) {
			if (a === d) return this._current;
			if (0 === this._items.length) return d;
			if (a = this.normalize(a), this._current !== a) {
				var b = this.trigger("change", {property: {name: "position", value: a}});
				b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
					property: {
						name: "position",
						value: this._current
					}
				})
			}
			return this._current
		}, e.prototype.invalidate = function (b) {
			return "string" === typeof b && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
				return b
			})
		}, e.prototype.reset = function (a) {
			a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
		}, e.prototype.normalize = function (a, b) {
			var c = this._items.length, e = b ? 0 : this._clones.length;
			return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
		}, e.prototype.relative = function (a) {
			return a -= this._clones.length / 2, this.normalize(a, !0)
		}, e.prototype.maximum = function (a) {
			var b, c, d, e = this.settings, f = this._coordinates.length;
			if (e.loop) f = this._clones.length / 2 + this._items.length - 1; else if (e.autoWidth || e.merge) {
				for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d));) ;
				f = b + 1
			} else f = e.center ? this._items.length - 1 : this._items.length - e.items;
			return a && (f -= this._clones.length / 2), Math.max(f, 0)
		}, e.prototype.minimum = function (a) {
			return a ? 0 : this._clones.length / 2
		}, e.prototype.items = function (a) {
			return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
		}, e.prototype.mergers = function (a) {
			return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
		}, e.prototype.clones = function (b) {
			var c = this._clones.length / 2, e = c + this._items.length, f = function (a) {
				return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
			};
			return b === d ? a.map(this._clones, function (a, b) {
				return f(b)
			}) : a.map(this._clones, function (a, c) {
				return a === b ? f(c) : null
			})
		}, e.prototype.speed = function (a) {
			return a !== d && (this._speed = a), this._speed
		}, e.prototype.coordinates = function (b) {
			var c, e = 1, f = b - 1;
			return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
				return this.coordinates(b)
			}, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
		}, e.prototype.duration = function (a, b, c) {
			return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
		}, e.prototype.to = function (a, b) {
			var c = this.current(), d = null, e = a - this.relative(c), f = (e > 0) - (e < 0), g = this._items.length,
				h = this.minimum(), i = this.maximum();
			this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
		}, e.prototype.next = function (a) {
			a = a || !1, this.to(this.relative(this.current()) + 1, a)
		}, e.prototype.prev = function (a) {
			a = a || !1, this.to(this.relative(this.current()) - 1, a)
		}, e.prototype.onTransitionEnd = function (a) {
			if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
			this.leave("animating"), this.trigger("translated")
		}, e.prototype.viewport = function () {
			var d;
			return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
		}, e.prototype.replace = function (b) {
			this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
				return 1 === this.nodeType
			}).each(a.proxy(function (a, b) {
				b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
			}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
		}, e.prototype.add = function (b, c) {
			var e = this.relative(this._current);
			c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
				content: b,
				position: c
			}), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
				content: b,
				position: c
			})
		}, e.prototype.remove = function (a) {
			a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
				content: this._items[a],
				position: a
			}), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
				content: null,
				position: a
			}))
		}, e.prototype.preloadAutoWidthImages = function (b) {
			b.each(a.proxy(function (b, c) {
				this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
					c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
				}, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
			}, this))
		}, e.prototype.destroy = function () {
			this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
			for (var d in this._plugins) this._plugins[d].destroy();
			this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
		}, e.prototype.op = function (a, b, c) {
			var d = this.settings.rtl;
			switch (b) {
				case"<":
					return d ? a > c : a < c;
				case">":
					return d ? a < c : a > c;
				case">=":
					return d ? a <= c : a >= c;
				case"<=":
					return d ? a >= c : a <= c
			}
		}, e.prototype.on = function (a, b, c, d) {
			a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
		}, e.prototype.off = function (a, b, c, d) {
			a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
		}, e.prototype.trigger = function (b, c, d, f, g) {
			var h = {item: {count: this._items.length, index: this.current()}},
				i = a.camelCase(a.grep(["on", b, d], function (a) {
					return a
				}).join("-").toLowerCase()),
				j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({relatedTarget: this}, h, c));
			return this._supress[b] || (a.each(this._plugins, function (a, b) {
				b.onTrigger && b.onTrigger(j)
			}), this.register({
				type: e.Type.Event,
				name: b
			}), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
		}, e.prototype.enter = function (b) {
			a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
				this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
			}, this))
		}, e.prototype.leave = function (b) {
			a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
				this._states.current[b]--
			}, this))
		}, e.prototype.register = function (b) {
			if (b.type === e.Type.Event) {
				if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
					var c = a.event.special[b.name]._default;
					a.event.special[b.name]._default = function (a) {
						return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
					}, a.event.special[b.name].owl = !0
				}
			} else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
				return a.inArray(c, this._states.tags[b.name]) === d
			}, this)))
		}, e.prototype.suppress = function (b) {
			a.each(b, a.proxy(function (a, b) {
				this._supress[b] = !0
			}, this))
		}, e.prototype.release = function (b) {
			a.each(b, a.proxy(function (a, b) {
				delete this._supress[b]
			}, this))
		}, e.prototype.pointer = function (a) {
			var c = {x: null, y: null};
			return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
		}, e.prototype.isNumeric = function (a) {
			return !isNaN(parseFloat(a))
		}, e.prototype.difference = function (a, b) {
			return {x: a.x - b.x, y: a.y - b.y}
		}, a.fn.sbiOwlCarousel = function (b) {
			var c = Array.prototype.slice.call(arguments, 1);
			return this.each(function () {
				var d = a(this), f = d.data("owl.carousel");
				f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
					f.register({
						type: e.Type.Event,
						name: c
					}), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
						a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
					}, f))
				})), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
			})
		}, a.fn.sbiOwlCarousel.Constructor = e
	}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
		var e = function (b) {
			this._core = b, this._interval = null, this._visible = null, this._handlers = {
				"initialized.owl.carousel": a.proxy(function (a) {
					a.namespace && this._core.settings.autoRefresh && this.watch()
				}, this)
			}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
		e.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, e.prototype.watch = function () {
			this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
		}, e.prototype.refresh = function () {
			this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("sbi-owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
		}, e.prototype.destroy = function () {
			var a, c;
			b.clearInterval(this._interval);
			for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
			for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
		}, a.fn.sbiOwlCarousel.Constructor.Plugins.AutoRefresh = e
	}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
		var e = function (b) {
			this._core = b, this._loaded = [], this._handlers = {
				"initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
					if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
						this.load(b)
					}, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
				}, this)
			}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
		e.Defaults = {lazyLoad: !1}, e.prototype.load = function (c) {
			var d = this._core.$stage.children().eq(c), e = d && d.find(".sbi-owl-lazy");
			!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
				var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
				this._core.trigger("load", {
					element: f,
					url: g
				}, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
					f.css("opacity", 1), this._core.trigger("loaded", {element: f, url: g}, "lazy")
				}, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
					f.css({
						"background-image": 'url("' + g + '")',
						opacity: "1"
					}), this._core.trigger("loaded", {element: f, url: g}, "lazy")
				}, this), e.src = g)
			}, this)), this._loaded.push(d.get(0)))
		}, e.prototype.destroy = function () {
			var a, b;
			for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
			for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
		}, a.fn.sbiOwlCarousel.Constructor.Plugins.Lazy = e
	}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
		var e = function (b) {
			this._core = b, this._handlers = {
				"initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
					a.namespace && this._core.settings.autoHeight && this.update()
				}, this), "changed.owl.carousel": a.proxy(function (a) {
					a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
				}, this), "loaded.owl.lazy": a.proxy(function (a) {
					a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
				}, this)
			}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
		e.Defaults = {autoHeight: !1, autoHeightClass: "sbi-owl-height"}, e.prototype.update = function () {
			var b = this._core._current, c = b + this._core.settings.items,
				d = this._core.$stage.children().toArray().slice(b, c), e = [], f = 0;
			a.each(d, function (b, c) {
				e.push(a(c).height())
			}), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
		}, e.prototype.destroy = function () {
			var a, b;
			for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
			for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
		}, a.fn.sbiOwlCarousel.Constructor.Plugins.AutoHeight = e
	}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
		var e = function (b) {
			this._core = b, this._videos = {}, this._playing = null, this._handlers = {
				"initialized.owl.carousel": a.proxy(function (a) {
					a.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
				}, this), "resize.owl.carousel": a.proxy(function (a) {
					a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
				}, this), "refreshed.owl.carousel": a.proxy(function (a) {
					a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .sbi-owl-video-frame").remove()
				}, this), "changed.owl.carousel": a.proxy(function (a) {
					a.namespace && "position" === a.property.name && this._playing && this.stop()
				}, this), "prepared.owl.carousel": a.proxy(function (b) {
					if (b.namespace) {
						var c = a(b.content).find(".sbi-owl-video");
						c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
					}
				}, this)
			}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".sbi-owl-video-play-icon", a.proxy(function (a) {
				this.play(a)
			}, this))
		};
		e.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, e.prototype.fetch = function (a, b) {
			var c = function () {
					return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
				}(), d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
				e = a.attr("data-width") || this._core.settings.videoWidth,
				f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href");
			if (!g) throw new Error("Missing video URL.");
			if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube"; else if (d[3].indexOf("vimeo") > -1) c = "vimeo"; else {
				if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
				c = "vzaar"
			}
			d = d[6], this._videos[g] = {
				type: c,
				id: d,
				width: e,
				height: f
			}, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
		}, e.prototype.thumbnail = function (b, c) {
			var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
				h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function (a) {
					e = '<div class="sbi-owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="sbi-owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="sbi-owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
				};
			if (b.wrap('<div class="sbi-owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "sbi-owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
			"youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
				type: "GET",
				url: "//vimeo.com/api/v2/video/" + c.id + ".json",
				jsonp: "callback",
				dataType: "jsonp",
				success: function (a) {
					f = a[0].thumbnail_large, l(f)
				}
			}) : "vzaar" === c.type && a.ajax({
				type: "GET",
				url: "//vzaar.com/api/videos/" + c.id + ".json",
				jsonp: "callback",
				dataType: "jsonp",
				success: function (a) {
					f = a.framegrab_url, l(f)
				}
			})
		}, e.prototype.stop = function () {
			this._core.trigger("stop", null, "video"), this._playing.find(".sbi-owl-video-frame").remove(), this._playing.removeClass("sbi-owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
		}, e.prototype.play = function (b) {
			var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass),
				f = this._videos[e.attr("data-video")], g = f.width || "100%",
				h = f.height || this._core.$stage.height();
			this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="sbi-owl-video-frame">' + c + "</div>").insertAfter(e.find(".sbi-owl-video")), this._playing = e.addClass("sbi-owl-video-playing"))
		}, e.prototype.isInFullScreen = function () {
			var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
			return b && a(b).parent().hasClass("sbi-owl-video-frame")
		}, e.prototype.destroy = function () {
			var a, b;
			this._core.$element.off("click.owl.video");
			for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
			for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
		}, a.fn.sbiOwlCarousel.Constructor.Plugins.Video = e
	}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
		var e = function (b) {
			this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
				"change.owl.carousel": a.proxy(function (a) {
					a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
				}, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
					a.namespace && (this.swapping = "translated" == a.type)
				}, this), "translate.owl.carousel": a.proxy(function (a) {
					a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
				}, this)
			}, this.core.$element.on(this.handlers)
		};
		e.Defaults = {animateOut: !1, animateIn: !1}, e.prototype.swap = function () {
			if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
				this.core.speed(0);
				var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous),
					e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn,
					g = this.core.settings.animateOut;
				this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({left: b + "px"}).addClass("animated sbi-owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated sbi-owl-animated-in").addClass(f))
			}
		}, e.prototype.clear = function (b) {
			a(b.target).css({left: ""}).removeClass("animated sbi-owl-animated-out sbi-owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
		}, e.prototype.destroy = function () {
			var a, b;
			for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
			for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
		},
			a.fn.sbiOwlCarousel.Constructor.Plugins.Animate = e
	}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
		var e = function (b) {
			this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
				"changed.owl.carousel": a.proxy(function (a) {
					a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
				}, this), "initialized.owl.carousel": a.proxy(function (a) {
					a.namespace && this._core.settings.autoplay && this.play()
				}, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
					a.namespace && this.play(b, c)
				}, this), "stop.owl.autoplay": a.proxy(function (a) {
					a.namespace && this.stop()
				}, this), "mouseover.owl.autoplay": a.proxy(function () {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
				}, this), "mouseleave.owl.autoplay": a.proxy(function () {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
				}, this), "touchstart.owl.core": a.proxy(function () {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
				}, this), "touchend.owl.core": a.proxy(function () {
					this._core.settings.autoplayHoverPause && this.play()
				}, this)
			}, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
		};
		e.Defaults = {
			autoplay: !1,
			autoplayTimeout: 5e3,
			autoplayHoverPause: !1,
			autoplaySpeed: !1
		}, e.prototype.play = function (a, b) {
			this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
		}, e.prototype._getNextTimeout = function (d, e) {
			return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
				this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
			}, this), d || this._core.settings.autoplayTimeout)
		}, e.prototype._setAutoPlayInterval = function () {
			this._timeout = this._getNextTimeout()
		}, e.prototype.stop = function () {
			this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
		}, e.prototype.pause = function () {
			this._core.is("rotating") && (this._paused = !0)
		}, e.prototype.destroy = function () {
			var a, b;
			this.stop();
			for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
			for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
		}, a.fn.sbiOwlCarousel.Constructor.Plugins.autoplay = e
	}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
		"use strict";
		var e = function (b) {
			this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
				next: this._core.next,
				prev: this._core.prev,
				to: this._core.to
			}, this._handlers = {
				"prepared.owl.carousel": a.proxy(function (b) {
					b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
				}, this), "added.owl.carousel": a.proxy(function (a) {
					a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
				}, this), "remove.owl.carousel": a.proxy(function (a) {
					a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
				}, this), "changed.owl.carousel": a.proxy(function (a) {
					a.namespace && "position" == a.property.name && this.draw()
				}, this), "initialized.owl.carousel": a.proxy(function (a) {
					a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
				}, this), "refreshed.owl.carousel": a.proxy(function (a) {
					a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
				}, this)
			}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
		};
		e.Defaults = {
			nav: !1,
			navText: ["prev", "next"],
			navSpeed: !1,
			navElement: "div",
			navContainer: !1,
			navContainerClass: "sbi-owl-nav",
			navClass: ["sbi-owl-prev", "sbi-owl-next"],
			slideBy: 1,
			dotClass: "sbi-owl-dot",
			dotsClass: "sbi-owl-dots",
			dots: !0,
			dotsEach: !1,
			dotsData: !1,
			dotsSpeed: !1,
			dotsContainer: !1
		}, e.prototype.initialize = function () {
			var b, c = this._core.settings;
			this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
				this.prev(c.navSpeed)
			}, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
				this.next(c.navSpeed)
			}, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
				var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
				b.preventDefault(), this.to(d, c.dotsSpeed)
			}, this));
			for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
		}, e.prototype.destroy = function () {
			var a, b, c, d;
			for (a in this._handlers) this.$element.off(a, this._handlers[a]);
			for (b in this._controls) this._controls[b].remove();
			for (d in this.overides) this._core[d] = this._overrides[d];
			for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
		}, e.prototype.update = function () {
			var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length,
				f = this._core.maximum(!0), g = this._core.settings,
				h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
			if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
				if (b >= h || 0 === b) {
					if (this._pages.push({
						start: Math.min(f, a - d),
						end: a - d + h - 1
					}), Math.min(f, a - d) === f) break;
					b = 0, ++c
				}
				b += this._core.mergers(this._core.relative(a))
			}
		}, e.prototype.draw = function () {
			var b, c = this._core.settings, d = this._core.items().length <= c.items,
				e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
			this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
		}, e.prototype.onTrigger = function (b) {
			var c = this._core.settings;
			b.page = {
				index: a.inArray(this.current(), this._pages),
				count: this._pages.length,
				size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
			}
		}, e.prototype.current = function () {
			var b = this._core.relative(this._core.current());
			return a.grep(this._pages, a.proxy(function (a, c) {
				return a.start <= b && a.end >= b
			}, this)).pop()
		}, e.prototype.getPosition = function (b) {
			var c, d, e = this._core.settings;
			return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
		}, e.prototype.next = function (b) {
			a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
		}, e.prototype.prev = function (b) {
			a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
		}, e.prototype.to = function (b, c, d) {
			var e;
			!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
		}, a.fn.sbiOwlCarousel.Constructor.Plugins.Navigation = e
	}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
		"use strict";
		var e = function (c) {
			this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
				"initialized.owl.carousel": a.proxy(function (c) {
					c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
				}, this), "prepared.owl.carousel": a.proxy(function (b) {
					if (b.namespace) {
						var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
						if (!c) return;
						this._hashes[c] = b.content
					}
				}, this), "changed.owl.carousel": a.proxy(function (c) {
					if (c.namespace && "position" === c.property.name) {
						var d = this._core.items(this._core.relative(this._core.current())),
							e = a.map(this._hashes, function (a, b) {
								return a === d ? b : null
							}).join();
						if (!e || b.location.hash.slice(1) === e) return;
						b.location.hash = e
					}
				}, this)
			}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
				var c = b.location.hash.substring(1), e = this._core.$stage.children(),
					f = this._hashes[c] && e.index(this._hashes[c]);
				f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
			}, this))
		};
		e.Defaults = {URLhashListener: !1}, e.prototype.destroy = function () {
			var c, d;
			a(b).off("hashchange.owl.navigation");
			for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
			for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
		}, a.fn.sbiOwlCarousel.Constructor.Plugins.Hash = e
	}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
		function e(b, c) {
			var e = !1, f = b.charAt(0).toUpperCase() + b.slice(1);
			return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
				if (g[b] !== d) return e = !c || b, !1
			}), e
		}

		function f(a) {
			return e(a, !0)
		}

		var g = a("<support>").get(0).style, h = "Webkit Moz O ms".split(" "), i = {
			transition: {
				end: {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd",
					transition: "transitionend"
				}
			},
			animation: {
				end: {
					WebkitAnimation: "webkitAnimationEnd",
					MozAnimation: "animationend",
					OAnimation: "oAnimationEnd",
					animation: "animationend"
				}
			}
		}, j = {
			csstransforms: function () {
				return !!e("transform")
			}, csstransforms3d: function () {
				return !!e("perspective")
			}, csstransitions: function () {
				return !!e("transition")
			}, cssanimations: function () {
				return !!e("animation")
			}
		};
		j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
	}(window.Zepto || window.jQuery, window, document);

	!function (a, b) {
		"function" == typeof define && define.amd ? define("packery/js/rect", b) : "object" == typeof module && module.exports ? module.exports = b() : (a.Packery = a.Packery || {}, a.Packery.Rect = b())
	}(window, function () {
		function a(b) {
			for (var c in a.defaults) this[c] = a.defaults[c];
			for (c in b) this[c] = b[c]
		}

		a.defaults = {x: 0, y: 0, width: 0, height: 0};
		var b = a.prototype;
		return b.contains = function (a) {
			var b = a.width || 0, c = a.height || 0;
			return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c
		}, b.overlaps = function (a) {
			var b = this.x + this.width, c = this.y + this.height, d = a.x + a.width, e = a.y + a.height;
			return this.x < d && b > a.x && this.y < e && c > a.y
		}, b.getMaximalFreeRects = function (b) {
			if (!this.overlaps(b)) return !1;
			var c, d = [], e = this.x + this.width, f = this.y + this.height, g = b.x + b.width, h = b.y + b.height;
			return this.y < b.y && (c = new a({
				x: this.x,
				y: this.y,
				width: this.width,
				height: b.y - this.y
			}), d.push(c)), e > g && (c = new a({
				x: g,
				y: this.y,
				width: e - g,
				height: this.height
			}), d.push(c)), f > h && (c = new a({
				x: this.x,
				y: h,
				width: this.width,
				height: f - h
			}), d.push(c)), this.x < b.x && (c = new a({
				x: this.x,
				y: this.y,
				width: b.x - this.x,
				height: this.height
			}), d.push(c)), d
		}, b.canFit = function (a) {
			return this.width >= a.width && this.height >= a.height
		}, a
	}), function (a, b) {
		if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], b); else if ("object" == typeof module && module.exports) module.exports = b(require("./rect")); else {
			var c = a.Packery = a.Packery || {};
			c.Packer = b(c.Rect)
		}
	}(window, function (a) {
		function b(a, b, c) {
			this.width = a || 0, this.height = b || 0, this.sortDirection = c || "downwardLeftToRight", this.reset()
		}

		var c = b.prototype;
		c.reset = function () {
			this.spaces = [];
			var b = new a({x: 0, y: 0, width: this.width, height: this.height});
			this.spaces.push(b), this.sorter = d[this.sortDirection] || d.downwardLeftToRight
		}, c.pack = function (a) {
			for (var b = 0; b < this.spaces.length; b++) {
				var c = this.spaces[b];
				if (c.canFit(a)) {
					this.placeInSpace(a, c);
					break
				}
			}
		}, c.columnPack = function (a) {
			for (var b = 0; b < this.spaces.length; b++) {
				var c = this.spaces[b], d = c.x <= a.x && c.x + c.width >= a.x + a.width && c.height >= a.height - .01;
				if (d) {
					a.y = c.y, this.placed(a);
					break
				}
			}
		}, c.rowPack = function (a) {
			for (var b = 0; b < this.spaces.length; b++) {
				var c = this.spaces[b], d = c.y <= a.y && c.y + c.height >= a.y + a.height && c.width >= a.width - .01;
				if (d) {
					a.x = c.x, this.placed(a);
					break
				}
			}
		}, c.placeInSpace = function (a, b) {
			a.x = b.x, a.y = b.y, this.placed(a)
		}, c.placed = function (a) {
			for (var b = [], c = 0; c < this.spaces.length; c++) {
				var d = this.spaces[c], e = d.getMaximalFreeRects(a);
				e ? b.push.apply(b, e) : b.push(d)
			}
			this.spaces = b, this.mergeSortSpaces()
		}, c.mergeSortSpaces = function () {
			b.mergeRects(this.spaces), this.spaces.sort(this.sorter)
		}, c.addSpace = function (a) {
			this.spaces.push(a), this.mergeSortSpaces()
		}, b.mergeRects = function (a) {
			var b = 0, c = a[b];
			a:for (; c;) {
				for (var d = 0, e = a[b + d]; e;) {
					if (e == c) d++; else {
						if (e.contains(c)) {
							a.splice(b, 1), c = a[b];
							continue a
						}
						c.contains(e) ? a.splice(b + d, 1) : d++
					}
					e = a[b + d]
				}
				b++, c = a[b]
			}
			return a
		};
		var d = {
			downwardLeftToRight: function (a, b) {
				return a.y - b.y || a.x - b.x
			}, rightwardTopToBottom: function (a, b) {
				return a.x - b.x || a.y - b.y
			}
		};
		return b
	}), function (a, b) {
		"function" == typeof define && define.amd ? define("packery/js/item", ["outlayer/outlayer", "./rect"], b) : "object" == typeof module && module.exports ? module.exports = b(require("outlayer"), require("./rect")) : a.Packery.Item = b(a.Outlayer, a.Packery.Rect)
	}(window, function (a, b) {
		var c = document.documentElement.style, d = "string" == typeof c.transform ? "transform" : "WebkitTransform",
			e = function () {
				a.Item.apply(this, arguments)
			}, f = e.prototype = Object.create(a.Item.prototype), g = f._create;
		f._create = function () {
			g.call(this), this.rect = new b
		};
		var h = f.moveTo;
		return f.moveTo = function (a, b) {
			var c = Math.abs(this.position.x - a), d = Math.abs(this.position.y - b),
				e = this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && 1 > c && 1 > d;
			return e ? void this.goTo(a, b) : void h.apply(this, arguments)
		}, f.enablePlacing = function () {
			this.removeTransitionStyles(), this.isTransitioning && d && (this.element.style[d] = "none"), this.isTransitioning = !1, this.getSize(), this.layout._setRectSize(this.element, this.rect), this.isPlacing = !0
		}, f.disablePlacing = function () {
			this.isPlacing = !1
		}, f.removeElem = function () {
			this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
		}, f.showDropPlaceholder = function () {
			var a = this.dropPlaceholder;
			a || (a = this.dropPlaceholder = document.createElement("div"), a.className = "packery-drop-placeholder", a.style.position = "absolute"), a.style.width = this.size.width + "px", a.style.height = this.size.height + "px", this.positionDropPlaceholder(), this.layout.element.appendChild(a)
		}, f.positionDropPlaceholder = function () {
			this.dropPlaceholder.style[d] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)"
		}, f.hideDropPlaceholder = function () {
			this.layout.element.removeChild(this.dropPlaceholder)
		}, e
	}), function (a, b) {
		"function" == typeof define && define.amd ? define("packery/js/packery", ["get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], b) : "object" == typeof module && module.exports ? module.exports = b(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : a.Packery = b(a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item)
	}(window, function (a, b, c, d, e) {
		function f(a, b) {
			return a.position.y - b.position.y || a.position.x - b.position.x
		}

		function g(a, b) {
			return a.position.x - b.position.x || a.position.y - b.position.y
		}

		function h(a, b) {
			var c = b.x - a.x, d = b.y - a.y;
			return Math.sqrt(c * c + d * d)
		}

		c.prototype.canFit = function (a) {
			return this.width >= a.width - 1 && this.height >= a.height - 1
		};
		var i = b.create("packery");
		i.Item = e;
		var j = i.prototype;
		j._create = function () {
			b.prototype._create.call(this), this.packer = new d, this.shiftPacker = new d, this.isEnabled = !0, this.dragItemCount = 0;
			var a = this;
			this.handleDraggabilly = {
				dragStart: function () {
					a.itemDragStart(this.element)
				}, dragMove: function () {
					a.itemDragMove(this.element, this.position.x, this.position.y)
				}, dragEnd: function () {
					a.itemDragEnd(this.element)
				}
			}, this.handleUIDraggable = {
				start: function (b, c) {
					c && a.itemDragStart(b.currentTarget)
				}, drag: function (b, c) {
					c && a.itemDragMove(b.currentTarget, c.position.left, c.position.top)
				}, stop: function (b, c) {
					c && a.itemDragEnd(b.currentTarget)
				}
			}
		}, j._resetLayout = function () {
			this.getSize(), this._getMeasurements();
			var a, b, c;
			this._getOption("horizontal") ? (a = 1 / 0, b = this.size.innerHeight + this.gutter, c = "rightwardTopToBottom") : (a = this.size.innerWidth + this.gutter, b = 1 / 0, c = "downwardLeftToRight"), this.packer.width = this.shiftPacker.width = a, this.packer.height = this.shiftPacker.height = b, this.packer.sortDirection = this.shiftPacker.sortDirection = c, this.packer.reset(), this.maxY = 0, this.maxX = 0
		}, j._getMeasurements = function () {
			this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
		}, j._getItemLayoutPosition = function (a) {
			if (this._setRectSize(a.element, a.rect), this.isShifting || this.dragItemCount > 0) {
				var b = this._getPackMethod();
				this.packer[b](a.rect)
			} else this.packer.pack(a.rect);
			return this._setMaxXY(a.rect), a.rect
		}, j.shiftLayout = function () {
			this.isShifting = !0, this.layout(), delete this.isShifting
		}, j._getPackMethod = function () {
			return this._getOption("horizontal") ? "rowPack" : "columnPack"
		}, j._setMaxXY = function (a) {
			this.maxX = Math.max(a.x + a.width, this.maxX), this.maxY = Math.max(a.y + a.height, this.maxY)
		}, j._setRectSize = function (b, c) {
			var d = a(b), e = d.outerWidth, f = d.outerHeight;
			(e || f) && (e = this._applyGridGutter(e, this.columnWidth), f = this._applyGridGutter(f, this.rowHeight)), c.width = Math.min(e, this.packer.width), c.height = Math.min(f, this.packer.height)
		}, j._applyGridGutter = function (a, b) {
			if (!b) return a + this.gutter;
			b += this.gutter;
			var c = a % b, d = c && 1 > c ? "round" : "ceil";
			return a = Math[d](a / b) * b
		}, j._getContainerSize = function () {
			return this._getOption("horizontal") ? {width: this.maxX - this.gutter} : {height: this.maxY - this.gutter}
		}, j._manageStamp = function (a) {
			var b, d = this.getItem(a);
			if (d && d.isPlacing) b = d.rect; else {
				var e = this._getElementOffset(a);
				b = new c({
					x: this._getOption("originLeft") ? e.left : e.right,
					y: this._getOption("originTop") ? e.top : e.bottom
				})
			}
			this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b)
		}, j.sortItemsByPosition = function () {
			var a = this._getOption("horizontal") ? g : f;
			this.items.sort(a)
		}, j.fit = function (a, b, c) {
			var d = this.getItem(a);
			d && (this.stamp(d.element), d.enablePlacing(), this.updateShiftTargets(d), b = void 0 === b ? d.rect.x : b, c = void 0 === c ? d.rect.y : c, this.shift(d, b, c), this._bindFitEvents(d), d.moveTo(d.rect.x, d.rect.y), this.shiftLayout(), this.unstamp(d.element), this.sortItemsByPosition(), d.disablePlacing())
		}, j._bindFitEvents = function (a) {
			function b() {
				d++, 2 == d && c.dispatchEvent("fitComplete", null, [a])
			}

			var c = this, d = 0;
			a.once("layout", b), this.once("layoutComplete", b)
		}, j.resize = function () {
			this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout())
		}, j.needsResizeLayout = function () {
			var b = a(this.element), c = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
			return b[c] != this.size[c]
		}, j.resizeShiftPercentLayout = function () {
			var b = this._getItemsForLayout(this.items), c = this._getOption("horizontal"), d = c ? "y" : "x",
				e = c ? "height" : "width", f = c ? "rowHeight" : "columnWidth", g = c ? "innerHeight" : "innerWidth",
				h = this[f];
			if (h = h && h + this.gutter) {
				this._getMeasurements();
				var i = this[f] + this.gutter;
				b.forEach(function (a) {
					var b = Math.round(a.rect[d] / h);
					a.rect[d] = b * i
				})
			} else {
				var j = a(this.element)[g] + this.gutter, k = this.packer[e];
				b.forEach(function (a) {
					a.rect[d] = a.rect[d] / k * j
				})
			}
			this.shiftLayout()
		}, j.itemDragStart = function (a) {
			if (this.isEnabled) {
				this.stamp(a);
				var b = this.getItem(a);
				b && (b.enablePlacing(), b.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(b))
			}
		}, j.updateShiftTargets = function (a) {
			this.shiftPacker.reset(), this._getBoundingRect();
			var b = this._getOption("originLeft"), d = this._getOption("originTop");
			this.stamps.forEach(function (a) {
				var e = this.getItem(a);
				if (!e || !e.isPlacing) {
					var f = this._getElementOffset(a), g = new c({x: b ? f.left : f.right, y: d ? f.top : f.bottom});
					this._setRectSize(a, g), this.shiftPacker.placed(g)
				}
			}, this);
			var e = this._getOption("horizontal"), f = e ? "rowHeight" : "columnWidth", g = e ? "height" : "width";
			this.shiftTargetKeys = [], this.shiftTargets = [];
			var h, i = this[f];
			if (i = i && i + this.gutter) {
				var j = Math.ceil(a.rect[g] / i), k = Math.floor((this.shiftPacker[g] + this.gutter) / i);
				h = (k - j) * i;
				for (var l = 0; k > l; l++) this._addShiftTarget(l * i, 0, h)
			} else h = this.shiftPacker[g] + this.gutter - a.rect[g], this._addShiftTarget(0, 0, h);
			var m = this._getItemsForLayout(this.items), n = this._getPackMethod();
			m.forEach(function (a) {
				var b = a.rect;
				this._setRectSize(a.element, b), this.shiftPacker[n](b), this._addShiftTarget(b.x, b.y, h);
				var c = e ? b.x + b.width : b.x, d = e ? b.y : b.y + b.height;
				if (this._addShiftTarget(c, d, h), i) for (var f = Math.round(b[g] / i), j = 1; f > j; j++) {
					var k = e ? c : b.x + i * j, l = e ? b.y + i * j : d;
					this._addShiftTarget(k, l, h)
				}
			}, this)
		}, j._addShiftTarget = function (a, b, c) {
			var d = this._getOption("horizontal") ? b : a;
			if (!(0 !== d && d > c)) {
				var e = a + "," + b, f = -1 != this.shiftTargetKeys.indexOf(e);
				f || (this.shiftTargetKeys.push(e), this.shiftTargets.push({x: a, y: b}))
			}
		}, j.shift = function (a, b, c) {
			var d, e = 1 / 0, f = {x: b, y: c};
			this.shiftTargets.forEach(function (a) {
				var b = h(a, f);
				e > b && (d = a, e = b)
			}), a.rect.x = d.x, a.rect.y = d.y
		};
		var k = 120;
		j.itemDragMove = function (a, b, c) {
			function d() {
				f.shift(e, b, c), e.positionDropPlaceholder(), f.layout()
			}

			var e = this.isEnabled && this.getItem(a);
			if (e) {
				b -= this.size.paddingLeft, c -= this.size.paddingTop;
				var f = this, g = new Date;
				this._itemDragTime && g - this._itemDragTime < k ? (clearTimeout(this.dragTimeout), this.dragTimeout = setTimeout(d, k)) : (d(), this._itemDragTime = g)
			}
		}, j.itemDragEnd = function (a) {
			function b() {
				d++, 2 == d && (c.element.classList.remove("is-positioning-post-drag"), c.hideDropPlaceholder(), e.dispatchEvent("dragItemPositioned", null, [c]))
			}

			var c = this.isEnabled && this.getItem(a);
			if (c) {
				clearTimeout(this.dragTimeout), c.element.classList.add("is-positioning-post-drag");
				var d = 0, e = this;
				c.once("layout", b), this.once("layoutComplete", b), c.moveTo(c.rect.x, c.rect.y), this.layout(), this.dragItemCount = Math.max(0, this.dragItemCount - 1), this.sortItemsByPosition(), c.disablePlacing(), this.unstamp(c.element)
			}
		}, j.bindDraggabillyEvents = function (a) {
			this._bindDraggabillyEvents(a, "on")
		}, j.unbindDraggabillyEvents = function (a) {
			this._bindDraggabillyEvents(a, "off")
		}, j._bindDraggabillyEvents = function (a, b) {
			var c = this.handleDraggabilly;
			a[b]("dragStart", c.dragStart), a[b]("dragMove", c.dragMove), a[b]("dragEnd", c.dragEnd)
		}, j.bindUIDraggableEvents = function (a) {
			this._bindUIDraggableEvents(a, "on")
		}, j.unbindUIDraggableEvents = function (a) {
			this._bindUIDraggableEvents(a, "off")
		}, j._bindUIDraggableEvents = function (a, b) {
			var c = this.handleUIDraggable;
			a[b]("dragstart", c.start)[b]("drag", c.drag)[b]("dragstop", c.stop)
		};
		var l = j.destroy;
		return j.destroy = function () {
			l.apply(this, arguments), this.isEnabled = !1
		}, i.Rect = c, i.Packer = d, i
	}), function (a, b) {
		"function" == typeof define && define.amd ? define(["isotope-layout/js/layout-mode", "packery/js/packery"], b) : "object" == typeof module && module.exports ? module.exports = b(require("isotope-layout/js/layout-mode"), require("packery")) : b(a.Smashotope.LayoutMode, a.Packery)
	}(window, function (a, b) {
		var c = a.create("packery"), d = c.prototype, e = {_getElementOffset: !0, _getMeasurement: !0};
		for (var f in b.prototype) e[f] || (d[f] = b.prototype[f]);
		var g = d._resetLayout;
		d._resetLayout = function () {
			this.packer = this.packer || new b.Packer, this.shiftPacker = this.shiftPacker || new b.Packer, g.apply(this, arguments)
		};
		var h = d._getItemLayoutPosition;
		d._getItemLayoutPosition = function (a) {
			return a.rect = a.rect || new b.Rect, h.call(this, a)
		};
		var i = d.needsResizeLayout;
		d.needsResizeLayout = function () {
			return this._getOption("horizontal") ? this.needsVerticalResizeLayout() : i.call(this)
		};
		var j = d._getOption;
		return d._getOption = function (a) {
			return "horizontal" == a ? void 0 !== this.options.isHorizontal ? this.options.isHorizontal : this.options.horizontal : j.apply(this.smashotope, arguments)
		}, c
	});

	// Two Row Carousel
	;(function ($, window, document, undefined) {
		Owl2row = function (scope) {
			this.owl = scope;
			this.owl.options = $.extend({}, Owl2row.Defaults, this.owl.options);
			var self = this;
			//link callback events with owl carousel here
			this.handlers = {
				'initialize.owl.carousel': $.proxy(function (e) {
					if (this.owl.settings.owl2row === true && !$("#sb_instagram").hasClass("2rows")) {
						this.build2row(this);
						$("#sb_instagram").addClass("2rows");
					}else{
						$("#sb_instagram").removeClass("2rows");
					}
				}, this)
			};

			this.owl.$element.on(this.handlers);

		};

		Owl2row.Defaults = {
			owl2row: false,
			owl2rowTarget: 'sbi_item',
			owl2rowContainer: 'sbi_owl2row-item',
			owl2rowDirection: 'utd' // ltr
		};

		//mehtods:
		Owl2row.prototype.build2row = function (thisScope) {

			var carousel = $(thisScope.owl.$element);
			var carouselItems = carousel.find('.' + thisScope.owl.options.owl2rowTarget);

			var aEvenElements = [];
			var aOddElements = [];

			$.each(carouselItems, function (index, item) {

				if (index % 2 === 0) {
					aEvenElements.push(item);
				} else {
					aOddElements.push(item);
				}
			});

			//carousel.empty();

			switch (thisScope.owl.options.owl2rowDirection) {
				case 'ltr':
					thisScope.leftToright(thisScope, carousel, carouselItems);
					break;

				default :
					thisScope.upTodown(thisScope, aEvenElements, aOddElements, carousel);
			}


		};

		Owl2row.prototype.leftToright = function (thisScope, carousel, carouselItems) {

			var o2wContainerClass = thisScope.owl.options.owl2rowContainer;
			var owlMargin = thisScope.owl.options.margin;
			var carouselItemsLength = carouselItems.length;
			var firsArr = [];
			var secondArr = [];

			if (carouselItemsLength % 2 === 1) {
				carouselItemsLength = ((carouselItemsLength - 1) / 2) + 1;
			} else {
				carouselItemsLength = carouselItemsLength / 2;
			}

			$.each(carouselItems, function (index, item) {


				if (index < carouselItemsLength) {
					firsArr.push(item);
				} else {
					secondArr.push(item);
				}
			});

			$.each(firsArr, function (index, item) {
				var rowContainer = $('<div class="' + o2wContainerClass + '"/>');

				var firstRowElement = firsArr[index];
				firstRowElement.style.marginBottom = owlMargin + 'px';

				rowContainer
					.append(firstRowElement)
					.append(secondArr[index]);

				carousel.append(rowContainer);
			});

		};

		Owl2row.prototype.upTodown = function (thisScope, aEvenElements, aOddElements, carousel) {

			var o2wContainerClass = thisScope.owl.options.owl2rowContainer;
			var owlMargin = thisScope.owl.options.margin;

			$.each(aEvenElements, function (index, item) {

				var rowContainer = $('<div class="' + o2wContainerClass + '"/>');
				var evenElement = aEvenElements[index];

				evenElement.style.marginBottom = owlMargin + 'px';

				rowContainer
					.append(evenElement)
					.append(aOddElements[index]);

				carousel.append(rowContainer);
			});
		};

		/**
		 * Destroys the plugin.
		 */
		Owl2row.prototype.destroy = function () {
			var handler, property;
		};

		$.fn.sbiOwlCarousel.Constructor.Plugins['owl2row'] = Owl2row;
	})(window.Zepto || window.jQuery, window, document);



	/* Font Awesome SVG implementation */
	var sbIconSVG = {
		'fa-clock' : 'class="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="far" data-icon="clock" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>',
		'fa-play' : 'class="svg-inline--fa fa-play fa-w-14 sbi_playbtn" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="play" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>',
		'fa-image' : 'class="svg-inline--fa fa-image fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="far" data-icon="image" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path></svg>',
		'fa-user' : 'class="svg-inline--fa fa-user fa-w-16" style="margin-right: 3px;" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="user" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M96 160C96 71.634 167.635 0 256 0s160 71.634 160 160-71.635 160-160 160S96 248.366 96 160zm304 192h-28.556c-71.006 42.713-159.912 42.695-230.888 0H112C50.144 352 0 402.144 0 464v24c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24v-24c0-61.856-50.144-112-112-112z"></path></svg>',
		'fa-comment' : 'class="svg-inline--fa fa-comment fa-w-18" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="comment" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M576 240c0 115-129 208-288 208-48.3 0-93.9-8.6-133.9-23.8-40.3 31.2-89.8 50.3-142.4 55.7-5.2.6-10.2-2.8-11.5-7.7-1.3-5 2.7-8.1 6.6-11.8 19.3-18.4 42.7-32.8 51.9-94.6C21.9 330.9 0 287.3 0 240 0 125.1 129 32 288 32s288 93.1 288 208z"></path></svg>',
		'fa-heart' : 'class="svg-inline--fa fa-heart fa-w-18" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="heart" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M414.9 24C361.8 24 312 65.7 288 89.3 264 65.7 214.2 24 161.1 24 70.3 24 16 76.9 16 165.5c0 72.6 66.8 133.3 69.2 135.4l187 180.8c8.8 8.5 22.8 8.5 31.6 0l186.7-180.2c2.7-2.7 69.5-63.5 69.5-136C560 76.9 505.7 24 414.9 24z"></path></svg>',
		'fa-check' : 'class="svg-inline--fa fa-check fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>',
		'fa-exclamation-circle' : 'class="svg-inline--fa fa-exclamation-circle fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="exclamation-circle" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>',
		'fa-map-marker' : 'class="svg-inline--fa fa-map-marker fa-w-12" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="map-marker" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"></path></svg>',
		'fa-clone' : 'class="svg-inline--fa fa-clone fa-w-16 sbi_lightbox_carousel_icon" aria-hidden="true" data-fa-processed="" data-prefix="far" data-icon="clone" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path></svg>',
		'fa-chevron-right' : 'class="svg-inline--fa fa-chevron-right fa-w-10" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="chevron-right" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>',
		'fa-chevron-left' : 'class="svg-inline--fa fa-chevron-left fa-w-10" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="chevron-left" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>',
		'fa-share' : 'class="svg-inline--fa fa-share fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="share" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg>',
		'fa-times' : 'class="svg-inline--fa fa-times fa-w-12" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="times" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"></path></svg>',
		'fa-envelope' : 'class="svg-inline--fa fa-envelope fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="envelope" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>',
		'fa-edit' : 'class="svg-inline--fa fa-edit fa-w-18" aria-hidden="true" data-fa-processed="" data-prefix="far" data-icon="edit" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>',
		'fa-arrows-alt' : 'class="svg-inline--fa fa-arrows-alt fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="arrows-alt" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z"></path></svg>',
		'fa-check-circle' : 'class="svg-inline--fa fa-check-circle fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="check-circle" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>',
		'fa-ban' : 'class="svg-inline--fa fa-ban fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="ban" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"></path></svg>',
		'fa-facebook-square' : 'class="svg-inline--fa fa-facebook-square fa-w-14" aria-hidden="true" data-fa-processed="" data-prefix="fab" data-icon="facebook-square" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path></svg>',
		'fa-twitter' : 'class="svg-inline--fa fa-twitter fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fab" data-icon="twitter" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>',
		'fa-google-plus' : 'class="svg-inline--fa fa-google-plus fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fab" data-icon="google-plus" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm-70.7 372c-68.8 0-124-55.5-124-124s55.2-124 124-124c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1s34.2 78.1 77.2 78.1c32.6 0 64.9-19.1 70.1-53.3h-70.1v-42.6h116.9c1.3 6.8 1.9 13.6 1.9 20.7 0 70.8-47.5 121.2-118.8 121.2zm230.2-106.2v35.5H372v-35.5h-35.5v-35.5H372v-35.5h35.5v35.5h35.2v35.5h-35.2z"></path></svg>',
		'fa-instagram' : 'class="svg-inline--fa fa-instagram fa-w-14" aria-hidden="true" data-fa-processed="" data-prefix="fab" data-icon="instagram" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>',
		'fa-linkedin' : 'class="svg-inline--fa fa-linkedin fa-w-14" aria-hidden="true" data-fa-processed="" data-prefix="fab" data-icon="linkedin" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>',
		'fa-pinterest' : 'class="svg-inline--fa fa-pinterest fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fab" data-icon="pinterest" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path></svg>',
		'fa-spinner' : 'class="svg-inline--fa fa-spinner fa-w-16 fa-pulse" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="spinner" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path></svg>',
		'fa-spin' : 'class="svg-inline--fa fa-spin fa-w-16 fa-pulse" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="spinner" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path></svg>',
	};

	function sbSVGify(elem) {
		if (sb_instagram_js_options.font_method != 'fontfile') {

			if (typeof elem === 'undefined') {
				elem = jQuery('.sbi');
			}

			// loop through each matched html element based on the passed context
			elem.each(function() {

				jQuery(this).find('i.fa').each(function() {
					// preserve any classes or styles attached to icons
					var faClass = jQuery(this).attr('class').match(/fa-[a-z-]+/),
						styles = jQuery(this).attr('style');
					if (faClass && typeof sbIconSVG[faClass[0]] !== 'undefined') {
						var theStyle = typeof styles !== 'undefined' ? 'style="'+styles+'" ' : '';
						jQuery(this).replaceWith('<svg '+theStyle+sbIconSVG[faClass[0]]);
					} else {
						console.log(faClass,'missing');
					}
				})
			});
		}
	}

	/* JavaScript Linkify - v0.3 - 6/27/2009 - http://benalman.com/projects/javascript-linkify/ */
	window.sbiLinkify = (function () {
		var k = "[a-z\\d.-]+://",
			h = "(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])",
			c = "(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+",
			n = "(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)",
			f = "(?:" + c + n + "|" + h + ")", o = "(?:[;/][^#?<>\\s]*)?", e = "(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?",
			d = "\\b" + k + "[^<>\\s]+", a = "\\b" + f + o + e + "(?!\\w)", m = "mailto:",
			j = "(?:" + m + ")?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@" + f + e + "(?!\\w)",
			l = new RegExp("(?:" + d + "|" + a + "|" + j + ")", "ig"), g = new RegExp("^" + k, "i"),
			b = {"'": "`", ">": "<", ")": "(", "]": "[", "}": "{", "B;": "B+", "b:": "b9"}, i = {
				callback: function (q, p) {
					return p ? '<a href="' + p + '" title="' + p + '" target="_blank" rel="noopener">' + q + "</a>" : q
				}, punct_regexp: /(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/
			};
		return function (u, z) {
			z = z || {};
			var w, v, A, p, x = "", t = [], s, E, C, y, q, D, B, r;
			for (v in i) {
				if (z[v] === undefined) {
					z[v] = i[v]
				}
			}
			while (w = l.exec(u)) {
				A = w[0];
				E = l.lastIndex;
				C = E - A.length;
				if (/[\/:]/.test(u.charAt(C - 1))) {
					continue
				}
				do {
					y = A;
					r = A.substr(-1);
					B = b[r];
					if (B) {
						q = A.match(new RegExp("\\" + B + "(?!$)", "g"));
						D = A.match(new RegExp("\\" + r, "g"));
						if ((q ? q.length : 0) < (D ? D.length : 0)) {
							A = A.substr(0, A.length - 1);
							E--
						}
					}
					if (z.punct_regexp) {
						A = A.replace(z.punct_regexp, function (F) {
							E -= F.length;
							return ""
						})
					}
				} while (A.length && A !== y);
				p = A;
				if (!g.test(p)) {
					p = (p.indexOf("@") !== -1 ? (!p.indexOf(m) ? "" : m) : !p.indexOf("irc.") ? "irc://" : !p.indexOf("ftp.") ? "ftp://" : "http://") + p
				}
				if (s != C) {
					t.push([u.slice(s, C)]);
					s = E
				}
				t.push([A, p])
			}
			t.push([u.substr(s)]);
			for (v = 0; v < t.length; v++) {
				x += z.callback.apply(window, t[v])
			}
			return x || u
		}
	})();

	//Shim for "fixing" IE's lack of support (IE < 9) for applying slice on host objects like NamedNodeMap, NodeList, and HTMLCollection) https://github.com/stevenschobert/instafeed.js/issues/84
	(function () {
		"use strict";
		var e = Array.prototype.slice;
		try {
			e.call(document.documentElement)
		} catch (t) {
			Array.prototype.slice = function (t, n) {
				n = typeof n !== "undefined" ? n : this.length;
				if (Object.prototype.toString.call(this) === "[object Array]") {
					return e.call(this, t, n)
				}
				var r, i = [], s, o = this.length;
				var u = t || 0;
				u = u >= 0 ? u : o + u;
				var a = n ? n : o;
				if (n < 0) {
					a = o + n
				}
				s = a - u;
				if (s > 0) {
					i = new Array(s);
					if (this.charAt) {
						for (r = 0; r < s; r++) {
							i[r] = this.charAt(u + r)
						}
					} else {
						for (r = 0; r < s; r++) {
							i[r] = this[u + r]
						}
					}
				}
				return i
			}
		}
	})()

	//IE8 also doesn't offer the .bind() method triggered by the 'sortBy' property. Copy and paste the polyfill offered here:
	if (!Function.prototype.bind) {
		Function.prototype.bind = function (e) {
			if (typeof this !== "function") {
				throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
			}
			var t = Array.prototype.slice.call(arguments, 1), n = this, r = function () {
			}, i = function () {
				return n.apply(this instanceof r && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
			};
			r.prototype = this.prototype;
			i.prototype = new r;
			return i
		}
	}

	/*! Hammer.JS - v2.0.8 - 2016-04-23
        * http://hammerjs.github.io/
        *
        * Copyright (c) 2016 Jorik Tangelder;
        * Licensed under the MIT license
        * */
	if (typeof sb_instagram_js_options.no_mob_swipe === 'undefined') {
		!function (a, b, c, d) {
			"use strict";

			function e(a, b, c) {
				return setTimeout(j(a, c), b)
			}

			function f(a, b, c) {
				return Array.isArray(a) ? (g(a, c[b], c), !0) : !1
			}

			function g(a, b, c) {
				var e;
				if (a) if (a.forEach) a.forEach(b, c); else if (a.length !== d) for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++; else for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a)
			}

			function h(b, c, d) {
				var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
				return function () {
					var c = new Error("get-stack-trace"),
						d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
						f = a.console && (a.console.warn || a.console.log);
					return f && f.call(a.console, e, d), b.apply(this, arguments)
				}
			}

			function i(a, b, c) {
				var d, e = b.prototype;
				d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c)
			}

			function j(a, b) {
				return function () {
					return a.apply(b, arguments)
				}
			}

			function k(a, b) {
				return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a
			}

			function l(a, b) {
				return a === d ? b : a
			}

			function m(a, b, c) {
				g(q(b), function (b) {
					a.addEventListener(b, c, !1)
				})
			}

			function n(a, b, c) {
				g(q(b), function (b) {
					a.removeEventListener(b, c, !1)
				})
			}

			function o(a, b) {
				for (; a;) {
					if (a == b) return !0;
					a = a.parentNode
				}
				return !1
			}

			function p(a, b) {
				return a.indexOf(b) > -1
			}

			function q(a) {
				return a.trim().split(/\s+/g)
			}

			function r(a, b, c) {
				if (a.indexOf && !c) return a.indexOf(b);
				for (var d = 0; d < a.length;) {
					if (c && a[d][c] == b || !c && a[d] === b) return d;
					d++
				}
				return -1
			}

			function s(a) {
				return Array.prototype.slice.call(a, 0)
			}

			function t(a, b, c) {
				for (var d = [], e = [], f = 0; f < a.length;) {
					var g = b ? a[f][b] : a[f];
					r(e, g) < 0 && d.push(a[f]), e[f] = g, f++
				}
				return c && (d = b ? d.sort(function (a, c) {
					return a[b] > c[b]
				}) : d.sort()), d
			}

			function u(a, b) {
				for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
					if (c = ma[g], e = c ? c + f : b, e in a) return e;
					g++
				}
				return d
			}

			function v() {
				return ua++
			}

			function w(b) {
				var c = b.ownerDocument || b;
				return c.defaultView || c.parentWindow || a
			}

			function x(a, b) {
				var c = this;
				this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
					k(a.options.enable, [a]) && c.handler(b)
				}, this.init()
			}

			function y(a) {
				var b, c = a.options.inputClass;
				return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z)
			}

			function z(a, b, c) {
				var d = c.pointers.length, e = c.changedPointers.length, f = b & Ea && d - e === 0,
					g = b & (Ga | Ha) && d - e === 0;
				c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
			}

			function A(a, b) {
				var c = a.session, d = b.pointers, e = d.length;
				c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);
				var f = c.firstInput, g = c.firstMultiple, h = g ? g.center : f.center, i = b.center = E(d);
				b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);
				var j = F(b.deltaTime, b.deltaX, b.deltaY);
				b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);
				var k = a.element;
				o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k
			}

			function B(a, b) {
				var c = b.center, d = a.offsetDelta || {}, e = a.prevDelta || {}, f = a.prevInput || {};
				b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = {
					x: f.deltaX || 0,
					y: f.deltaY || 0
				}, d = a.offsetDelta = {x: c.x, y: c.y}), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
			}

			function C(a, b) {
				var c, e, f, g, h = a.lastInterval || b, i = b.timeStamp - h.timeStamp;
				if (b.eventType != Ha && (i > Da || h.velocity === d)) {
					var j = b.deltaX - h.deltaX, k = b.deltaY - h.deltaY, l = F(i, j, k);
					e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b
				} else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
				b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
			}

			function D(a) {
				for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
					clientX: pa(a.pointers[c].clientX),
					clientY: pa(a.pointers[c].clientY)
				}, c++;
				return {timeStamp: ra(), pointers: b, center: E(b), deltaX: a.deltaX, deltaY: a.deltaY}
			}

			function E(a) {
				var b = a.length;
				if (1 === b) return {x: pa(a[0].clientX), y: pa(a[0].clientY)};
				for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;
				return {x: pa(c / b), y: pa(d / b)}
			}

			function F(a, b, c) {
				return {x: b / a || 0, y: c / a || 0}
			}

			function G(a, b) {
				return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma
			}

			function H(a, b, c) {
				c || (c = Qa);
				var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
				return Math.sqrt(d * d + e * e)
			}

			function I(a, b, c) {
				c || (c = Qa);
				var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
				return 180 * Math.atan2(e, d) / Math.PI
			}

			function J(a, b) {
				return I(b[1], b[0], Ra) + I(a[1], a[0], Ra)
			}

			function K(a, b) {
				return H(b[0], b[1], Ra) / H(a[0], a[1], Ra)
			}

			function L() {
				this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments)
			}

			function M() {
				this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
			}

			function N() {
				this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments)
			}

			function O(a, b) {
				var c = s(a.touches), d = s(a.changedTouches);
				return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d]
			}

			function P() {
				this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments)
			}

			function Q(a, b) {
				var c = s(a.touches), d = this.targetIds;
				if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
				var e, f, g = s(a.changedTouches), h = [], i = this.target;
				if (f = c.filter(function (a) {
					return o(a.target, i)
				}), b === Ea) for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;
				for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
				return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0
			}

			function R() {
				x.apply(this, arguments);
				var a = j(this.handler, this);
				this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = []
			}

			function S(a, b) {
				a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b)
			}

			function T(a) {
				var b = a.changedPointers[0];
				if (b.identifier === this.primaryTouch) {
					var c = {x: b.clientX, y: b.clientY};
					this.lastTouches.push(c);
					var d = this.lastTouches, e = function () {
						var a = d.indexOf(c);
						a > -1 && d.splice(a, 1)
					};
					setTimeout(e, cb)
				}
			}

			function U(a) {
				for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
					var e = this.lastTouches[d], f = Math.abs(b - e.x), g = Math.abs(c - e.y);
					if (db >= f && db >= g) return !0
				}
				return !1
			}

			function V(a, b) {
				this.manager = a, this.set(b)
			}

			function W(a) {
				if (p(a, jb)) return jb;
				var b = p(a, kb), c = p(a, lb);
				return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb
			}

			function X() {
				if (!fb) return !1;
				var b = {}, c = a.CSS && a.CSS.supports;
				return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (d) {
					b[d] = c ? a.CSS.supports("touch-action", d) : !0
				}), b
			}

			function Y(a) {
				this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = []
			}

			function Z(a) {
				return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : ""
			}

			function $(a) {
				return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : ""
			}

			function _(a, b) {
				var c = b.manager;
				return c ? c.get(a) : a
			}

			function aa() {
				Y.apply(this, arguments)
			}

			function ba() {
				aa.apply(this, arguments), this.pX = null, this.pY = null
			}

			function ca() {
				aa.apply(this, arguments)
			}

			function da() {
				Y.apply(this, arguments), this._timer = null, this._input = null
			}

			function ea() {
				aa.apply(this, arguments)
			}

			function fa() {
				aa.apply(this, arguments)
			}

			function ga() {
				Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
			}

			function ha(a, b) {
				return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b)
			}

			function ia(a, b) {
				this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function (a) {
					var b = this.add(new a[0](a[1]));
					a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
				}, this)
			}

			function ja(a, b) {
				var c = a.element;
				if (c.style) {
					var d;
					g(a.options.cssProps, function (e, f) {
						d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || ""
					}), b || (a.oldCssProps = {})
				}
			}

			function ka(a, c) {
				var d = b.createEvent("Event");
				d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
			}

			var la, ma = ["", "webkit", "Moz", "MS", "ms", "o"], na = b.createElement("div"), oa = "function",
				pa = Math.round, qa = Math.abs, ra = Date.now;
			la = "function" != typeof Object.assign ? function (a) {
				if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");
				for (var b = Object(a), c = 1; c < arguments.length; c++) {
					var e = arguments[c];
					if (e !== d && null !== e) for (var f in e) e.hasOwnProperty(f) && (b[f] = e[f])
				}
				return b
			} : Object.assign;
			var sa = h(function (a, b, c) {
					for (var e = Object.keys(b), f = 0; f < e.length;) (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
					return a
				}, "extend", "Use `assign`."), ta = h(function (a, b) {
					return sa(a, b, !0)
				}, "merge", "Use `assign`."), ua = 1, va = /mobile|tablet|ip(ad|hone|od)|android/i,
				wa = "ontouchstart" in a, xa = u(a, "PointerEvent") !== d, ya = wa && va.test(navigator.userAgent),
				za = "touch", Aa = "pen", Ba = "mouse", Ca = "kinect", Da = 25, Ea = 1, Fa = 2, Ga = 4, Ha = 8, Ia = 1,
				Ja = 2, Ka = 4, La = 8, Ma = 16, Na = Ja | Ka, Oa = La | Ma, Pa = Na | Oa, Qa = ["x", "y"],
				Ra = ["clientX", "clientY"];
			x.prototype = {
				handler: function () {
				}, init: function () {
					this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler)
				}, destroy: function () {
					this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler)
				}
			};
			var Sa = {mousedown: Ea, mousemove: Fa, mouseup: Ga}, Ta = "mousedown", Ua = "mousemove mouseup";
			i(L, x, {
				handler: function (a) {
					var b = Sa[a.type];
					b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, {
						pointers: [a],
						changedPointers: [a],
						pointerType: Ba,
						srcEvent: a
					}))
				}
			});
			var Va = {pointerdown: Ea, pointermove: Fa, pointerup: Ga, pointercancel: Ha, pointerout: Ha},
				Wa = {2: za, 3: Aa, 4: Ba, 5: Ca}, Xa = "pointerdown", Ya = "pointermove pointerup pointercancel";
			a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, {
				handler: function (a) {
					var b = this.store, c = !1, d = a.type.toLowerCase().replace("ms", ""), e = Va[d],
						f = Wa[a.pointerType] || a.pointerType, g = f == za, h = r(b, a.pointerId, "pointerId");
					e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
						pointers: b,
						changedPointers: [a],
						pointerType: f,
						srcEvent: a
					}), c && b.splice(h, 1))
				}
			});
			var Za = {touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha}, $a = "touchstart",
				_a = "touchstart touchmove touchend touchcancel";
			i(N, x, {
				handler: function (a) {
					var b = Za[a.type];
					if (b === Ea && (this.started = !0), this.started) {
						var c = O.call(this, a, b);
						b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
							pointers: c[0],
							changedPointers: c[1],
							pointerType: za,
							srcEvent: a
						})
					}
				}
			});
			var ab = {touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha},
				bb = "touchstart touchmove touchend touchcancel";
			i(P, x, {
				handler: function (a) {
					var b = ab[a.type], c = Q.call(this, a, b);
					c && this.callback(this.manager, b, {
						pointers: c[0],
						changedPointers: c[1],
						pointerType: za,
						srcEvent: a
					})
				}
			});
			var cb = 2500, db = 25;
			i(R, x, {
				handler: function (a, b, c) {
					var d = c.pointerType == za, e = c.pointerType == Ba;
					if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
						if (d) S.call(this, b, c); else if (e && U.call(this, c)) return;
						this.callback(a, b, c)
					}
				}, destroy: function () {
					this.touch.destroy(), this.mouse.destroy()
				}
			});
			var eb = u(na.style, "touchAction"), fb = eb !== d, gb = "compute", hb = "auto", ib = "manipulation",
				jb = "none", kb = "pan-x", lb = "pan-y", mb = X();
			V.prototype = {
				set: function (a) {
					a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim()
				}, update: function () {
					this.set(this.manager.options.touchAction)
				}, compute: function () {
					var a = [];
					return g(this.manager.recognizers, function (b) {
						k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
					}), W(a.join(" "))
				}, preventDefaults: function (a) {
					var b = a.srcEvent, c = a.offsetDirection;
					if (this.manager.session.prevented) return void b.preventDefault();
					var d = this.actions, e = p(d, jb) && !mb[jb], f = p(d, lb) && !mb[lb], g = p(d, kb) && !mb[kb];
					if (e) {
						var h = 1 === a.pointers.length, i = a.distance < 2, j = a.deltaTime < 250;
						if (h && i && j) return
					}
					return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0
				}, preventSrc: function (a) {
					this.manager.session.prevented = !0, a.preventDefault()
				}
			};
			var nb = 1, ob = 2, pb = 4, qb = 8, rb = qb, sb = 16, tb = 32;
			Y.prototype = {
				defaults: {}, set: function (a) {
					return la(this.options, a), this.manager && this.manager.touchAction.update(), this
				}, recognizeWith: function (a) {
					if (f(a, "recognizeWith", this)) return this;
					var b = this.simultaneous;
					return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
				}, dropRecognizeWith: function (a) {
					return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this)
				}, requireFailure: function (a) {
					if (f(a, "requireFailure", this)) return this;
					var b = this.requireFail;
					return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this
				}, dropRequireFailure: function (a) {
					if (f(a, "dropRequireFailure", this)) return this;
					a = _(a, this);
					var b = r(this.requireFail, a);
					return b > -1 && this.requireFail.splice(b, 1), this
				}, hasRequireFailures: function () {
					return this.requireFail.length > 0
				}, canRecognizeWith: function (a) {
					return !!this.simultaneous[a.id]
				}, emit: function (a) {
					function b(b) {
						c.manager.emit(b, a)
					}

					var c = this, d = this.state;
					qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d))
				}, tryEmit: function (a) {
					return this.canEmit() ? this.emit(a) : void (this.state = tb)
				}, canEmit: function () {
					for (var a = 0; a < this.requireFail.length;) {
						if (!(this.requireFail[a].state & (tb | nb))) return !1;
						a++
					}
					return !0
				}, recognize: function (a) {
					var b = la({}, a);
					return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void (this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void (this.state = tb))
				}, process: function (a) {
				}, getTouchAction: function () {
				}, reset: function () {
				}
			}, i(aa, Y, {
				defaults: {pointers: 1}, attrTest: function (a) {
					var b = this.options.pointers;
					return 0 === b || a.pointers.length === b
				}, process: function (a) {
					var b = this.state, c = a.eventType, d = b & (ob | pb), e = this.attrTest(a);
					return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb
				}
			}), i(ba, aa, {
				defaults: {event: "pan", threshold: 10, pointers: 1, direction: Pa},
				getTouchAction: function () {
					var a = this.options.direction, b = [];
					return a & Na && b.push(lb), a & Oa && b.push(kb), b
				},
				directionTest: function (a) {
					var b = this.options, c = !0, d = a.distance, e = a.direction, f = a.deltaX, g = a.deltaY;
					return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
				},
				attrTest: function (a) {
					return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a))
				},
				emit: function (a) {
					this.pX = a.deltaX, this.pY = a.deltaY;
					var b = $(a.direction);
					b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a)
				}
			}), i(ca, aa, {
				defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
					return [jb]
				}, attrTest: function (a) {
					return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob)
				}, emit: function (a) {
					if (1 !== a.scale) {
						var b = a.scale < 1 ? "in" : "out";
						a.additionalEvent = this.options.event + b
					}
					this._super.emit.call(this, a)
				}
			}), i(da, Y, {
				defaults: {event: "press", pointers: 1, time: 251, threshold: 9},
				getTouchAction: function () {
					return [hb]
				},
				process: function (a) {
					var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold,
						f = a.deltaTime > b.time;
					if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset(); else if (a.eventType & Ea) this.reset(), this._timer = e(function () {
						this.state = rb, this.tryEmit()
					}, b.time, this); else if (a.eventType & Ga) return rb;
					return tb
				},
				reset: function () {
					clearTimeout(this._timer)
				},
				emit: function (a) {
					this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)))
				}
			}), i(ea, aa, {
				defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
					return [jb]
				}, attrTest: function (a) {
					return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob)
				}
			}), i(fa, aa, {
				defaults: {event: "swipe", threshold: 10, velocity: .3, direction: Na | Oa, pointers: 1},
				getTouchAction: function () {
					return ba.prototype.getTouchAction.call(this)
				},
				attrTest: function (a) {
					var b, c = this.options.direction;
					return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga
				},
				emit: function (a) {
					var b = $(a.offsetDirection);
					b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
				}
			}), i(ga, Y, {
				defaults: {
					event: "tap",
					pointers: 1,
					taps: 1,
					interval: 300,
					time: 250,
					threshold: 9,
					posThreshold: 10
				}, getTouchAction: function () {
					return [ib]
				}, process: function (a) {
					var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold,
						f = a.deltaTime < b.time;
					if (this.reset(), a.eventType & Ea && 0 === this.count) return this.failTimeout();
					if (d && f && c) {
						if (a.eventType != Ga) return this.failTimeout();
						var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
							h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
						this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
						var i = this.count % b.taps;
						if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
							this.state = rb, this.tryEmit()
						}, b.interval, this), ob) : rb
					}
					return tb
				}, failTimeout: function () {
					return this._timer = e(function () {
						this.state = tb
					}, this.options.interval, this), tb
				}, reset: function () {
					clearTimeout(this._timer)
				}, emit: function () {
					this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
				}
			}), ha.VERSION = "2.0.8", ha.defaults = {
				domEvents: !1,
				touchAction: gb,
				enable: !0,
				inputTarget: null,
				inputClass: null,
				preset: [[ea, {enable: !1}], [ca, {enable: !1}, ["rotate"]], [fa, {direction: Na}], [ba, {direction: Na}, ["swipe"]], [ga], [ga, {
					event: "doubletap",
					taps: 2
				}, ["tap"]], [da]],
				cssProps: {
					userSelect: "none",
					touchSelect: "none",
					touchCallout: "none",
					contentZooming: "none",
					userDrag: "none",
					tapHighlightColor: "rgba(0,0,0,0)"
				}
			};
			var ub = 1, vb = 2;
			ia.prototype = {
				set: function (a) {
					return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
				}, stop: function (a) {
					this.session.stopped = a ? vb : ub
				}, recognize: function (a) {
					var b = this.session;
					if (!b.stopped) {
						this.touchAction.preventDefaults(a);
						var c, d = this.recognizers, e = b.curRecognizer;
						(!e || e && e.state & rb) && (e = b.curRecognizer = null);
						for (var f = 0; f < d.length;) c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++
					}
				}, get: function (a) {
					if (a instanceof Y) return a;
					for (var b = this.recognizers, c = 0; c < b.length; c++) if (b[c].options.event == a) return b[c];
					return null
				}, add: function (a) {
					if (f(a, "add", this)) return this;
					var b = this.get(a.options.event);
					return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
				}, remove: function (a) {
					if (f(a, "remove", this)) return this;
					if (a = this.get(a)) {
						var b = this.recognizers, c = r(b, a);
						-1 !== c && (b.splice(c, 1), this.touchAction.update())
					}
					return this
				}, on: function (a, b) {
					if (a !== d && b !== d) {
						var c = this.handlers;
						return g(q(a), function (a) {
							c[a] = c[a] || [], c[a].push(b)
						}), this
					}
				}, off: function (a, b) {
					if (a !== d) {
						var c = this.handlers;
						return g(q(a), function (a) {
							b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a]
						}), this
					}
				}, emit: function (a, b) {
					this.options.domEvents && ka(a, b);
					var c = this.handlers[a] && this.handlers[a].slice();
					if (c && c.length) {
						b.type = a, b.preventDefault = function () {
							b.srcEvent.preventDefault()
						};
						for (var d = 0; d < c.length;) c[d](b), d++
					}
				}, destroy: function () {
					this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
				}
			}, la(ha, {
				INPUT_START: Ea,
				INPUT_MOVE: Fa,
				INPUT_END: Ga,
				INPUT_CANCEL: Ha,
				STATE_POSSIBLE: nb,
				STATE_BEGAN: ob,
				STATE_CHANGED: pb,
				STATE_ENDED: qb,
				STATE_RECOGNIZED: rb,
				STATE_CANCELLED: sb,
				STATE_FAILED: tb,
				DIRECTION_NONE: Ia,
				DIRECTION_LEFT: Ja,
				DIRECTION_RIGHT: Ka,
				DIRECTION_UP: La,
				DIRECTION_DOWN: Ma,
				DIRECTION_HORIZONTAL: Na,
				DIRECTION_VERTICAL: Oa,
				DIRECTION_ALL: Pa,
				Manager: ia,
				Input: x,
				TouchAction: V,
				TouchInput: P,
				MouseInput: L,
				PointerEventInput: M,
				TouchMouseInput: R,
				SingleTouchInput: N,
				Recognizer: Y,
				AttrRecognizer: aa,
				Tap: ga,
				Pan: ba,
				Swipe: fa,
				Pinch: ca,
				Rotate: ea,
				Press: da,
				on: m,
				off: n,
				each: g,
				merge: ta,
				extend: sa,
				assign: la,
				inherit: i,
				bindFn: j,
				prefixed: u
			});
			var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
			wb.Hammer = ha, "function" == typeof define && define.amd ? define(function () {
				return ha
			}) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha
		}(window, document, "Hammer");
		(function (factory) {
			if (typeof define === 'function' && define.amd) {
				define(['jquery', 'hammerjs'], factory);
			} else if (typeof exports === 'object') {
				factory(require('jquery'), require('hammerjs'));
			} else {
				factory(jQuery, Hammer);
			}
		}(function (jQuery, Hammer) {
			function hammerify(el, options) {
				var $el = jQuery(el);
				if (!$el.data("hammer")) {
					$el.data("hammer", new Hammer($el[0], options));
				}
			}

			jQuery.fn.hammer = function (options) {
				return this.each(function () {
					hammerify(this, options);
				});
			};

			// extend the emit method to also trigger jQuery events
			Hammer.Manager.prototype.emit = (function (originalEmit) {
				return function (type, data) {
					originalEmit.call(this, type, data);
					jQuery(this.element).trigger({
						type: type,
						gesture: data
					});
				};
			})(Hammer.Manager.prototype.emit);
		}));

	} else {
		var Hammer = {
			Manager: {
				prototype: {}
			}
		};
		(function (factory) {
			if (typeof define === 'function' && define.amd) {
				define(['jquery', 'hammerjs'], factory);
			} else if (typeof exports === 'object') {
				factory(require('jquery'), require('hammerjs'));
			} else {
				factory(jQuery, Hammer);
			}
		}(function (jQuery, Hammer) {
			function hammerify(el, options) {
			}

			jQuery.fn.hammer = function (options) {
				return this.each(function () {
					hammerify(this, options);
				});
			};
			// extend the emit method to also trigger jQuery events
			Hammer.Manager.prototype.emit = (function (originalEmit) {
				return function (type, data) {
					originalEmit.call(this, type, data);
					jQuery(this.element).trigger({
						type: type,
						gesture: data
					});
				};
			})(Hammer.Manager.prototype.emit);
		}));
	}

	/* Lightbox v2.7.1 by Lokesh Dhakar - https://lokeshdhakar.com/projects/lightbox2/ - Heavily modified specifically for this plugin */
	(function() {
		var a = jQuery,
			b = function() {
				function a() {
					this.fadeDuration = 400, this.fitImagesInViewport = !0, this.resizeDuration = 400, this.positionFromTop = 50, this.showImageNumberLabel = !0, this.alwaysShowNavOnTouchDevices = !1, this.wrapAround = !1
				}
				return a.prototype.albumLabel = function(a, b) {
					return a + " / " + b
				}, a
			}(),
			c = function() {
				function b(a) {
					this.options = a, this.album = [], this.currentImageIndex = void 0, this.init()
				}
				return b.prototype.init = function() {
					this.enable(), this.build()
				}, b.prototype.enable = function() {
					var b = this;
					a("body").on("click", "a[data-lightbox-sbi]", function(c) {
						window.sbiCurrentLightboxPostID = a(c.currentTarget).attr('data-id');
						return b.start(a(c.currentTarget)), !1
					})
				}, b.prototype.build = function() {
					var b = this,
						sbLbCarouselDestroy = function() {
							jQuery('#sbi_lightbox .sbi_lb_lightbox-image').remove();
							if (jQuery('#sbi_lightbox .sbi_lb-image-wrap').length)  {
								jQuery('#sbi_lightbox .sbi_lb-image-wrap').sbiOwlCarousel('destroy');
								jQuery('#sbi_lightbox .sbi-owl-item').remove();
							}
							jQuery('#sbi_lightbox.sbi_had_error').removeClass('sbi_had_error');

							jQuery('#sbi_lightbox').find('video').remove();
							jQuery('.sbi_lb-container').prepend("<video class='sbi_video' src='' poster='' controls playsinline></video>");
							jQuery('#sbi_lightbox').find('.sbi-embed-wrap').remove();
							clearTimeout(b.moveSlide);
						};
					if (typeof a("#sbi_lightbox").find(".sbi_lb-container").hammer !== 'function') {
						var Hammer = {
							Manager: {
								prototype: {}
							}
						};
						(function (factory) {
							if (typeof define === 'function' && define.amd) {
								define(['jquery', 'hammerjs'], factory);
							} else if (typeof exports === 'object') {
								factory(require('jquery'), require('hammerjs'));
							} else {
								factory(jQuery, Hammer);
							}
						}(function (jQuery, Hammer) {
							function hammerify(el, options) {
							}

							jQuery.fn.hammer = function (options) {
								return this.each(function () {
									hammerify(this, options);
								});
							};
							// extend the emit method to also trigger jQuery events
							Hammer.Manager.prototype.emit = (function (originalEmit) {
								return function (type, data) {
									originalEmit.call(this, type, data);
									jQuery(this.element).trigger({
										type: type,
										gesture: data
									});
								};
							})(Hammer.Manager.prototype.emit);
						}));
					}
					a("<div id='sbi_lightboxOverlay' class='sbi_lightboxOverlay'></div>" +
						"<div id='sbi_lightbox' class='sbi_lightbox'>" +
						"<div class='sbi_lb-outerContainer'>" +
						"<div class='sbi_lb-nav'><a class='sbi_lb-prev' href='#' ><p class='sbi-screenreader'>Previous Slide</p><span></span></a><a class='sbi_lb-next' href='#' ><p class='sbi-screenreader'>Next Slide</p><span></span></a></div>" +
						"<div class='sbi_lb-container-wrapper'>" +
						"<div class='sbi_lb-container' style='overflow:hidden;'>" +
						"<div class='sbi_lb-image-wrap-outer'>" +
						"<div class='sbi_lb-image-wrap'>" +
						"<img class='sbi_lb-image' src='' alt='Lightbox image placeholder'/>" +
						"</div>" +
						"</div>" +
						"<div class='sbi_lb-loader'><i class='fa fa-spin'></i></div>" +
						"</div>" +
						"<div class='sbi_lb-dataContainer'>" +
						"<div class='sbi_lb-data'>" +
						"<div class='sbi_lb-details'>" +
						"<span class='sbi_lb-caption'></span>" +
						"<span class='sbi_lb-number'></span>" +
						"<div class='sbi_lightbox_action sbi_share'><a href='JavaScript:void(0);'><i class='fa fa-share'></i>"+sbiTranslate('Share')+"</a><p class='sbi_lightbox_tooltip sbi_tooltip_social'><a href='' target='_blank' rel='noopener' id='sbi_facebook_icon'><span class='sbi-screenreader'>Facebook</span><i class='fa fab fa-facebook-square'></i></a><a href='' target='_blank' rel='noopener' id='sbi_twitter_icon'><span class='sbi-screenreader'>Twitter</span><i class='fa fab fa-twitter'></i></a><a href='' target='_blank' rel='noopener' id='sbi_linkedin_icon'><span class='sbi-screenreader'>Linkedin</span><i class='fa fab fa-linkedin'></i></a><a href='' id='sbi_pinterest_icon' target='_blank' rel='noopener'><span class='sbi-screenreader'>Pinterest</span><i class='fa fab fa-pinterest'></i></a><a href='' id='sbi_email_icon' target='_blank' rel='noopener'><span class='sbi-screenreader'>Email</span><i class='fa fa-envelope'></i></a><a class=\"sbi_share_close\"><svg class=\"svg-inline--fa fa-times fa-w-12\" aria-hidden=\"true\" data-fa-processed=\"\" data-prefix=\"fa\" data-icon=\"times\" role=\"presentation\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path fill=\"currentColor\" d=\"M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z\"></path></svg></a></p></div><div class='sbi_lightbox_action sbi_instagram'><a href='https://www.instagram.com/' target='_blank' rel='noopener nofollow'><i class='fa fab fa-instagram'></i>Instagram</a></div>" +
						"<div id='sbi_mod_link' class='sbi_lightbox_action'><a href='JavaScript:void(0);'><i class='fa fa-times'></i>Hide photo (admin)</a><p id='sbi_mod_box' class='sbi_lightbox_tooltip'>Add ID to the <strong>Hide Specific Photos</strong> setting: <span id='sbi_photo_id'></span></p></div></div><div class='sbi_lb-closeContainer'><a class='sbi_lb-close'><i class='fa fa-times'></i></a></div></div></div></div>").appendTo(a("body")), this.$lightbox = a("#sbi_lightbox"), this.$overlay = a("#sbi_lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".sbi_lb-outerContainer"), this.$container = this.$lightbox.find(".sbi_lb-container"), this.containerTopPadding = parseInt(this.$container.css("padding-top"), 10), this.containerRightPadding = parseInt(this.$container.css("padding-right"), 10), this.containerBottomPadding = parseInt(this.$container.css("padding-bottom"), 10), this.containerLeftPadding = parseInt(this.$container.css("padding-left"), 10), this.$overlay.hide().on("click", function() {
						return b.end(), !1
					}), jQuery(document).on('click', function(event, b, c) {
						//Fade out the lightbox if click anywhere outside of the two elements defined below
						if (!jQuery(event.target).closest('.sbi_lb-outerContainer').length) {
							if (!jQuery(event.target).closest('.sbi_lb-dataContainer').length) {
								//Fade out lightbox
								jQuery('#sbi_lightboxOverlay, #sbi_lightbox').fadeOut();
								//Pause video
								if( sbi_supports_video() && jQuery('#sbi_lightbox video.sbi_video').length ) jQuery('#sbi_lightbox video.sbi_video')[0].pause();
								// easiest to destroy carousel and build a new one
								sbLbCarouselDestroy();
								if (jQuery('body').length) {
									jQuery('body').removeClass('sbi_no_scroll');
								}
							}
						}
					}), this.$lightbox.hide(),
						jQuery('#sbi_lightboxOverlay').on("click", function(c) {
							sbLbCarouselDestroy();
							if( sbi_supports_video() && jQuery('#sbi_lightbox video.sbi_video').length ) jQuery('#sbi_lightbox video.sbi_video')[0].pause();
							if (jQuery('body').length) {
								jQuery('body').removeClass('sbi_no_scroll');
							}
							return "sbi_lightbox" === a(c.target).attr("id") && b.end(), !1
						}), this.$lightbox.find(".sbi_lb-prev").on("click", function() {
						sbLbCarouselDestroy();
						if( sbi_supports_video() && jQuery('#sbi_lightbox video.sbi_video').length ) jQuery('#sbi_lightbox video.sbi_video')[0].pause();
						return b.changeImage(0 === b.currentImageIndex ? b.album.length - 1 : b.currentImageIndex - 1), !1
					}), this.$lightbox.find(".sbi_lb-container").hammer().on("swiperight", function() {
						sbLbCarouselDestroy();
						if( sbi_supports_video() && jQuery('#sbi_lightbox video.sbi_video').length ) jQuery('#sbi_lightbox video.sbi_video')[0].pause();
						return b.changeImage(0 === b.currentImageIndex ? b.album.length - 1 : b.currentImageIndex - 1), !1
					}), this.$lightbox.find(".sbi_lb-next").on("click", function() {
						sbLbCarouselDestroy();
						if( sbi_supports_video() && jQuery('#sbi_lightbox video.sbi_video').length ) jQuery('#sbi_lightbox video.sbi_video')[0].pause();
						return b.changeImage(b.currentImageIndex === b.album.length - 1 ? 0 : b.currentImageIndex + 1), !1
					}), this.$lightbox.find(".sbi_lb-container").hammer().on("swipeleft", function() {
						sbLbCarouselDestroy();
						if( sbi_supports_video() && jQuery('#sbi_lightbox video.sbi_video').length ) jQuery('#sbi_lightbox video.sbi_video')[0].pause();
						return b.changeImage(b.currentImageIndex === b.album.length - 1 ? 0 : b.currentImageIndex + 1), !1
					}), this.$lightbox.find(".sbi_lb-loader, .sbi_lb-close").on("click", function() {
						sbLbCarouselDestroy();
						if( sbi_supports_video() && jQuery('#sbi_lightbox video.sbi_video').length ) jQuery('#sbi_lightbox video.sbi_video')[0].pause();
						if (jQuery('body').length) {
							jQuery('body').removeClass('sbi_no_scroll');
						}
						return b.end(), !1
					})
				}, b.prototype.start = function(b) {
					function c(a) {
						if (jQuery('body').length) {
							jQuery('body').addClass('sbi_no_scroll');
						}
						var $context = a.closest('.sbi').length ? a.closest('.sbi') : false;
						if (!$context && a.closest('.sb_instagram_header').next().hasClass('sbi')) {
							$context = a.closest('.sb_instagram_header').next();
						}

						//Get the options for this feed
						var feedID = $context.attr('data-sbi-index'),
							feed = window.sbi.feeds[parseInt(feedID) - 1],
							feedOptions = feed.settings.general;

						if (a.hasClass('sbi_header_link') && feed.storyData !== false && feed.settings.consentGiven) {
							var storyData = feed.storyData,
								storyWait = feed.storyWait !== 'undefined' ? parseInt(feed.storyWait) : 5000;

							jQuery('.sbi_lightbox').removeClass('sbi_lb-comments-enabled').addClass('sbi_lb-story');

							jQuery.each(storyData,function(index,value) {

								d.album[index] = {
									link: value.media_url,
									avatar: feed.storyAvatar,
									title: a.attr("data-title") || a.attr("title"),
									video: '',
									id: '',
									url: a.attr("href"),
									user: a.attr("title").replace('@',''),
									lightboxcomments: false,
									carousel: {},
									feedID: 'story',
									type: 'story',
									wait: storyWait
								};
								if (value.media_type === 'VIDEO') {
									if (typeof value.media_url !== 'undefined') {
										d.album[index].video = value.media_url;
										d.album[index].link = sb_instagram_js_options.placeholder.replace('placeholder','stories-placeholder');
									}
								}

							});

						} else {
							jQuery('.sbi_lightbox').removeClass('sbi_lb-story');

							if (feedOptions.feedtheme) {
								jQuery('.sbi_lightbox').addClass('sbi-feedtheme sbi-' + feedOptions.feedtheme);
							}

							var carouselData = {},
								lightboxcomments = typeof feedOptions.lightboxcomments !== 'undefined' ? parseInt(feedOptions.lightboxcomments) : false;
							if (typeof a.attr("data-carousel") !== 'undefined'
								&& a.attr("data-carousel").length > -1
								&& a.attr("data-carousel").indexOf('{') > -1) {
								carouselData = JSON.parse(a.attr("data-carousel"));
							}



							var videoData = typeof a.attr("data-video") !== 'undefined' ? a.attr("data-video") : '',
								avatar = feed.getAvatarUrl(a.attr("data-user")),
								iframeURL = typeof a.attr("data-iframe") !== 'undefined' ? a.attr("data-iframe") : '',
								mediaType = typeof a.attr("data-media-type") !== 'undefined' ? a.attr("data-media-type") : 'feed';
							var imgSrcSet = feed.getImageUrls(a.closest('.sbi_item'));

							let customAvatar = typeof a.attr("data-custom-avatar") !== 'undefined' ? a.attr("data-custom-avatar") : '' ;
							avatar = customAvatar ? customAvatar : avatar;

							if (!feed.settings.consentGiven) {
								carouselData = {};
								if (videoData !== '') {
									videoData = 'link';
								}
							}
							d.album.push({
								link: a.attr("href"),
								local: imgSrcSet[640],
								title: a.attr("data-title") || a.attr("title"),
								video: videoData,
								iframe: iframeURL,
								mediaType: mediaType,
								id: a.attr("data-id"),
								url: a.attr("data-url"),
								user: a.attr("data-user"),
								avatar: avatar,
								accounttype: a.attr("data-account-type"),
								lightboxcomments: lightboxcomments,
								numcomments: lightboxcomments,
								carousel: carouselData,
								type: feedOptions.type
							});
						}

					}
					var d = this,
						e = a(window);
					e.on("resize", a.proxy(this.sizeOverlay, this)), a("select, object, embed").css({
						visibility: "hidden"
					}), this.sizeOverlay(), this.album = [];
					var f, g = 0,
						h = b.attr("data-lightbox-sbi");
					if (h) {
						f = a(b.prop("tagName") + '[data-lightbox-sbi="' + h + '"]');
						for (var i = 0; i < f.length; i = ++i) c(a(f[i])), f[i] === b[0] && (g = i)
					} else if ("lightbox" === b.attr("rel")) c(b);
					else {
						f = a(b.prop("tagName") + '[rel="' + b.attr("rel") + '"]');
						for (var j = 0; j < f.length; j = ++j) c(a(f[j])), f[j] === b[0] && (g = j)
					}
					var k = e.scrollTop() + this.options.positionFromTop,
						l = e.scrollLeft();
					this.$lightbox.css({
						top: k + "px",
						left: l + "px"
					}).fadeIn(this.options.fadeDuration), this.changeImage(g)
				}, b.prototype.changeImage = function(b) {
					var c = this;
					this.disableKeyboardNav();

					var d = this.$lightbox.find(".sbi_lb-image");
					this.$overlay.fadeIn(this.options.fadeDuration), this.$overlay.find(".sbi_lb-loader").fadeIn("slow"), this.$lightbox.find(".sbi_lb-image, .sbi_lb-nav, .sbi_lb-prev, .sbi_lb-next, .sbi_lb-dataContainer, .sbi_lb-numbers, .sbi_lb-caption").hide(), this.$outerContainer.addClass("animating");
					var e = new Image;
					e.onerror = function() {
						if (!c.$lightbox.hasClass('sbi_had_error')) {
							c.$lightbox.addClass('sbi_had_error');
							jQuery.each(c.album, function(index,value) {
								c.album[index].link = value.local;
							});
							c.changeImage(b);
						} else {
							console.log('image loading error');
							c.end();
						}
					}
					e.onload = function() {

						//If this feed has lightbox comments enabled then add room for the sidebar
						var sbi_lb_comments_width = 0,
							sbiNavArrowsWidth = 0,
							settings = typeof jQuery('.sbi').attr('data-options') !== 'undefined' ? JSON.parse(jQuery('.sbi').attr('data-options')) : {};
						if (window.innerWidth > 640 && typeof settings.lightboxcomments !== 'undefined') {
							sbi_lb_comments_width = 300;
						}
						if (window.innerWidth < (740 + sbi_lb_comments_width) && window.innerWidth > 640) {
							sbiNavArrowsWidth = 100;
						}

						var f, g, h, i, j, k, l;
						d.attr("src", c.album[b].link), f = a(e), d.width(e.width), d.height(e.height), c.options.fitImagesInViewport && (l = a(window).width(), k = a(window).height(), j = l - c.containerLeftPadding - c.containerRightPadding - 20 - sbi_lb_comments_width - sbiNavArrowsWidth, i = k - c.containerTopPadding - c.containerBottomPadding - 150, (e.width > j || e.height > i) && (e.width / j > e.height / i ? (h = j, g = parseInt(e.height / (e.width / h), 10), d.width(h), d.height(g)) : (g = i, h = parseInt(e.width / (e.height / g), 10), d.width(h), d.height(g)))), c.sizeContainer(d.width(), d.height())
					}, e.src = this.album[b].link, this.currentImageIndex = b
				}, b.prototype.sizeOverlay = function() {
					this.$overlay.width(a(window).width()).height(a(document).height())
				}, b.prototype.sizeContainer = function(a, b) {
					function c() {
						d.$lightbox.find(".sbi_lb-dataContainer").width(g), d.$lightbox.find(".sbi_lb-prevLink").height(h), d.$lightbox.find(".sbi_lb-nextLink").height(h), d.showImage()
					}
					var d = this,
						e = this.$outerContainer.outerWidth(),
						f = this.$outerContainer.outerHeight(),
						g = a + this.containerLeftPadding + this.containerRightPadding,
						h = b + this.containerTopPadding + this.containerBottomPadding;
					e !== g || f !== h ? this.$outerContainer.animate({
						width: g,
						height: h
					}, this.options.resizeDuration, "swing", function() {
						c()
					}) : c()
				}, b.prototype.showImage = function() {
					this.$lightbox.find('.sbi-embed-wrap').remove(), this.$lightbox.find(".sbi_lb-loader").hide(), this.$lightbox.find(".sbi_lb-image").fadeIn("slow"), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav()
				}, b.prototype.updateNav = function() {
					var a = !1;
					try {
						document.createEvent("TouchEvent"), a = this.options.alwaysShowNavOnTouchDevices ? !0 : !1
					} catch (b) {}
					this.$lightbox.find(".sbi_lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (a && this.$lightbox.find(".sbi_lb-prev, .sbi_lb-next").css("opacity", "1"), this.$lightbox.find(".sbi_lb-prev, .sbi_lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".sbi_lb-prev").show(), a && this.$lightbox.find(".sbi_lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".sbi_lb-next").show(), a && this.$lightbox.find(".sbi_lb-next").css("opacity", "1"))))
				}, b.prototype.updateDetails = function() {
					var b = this;

					/** NEW PHOTO ACTION **/
					jQuery('.sbi_share_close').on('click',function() {
						jQuery('.sbi_lightbox_tooltip.sbi_tooltip_social').hide();
					});
					//this.album = [];
					//Switch video when either a new popup or navigating to new one
					if( sbi_supports_video() ){
						jQuery('#sbi_lightbox').removeClass('sbi_video_lightbox');
						if( this.album[this.currentImageIndex].video.length && this.album[this.currentImageIndex].video !== 'missing'){
							if (this.album[this.currentImageIndex].video === 'link') {
							} else {
								jQuery('#sbi_lightbox').addClass('sbi_video_lightbox');
								// video created on the fly to prevent issue with safari not playing videos
								if (this.album[this.currentImageIndex].iframe) {
									jQuery('#sbi_lightbox').find('video').remove();
									jQuery('#sbi_lightbox').find('.sbi-embed-wrap').remove();

									// calculate height dynamically based on image container height
									var imageContainer = jQuery('#sbi_lightbox').find('.sbi_lb-image').height();
									var imageContainerWidth = jQuery('#sbi_lightbox').find('.sbi_lb-image').width();

									// create an iframe and add the src
									var div = document.createElement('div');
									div.className = 'sbi-embed-wrap';
									div.style.display = "block";
									div.style.overflow = "hidden";
									div.style.position = "relative";
									var iframe = document.createElement('iframe');
									iframe.src = this.album[this.currentImageIndex].iframe;
									iframe.width = imageContainerWidth+'px';
									iframe.height = imageContainer + 55 +'px';
									iframe.style.marginTop = '-55px';
									iframe.style.border = 'none';
									div.appendChild(iframe);

									jQuery('.sbi_lb-container').prepend(div);
									jQuery('.sbi_lb-image').hide();
								} else {
									jQuery('#sbi_lightbox').find('.sbi-embed-wrap').remove();
									jQuery('.sbi_lb-image').show();
									if( jQuery('.sbi_lightbox .sbi_video').length == 0 ) {
										jQuery('.sbi_lb-container').prepend("<video class='sbi_video' src='"+this.album[this.currentImageIndex].video+"' poster='"+this.album[this.currentImageIndex].link+"' controls autoplay playsinline></video>");
									} else {
										jQuery('.sbi_video').attr({
											'src' : this.album[this.currentImageIndex].video,
											'poster' : this.album[this.currentImageIndex].link,
											'autoplay' : 'true'
										});
									}
								}
							}
						} else {
							jQuery('.sbi_lb-container .sbi_video').remove();
							jQuery('#sbi_lightbox').find('.sbi-embed-wrap').remove();
						}
					}
					if (this.album[this.currentImageIndex].video === 'link' && ! jQuery(".sbi_lb-container-wrapper .sbi_gdpr_notice").length) {
						jQuery(".sbi_lb-container-wrapper").prepend('<a href="'+this.album[this.currentImageIndex].url+'" target="_blank" rel="noopener noreferrer" class="sbi_gdpr_notice"><svg style="color: rgba(255,255,255,1)" class="svg-inline--fa fa-play fa-w-14 sbi_playbtn" aria-label="Play" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="play" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg></a>')
					} else if (this.album[this.currentImageIndex].video !== 'link') {
						jQuery('.sbi_gdpr_notice').remove();
					}

					// hide video initially to prevent jerkiness until it's fully loaded
					jQuery('.sbi_video').css('opacity','0');
					jQuery('#sbi_lightbox .sbi_instagram a').attr('href', this.album[this.currentImageIndex].url);
					jQuery('#sbi_lightbox .sbi_lightbox_tooltip').hide();
					jQuery('#sbi_lightbox #sbi_mod_box').find('#sbi_photo_id').text( this.album[this.currentImageIndex].id );
					//Change social media sharing links on the fly
					jQuery('#sbi_lightbox #sbi_facebook_icon').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + this.album[this.currentImageIndex].url+'&t=Text');
					jQuery('#sbi_lightbox #sbi_twitter_icon').attr('href', 'https://twitter.com/intent/tweet?text='+this.album[this.currentImageIndex].url+' ' + this.album[this.currentImageIndex].title);
					jQuery('#sbi_lightbox #sbi_linkedin_icon').attr('href', 'https://www.linkedin.com/shareArticle?mini=true&url='+this.album[this.currentImageIndex].url+'&title='+this.album[this.currentImageIndex].title);
					jQuery('#sbi_lightbox #sbi_pinterest_icon').attr('href', 'https://pinterest.com/pin/create/button/?url='+encodeURIComponent(this.album[this.currentImageIndex].url)+'&media='+encodeURIComponent(this.album[this.currentImageIndex].link)+'&description='+encodeURIComponent(this.album[this.currentImageIndex].title));
					jQuery('#sbi_lightbox #sbi_email_icon').attr('href', 'mailto:?subject=Instagram&body='+this.album[this.currentImageIndex].title+' '+this.album[this.currentImageIndex].url);
					jQuery('.sbi_lb-container-wrapper').find('.fa-clone').remove();
					// carousel in lightbox
					if(typeof jQuery('.sbi_lb-image-wrap').sbiOwlCarousel !== 'undefined' && this.album[this.currentImageIndex].carousel !== '' && typeof this.album[this.currentImageIndex].carousel.data !== 'undefined' && typeof this.album[this.currentImageIndex].carousel.data[0] !== 'undefined' ) {
						var wrapEl = jQuery('.sbi_lb-image-wrap'),
							styles = jQuery('.sbi_lb-image').attr('style') + 'opacity: 1 !important; min-width: ' + jQuery('.sbi_lb-image-wrap-outer').width() + 'px;',
							thisPoster = this.album[this.currentImageIndex].link,
							carouselData = this.album[this.currentImageIndex].carousel.data,
							thisStartsWithVideo = (carouselData[0].type == 'video'),
							thisVideoUrl = '';

						jQuery.each(carouselData,function(index,value) {
							if (index > 0) {
								if (value.type === 'image') {
									wrapEl.append('<img class="sbi_lb-image sbi_lb_lightbox-image" src="'+value.media+'" style="'+styles+'" alt="Lightbox Image"/>');
								} else if (sbi_supports_video() && value.type === 'video') {
									wrapEl.append( '<video class="sbi_video sbi_lb_lightbox-image sbi_lb_lightbox-carousel-video added" src="'+value.media+'" style="'+styles+'" poster="'+thisPoster+'" controls="" autoplay="autoplay" playsinline></video>');
								}
							}
						});
						jQuery('.sbi_lb-image-wrap-outer').prepend('<i class="fa fa-clone sbi_lightbox_carousel_icon" aria-hidden="true"></i>');

						wrapEl.sbiOwlCarousel({
							items: 1,
							rewind: true,
							nav: true,
							navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
							dots: true,
							autoPlay: false,
							stopOnHover: true,
							onInitialized :function(el) {
								setTimeout(function() {
									if (jQuery('.sbi_lb-image-wrap').width() > jQuery('.sbi_lb-image-wrap').find('.sbi-owl-item').width()) {
										wrapEl.trigger('refresh.owl.carousel');
									}
								},1000);
								setTimeout(function() {
									if (jQuery('.sbi_lb-image-wrap').width() > jQuery('.sbi_lb-image-wrap').find('.sbi-owl-item').width()) {
										wrapEl.trigger('refresh.owl.carousel');
									}
								},2500);
								if(thisStartsWithVideo) {
									jQuery('.sbi_lb-image-wrap').find('.sbi-owl-item').first().find('img').before( jQuery('#sbi_lightbox .sbi_video').first() );
									jQuery('#sbi_lightbox .sbi_video').first().get(0).play();
								}
								if (window.sb_instagram_js_options.font_method === 'svg') {
									sbSVGify(wrapEl);
								}

							},
							onChanged :function(el) {
								var $owlCarousel = jQuery(el.target),
									$maybeVideo = $owlCarousel.find('.sbi-owl-item:eq('+el.item.index+')').find('.sbi_video');

								if($owlCarousel.find('.sbi_video').length) {
									$owlCarousel.find('.sbi_video').each(function() {
										jQuery(this).get(0).pause();
									});
								}

								if ($maybeVideo.length) {
									$maybeVideo.get(0).play();
								}

							}
						});

						var $navElementsWrapper = wrapEl.find('.sbi-owl-buttons');
						if (window.width > 640) {
							$navElementsWrapper.addClass('onhover').hide();
							wrapEl.on({
								mouseenter: function () {
									$navElementsWrapper.fadeIn();
								},
								mouseleave: function () {
									$navElementsWrapper.fadeOut();
								}
							});
						}

					}
					jQuery(".sbi_lb-container-wrapper").find('#sbi_mod_error').remove();
					if (this.album[this.currentImageIndex].video.length && this.album[this.currentImageIndex].video === 'missing') {
						jQuery(".sbi_lb-container-wrapper").prepend('<div id="sbi_mod_error"><strong>This message is only visible to admins.</strong> No video available. The content of the video may contain copyrighted material and can only be viewed on instagram.com.</div>')
					}

					if (this.album[this.currentImageIndex].type === 'story') {
						jQuery('.sbi_lightbox').removeClass('sbi_lb-comments-enabled');
					} else if (this.album[this.currentImageIndex].lightboxcomments !== false) {
						jQuery('.sbi_lightbox').addClass('sbi_lb-comments-enabled');
					}


					// lightbox autoprogress trigger
					if (this.album[this.currentImageIndex].type === 'story') {
						clearTimeout(this.moveSlide);
						if (this.currentImageIndex !== this.album.length - 1) {
							if (this.album[this.currentImageIndex].video.length) {
								jQuery('.sbi_lightbox .sbi_video').on('ended',function(){
									setTimeout(function() {
										jQuery('.sbi_lb-next').trigger('click');
									},150)
								});
							} else if (typeof this.album[this.currentImageIndex].wait !== 'undefined') {
								this.moveSlide = setTimeout(function() {
									jQuery('.sbi_lb-next').trigger('click');
								},this.album[this.currentImageIndex].wait);
							}
						} else {
							if (this.album[this.currentImageIndex].video.length) {
								jQuery('.sbi_lightbox .sbi_video').on('ended',function(){
									setTimeout(function() {
										jQuery('#sbi_lightboxOverlay, #sbi_lightbox').fadeOut();
										//Pause video
										if( sbi_supports_video() && jQuery('#sbi_lightbox video.sbi_video').length ) jQuery('#sbi_lightbox video.sbi_video')[0].pause();
										// easiest to destroy carousel and build a new one
										jQuery('#sbi_lightbox .sbi_lb_lightbox-image').remove();
										if (jQuery('#sbi_lightbox .sbi_lb-image-wrap').length)  {
											jQuery('#sbi_lightbox .sbi_lb-image-wrap').sbiOwlCarousel('destroy');
											jQuery('#sbi_lightbox .sbi-owl-item').remove();
										}
										jQuery('#sbi_lightbox').find('video').remove();
										jQuery('.sbi_lb-container').prepend("<video class='sbi_video' src='' poster='' controls playsinline></video>");
									},150)
								});
							} else if (typeof this.album[this.currentImageIndex].wait !== 'undefined') {
								this.moveSlide = setTimeout(function() {
									jQuery('#sbi_lightboxOverlay, #sbi_lightbox').fadeOut();
									//Pause video
									if( sbi_supports_video() && jQuery('#sbi_lightbox video.sbi_video').length ) jQuery('#sbi_lightbox video.sbi_video')[0].pause();
									// easiest to destroy carousel and build a new one
									jQuery('#sbi_lightbox .sbi_lb_lightbox-image').remove();
									if (jQuery('#sbi_lightbox .sbi_lb-image-wrap').length)  {
										jQuery('#sbi_lightbox .sbi_lb-image-wrap').sbiOwlCarousel('destroy');
										jQuery('#sbi_lightbox .sbi-owl-item').remove();
									}
									jQuery('#sbi_lightbox').find('video').remove();
									jQuery('.sbi_lb-container').prepend("<video class='sbi_video' src='' poster='' controls playsinline></video>");
								},this.album[this.currentImageIndex].wait);
							}
						}
					}

					const imageAlt = typeof this.album[this.currentImageIndex].title !== 'undefined' ? this.album[this.currentImageIndex].title : 'Lightbox Placeholder';
					jQuery('.sbi_lb-image').attr('alt',imageAlt);

					// fade video back in after a slight delay
					setTimeout(function(){
						jQuery('.sbi_video').css('opacity','1').css('z-index',1);
					},500);
					//clear mailto links
					setTimeout(function(){
						jQuery(".sbi_lb-caption").find('a[href^="mailto:"]').each(function() {
							jQuery(this).replaceWith(jQuery(this).text());
						});
					},101);

					//start by removing any existing comments
					jQuery('.sbi_lb-commentBox').remove();

					// check to see if comments are enabled for this feed
					if (this.album[this.currentImageIndex].lightboxcomments !== false && this.album[this.currentImageIndex].numcomments > 0) {

						var sbiComments = {
							postID: '',
							thisAlbum: this.album[this.currentImageIndex],
							maxNumComments: this.album[this.currentImageIndex].numcomments,
							disableCache: (this.album[this.currentImageIndex].disablecache || this.album[this.currentImageIndex].disablecache === 'true'),
							numCommentsOnPage: typeof jQuery('#'+this.album[this.currentImageIndex].id).attr('data-numcomments') !== 'undefined' ? parseInt(jQuery('#'+this.album[this.currentImageIndex].id).attr('data-numcomments')) : false, // number of comments for this specific post, grabbed from feed html
							commentObj: [],

							getRemoteComments: function (missing,type,user) {
								var loadingHTML = '<p class="sbi_loading_comments"><svg class="svg-inline--fa fa-spinner fa-w-16 fa-pulse" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="spinner" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path></svg></p>';
								jQuery('.sbi_lb-dataContainer').append(loadingHTML);

								var ajaxSettings = {
									url: sbiajaxurl,
									type: 'POST',
									async: true,
									cache: false,
									data:{
										action: 'sbi_remote_comments_needed',
										post_id: this.postID,
										user: user,
										type: type
									},
									success: function(data) {
										jQuery('.sbi_lb-dataContainer').find('.sbi_loading_comments').remove();
										data = typeof data.data !== 'undefined' ? data.data : data
										if ( typeof data === 'string' && data.indexOf('{') > -1) {
											//Replace any escaped single quotes as it results in invalid JSON
											data = data.replace(/\\'/g, "'");
											data = data.replace(/\\'/g, "'");

											data = JSON.parse(data);
										}

										sbiComments.commentObj = data;
										if ( typeof window.sbi.commentCache === 'undefined' ) {
											window.sbi.commentCache = [];
										}
										window.sbi.commentCache[sbiComments.postID] = [sbiComments.commentObj, new Date().getTime() / 1000 + 100*60,sbiComments.numCommentsOnPage];

										if (missing !== 'all') {
											sbiComments.replaceWithNewComments(sbiComments.commentObj);
										} else {
											sbiComments.appendExistingComments();
										}
									},
									error: function(xhr,textStatus,e) {
										console.log(e);
									}
								};
								jQuery.ajax(ajaxSettings);

							},
							getCommentHtml: function (comment) {
								var comHtml = '',
									comText = comment.text.replace(/(\\')/g,"'").replace(/(\\")/g,'"').replace(/&lt;br\/&gt;|&lt;br \/&gt;/g, '<br>');

								comHtml += '<p class="sbi_lb-comment" id="sbi_com_'+comment.id+'" data-sbi-created="">';
								comHtml += '<a class="sbi_lb-commenter" href="https://www.instagram.com/'+comment.username+'/" target="_blank" rel="noopener">'+comment.username+'</a>';
								comHtml += '<span class="sbi_lb-comment-text">'+comText+'</span>';
								comHtml += '</p>';

								return comHtml;
							},
							appendExistingComments: function () {
								var cleanId = this.postID,
									comments = typeof window.sbi.commentCache[cleanId] !== 'undefined' ? window.sbi.commentCache[cleanId][0] : [],
									fifteenMinutesFromLastCache = typeof window.sbi.commentCache[cleanId] !== 'undefined' ? window.sbi.commentCache[cleanId][1] : 0,
									nowInSeconds = new Date().getTime() / 1000,
									maxNumComments = parseInt(this.maxNumComments),
									commentsNeeded = typeof window.sbi.commentCache[cleanId] !== 'undefined' ? sbiComments.numCommentsOnPage - parseInt(window.sbi.commentCache[cleanId][2]) : 0;

								var loadingHTML = '';
								// every time the comment cache is updated, a time 15 minutes in the future is also included in the saved data
								// this checks to see if it's been at least 15 minutes since new comments were cached
								if (fifteenMinutesFromLastCache > nowInSeconds) {
									commentsNeeded = 0;
								} else {
									if (commentsNeeded > 0) {
										loadingHTML = '<p class="sbi_loading_comments"><svg class="svg-inline--fa fa-spinner fa-w-16 fa-pulse" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="spinner" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path></svg></p>';
										sbiComments.getRemoteComments(commentsNeeded,sbiComments.accountType,sbiComments.user);
									}
								}
								var comsHtml = '';
								//check to see if there is at least one comment to use
								if (typeof comments[0] !== 'undefined') {
									comsHtml += '<div class="sbi_lb-commentBox">';
									var lastIndex = -1;
									// grab the maximum number of latest tweets available without going over the max
									if ((comments.length + commentsNeeded) < maxNumComments) {
										lastIndex = 0 - comments.length;
									} else if ((maxNumComments - commentsNeeded) > 0) {
										lastIndex = 0 - (maxNumComments - commentsNeeded);
									}
									// only append existing comments if there are less new comments than the max
									if (commentsNeeded < maxNumComments) {
										comments = comments.slice(lastIndex);
										jQuery.each(comments, function() {
											comsHtml += sbiComments.getCommentHtml(this);
										});
									}
									// let the visitor know that more comments are coming
									comsHtml += loadingHTML;
									comsHtml += '</div>';
									jQuery('.sbi_lb-dataContainer').append(comsHtml);
								}
							},
							replaceWithNewComments: function (comments) {
								var comsHtml = '',
									lastIndex = Math.max((0 - parseInt(this.maxNumComments)), (0 - comments.length)),
									newComments = comments.slice(lastIndex);

								jQuery.each(newComments, function() {
									comsHtml += sbiComments.getCommentHtml(this);
								});
								jQuery('.sbi_lb-commentBox').html(comsHtml);
							},
							cacheComments: function (comments, totalComments) {
								var submittedData = {
									'action': 'sbi_update_comment_cache',
									'post_id': this.postID,
									'comments': comments,
									'total_comments': totalComments
								};

								jQuery.ajax({
									url: sbiajaxurl,
									type: 'post',
									data: submittedData,
									success: function(data) {
									}
								}); // ajax*/
							}
						};

						function sbiCommentsInit(id,accountType,user) {
							if (sbiComments.numCommentsOnPage === 0) {
								return;
							}
							// set the id of the current post in the lightbox
							var postIDParts = id.split('_'),
								cleanId = postIDParts[1];
							sbiComments.postID = cleanId;
							sbiComments.accountType = accountType;
							sbiComments.user = user;

							if (typeof window.sbi.commentCache === 'undefined') {
								window.sbi.commentCache = {waiting:true};
								var loadingHTML = '<p class="sbi_loading_comments"><svg class="svg-inline--fa fa-spinner fa-w-16 fa-pulse" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="spinner" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path></svg></p>';

								jQuery('.sbi_lb-dataContainer').append(loadingHTML);
								var setCacheOpts = {
									url: sbiajaxurl,
									type: 'POST',
									async: true,
									cache: false,
									data:{
										action: 'sbi_get_comment_cache'
									},
									success: function(data) {
										jQuery('.sbi_lb-dataContainer').find('.sbi_loading_comments').remove();

										data = typeof data.data !== 'undefined' ? data.data : data
										if ( typeof data === 'string' && data.indexOf('{') > -1) {
											//Replace any escaped single quotes as it results in invalid JSON
											data = data.replace(/\\'/g, "'");
											data = data.replace(/\\'/g, "'");

											data = JSON.parse(data);
										}
										jQuery('.sbi_lb-dataContainer').find('.sbi_loading_comments').remove();

										window.sbi.commentCache = data;
										// append comments localized for this feed that apply to this post, otherwise retrieve new comments and use those
										if (window.sbi.commentCache && window.sbi.commentCache.hasOwnProperty(cleanId)) {
											sbiComments.appendExistingComments();
											if (sbiComments.numCommentsOnPage > window.sbi.commentCache[cleanId][2]) {
												sbiComments.getRemoteComments(sbiComments.numCommentsOnPage - window.sbi.commentCache[cleanId][2],accountType,user);
											}
										} else {
											sbiComments.getRemoteComments('all',accountType,user);
										}
									},
									error: function(xhr,textStatus,e) {
										console.log(e);
									}
								};
								jQuery.ajax(setCacheOpts);
							} else if (typeof window.sbi.commentCache.waiting === 'undefined') {
								// append comments localized for this feed that apply to this post, otherwise retrieve new comments and use those
								if (window.sbi.commentCache && window.sbi.commentCache.hasOwnProperty(sbiComments.postID.replace('sbi_',''))) {
									sbiComments.appendExistingComments();
								} else {
									sbiComments.getRemoteComments('all',accountType,user);
								}
							}

						}

						// wait until the comments object is done being retrieved before displaying comments
						if (typeof this.album[this.currentImageIndex].id !== 'undefined') {
							sbiCommentsInit(this.album[this.currentImageIndex].id,this.album[this.currentImageIndex].accounttype,this.album[this.currentImageIndex].user);
						} else {
							setTimeout(function() {
								if (typeof this.album[this.currentImageIndex].id !== 'undefined') {
									sbiCommentsInit(this.album[this.currentImageIndex].id,this.album[this.currentImageIndex].accounttype,this.album[this.currentImageIndex].user);
								}
							},500);
						}
					}

					//Add links to the caption
					var sbiLightboxCaption = window.sbi.encodeHTML(this.album[this.currentImageIndex].title),
						hashRegex = /(^|\s)#(\w[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC+0-9_]+)|(#[a-я]+)|(#[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]+)/gi,
						tagRegex = /[@]+[A-Za-z0-9-_\."<]+/g;
					if (typeof sbiLightboxCaption !== 'undefined' && sbiLightboxCaption !== '') {
						sbiLightboxCaption = sbiLightboxCaption.replace(/(>#)/g,'> #');
					}
					(sbiLightboxCaption) ? sbiLightboxCaption = sbiLinkify(sbiLightboxCaption) : sbiLightboxCaption = '';

					//Link #hashtags
					function sbiReplaceHashtags(hash){
						//Remove white space at beginning of hash
						var replacementString = hash.trim();
						//If the hash is a hex code then don't replace it with a link as it's likely in the style attr, eg: "color: #ff0000"
						if ( /^#[0-9A-F]{6}$/i.test( replacementString ) ){
							return replacementString;
						} else {
							return ' <a href="https://www.instagram.com/explore/tags/'+ replacementString.substring(1) +'/" target="_blank" rel="nofollow noopener">' + replacementString + '</a>';
						}
					}
					sbiLightboxCaption = sbiLightboxCaption.replace( hashRegex , sbiReplaceHashtags );
					//Link @tags
					function sbiReplaceTags(tag){
						var replacementString = tag.trim();
						//If it contains a quote, don't link
						if (replacementString.indexOf('<br>') == -1 && /["<]+/g.test( replacementString ) ){
							return replacementString;
						} else {
							return ' <a href="https://www.instagram.com/'+ replacementString.substring(1).replace(/</g,'') +'/" target="_blank" rel="nofollow noopener">' + replacementString.replace(/</g,'') + '</a>';
						}
					}
					sbiLightboxCaption = sbiLightboxCaption.replace( tagRegex , sbiReplaceTags );
					if (typeof sbiLightboxAction === 'function') {
						setTimeout(function() {
							sbiLightboxAction();
						},100);
					}
					var avatarImageHtml = '',
						userHtml = '',
						thisAlbum = this.album,
						thisCurrentImageIndex = this.currentImageIndex;
					if (typeof this.album[this.currentImageIndex].avatar !== 'undefined' && this.album[this.currentImageIndex].avatar !== '' && typeof this.album[this.currentImageIndex].user !== 'undefined') {
						avatarImageHtml = (this.album[this.currentImageIndex].avatar !== 'undefined') ? '<img src="'+this.album[this.currentImageIndex].avatar+'" />' : '';
						userHtml = '<a class="sbi_lightbox_username" href="https://www.instagram.com/'+this.album[this.currentImageIndex].user+'/" target="_blank" rel="noopener">'+avatarImageHtml+'<p>@'+this.album[this.currentImageIndex].user + '</p></a> ';
					} else if (typeof this.album[this.currentImageIndex].user !== 'undefined') {
						jQuery.each(window.sbi.feeds, function() {
							if (typeof this.availableAvatarUrls !== 'undefined' && typeof this.availableAvatarUrls[thisAlbum[thisCurrentImageIndex].user] !== 'undefined' && this.availableAvatarUrls[thisAlbum[thisCurrentImageIndex].user] !== 'undefined') {
								avatarImageHtml = '<img src="'+this.availableAvatarUrls[thisAlbum[thisCurrentImageIndex].user]+'" />';
							}
						});
					}

					sbSVGify(jQuery('.sbi_lightbox'));
					this.$lightbox.find(".sbi_lb-caption").html( userHtml + '<span class="sbi_caption_text">' + sbiLightboxCaption + '</span>').fadeIn("fast"), this.album.length > 1 && this.options.showImageNumberLabel ? this.$lightbox.find(".sbi_lb-number").text(this.options.albumLabel(this.currentImageIndex + 1, this.album.length)).fadeIn("fast") : this.$lightbox.find(".sbi_lb-number").hide(), this.$outerContainer.removeClass("animating"), this.$lightbox.find(".sbi_lb-dataContainer").fadeIn(this.options.resizeDuration, function() {
						return b.sizeOverlay()
					});
				}, b.prototype.preloadNeighboringImages = function() {
					if (this.album.length > this.currentImageIndex + 1) {
						var a = new Image;
						a.src = this.album[this.currentImageIndex + 1].link
					}
					if (this.currentImageIndex > 0) {
						var b = new Image;
						b.src = this.album[this.currentImageIndex - 1].link
					}
				}, b.prototype.enableKeyboardNav = function() {
					a(document).on("keyup.keyboard", a.proxy(this.keyboardAction, this))
				}, b.prototype.disableKeyboardNav = function() {
					a(document).off(".keyboard")
				}, b.prototype.keyboardAction = function(a) {
					var sbLbCarouselDestroy = function() {
						jQuery('.sbi_lightbox_carousel_icon').remove();
						jQuery('#sbi_lightbox .sbi_lb_lightbox-image, .sbi_lb-image-wrap video').remove();
						//if (jQuery('#sbi_lightbox .sbi_lb-image-wrap').length)  { //jQuery('.sbi_lb-image-wrap')
						jQuery('#sbi_lightbox .sbi_lb-image-wrap').sbiOwlCarousel('destroy');
						jQuery('#sbi_lightbox .sbi-owl-item').remove();
						//
						//}
					};
					var KEYCODE_ESC        = 27;
					var KEYCODE_LEFTARROW  = 37;
					var KEYCODE_RIGHTARROW = 39;

					var keycode = event.keyCode;
					var key     = String.fromCharCode(keycode).toLowerCase();
					if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
						sbLbCarouselDestroy();
						if( sbi_supports_video() && typeof jQuery('#sbi_lightbox video.sbi_video')[0] !== 'undefined' ) jQuery('#sbi_lightbox video.sbi_video')[0].pause();
						jQuery('#sbi_lightbox video.sbi_video').css('opacity',0);
						jQuery('#sbi_lightbox iframe').attr('src', '');
						jQuery('.sbi_gdpr_notice').remove();
						this.end();
					} else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
						if (this.currentImageIndex !== 0) {
							this.changeImage(this.currentImageIndex - 1);
						} else if (this.options.wrapAround && this.album.length > 1) {
							this.changeImage(this.album.length - 1);
						}
						sbLbCarouselDestroy();
						if( sbi_supports_video() && jQuery('#sbi_lightbox video.sbi_video').length ) jQuery('#sbi_lightbox video.sbi_video')[0].pause();
						jQuery('#sbi_lightbox video.sbi_video').css('opacity',0);
						if( jQuery('#sbi_lightbox .sbi-embed-wrap').length == 0 ) jQuery('#sbi_lightbox iframe').attr('src', '');
						jQuery('.sbi_gdpr_notice').remove();

					} else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
						if (this.currentImageIndex !== this.album.length - 1) {
							this.changeImage(this.currentImageIndex + 1);
						} else if (this.options.wrapAround && this.album.length > 1) {
							this.changeImage(0);
						}
						sbLbCarouselDestroy();
						if( sbi_supports_video() && jQuery('#sbi_lightbox video.sbi_video').length ) jQuery('#sbi_lightbox video.sbi_video')[0].pause();
						jQuery('#sbi_lightbox video.sbi_video').css('opacity',0);
						if( jQuery('#sbi_lightbox .sbi-embed-wrap').length == 0 ) jQuery('#sbi_lightbox iframe').attr('src', '');
						jQuery('.sbi_gdpr_notice').remove();

					}

				}, b.prototype.end = function() {
					this.disableKeyboardNav(), a(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), a("select, object, embed").css({
						visibility: "visible"
					})
				}, b
			}();
		a(function() {
			{
				var a = new b;
				new c(a)
			}
		})
	}).call(this);
	//Checks whether browser support HTML5 video element
	function sbi_supports_video() {
		return !!document.createElement('video').canPlayType;
	}

	function sbiTranslate(origString) {
		if (typeof sbiTranslations === 'undefined') {
			return origString;
		} else {

			var key = origString.toLowerCase().replace(/ /g, '');

			if (typeof sbiTranslations[key]  !== 'undefined') {
				return sbiTranslations[key];
			} else {
				return origString;
			}

		}
	}

	(function($){

		function sbiAddImgLiquid() {
			/*! imgLiquid v0.9.944 / 03-05-2013 https://github.com/karacas/imgLiquid */
			var sbi_imgLiquid = sbi_imgLiquid || {VER: "0.9.944"};
			sbi_imgLiquid.bgs_Available = !1, sbi_imgLiquid.bgs_CheckRunned = !1, function (i) {
				function t() {
					if (!sbi_imgLiquid.bgs_CheckRunned) {
						sbi_imgLiquid.bgs_CheckRunned = !0;
						var t = i('<span style="background-size:cover" />');
						i("body").append(t), !function () {
							var i = t[0];
							if (i && window.getComputedStyle) {
								var e = window.getComputedStyle(i, null);
								e && e.backgroundSize && (sbi_imgLiquid.bgs_Available = "cover" === e.backgroundSize)
							}
						}(), t.remove()
					}
				}

				i.fn.extend({
					sbi_imgLiquid: function (e) {
						this.defaults = {
							fill: !0,
							verticalAlign: "center",
							horizontalAlign: "center",
							useBackgroundSize: !0,
							useDataHtmlAttr: !0,
							responsive: !0,
							delay: 0,
							fadeInTime: 0,
							removeBoxBackground: !0,
							hardPixels: !0,
							responsiveCheckTime: 500,
							timecheckvisibility: 500,
							onStart: null,
							onFinish: null,
							onItemStart: null,
							onItemFinish: null,
							onItemError: null
						}, t();
						var a = this;
						return this.options = e, this.settings = i.extend({}, this.defaults, this.options), this.settings.onStart && this.settings.onStart(), this.each(function (t) {
							function e() {
								-1 === u.css("background-image").indexOf(encodeURI(c.attr("src"))) && u.css({"background-image": 'url("' + encodeURI(c.attr("src")) + '")'}), u.css({
									"background-size": g.fill ? "cover" : "contain",
									"background-position": (g.horizontalAlign + " " + g.verticalAlign).toLowerCase(),
									"background-repeat": "no-repeat",
									"padding-bottom" : 0
								}), i("a:first", u).css({
									display: "block",
									width: "100%",
									height: "100%"
								}), i("img", u).css({display: "none"}), g.onItemFinish && g.onItemFinish(t, u, c), u.addClass("sbi_imgLiquid_bgSize"), u.addClass("sbi_imgLiquid_ready"), l()
							}

							function o() {
								function e() {
									c.data("sbi_imgLiquid_error") || c.data("sbi_imgLiquid_loaded") || c.data("sbi_imgLiquid_oldProcessed") || (u.is(":visible") && c[0].complete && c[0].width > 0 && c[0].height > 0 ? (c.data("sbi_imgLiquid_loaded", !0), setTimeout(r, t * g.delay)) : setTimeout(e, g.timecheckvisibility))
								}

								if (c.data("oldSrc") && c.data("oldSrc") !== c.attr("src")) {
									var a = c.clone().removeAttr("style");
									return a.data("sbi_imgLiquid_settings", c.data("sbi_imgLiquid_settings")), c.parent().prepend(a), c.remove(), c = a, c[0].width = 0, void setTimeout(o, 10)
								}
								return c.data("sbi_imgLiquid_oldProcessed") ? void r() : (c.data("sbi_imgLiquid_oldProcessed", !1), c.data("oldSrc", c.attr("src")), i("img:not(:first)", u).css("display", "none"), u.css({overflow: "hidden"}), c.fadeTo(0, 0).removeAttr("width").removeAttr("height").css({
									visibility: "visible",
									"max-width": "none",
									"max-height": "none",
									width: "auto",
									height: "auto",
									display: "block"
								}), c.on("error", n), c[0].onerror = n, e(), void d())
							}

							function d() {
								(g.responsive || c.data("sbi_imgLiquid_oldProcessed")) && c.data("sbi_imgLiquid_settings") && (g = c.data("sbi_imgLiquid_settings"), u.actualSize = u.get(0).offsetWidth + u.get(0).offsetHeight / 1e4, u.sizeOld && u.actualSize !== u.sizeOld && r(), u.sizeOld = u.actualSize, setTimeout(d, g.responsiveCheckTime))
							}

							function n() {
								c.data("sbi_imgLiquid_error", !0), u.addClass("sbi_imgLiquid_error"), g.onItemError && g.onItemError(t, u, c), l()
							}

							function s() {
								var i = {};
								if (a.settings.useDataHtmlAttr) {
									var t = u.attr("data-sbi_imgLiquid-fill"),
										e = u.attr("data-sbi_imgLiquid-horizontalAlign"),
										o = u.attr("data-sbi_imgLiquid-verticalAlign");
									("true" === t || "false" === t) && (i.fill = Boolean("true" === t)), void 0 === e || "left" !== e && "center" !== e && "right" !== e && -1 === e.indexOf("%") || (i.horizontalAlign = e), void 0 === o || "top" !== o && "bottom" !== o && "center" !== o && -1 === o.indexOf("%") || (i.verticalAlign = o)
								}
								return sbi_imgLiquid.isIE && a.settings.ieFadeInDisabled && (i.fadeInTime = 0), i
							}

							function r() {
								var i, e, a, o, d, n, s, r, m = 0, h = 0, f = u.width(), v = u.height();
								void 0 === c.data("owidth") && c.data("owidth", c[0].width), void 0 === c.data("oheight") && c.data("oheight", c[0].height), g.fill === f / v >= c.data("owidth") / c.data("oheight") ? (i = "100%", e = "auto", a = Math.floor(f), o = Math.floor(f * (c.data("oheight") / c.data("owidth")))) : (i = "auto", e = "100%", a = Math.floor(v * (c.data("owidth") / c.data("oheight"))), o = Math.floor(v)), d = g.horizontalAlign.toLowerCase(), s = f - a, "left" === d && (h = 0), "center" === d && (h = .5 * s), "right" === d && (h = s), -1 !== d.indexOf("%") && (d = parseInt(d.replace("%", ""), 10), d > 0 && (h = s * d * .01)), n = g.verticalAlign.toLowerCase(), r = v - o, "left" === n && (m = 0), "center" === n && (m = .5 * r), "bottom" === n && (m = r), -1 !== n.indexOf("%") && (n = parseInt(n.replace("%", ""), 10), n > 0 && (m = r * n * .01)), g.hardPixels && (i = a, e = o), c.css({
									width: i,
									height: e,
									"margin-left": Math.floor(h),
									"margin-top": Math.floor(m)
								}), c.data("sbi_imgLiquid_oldProcessed") || (c.fadeTo(g.fadeInTime, 1), c.data("sbi_imgLiquid_oldProcessed", !0), g.removeBoxBackground && u.css("background-image", "none"), u.addClass("sbi_imgLiquid_nobgSize"), u.addClass("sbi_imgLiquid_ready")), g.onItemFinish && g.onItemFinish(t, u, c), l()
							}

							function l() {
								t === a.length - 1 && a.settings.onFinish && a.settings.onFinish()
							}

							var g = a.settings, u = i(this), c = i("img:first", u);
							return c.length ? (c.data("sbi_imgLiquid_settings") ? (u.removeClass("sbi_imgLiquid_error").removeClass("sbi_imgLiquid_ready"), g = i.extend({}, c.data("sbi_imgLiquid_settings"), a.options)) : g = i.extend({}, a.settings, s()), c.data("sbi_imgLiquid_settings", g), g.onItemStart && g.onItemStart(t, u, c), void (sbi_imgLiquid.bgs_Available && g.useBackgroundSize ? e() : o())) : void n()
						})
					}
				})
			}(jQuery);

			// Use imagefill to set the images as backgrounds so they can be square
			!function () {
				var css = sbi_imgLiquid.injectCss,
					head = document.getElementsByTagName('head')[0],
					style = document.createElement('style');
				style.type = 'text/css';
				if (style.styleSheet) {
					style.styleSheet.cssText = css;
				} else {
					style.appendChild(document.createTextNode(css));
				}
				head.appendChild(style);
			}();
		}

		function sbiAddVisibilityListener() {
			/* Detect when element becomes visible. Used for when the feed is initially hidden, in a tab for example. https://github.com/shaunbowe/jquery.visibilityChanged */
			!function (i) {
				var n = {
					callback: function () {
					}, runOnLoad: !0, frequency: 100, sbiPreviousVisibility: null
				}, c = {};
				c.sbiCheckVisibility = function (i, n) {
					if (jQuery.contains(document, i[0])) {
						var e = n.sbiPreviousVisibility, t = i.is(":visible");
						n.sbiPreviousVisibility = t, null == e ? n.runOnLoad && n.callback(i, t) : e !== t && n.callback(i, t), setTimeout(function () {
							c.sbiCheckVisibility(i, n)
						}, n.frequency)
					}
				}, i.fn.sbiVisibilityChanged = function (e) {
					var t = i.extend({}, n, e);
					return this.each(function () {
						c.sbiCheckVisibility(i(this), t)
					})
				}
			}(jQuery);
		}

		function Sbi() {
			this.feeds = {};
			this.options = sb_instagram_js_options;
		}

		Sbi.prototype = {
			createPage: function (createFeeds, createFeedsArgs) {
				if (typeof sb_instagram_js_options.ajax_url !== 'undefined' && typeof window.sbiajaxurl === 'undefined') {
					window.sbiajaxurl = sb_instagram_js_options.ajax_url;
				}
				if (typeof window.sbiajaxurl === 'undefined' || window.sbiajaxurl.indexOf(window.location.hostname) === -1) {
					window.sbiajaxurl = location.protocol + '//' + window.location.hostname + '/wp-admin/admin-ajax.php';
				}

				if ( $('#sbi-builder-app').length && typeof window.sbiresizedImages === 'undefined') {
					if ($('.sbi_resized_image_data').length
						&& typeof $('.sbi_resized_image_data').attr('data-resized') !== 'undefined'
						&& $('.sbi_resized_image_data').attr('data-resized').indexOf('{"') === 0) {
						window.sbiresizedImages = JSON.parse($('.sbi_resized_image_data').attr('data-resized'));
						$('.sbi_resized_image_data').remove();
					}
				}

				$('.sbi_no_js_error_message').remove();
				$('.sbi_no_js').removeClass('sbi_no_js');

				createFeeds(createFeedsArgs);
			},
			createFeeds: function (args) {
				args.whenFeedsCreated(
					$('.sbi').each(function (index) {
						$(this).attr('data-sbi-index', index + 1);
						var $self = $(this),
							flags = typeof $self.attr('data-sbi-flags') !== 'undefined' ? $self.attr('data-sbi-flags').split(',') : [],
							general = typeof $self.attr('data-options') !== 'undefined' ? JSON.parse($self.attr('data-options')) : {};
						if (flags.indexOf('testAjax') > -1) {
							window.sbi.triggeredTest = true;
							var submitData = {
									'action' : 'sbi_on_ajax_test_trigger'
								},
								onSuccess = function(data) {
									console.log('did test');
								};
							sbiAjax(submitData,onSuccess)
						}
						var feedOptions = {
							cols : $self.attr('data-cols'),
							colstablet : typeof $self.attr('data-colstablet') !== 'undefined' && $self.attr('data-colstablet') !== 'same' ? $self.attr('data-colstablet') : $self.attr('data-cols'),
							colsmobile : typeof $self.attr('data-colsmobile') !== 'undefined' && $self.attr('data-colsmobile') !== 'same' ? $self.attr('data-colsmobile') : $self.attr('data-cols'),
							num : $self.attr('data-num'),
							imgRes : $self.attr('data-res'),
							feedID : $self.attr('data-feedid'),
							postID : typeof $self.attr( 'data-postid' ) !== 'undefined' ? $self.attr( 'data-postid' ) : 'unknown',
							shortCodeAtts : $self.attr('data-shortcode-atts'),
							resizingEnabled : (flags.indexOf('resizeDisable') === -1),
							imageLoadEnabled : (flags.indexOf('imageLoadDisable') === -1),
							debugEnabled : (flags.indexOf('debug') > -1),
							favorLocal : (flags.indexOf('favorLocal') > -1),
							ajaxPostLoad : (flags.indexOf('ajaxPostLoad') > -1),
							gdpr : (flags.indexOf('gdpr') > -1),
							consentGiven : (flags.indexOf('gdpr') === -1),
							locator : (flags.indexOf('locator') > -1),
							overrideBlockCDN : (flags.indexOf('overrideBlockCDN') > -1),
							disableMobileHover : true,
							autoMinRes : 1,
							general : general
						};

						window.sbi.feeds[index] = sbiGetNewFeed(this, index, feedOptions);
						window.sbi.feeds[index].setResizedImages();
						window.sbi.feeds[index].init();

						if (jQuery('.sbi_palette_dark').length) {
							jQuery('#sbi_lightbox').addClass('sbi_palette_dark_lightbox');
						} else if (jQuery('.sbi_palette_light').length) {
							jQuery('#sbi_lightbox').addClass('sbi_palette_light_lightbox');
						}

						var evt = jQuery.Event('sbiafterfeedcreate');
						evt.feed = window.sbi.feeds[index];
						jQuery(window).trigger(evt);

						// detect if touch device and disable hover
						if (flags.indexOf('disableOnTouch') === -1) {
							window.addEventListener('touchstart', function sbiOnFirstTouch() {
								if (typeof window.sbi.touchDevice === 'undefined') {
									window.sbi.touchDevice = true;
									$('.sbi_item').each(function() {
										var $self = jQuery(this);

										if (!$self.find('.sbi_link').hasClass('sbi_disable_lightbox')) {
											$self.find('.sbi_photo_wrap').prepend($self.find('.sbi_link_area'));
											$self.find('.sbi_link').remove();
										}
									});
								}
								window.removeEventListener('touchstart', sbiOnFirstTouch, false);
							}, false);
						}
					})
				);
			},
			afterFeedsCreated: function () {
				// enable header hover action
				$('.sb_instagram_header').each(function () {
					var $thisHeader = $(this);
					$thisHeader.find('.sbi_header_link').on('mouseenter mouseleave', function(e) {
						switch(e.type) {
							case 'mouseenter':
								$thisHeader.find('.sbi_header_img_hover').addClass('sbi_fade_in');
								break;
							case 'mouseleave':
								$thisHeader.find('.sbi_header_img_hover').removeClass('sbi_fade_in');
								break;
						}
					});

				});

			},
			encodeHTML: function(raw) {
				// make sure passed variable is defined
				if (typeof raw === 'undefined') {
					return '';
				}
				// replace greater than and less than symbols with html entity to disallow html in comments
				var encoded = raw.replace(/(>)/g,'&gt;'),
					encoded = encoded.replace(/(<)/g,'&lt;');
				encoded = encoded.replace(/(&lt;br\/&gt;)/g,'<br>');
				encoded = encoded.replace(/(&lt;br&gt;)/g,'<br>');

				return encoded;
			},
			urlDetect: function(text) {
				var urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
				return text.match(urlRegex);
			}
		};

		function SbiFeed(el, index, settings) {
			this.el = el;
			this.index = index;
			this.settings = settings;
			this.minImageWidth = 0;
			this.imageResolution = 150;
			this.resizedImages = {};
			this.needsResizing = [];
			this.outOfPages = false;
			this.page = 1;
			this.isInitialized = false;
		}

		SbiFeed.prototype = {
			init: function() {
				var feed = this;
				feed.settings.consentGiven = feed.checkConsent();
				if ($(this.el).find('.sbi_photo').parent('p').length) {
					$(this.el).addClass('sbi_no_autop');
				}
				if ($(this.el).find('#sbi_mod_error').length) {
					$(this.el).prepend($(this.el).find('#sbi_mod_error'));
				}
				if (this.settings.ajaxPostLoad) {
					this.getNewPostSet();
				} else {
					this.afterInitialImagesLoaded();
					//Only check the width once the resize event is over
				}
				var sbi_delay = (function () {
					var sbi_timer = 0;
					return function (sbi_callback, sbi_ms) {
						clearTimeout(sbi_timer);
						sbi_timer = setTimeout(sbi_callback, sbi_ms);
					};
				})();
				jQuery(window).on('resize',function () {
					sbi_delay(function () {
						feed.afterResize();
					}, 500);
				});

				$(this.el).find('.sbi_item').each(function() {
					feed.lazyLoadCheck($(this));
				});
			},
			initLayout: function() {

			},
			afterInitialImagesLoaded: function() {
				this.initLayout();
				this.loadMoreButtonInit();
				this.hideExtraImagesForWidth();
				this.beforeNewImagesRevealed();
				this.revealNewImages();
				this.afterNewImagesRevealed();
			},
			afterResize: function() {
				this.setImageHeight();
				this.setImageResolution();
				this.maybeRaiseImageResolution();
				this.setImageSizeClass();
				this.setHeaderWidthClass();
			},
			afterLoadMoreClicked: function($button) {
				$button.find('.sbi_loader').removeClass('sbi_hidden');
				$button.find('.sbi_btn_text').addClass('sbi_hidden');
				$button.closest('.sbi').find('.sbi_num_diff_hide').addClass('sbi_transition').removeClass('sbi_num_diff_hide');
			},
			afterNewImagesLoaded: function() {
				var $self = $(this.el),
					feed = this;
				this.beforeNewImagesRevealed();
				this.revealNewImages();
				this.afterNewImagesRevealed();
				setTimeout(function () {
					//Hide the loader in the load more button
					$self.find('.sbi_loader').addClass('sbi_hidden');
					$self.find('.sbi_btn_text').removeClass('sbi_hidden');
					feed.maybeRaiseImageResolution();
				}, 500);
			},
			beforeNewImagesRevealed: function() {
				this.setImageHeight();
				this.maybeRaiseImageResolution(true);
				this.setImageSizeClass();
				this.setHeaderWidthClass();
			},
			revealNewImages: function() {
				var $self = $(this.el),
					feed = this;

				$self.find('.sbi-screenreader').each(function() {
					$(this).find('img').remove();
				});

				// Call Custom JS if it exists
				if (typeof sbi_custom_js == 'function') setTimeout(function(){ sbi_custom_js(); }, 100);

				this.applyImageLiquid();
				$self.find('.sbi_item').each(function (index) {
					var $self = jQuery(this);

					//Photo links
					//If lightbox is disabled
					$self.find('.sbi_photo').hover(function () {
						jQuery(this).fadeTo(200, 0.85);
					}, function () {
						jQuery(this).stop().fadeTo(500, 1);
					});
				}); //End .sbi_item each

				//Remove the new class after 500ms, once the sorting is done
				setTimeout(function () {
					jQuery('#sbi_images .sbi_item.sbi_new').removeClass('sbi_new');
					//Loop through items and remove class to reveal them
					var time = 10;
					$self.find('.sbi_transition').each(function() {
						var $sbi_item_transition_el = jQuery(this);

						setTimeout( function(){
							$sbi_item_transition_el.removeClass('sbi_transition');
						}, time);
						time += 10;
					});
				}, 500);
			},
			lazyLoadCheck: function($item){
				var feed = this;
				if ($item.find('.sbi_photo').length && !$item.closest('.sbi').hasClass('sbi-no-ll-check')) {
					var imgSrcSet = feed.getImageUrls($item),
						maxResImage = typeof imgSrcSet[640] !== 'undefined' ?  imgSrcSet[640] : $item.find('.sbi_photo').attr('data-full-res');

					if (!feed.settings.consentGiven) {
						if (maxResImage.indexOf('scontent') > -1) {
							return;
						}
					}

					$item.find('.sbi_photo img').each(function() {
						if (maxResImage && typeof $(this).attr('data-src') !== 'undefined') {
							$(this).attr('data-src',maxResImage);
						}
						if (maxResImage && typeof $(this).attr('data-orig-src') !== 'undefined') {
							$(this).attr('data-orig-src',maxResImage);
						}
						$(this).on('load',function() {
							if (!$(this).hasClass('sbi-replaced')
								&& $(this).attr('src').indexOf('placeholder') > -1) {
								$(this).addClass('sbi-replaced');
								if (maxResImage) {
									$(this).attr('src',maxResImage);
									if ($(this).closest('.sbi_imgLiquid_bgSize').length) {
										$(this).closest('.sbi_imgLiquid_bgSize').css('background-image', 'url(' + maxResImage + ')');
									}
								}
							}
						});
					});
				}
			},
			afterNewImagesRevealed: function() {
				this.listenForVisibilityChange();
				this.sendNeedsResizingToServer();
				if (!this.settings.imageLoadEnabled) {
					$('.sbi_no_resraise').removeClass('sbi_no_resraise');
				}
			},
			setResizedImages: function () {
				if ($(this.el).find('.sbi_resized_image_data').length
					&& typeof $(this.el).find('.sbi_resized_image_data').attr('data-resized') !== 'undefined'
					&& $(this.el).find('.sbi_resized_image_data').attr('data-resized').indexOf('{"') === 0) {
					this.resizedImages = JSON.parse($(this.el).find('.sbi_resized_image_data').attr('data-resized'));
					$(this.el).find('.sbi_resized_image_data').remove();
				} else if (typeof window.sbiresizedImages !== 'undefined') {
					this.resizedImages = window.sbiresizedImages;
				}
			},
			sendNeedsResizingToServer: function() {
				var $self = $(this.el),
					feed = this;
				var locatorNonce = '';
				if ( typeof $self.attr( 'data-locatornonce' ) !== 'undefined' ) {
					locatorNonce = $self.attr( 'data-locatornonce' );
				}
				if (feed.needsResizing.length > 0 && feed.settings.resizingEnabled) {
					var itemOffset = $(this.el).find('.sbi_item').length,
						cacheAll = typeof feed.settings.general.cache_all !== 'undefined' ? feed.settings.general.cache_all : false;

					if ($('#sbi-builder-app').length) {
						if (typeof window.sbiresizeTriggered !== 'undefined' && window.sbiresizeTriggered) {
							return;
						} else {
							window.sbiresizeTriggered = true;
						}
					}

					var submitData = {
						action: 'sbi_resized_images_submit',
						needs_resizing: feed.needsResizing,
						offset: itemOffset,
						feed_id: feed.settings.feedID,
						atts: feed.settings.shortCodeAtts,
						location: feed.locationGuess(),
						post_id: feed.settings.postID,
						cache_all: cacheAll,
						locator_nonce: locatorNonce
					};
					var onSuccess = function(data) {
						var response = data?.data;

						if (typeof data !== 'object' && data.trim().indexOf('{') === 0) {
							response = JSON.parse(data.trim());
						}
						if (feed.settings.debugEnabled) {
							console.log(response);
						}
						for (var property in response) {
							if (response.hasOwnProperty(property)) {
								feed.resizedImages[property] = response[property];
							}
						}
						feed.maybeRaiseImageResolution();

						setTimeout(function() {
							feed.afterResize();
						},500);
						if ($('#sbi-builder-app').length) {
							window.sbiresizeTriggered = false;
						}
					};
					sbiAjax(submitData,onSuccess);
				} else if (feed.settings.locator) {
					var submitData = {
						action: 'sbi_do_locator',
						feed_id: feed.settings.feedID,
						atts: feed.settings.shortCodeAtts,
						location: feed.locationGuess(),
						post_id: feed.settings.postID,
						locator_nonce: locatorNonce
					};
					var onSuccess = function(data) {

					};
					sbiAjax(submitData,onSuccess);
				}
			},
			loadMoreButtonInit: function () {
				var $self = $(this.el),
					feed = this;
				$self.find('#sbi_load .sbi_load_btn').off().on('click', function () {

					feed.afterLoadMoreClicked(jQuery(this));
					feed.getNewPostSet();

				}); //End click event
			},
			getNewPostSet: function () {
				var $self = $(this.el),
					feed = this;
				feed.page ++;
				var locatorNonce = '';
				if ( typeof $self.attr( 'data-locatornonce' ) !== 'undefined' ) {
					locatorNonce = $self.attr( 'data-locatornonce' );
				}
				var itemOffset = $self.find('.sbi_item').length,
					submitData = {
						action: 'sbi_load_more_clicked',
						offset: itemOffset,
						page: feed.page,
						feed_id: feed.settings.feedID,
						atts: feed.settings.shortCodeAtts,
						location: feed.locationGuess(),
						post_id: feed.settings.postID,
						current_resolution: feed.imageResolution,
						locator_nonce: locatorNonce
					};
				var onSuccess = function (data) {
					var response = data?.data;

					if (typeof data !== 'object' && data.trim().indexOf('{') === 0) {
						response = JSON.parse(data.trim());
					}
					if (feed.settings.debugEnabled) {
						console.log(response);
					}
					feed.appendNewPosts(response.html);
					feed.addResizedImages(response.resizedImages);
					if (feed.settings.ajaxPostLoad) {
						feed.settings.ajaxPostLoad = false;
						feed.afterInitialImagesLoaded();
					} else {
						feed.afterNewImagesLoaded();
					}

					if (!response.feedStatus.shouldPaginate) {
						feed.outOfPages = true;
						$self.find('.sbi_load_btn').hide();
					} else {
						feed.outOfPages = false;
					}
					$('.sbi_no_js').removeClass('sbi_no_js');

				};
				sbiAjax(submitData, onSuccess);
			},
			appendNewPosts: function (newPostsHtml) {
				var $self = $(this.el),
					feed = this;
				if ($self.find('#sbi_images .sbi_item').length) {
					$self.find('#sbi_images .sbi_item').last().after(newPostsHtml);
				} else {
					$self.find('#sbi_images').append(newPostsHtml);
				}
			},
			addResizedImages: function (resizedImagesToAdd) {
				for (var imageID in resizedImagesToAdd) {
					this.resizedImages[imageID] = resizedImagesToAdd[imageID];
				}
			},
			setImageHeight: function() {
				var $self = $(this.el);

				var sbi_photo_width = $self.find('.sbi_photo').eq(0).innerWidth();

				//Figure out number of columns for either desktop or mobile
				var sbi_num_cols = this.getColumnCount();

				//Figure out what the width should be using the number of cols
				//Figure out what the width should be using the number of cols
				var imagesPadding = $self.find('#sbi_images').innerWidth() - $self.find('#sbi_images').width(),
					imagepadding = imagesPadding / 2;
				sbi_photo_width_manual = ( $self.find('#sbi_images').width() / sbi_num_cols ) - imagesPadding;
				//If the width is less than it should be then set it manually
				//if( sbi_photo_width <= (sbi_photo_width_manual) ) sbi_photo_width = sbi_photo_width_manual;

				// Get the selected aspect ratio from settings
				var aspectRatio = '1:1'; // Default to square
				if (typeof this.settings.general.imageaspectratio !== 'undefined') {
					aspectRatio = this.settings.general.imageaspectratio;
				}

				// Calculate height based on aspect ratio
				var height;
				if (aspectRatio === '4:5') {
					height = sbi_photo_width * 1.25; // 4:5 ratio (1.25)
				} else if (aspectRatio === '3:4') {
					height = sbi_photo_width * 1.33; // 3:4 ratio (1.33)
				} else {
					height = sbi_photo_width; // 1:1 ratio (square)
				}
				$self.find('.sbi_photo').css('height', height);

				//Set the position of the carousel arrows
				if ($self.find('.sbi-owl-nav').length) {
					setTimeout(function(){
						//If there's 2 rows then adjust position
						var sbi_ratio = 2;
						if( $self.find('.sbi_owl2row-item').length ) sbi_ratio = 1;

						var sbi_arrows_top = ($self.find('.sbi_photo').eq(0).innerWidth()/sbi_ratio);
						sbi_arrows_top += parseInt(imagepadding)*(2+(2-sbi_ratio));
						$self.find('.sbi-owl-nav div').css('top', sbi_arrows_top);
					}, 100);
				}

			},
			maybeRaiseSingleImageResolution: function ($item, index, forceChange) {
				var feed = this,
					imgSrcSet = feed.getImageUrls($item),
					currentUrl = $item.find('.sbi_photo img').attr('src'),
					currentRes = 150,
					imagEl = $item.find('img').get(0),
					aspectRatio = currentUrl === window.sbi.options.placeholder ? 1 : imagEl.naturalWidth/imagEl.naturalHeight,
					forceChange = typeof forceChange !== 'undefined' ? forceChange : false;

				if ($item.hasClass('sbi_no_resraise') || $item.hasClass('sbi_had_error') || ($item.find('.sbi_link_area').length && $item.find('.sbi_link_area').hasClass('sbi_had_error'))) {
					return;
				}

				if (imgSrcSet.length < 1) {
					if ($item.find('.sbi_link_area').length) {
						$item.find('.sbi_link_area').attr('href',window.sbi.options.placeholder.replace('placeholder.png','thumb-placeholder.png'))
					}
					return;
				} else if ($item.find('.sbi_link_area').length && $item.find('.sbi_link_area').attr('href') === window.sbi.options.placeholder.replace('placeholder.png','thumb-placeholder.png')
					|| !feed.settings.consentGiven) {
					$item.find('.sbi_link_area').attr('href',imgSrcSet[imgSrcSet.length - 1])
				}
				if (typeof imgSrcSet[640] !== 'undefined') {
					$item.find('.sbi_photo').attr('data-full-res',imgSrcSet[640]);
				}

				$.each(imgSrcSet, function (index, value) {
					if (value === currentUrl) {
						currentRes = parseInt(index);
						// If the image has already been changed to an existing real source, don't force the change
						forceChange = false;
					}
				});
				//Image res
				var newRes = 640;
				switch (feed.settings.imgRes) {
					case 'thumb':
						newRes = 150;
						break;
					case 'medium':
						newRes = 320;
						break;
					case 'full':
						newRes = 640;
						break;
					default:
						var minImageWidth = Math.max(feed.settings.autoMinRes,$item.find('.sbi_photo').innerWidth()),
							thisImageReplace = feed.getBestResolutionForAuto(minImageWidth, aspectRatio, $item);
						switch (thisImageReplace) {
							case 320:
								newRes = 320;
								break;
							case 150:
								newRes = 150;
								break;
						}
						break;
				}

				if (newRes > currentRes || currentUrl === window.sbi.options.placeholder || forceChange) {
					if (feed.settings.debugEnabled) {
						var reason = currentUrl === window.sbi.options.placeholder ? 'was placeholder' : 'too small';
						console.log('rais res for ' + currentUrl, reason);
					}
					var newUrl = imgSrcSet[newRes].split("?ig_cache_key")[0];
					if (currentUrl !== newUrl) {
						$item.find('.sbi_photo img').attr('src', newUrl);
						$item.find('.sbi_photo').css('background-image', 'url("' + newUrl + '")');
					}
					currentRes = newRes;

					if (feed.settings.imgRes === 'auto') {
						var checked = false;
						$item.find('.sbi_photo img').on('load', function () {

							var $this_image = $(this);
							var newAspectRatio = ($this_image.get(0).naturalWidth / $this_image.get(0).naturalHeight);

							if ($this_image.get(0).naturalWidth !== 1000 && newAspectRatio > aspectRatio && !checked) {
								if (feed.settings.debugEnabled) {
									console.log('rais res again for aspect ratio change ' + currentUrl);
								}
								checked = true;
								minImageWidth = $item.find('.sbi_photo').innerWidth();
								thisImageReplace = feed.getBestResolutionForAuto(minImageWidth, newAspectRatio, $item);
								newRes = 640;

								switch (thisImageReplace) {
									case 320:
										newRes = 320;
										break;
									case 150:
										newRes = 150;
										break;
								}

								if (newRes > currentRes) {
									newUrl = imgSrcSet[newRes].split("?ig_cache_key")[0];
									$this_image.attr('src', newUrl);
									$this_image.closest('.sbi_photo').css('background-image', 'url("' + newUrl + '")');
								}
								if (feed.layout === 'masonry' || feed.layout === 'highlight') {
									$(feed.el).find('#sbi_images').smashotope(feed.isotopeArgs);
									setTimeout(function() {
										$(feed.el).find('#sbi_images').smashotope(feed.isotopeArgs);
									},500)
								}
							} else {
								if (feed.settings.debugEnabled) {
									var reason = checked ? 'already checked' : 'no aspect ratio change';
//                  console.log('not raising res for replacement  ' + currentUrl, reason);
								}
							}
						});
					}


				}

				$item.find('img').on('error', function () {
					if (!$(this).hasClass('sbi_img_error')) {
						$(this).addClass('sbi_img_error');
						var sourceFromAPI = ($(this).attr('src').indexOf('media/?size=') > -1 || $(this).attr('src').indexOf('cdninstagram') > -1 || $(this).attr('src').indexOf('fbcdn') > -1)

						if (!sourceFromAPI) {

							if ($(this).closest('.sbi_photo').attr('data-img-src-set') !== 'undefined') {
								var srcSet = JSON.parse($(this).closest('.sbi_photo').attr('data-img-src-set').replace(/\\\//g, '/'));
								if (typeof srcSet.d !== 'undefined') {
									$(this).attr('src', srcSet.d);
									$(this).closest('.sbi_photo').css('background-image', 'url(' + srcSet.d + ')');
									$(this).closest('.sbi_item').addClass('sbi_had_error').find('.sbi_link_area').attr('href', srcSet[640]).addClass('sbi_had_error');
								}
							}
						} else {
							feed.settings.favorLocal = true;
							var srcSet = feed.getImageUrls($(this).closest('.sbi_item'));
							if (typeof srcSet[640] !== 'undefined') {
								$(this).attr('src', srcSet[640]);
								$(this).closest('.sbi_photo').css('background-image', 'url(' + srcSet[640] + ')');
								$(this).closest('.sbi_item').addClass('sbi_had_error').find('.sbi_link_area').attr('href', srcSet[640]).addClass('sbi_had_error');
							}
						}
						setTimeout(function() {
							feed.afterResize();
						}, 1500)
					} else {
						console.log('unfixed error ' + $(this).attr('src'));
					}
				});
			},
			maybeRaiseImageResolution: function (justNew) {
				var feed = this,
					itemsSelector = typeof justNew !== 'undefined' && justNew === true ? '.sbi_item.sbi_new' : '.sbi_item',
					forceChange = !feed.isInitialized ? true : false;
				$(feed.el).find(itemsSelector).each(function (index) {
					if (!$(this).hasClass('sbi_num_diff_hide')
						&& $(this).find('.sbi_photo').length
						&& typeof $(this).find('.sbi_photo').attr('data-img-src-set') !== 'undefined') {
						feed.maybeRaiseSingleImageResolution($(this),index,forceChange);
					}
				}); //End .sbi_item each
				feed.isInitialized = true;
			},
			getBestResolutionForAuto: function(colWidth, aspectRatio, $item) {
				if (isNaN(aspectRatio) || aspectRatio < 1) {
					aspectRatio = 1;
				}
				var bestWidth = colWidth * aspectRatio,
					bestWidthRounded = Math.ceil(bestWidth / 10) * 10,
					customSizes = [150, 320, 640];

				if ($item.hasClass('sbi_highlighted')) {
					bestWidthRounded = bestWidthRounded *2;
				}

				if (customSizes.indexOf(parseInt(bestWidthRounded)) === -1) {
					var done = false;
					$.each(customSizes, function (index, item) {
						if (item > parseInt(bestWidthRounded) && !done) {
							bestWidthRounded = item;

							done = true;
						}
					});
				}

				return bestWidthRounded;
			},
			removeExtraCarouselPages: function(num) {

			},
			hideExtraImagesForWidth: function() {
				if (this.layout === 'carousel') {
					return;
				}
				var $self = $(this.el),
					num = typeof $self.attr('data-num') !== 'undefined' && $self.attr('data-num') !== '' ? parseInt($self.attr('data-num')) : 1,
					nummobile = typeof $self.attr('data-nummobile') !== 'undefined' && $self.attr('data-nummobile') !== '' ? parseInt($self.attr('data-nummobile')) : num;

				if ($(window).width() < 480 || window.sbi_preview_device === 'mobile') {
					if (nummobile < $self.find('.sbi_item').length) {
						$self.find('.sbi_item').slice(nummobile - $self.find('.sbi_item').length).addClass('sbi_num_diff_hide');
					}
				} else {
					if (num < $self.find('.sbi_item').length) {
						$self.find('.sbi_item').slice(num - $self.find('.sbi_item').length).addClass('sbi_num_diff_hide');
					}
				}
			},
			setImageSizeClass: function () {
				var $self = $(this.el);
				$self.removeClass('sbi_small sbi_medium sbi_large');
				var feedWidth = $self.innerWidth(),
					photoPadding = parseInt(($self.find('#sbi_images').outerWidth() - $self.find('#sbi_images').width())),
					cols = this.getColumnCount(),
					feedWidthSansPadding = feedWidth - (photoPadding * (cols+2)),
					colWidth = (feedWidthSansPadding / cols);
				if (colWidth > 300 ) {
					$self.addClass('sbi_large');
				} else if (colWidth > 150 && colWidth < 240) {
					$self.addClass('sbi_medium');
				} else if (colWidth <= 150) {
					$self.addClass('sbi_small');
				}
			},
			setHeaderWidthClass: function () {
				var $self = $(this.el);
				$self.removeClass('sbi_header_small');
				var feedWidth = $self.innerWidth();
				if (feedWidth < 600 ) {
					$self.addClass('sbi_header_small');
				}
			},
			setMinImageWidth: function () {
				if ($(this.el).find('.sbi_item .sbi_photo').first().length) {
					this.minImageWidth = $(this.el).find('.sbi_item .sbi_photo').first().innerWidth();
				} else {
					this.minImageWidth = 150;
				}
			},
			setImageResolution: function () {
				if (this.settings.imgRes === 'auto') {
					this.imageResolution = 'auto';
				} else {
					switch (this.settings.imgRes) {
						case 'thumb':
							this.imageResolution = 150;
							break;
						case 'medium':
							this.imageResolution = 320;
							break;
						default:
							this.imageResolution = 640;
					}
				}
			},
			getImageUrls: function ($item) {
				var srcSet = JSON.parse($item.find('.sbi_photo').attr('data-img-src-set').replace(/\\\//g, '/')),
					id = $item.attr('id').replace('sbi_', '');
				if (!this.settings.consentGiven && !this.settings.overrideBlockCDN) {
					srcSet = [];
				}
				if (typeof this.resizedImages[id] !== 'undefined'
					&& this.resizedImages[id] !== 'video'
					&& this.resizedImages[id] !== 'pending'
					&& this.resizedImages[id].id !== 'error'
					&& this.resizedImages[id].id !== 'video'
					&& this.resizedImages[id].id !== 'pending') {

					if (typeof this.resizedImages[id]['sizes'] !== 'undefined') {
						var foundSizes = [];
						var extension = (typeof this.resizedImages[id]['extension'] !== 'undefined') ? this.resizedImages[id]['extension'] : '.jpg';
						if (typeof this.resizedImages[id]['sizes']['full'] !== 'undefined') {
							srcSet[640] = sb_instagram_js_options.resized_url + this.resizedImages[id].id + 'full' + extension;
							foundSizes.push(640);
						}
						if (typeof this.resizedImages[id]['sizes']['low'] !== 'undefined') {
							srcSet[320] = sb_instagram_js_options.resized_url + this.resizedImages[id].id + 'low' + extension;
							foundSizes.push(320);
						}
						if (typeof this.resizedImages[id]['sizes']['thumb'] !== 'undefined') {
							foundSizes.push(150);
							srcSet[150] = sb_instagram_js_options.resized_url + this.resizedImages[id].id + 'thumb' + extension;
						}
						if (this.settings.favorLocal) {
							if (foundSizes.indexOf(640) === -1) {
								if (foundSizes.indexOf(320) > -1) {
									srcSet[640] = sb_instagram_js_options.resized_url + this.resizedImages[id].id + 'low' + extension;
								}
							}
							if (foundSizes.indexOf(320) === -1) {
								if (foundSizes.indexOf(640) > -1) {
									srcSet[320] = sb_instagram_js_options.resized_url + this.resizedImages[id].id + 'full' + extension;
								} else if (foundSizes.indexOf(150) > -1) {
									srcSet[320] = sb_instagram_js_options.resized_url + this.resizedImages[id].id + 'thumb' + extension;
								}
							}
							if (foundSizes.indexOf(150) === -1) {
								if (foundSizes.indexOf(320) > -1) {
									srcSet[150] = sb_instagram_js_options.resized_url + this.resizedImages[id].id + 'low' + extension;
								} else if (foundSizes.indexOf(640) > -1) {
									srcSet[150] = sb_instagram_js_options.resized_url + this.resizedImages[id].id + 'full' + extension;
								}
							}
						}
					}
				} else if (typeof this.resizedImages[id] === 'undefined'
					|| (typeof this.resizedImages[id]['id'] !== 'undefined' && this.resizedImages[id]['id'] !== 'pending' && this.resizedImages[id]['id'] !== 'error')) {
					this.addToNeedsResizing(id);
				}

				return srcSet;
			},
			getAvatarUrl: function (username,favorType) {
				if (username === '') {
					return '';
				}

				var availableAvatars = this.settings.general.avatars,
					favorType = typeof favorType !== 'undefined' ? favorType : 'local';

				if (favorType === 'local') {
					if (typeof availableAvatars['LCL'+username] !== 'undefined' && availableAvatars['LCL'+username] !== 0) {
						return availableAvatars['LCL'+username];
					} else if (typeof availableAvatars[username] !== 'undefined') {
						return availableAvatars[username];
					} else {
						return '';
					}
				} else {
					if (typeof availableAvatars[username] !== 'undefined') {
						return availableAvatars[username];
					} else if (typeof availableAvatars['LCL'+username] !== 'undefined' && availableAvatars['LCL'+username] !== 0)  {
						return availableAvatars['LCL'+username];
					} else {
						return '';
					}
				}
			},
			addToNeedsResizing: function (id) {
				if (this.needsResizing.indexOf(id) === -1) {
					this.needsResizing.push(id);
				}
			},
			applyImageLiquid: function () {
				var $self = $(this.el),
					feed = this;
				sbiAddImgLiquid();
				if (typeof $self.find(".sbi_photo").sbi_imgLiquid == 'function') {
					$self.find(".sbi_photo").sbi_imgLiquid({fill: true});
				}
			},
			listenForVisibilityChange: function() {
				var feed = this;
				sbiAddVisibilityListener();
				if (typeof $(this.el).filter(':hidden').sbiVisibilityChanged == 'function') {
					//If the feed is initially hidden (in a tab for example) then check for when it becomes visible and set then set the height
					$(this.el).filter(':hidden').sbiVisibilityChanged({
						callback: function (element, visible) {
							feed.afterResize();
						},
						runOnLoad: false
					});
				}
			},
			getColumnCount: function() {
				var $self = $(this.el),
					cols = this.settings.cols,
					colsmobile = this.settings.colsmobile,
					colstablet = this.settings.colstablet,
					returnCols = cols;

				sbiWindowWidth = window.innerWidth;

				if ($self.hasClass('sbi_mob_col_auto')) {
					if (sbiWindowWidth < 640 && (parseInt(cols) > 2 && parseInt(cols) < 7)) returnCols = 2;
					if (sbiWindowWidth < 640 && (parseInt(cols) > 6 && parseInt(cols) < 11)) returnCols = 4;
					if (sbiWindowWidth <= 480 && parseInt(cols) > 2) returnCols = 1;
				} else {
					if (sbiWindowWidth <= 480) {
						returnCols = colsmobile;
					} else if (sbiWindowWidth <= 640) {
						returnCols = colstablet;
					}
				}

				return parseInt(returnCols);
			},
			checkConsent: function() {
				if (this.settings.consentGiven || !this.settings.gdpr) {
					return true;
				}
				if (typeof window.WPConsent !== 'undefined') {
					if (window.WPConsent.hasConsent('marketing')) {
						try {
							this.settings.consentGiven = true;
						} catch(e) {
							// Fallback to window object if cookie parsing fails
							this.settings.consentGiven = false;
						}
					} else {
						// Fallback to window object if cookie not found
						this.settings.consentGiven = false;
					}
				} else if (typeof window.cookieyes !== "undefined") { // CookieYes | GDPR Cookie Consent by CookieYes
					if (typeof window.cookieyes._ckyConsentStore.get !== 'undefined') {
						this.settings.consentGiven = window.cookieyes._ckyConsentStore.get('functional') === 'yes';
					}
				} else if (typeof CLI_Cookie !== "undefined") { // GDPR Cookie Consent by WebToffee

					if (CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) !== null)  {

						// WebToffee no longer uses this cookie but being left here to maintain backwards compatibility
						if (CLI_Cookie.read('cookielawinfo-checkbox-non-necessary') !== 'null') {
							this.settings.consentGiven = CLI_Cookie.read('cookielawinfo-checkbox-non-necessary') === 'yes';
						}

						if (CLI_Cookie.read('cookielawinfo-checkbox-necessary') !== 'null') {
							this.settings.consentGiven = CLI_Cookie.read('cookielawinfo-checkbox-necessary') === 'yes';
						}
					}
				} else if (typeof window.cnArgs !== "undefined") { // Cookie Notice by dFactory
					var value = "; " + document.cookie,
						parts = value.split( '; cookie_notice_accepted=' );

					if ( parts.length === 2 ) {
						var val = parts.pop().split( ';' ).shift();

						this.settings.consentGiven = (val === 'true');
					}
				} else if (typeof window.complianz !== 'undefined' || typeof window.cookieconsent !== 'undefined') { // Complianz by Really Simple Plugins
					this.settings.consentGiven = sbiCmplzGetCookie('cmplz_marketing') === 'allow';
				} else if (typeof window.Cookiebot !== "undefined") { // Cookiebot by Cybot A/S
					this.settings.consentGiven = Cookiebot.consented;
				} else if (typeof window.BorlabsCookie !== 'undefined') { // Borlabs Cookie by Borlabs
					this.settings.consentGiven = typeof window.BorlabsCookie.Consents !== 'undefined' ? window.BorlabsCookie.Consents.hasConsent('instagram') : window.BorlabsCookie.checkCookieConsent('instagram');
				} else if (sbiCmplzGetCookie('moove_gdpr_popup')) { // GDPR Cookie Compliance by Moove Agency
					var moove_gdpr_popup = JSON.parse(decodeURIComponent(sbiCmplzGetCookie('moove_gdpr_popup')));
					this.settings.consentGiven = typeof moove_gdpr_popup.thirdparty !== "undefined" && moove_gdpr_popup.thirdparty === "1";
				}

				var evt = jQuery.Event('sbicheckconsent');
				evt.feed = this;
				jQuery(window).trigger(evt);

				return this.settings.consentGiven; // GDPR not enabled
			},
			afterConsentToggled: function() {
				if (this.checkConsent()) {
					var feed = this;
					feed.maybeRaiseImageResolution();

					setTimeout(function() {
						feed.afterResize();
					},500);
				}
			},
			locationGuess: function() {
				var $feed = $(this.el),
					location = 'content';

				if ($feed.closest('footer').length) {
					location = 'footer';
				} else if ($feed.closest('.header').length
					|| $feed.closest('header').length) {
					location = 'header';
				} else if ($feed.closest('.sidebar').length
					|| $feed.closest('aside').length) {
					location = 'sidebar';
				}

				return location;
			},
		};

		function SbiFeedPro(el, index, settings) {
			SbiFeed.call(this, el, index, settings);

			this.initLayout = function () {
				var context = this,
					$sbi = $(this.el),
					layout = 'grid',
					cols = settings.cols,
					colsmobile = settings.general.colsmobile;
				colstablet = settings.general.colstablet;

				this.$header = false;
				if ($sbi.find('.sb_instagram_header').length) {
					this.$header = $sbi.find('.sb_instagram_header');
				} else if ($sbi.prev('.sb_instagram_header').length) {
					this.$header = $sbi.prev('.sb_instagram_header');
				}

				this.storyData = false;
				if (this.$header !== false && typeof this.$header.attr('data-story-data') !== 'undefined') {
					this.storyData = JSON.parse(this.$header.attr('data-story-data'));
					this.storyAvatar = typeof this.$header.attr('data-story-avatar') !== 'undefined' ? this.$header.attr('data-story-avatar') : '';
					this.storyWait = typeof this.$header.attr('data-story-wait') !== 'undefined' ? this.$header.attr('data-story-wait') : '';
					this.$header.addClass('sbi_story');
					this.$header.find('.sbi_new_logo').replaceWith('<span class="sbi_new_logo"></span>');
					this.$header.find('.sbi_header_link').attr('data-lightbox-sbi','story'+$sbi.attr('data-sbi-index'));
				}

				if (typeof settings.general.moderationLink !== 'undefined') {
					$sbi.prepend('<a href="javascript:void(0);" class="sbi_moderation_link"><svg class="svg-inline--fa fa-edit fa-w-18" style="max-width: 24px;" aria-hidden="true" data-fa-processed="" data-prefix="far" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>Moderate feed</a>');

					$sbi.find('.sbi_moderation_link').on('click',function() {
						var modIndex = $sbi.attr('data-sbi-index');

						var url = window.location.href;
						modIndex = modIndex.substring(0,10);
						if (url.indexOf('sbi_moderation_mode=true') == -1) {
							if (url.indexOf('?') > -1) {
								url += '&sbi_moderation_mode=true&sbi_moderation_index='+modIndex;
							} else {
								url += '?sbi_moderation_mode=true&sbi_moderation_index='+modIndex;
							}
						}
						window.location.href = url;
					});
				}

				if (typeof context.settings.general.mediavine !== 'undefined') {
					$sbi.addClass('sbi_mediavine');
				}

				if (typeof context.settings.general.modindex !== 'undefined') {

					$sbi.css({
						width: '100%',
						height: '100%',
						background: '#fff'
					});
					$sbi.find('#sbi_images').css({
						padding: '5px',
					});
					$sbi.addClass('sbi_moderation_mode');
					context.settings.general.autoscroll = false;
					context.settings.general.captionlinks = false;
					var sbiModIndex = $sbi.attr('data-sbi-index');
					if (parseInt(context.settings.general.modindex) === parseInt(sbiModIndex) || $sbi.hasClass('sbi_mod_merged') || jQuery('.sbi').length < 2) {
						modMode.setStatus(true);
						$sbi.find('.sbi_moderation_link').remove();
					} else {
						modMode.setStatus(false);
					}

					//Set some feed options that help with mod mode
					if (modMode.status === true) {
						modMode.$self = $sbi;
						if(!modMode.$self.hasClass('sbi_mod_merged')) {
							if (typeof context.settings.general.whiteListName !== 'undefined') {
								modMode.setWhiteListData(settings.general.whiteListName, settings.general.whiteListIDs);
							}
							if (typeof context.settings.general.hidePhotos !== 'undefined') {
								modMode.dbHidePhotos = settings.general.hidePhotos;
							}
						}
						modMode.mergeDBAndSelected();
					}

					//Add a query parameter to the url and refresh the page to enable mod mode
					jQuery('.sbi_moderation_link').on('click',function() {
						var modIndex = 'b';
						if (typeof jQuery(this).closest('.sbi').attr('data-sbi-index') !== 'undefined') {
							modIndex = jQuery(this).closest('.sbi').attr('data-sbi-index');
						} else {
							modIndex = 'noclass';
						}

						var url = window.location.href;
						modIndex = modIndex.substring(0,10);
						if (url.indexOf('sbi_moderation_mode=true') == -1) {
							if (url.indexOf('?') > -1) {
								url += '&sbi_moderation_mode=true&sbi_moderation_index='+modIndex;
							} else {
								url += '?sbi_moderation_mode=true&sbi_moderation_index='+modIndex;
							}
						}
						window.location.href = url;
					});
				} else if (typeof context.settings.general.carousel !== 'undefined') {
					layout = 'carousel';
				} else if (typeof context.settings.general.highlight !== 'undefined') {
					layout = 'highlight';
				} else if (typeof context.settings.general.masonry !== 'undefined') {
					layout = 'masonry';
				}

				this.layout = layout;

				if ( layout === 'carousel' ) {
					$sbi.find('#sbi_images').addClass('sbi_carousel').attr('role','carousel');
					$sbi.find('#sbi_images').attr('style','display:block;');
					$sbi.find('.sbi_load_btn').remove();

					var itemPadding = typeof $sbi.attr('data-item-padding') !== 	'undefined' && $sbi.attr('data-item-padding') !== '' ? parseInt($sbi.attr('data-item-padding')) : 6,
						paddingWithUnit = itemPadding + 'px';

					$sbi.find('.sbi_item').css({
						'padding': paddingWithUnit
					});
					$sbi.find('.sbi_item').each(function() {
						$(this).attr('style',$(this).attr('style').replace('padding: '+paddingWithUnit,'padding: '+paddingWithUnit + ' !important'));
					});

					var arrows = context.settings.general.carousel[0],
						pagination = context.settings.general.carousel[1],
						autoplay = context.settings.general.carousel[2],
						time = context.settings.general.carousel[3],
						loop = context.settings.general.carousel[4],
						rows = context.settings.general.carousel[5];
					//Initiate carousel
					if( !autoplay ) time = false;

					//Set defaults for responsive breakpoints
					var itemsTabletSmall = cols,
						itemsMobile = cols,
						arrows = arrows ? 'onhover' : 'hide',
						autoplay = time !== false,
						has2rows = (rows == 2),
						loop = (!loop),
						onChange = function() {
							setTimeout(function(){
								context.afterResize();
							}, 250);
						},
						afterInit = function() {
							var $sbi = jQuery(context.el);
							$sbi.find('#sbi_images.sbi_carousel').fadeIn();
							setTimeout(function(){
								$sbi.find('#sbi_images.sbi_carousel .sbi_info, .sbi_owl2row-item,#sb_instagram #sbi_images.sbi_carousel').fadeIn();

							}, 50);

							setTimeout(function(){

								var $navElementsWrapper = $sbi.find('.sbi-owl-nav');
								if (arrows === 'onhover') {

								} else if (arrows === 'below') {
									var $dots = $sbi.find('.sbi-owl-dots'),
										$prev = $sbi.find('.sbi-owl-prev'),
										$next = $sbi.find('.sbi-owl-next'),
										$nav = $sbi.find('.sbi-owl-nav'),
										$dot = $sbi.find('.sbi-owl-dot'),
										widthDots = $dot.length * $dot.innerWidth(),
										maxWidth = $sbi.innerWidth();

									$prev.after($dots);

									$nav.css('position', 'relative');
									$next.css('position', 'absolute').css('top', '-6px').css('right', Math.max((.5 * $nav.innerWidth() - .5 * (widthDots) - $next.innerWidth() - 6), 0));
									$prev.css('position', 'absolute').css('top', '-6px').css('left', Math.max((.5 * $nav.innerWidth() - .5 * (widthDots) - $prev.innerWidth() - 6), 0));
								} else if (arrows === 'hide') {
									$navElementsWrapper.addClass('hide').hide();
								}
								if (window.sb_instagram_js_options.font_method === 'svg') {
									sbSVGify($sbi.find('#sbi_images.sbi_carousel'));
								}

							}, 100);
						};

					//Disable mobile layout
					if( $sbi.hasClass('sbi_mob_col_auto') ) {
						itemsTabletSmall = 2;
						if( parseInt(cols) != 2 ) itemsMobile = 1;
						if( parseInt(cols) == 2 ) itemsMobile = 2; //If the cols are set to 2 then don't change to 1 col on mobile
					} else {
						itemsMobile = colsmobile;
						itemsTabletSmall = colstablet;
					}

					this.carouselArgs = {
						items: cols,
						loop: loop,
						rewind: !loop,
						autoplay: autoplay,
						autoplayTimeout: Math.max(time,2000),
						autoplayHoverPause: true,
						nav: true,
						navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
						dots: pagination,
						owl2row: has2rows,
						responsive: {
							0: {
								items: itemsMobile
							},
							480: {
								items: itemsTabletSmall
							},
							640: {
								items: cols
							}
						},
						onChange: onChange,
						onInitialize: afterInit
					};

				} else if ( layout === 'highlight' || layout === 'masonry' ) {
					if ( layout === 'highlight' ) {
						$sbi.addClass('sbi_highlight');
					} else {
						$sbi.addClass('sbi_masonry');
						this.settings.autoMinRes = 150;
					}

					if ($sbi.find('#sbi_images').data('smashotope')) {
						$sbi.find('#sbi_images').smashotope('layout');
					}

					this.isotopeArgs = {
						itemSelector: '.sbi_item',
						layoutMode: 'packery',
						transitionDuration: 0,
						// options...
						resizable: false // disable normal resizing
					}
				}

				var evt = jQuery.Event('sbiafterlayoutinit');
				evt.feed = this;
				jQuery(window).trigger(evt);

				if (this.layout === 'highlight' || this.layout === 'masonry' ) {
					this.smashotopeInit();
				} else if ( this.layout === 'carousel' ) {
					var $self = $(this.el),
						num = typeof $self.attr('data-num') !== 'undefined' && $self.attr('data-num') !== '' ? parseInt($self.attr('data-num')) : 1,
						nummobile = typeof $self.attr('data-nummobile') !== 'undefined' && $self.attr('data-nummobile') !== '' ? parseInt($self.attr('data-nummobile')) : num;

					if ( num !== nummobile ) {
						var targetNum = num;
						if ($(window).width() < 480) {
							targetNum = nummobile;
						}
						if ( targetNum < $self.find('.sbi_item').length ) {
							$self.find('.sbi_item').slice(targetNum - $self.find('.sbi_item').length).remove();
						}
					}

					//come here
					$sbi.find('.sbi_carousel').sbiOwlCarousel(this.carouselArgs);
					if (parseInt(settings.general.carousel[5]) === 2) {
						$sbi.addClass('sbi_carousel_2_row');
					}

				}
			};

			this.appendNewPosts = function (newPostsHtml) {
				var $self = $(this.el),
					feed = this;
				if ($self.find('#sbi_images .sbi_item').length) {
					$self.find('#sbi_images .sbi_item').last().after(newPostsHtml);
				} else {
					$self.find('#sbi_images').append(newPostsHtml);
				}
				if (feed.layout === 'highlight' || feed.layout === 'masonry') {
					feed.appendSmashotope();
				}
			};

			this.setImageHeight = function() {
				var $self = $(this.el),
					isMasonry = $self.hasClass('sbi_masonry');

				if( !isMasonry){
					var sbi_photo_width = $self.find('.sbi_photo').eq(0).innerWidth();

					//Figure out number of columns for either desktop or mobile
					var sbi_num_cols = this.getColumnCount();

					//Figure out what the width should be using the number of cols
					//Figure out what the width should be using the number of cols
					var imagesPadding = $self.find('#sbi_images').innerWidth() - $self.find('#sbi_images').width(),
						imagepadding = imagesPadding / 2;
					sbi_photo_width_manual = ( $self.find('#sbi_images').width() / sbi_num_cols ) - imagesPadding;
					//If the width is less than it should be then set it manually
					//if( sbi_photo_width <= (sbi_photo_width_manual) ) sbi_photo_width = sbi_photo_width_manual;

					var itemPadding = typeof $self.attr('data-item-padding') !== 	'undefined' && $self.attr('data-item-padding') !== '' ? parseInt($self.attr('data-item-padding')) : 6;
					imagepadding = imagepadding == 0 ? itemPadding : imagepadding;

					// Get the selected aspect ratio from settings
					var aspectRatio = '1:1'; // Default to square
					if (typeof this.settings.general.imageaspectratio !== 'undefined') {
						aspectRatio = this.settings.general.imageaspectratio;
					}

					// Calculate height based on aspect ratio
					var height;
					if (aspectRatio === '4:5') {
						height = sbi_photo_width * 1.25; // 4:5 ratio (1.25)
					} else {
						height = sbi_photo_width; // 1:1 ratio (square)
					}

					$self.find('.sbi_photo').css('height', height);

					//Set the position of the carousel arrows
					if ($self.find('.sbi-owl-nav').length) {
						setTimeout(function(){
							//If there's 2 rows then adjust position
							var sbi_ratio = 2;
							if( $self.find('.sbi_owl2row-item').length ) sbi_ratio = 1;

							var photoHeight = typeof $self.find('.sbi_photo').eq(0).innerHeight() !== 'undefined' && $self.find('.sbi_photo').eq(0).innerHeight() !== '' ? parseInt($self.find('.sbi_photo').eq(0).innerHeight()) : 0,
								userInfoHeight = typeof $self.find('.sbi-user-info').eq(0).innerHeight() !== 'undefined' && $self.find('.sbi-user-info').eq(0).innerHeight() !== '' ? parseInt($self.find('.sbi-user-info').eq(0).innerHeight()) : 0,
								sbi_arrows_top = (photoHeight + userInfoHeight)/sbi_ratio;

							$self.find('.sbi-owl-nav div').css('top', sbi_arrows_top);
						}, 200);
					}

				}
				if (this.layout === 'highlight') {
					this.setHighlight();
				} else if (this.layout === 'masonry') {
					this.setMasonry();
				}
				if (this.layout === 'highlight' || this.layout === 'masonry' ) {
					this.smashotopeInit();
				}
			};

			this.smashotopeInit = function() {
				var $self = $(this.el);
				var $container = $self.find('#sbi_images'),
					columnWidth = '.sbi_item',
					calcCols = this.getColumnCount();
				if (this.layout === 'highlight') {
					columnWidth = $container.width() / calcCols;
				}

				var $container = $self.find('#sbi_images');
				this.isotopeArgs.masonry = {
					columnWidth: columnWidth
				};
				$container.smashotope(this.isotopeArgs);
			};

			this.setHighlight = function() {
				var $self = $(this.el),
					highlight = this.settings.general.highlight,
					feedWidth = $self.innerWidth(),
					photoPadding = parseInt(($self.find('#sbi_images').outerWidth() - $self.find('#sbi_images').width())) / 2,
					cols = this.getColumnCount(),

					itemPadding = typeof $self.attr('data-item-padding') !== 	'undefined' && $self.attr('data-item-padding') !== '' ? parseInt($self.attr('data-item-padding')) : 6,
					extraCols = photoPadding == 0 ? cols : cols+2,
					photoPadding = photoPadding == 0 ? itemPadding : photoPadding,
					feedWidthSansPadding = feedWidth - (photoPadding * extraCols);

				// scrollbar causes an issue with width calculations for highlight feeds
				if ($self.hasClass('sbi_fixed_height')) {
					feedWidthSansPadding = feedWidthSansPadding - 24;
				}

				var colWidth = (feedWidthSansPadding / cols),
					highlightType = (typeof highlight === 'object') ? highlight[0] : '',
					firstBigify = highlightType === 'pattern' ? parseInt(highlight[2]) : 0,
					widthAdjustForPercentPadding = $self.find('#sbi_images').css('padding').indexOf('.') > -1 ? 1 : 0;

				// set the highlighted post to a maximum size of the containing element
				if (cols === 1 && !$self.hasClass('sbi_mob_col_auto')) {
					$self.find('.sbi_item').each(function(index) {

						jQuery(this).css({
							padding: photoPadding + 'px',
							width: (colWidth) - photoPadding + 'px',
							height: (colWidth) - photoPadding + 'px'
						});
						jQuery(this).find('.sbi_photo').css({
							height: (colWidth) - photoPadding + 'px'
						});
					});

				} else {
					if (colWidth * 2 > feedWidthSansPadding) {
						if ($self.hasClass('sbi_mob_col_auto')) {
							cols = 2;
						}
						feedWidthSansPadding = feedWidth - (photoPadding * (cols+2));
						colWidth = feedWidthSansPadding/cols;
					}

					$self.find('.sbi_item').each(function(index) {
						var shouldBigify = false;

						if (highlightType === 'pattern') {
							if (index === firstBigify || (index>firstBigify && (index) % parseInt(highlight[1]) === 0)) {
								shouldBigify = true;
							}
						} else if (highlightType === 'hashtag') {
							var hashtagsToHighlight = highlight[3],
								hashtagsToHighlight = hashtagsToHighlight.split('|'),
								caption = jQuery(this).find('.sbi_photo img').attr('alt');
							if (hashtagsToHighlight.length > 0) {
								jQuery.each(hashtagsToHighlight, function(index,val) {

									var workingCaption = ' ' + caption + ' ',
										word = val;

									var needle = encodeURI(word.trim().toLowerCase()).replace(/ /g,'%20'),
										haystack = encodeURI(workingCaption.toLowerCase().replace('#', ' #')),
										regex = new RegExp("%20#"+needle + "\\b");

									haystack = haystack.replace(/#/g, '%20#');
									haystack = haystack.replace(/%E2%A0%80%0A/g, '%20');

									if(regex.test(haystack)) {
										//This photo caption contains one of the words so show it
										shouldBigify = true;
									}
								});
							}
						} else if (highlightType === 'id') {
							var IDsToHighlight = highlight[4].replace(/ /g,''),
								IDsToHighlight = IDsToHighlight.split('|'),
								id = jQuery(this).attr('id').replace('sbi_','').trim();
							if (IDsToHighlight.indexOf(id) > -1) {
								shouldBigify = true;
							}
						} else {
							shouldBigify = jQuery(this).hasClass('sbi_highlighted');
						}

						if (shouldBigify) {
							jQuery(this).css({
								padding: photoPadding + 'px',
								height: ((colWidth * 2) - widthAdjustForPercentPadding)  + 'px',
								width: ((colWidth * 2) - widthAdjustForPercentPadding) + 'px'
							});
							jQuery(this).find('.sbi_photo').css({
								height: (colWidth * 2) + 'px'
							});
						} else {
							jQuery(this).css({
								padding: photoPadding + 'px',
								width: (colWidth) - photoPadding + 'px',
								height: (colWidth)- photoPadding + 'px'
							});
							jQuery(this).find('.sbi_photo').css({
								height: (colWidth)- photoPadding + 'px'
							});

						}
					});
				}

			};

			this.setMasonry = function() {
				var $self = $(this.el),
					feedWidth = $self.innerWidth(),
					photoPadding = parseInt(($self.find('#sbi_images').outerWidth() - $self.find('#sbi_images').width())) / 2,
					cols = this.getColumnCount(),

					itemPadding = typeof $self.attr('data-item-padding') !== 	'undefined' && $self.attr('data-item-padding') !== '' ? parseInt($self.attr('data-item-padding')) : 6,
					extraCols = photoPadding == 0 ? cols : cols+2,
					photoPadding = photoPadding == 0 ? itemPadding : photoPadding,

					feedWidthSansPadding = feedWidth - (photoPadding * extraCols),
					colWidth = (feedWidthSansPadding / cols),
					widthAdjustForPercentPadding = $self.find('#sbi_images').css('padding').indexOf('.') > -1 ? 1 : 0;

				$self.find('.sbi_item').each(function(index) {
					jQuery(this).css({
						padding: photoPadding + 'px',
						width: (colWidth) - photoPadding + 'px',
					});

				});
			};

			this.appendSmashotope = function() {
				$self = $(this.el);
				if ($self.find('#sbi_images').data('smashotope')) {
					// $self.find('.sbi_new').addClass('sbi_hide');
					$self.find('#sbi_images').smashotope('appended', jQuery('.sbi_new'));
				}
			};

			this.bindLoadMoreOnScroll = function() {
				var feed = this,
					$self = $(this.el),
					scrollPosOffset = Math.max(1,this.settings.general.autoscroll),
					sbiScrolled = 0;

				//Scroll the container if it has a height
				if ($self.hasClass('sbi_fixed_height')) {
					$self.on('scroll.instagram-feed', function () {

						var yScrollPos = $self.scrollTop(),
							windowSize = $self.innerHeight(),
							bodyHeight = $self[0].scrollHeight,
							triggerDistance = bodyHeight - scrollPosOffset - windowSize;

						if (yScrollPos > triggerDistance) {
							$self.unbind('scroll.instagram-feed');
							if (sbiScrolled === 0) {
								sbiScrolled = 1;
								feed.getNewPostSet();
							}
						}
					});
					//Scrolling the window
				} else {
					jQuery(window).on('scroll.instagram-feed', function () {
						var yScrollPos = window.pageYOffset,
							windowSize = window.innerHeight,
							bodyHeight = document.body.offsetHeight,
							triggerDistance = bodyHeight - scrollPosOffset - windowSize;

						if (yScrollPos > triggerDistance) {
							jQuery(window).unbind('scroll.instagram-feed');
							if (sbiScrolled === 0) {
								sbiScrolled = 1;
								feed.getNewPostSet();
							}
						}
					});
				}
			};

			this.revealNewImages = function() {
				var $self = $(this.el),
					feed = this;

				$self.find('.sbi-screenreader').each(function() {
					$(this).find('img').remove();
				});

				// Call Custom JS if it exists
				if (typeof sbi_custom_js == 'function') setTimeout(function(){ sbi_custom_js(); }, 100);

				var evt = $.Event('sbiafterimagesloaded');
				evt.el = $self;
				$(window).trigger(evt);

				if (this.layout !== 'masonry') {
					this.applyImageLiquid();
				} else {
					$self.find('.sbi_photo').css({
						'background-image': '',
						'background-size': '',
						'background-position': '',
						'background-repeat': '',
						'opacity': 1,
						'height': 'auto',
						'padding-bottom': 0
					});
				}

				$self.find('.sbi_item').find('.sbi_link_area').attr('data-lightbox-sbi',$self.attr('data-sbi-index'));
				if ($self.find('.sbi_item.sbi_js_load_disabled').length) {
					$self.find('.sbi_item.sbi_js_load_disabled').addClass('sbi_new');
				}

				$self.find('.sbi_item.sbi_new').each(function (index) {
					if ($(this).hasClass('sbi_js_load_disabled')) {
						$(this).removeClass('sbi_js_load_disabled');
					}

					var $self = jQuery(this);
					var $sbi_link_area = $self.find('.sbi_link_area');

					//Set some feed options that help with mod mode
					if (modMode.status === true) {
						$self.append(modMode.addModHtml('', $self.attr('id').replace('sbi_', '')));
					}

					//Photo links
					//If lightbox is disabled
					//If lightbox is disabled
					var disablelightbox = typeof feed.settings.general.disablelightbox !== 'undefined' ? feed.settings.general.disablelightbox : false,
						captionlinks = typeof feed.settings.general.captionlinks !== 'undefined' ? feed.settings.general.captionlinks : false;
					if (typeof window.sbi.touchDevice === 'undefined') {
						$self.find('.sbi_photo').on('mouseenter mouseleave', function(e) {
							switch(e.type) {
								case 'mouseenter':
									jQuery(this).fadeTo(200, 0.85);
									break;
								case 'mouseleave':
									jQuery(this).stop().fadeTo(500, 1);
									break;
							}
						});
					} else if (!disablelightbox && !captionlinks) {
						$self.find('.sbi_photo_wrap').prepend($sbi_link_area);
						$self.find('.sbi_link').remove();
					}


					//Change lightbox image to be full size
					var $sbi_lightbox = jQuery('#sbi_lightbox');
					$self.find('.sbi_lightbox_link').on('click',function () {
						$sbi_lightbox.removeClass('sbi_video_lightbox');
						if ($self.hasClass('sbi_type_video')) {
							$sbi_lightbox.addClass('sbi_video_lightbox');
							//Add the image as the poster so doesn't show an empty video element when clicking the first video link
							jQuery('.sbi_video').attr({
								'poster': jQuery(this).attr('href')
							});

						}
					});

					//Photo links
					if (disablelightbox || captionlinks) {

						if (captionlinks) {
							if (typeof $self.attr('data-shoppable') !== 'undefined') {
								var url = $self.attr('data-shoppable');
							} else {
								function sbiUrlDetect(text) {
									var urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
									return text.match(urlRegex);
								}
								var cap = '';
								if (typeof $self.find('.sbi_link_area').attr('data-title') !== 'undefined') {
									cap = $self.find('.sbi_link_area').attr('data-title');
								} else if (typeof $self.find('img').attr('alt') !== 'undefined') {
									cap = $self.find('img').attr('alt');
								} else if (typeof $self.find('video').attr('alt') !== 'undefined') {
									cap = $self.find('video').attr('alt');
								}
								var url = sbiUrlDetect(cap);
							}


							if (url) {
								$self.find('a').attr('href', url);
							}
						}
						$self.find('.sbi_link:not(.sbi_link_customizer)').addClass('sbi_disable_lightbox');
						$self.find('.sbi_playbtn').prependTo($self.find('.sbi_photo'));
						//If lightbox is enabled add lightbox links
					} else {

						var $sbi_photo_wrap = $self.find('.sbi_photo_wrap'),
							$sbi_link = $sbi_photo_wrap.find('.sbi_link');
						feedOptions = {
							hovereffect: 'true'
						};
						if (feedOptions.hovereffect == 'none') {
							//launch lightbox on click
							$sbi_link.css('background', 'none').show();
							$sbi_link.find('*').hide().end().find('.sbi_link_area').show();
						} else {
							//Fade in links on hover
							$sbi_photo_wrap.on('mouseenter mouseleave', function (e) {
								switch (e.type) {
									case 'mouseenter':
										$self.addClass('sbi_animate');
										break;
									case 'mouseleave':
										$self.removeClass('sbi_animate');
										break;
								}
							});

						}

					}

					if ($self.find('.sbi_info .sbi_caption').length) {
						var $caption = $self.find('.sbi_info .sbi_caption'),
							capLimit = $caption.data('text-limit'),
							capLength = $caption.data('cap-length'),
							textLimit = typeof feed.settings.general.captionlength !== 'undefined'
								? parseInt(feed.settings.general.captionlength) : 50;

						textLimit = capLimit > 0 ? parseInt(capLimit) : textLimit;
						if (textLimit < 1) textLimit = 99999;

						//Set the full text to be the caption (used in the image alt)
						var captionText = typeof $caption !== 'undefined' ? $caption.html() : '';
						captionText = getFilteredCaptionText(captionText);
						capLength = capLength > 0 ? parseInt(capLength) : captionText.length;

						//Set the caption text to be the shortened version
						var shortText = getCaptionShortLength(captionText, textLimit);

						if (shortText.length === captionText.length) {
							return;
						}
						$caption.html(shortText);

						//Show the 'See More' link if needed
						if (capLength > textLimit) {
							$self.find('.sbi_expand').show();
						}

						//Click function
						$self.find('.sbi_expand a').off('click').on('click', function (e) {
							e.preventDefault();
							var $expand = jQuery(this);
							if ($self.hasClass('sbi_caption_full')) {
								$caption.html(shortText);
								$self.removeClass('sbi_caption_full');
							} else {
								$caption.html(captionText);
								$self.addClass('sbi_caption_full');
							}
							feed.afterResize();
						});
					}

				}); //End .sbi_item each

				// Placing caption, hover caption truncation in same loop didnt work for some reason
				// So placing it here
				$self.find('.sbi_item.sbi_new').each(function (index) {
					var $self = jQuery(this);

					if ($self.find('.sbi_hover_top .sbi_caption').length) {
						var $hoverCaption = $self.find('.sbi_hover_top .sbi_caption'),
							hovercapLimit = $hoverCaption.data('text-limit'),
							hovercapLength = $hoverCaption.data('cap-length'),
							textLimit = typeof feed.settings.general.captionlength !== 'undefined'
								? parseInt(feed.settings.general.captionlength) : 50;
						hovertextLimit = typeof feed.settings.general.hovercaptionlength !== 'undefined'
							? parseInt(feed.settings.general.hovercaptionlength) : textLimit;

						hovertextLimit = hovercapLimit > 0 ? parseInt(hovercapLimit) : hovertextLimit;
						if (hovertextLimit < 1) hovertextLimit = 99999;

						//Set the full text to be the caption (used in the image alt)
						var hoverCaptionText = typeof $hoverCaption !== 'undefined' ? $hoverCaption.html() : '';
						hoverCaptionText = getFilteredCaptionText(hoverCaptionText);
						hovercapLength = hovercapLength > 0 ? parseInt(hovercapLength) : hoverCaptionText.length;

						//Set the caption text to be the shortened version
						var hoverShortText = getCaptionShortLength(hoverCaptionText, hovertextLimit);

						if(hoverShortText.length === hoverCaptionText.length) {
							return;
						}
						$hoverCaption.html(hoverShortText);

						//Concanate ... to the end of the text if hoverShortText is less than the full text
						if (hoverShortText.length < hoverCaptionText.length) {
							$self.find('.sbi_hover_top .sbi_caption').after('<span>...</span>');
						}
					}
				});

				//Lightbox hide photo function
				jQuery('.sbi_lightbox_action a').off().on('click', function(){
					jQuery(this).parent().find('.sbi_lightbox_tooltip').toggle();
				});

				//Remove the new class after 500ms, once the sorting is done
				setTimeout(function () {
					jQuery('#sbi_images .sbi_item.sbi_new').removeClass('sbi_new');
					//Reset the morePosts variable so we can check whether there are more posts every time the Load More button is clicked
					//morePosts = [];
					if( !$self.hasClass('sbi_masonry') && !$self.hasClass('sbi_highlight') && !$self.find('.sbi_carousel').length ){
						//Loop through items and remove class to reveal them
						var time = 10;
						$self.find('.sbi_transition').each(function() {
							var $sbi_item_transition_el = jQuery(this);

							setTimeout( function(){
								$sbi_item_transition_el.removeClass('sbi_transition');
							}, time);
							time += 10;
						});
					} else if (!$self.find('.sbi_carousel').length) {
						var isHighlight = $self.hasClass('sbi_highlight'),
							isMasonry = $self.hasClass('sbi_masonry');

						if ($self.find('#sbi_images').data('smashotope')) {
							$self.find('#sbi_images').smashotope('layout');
						}

						var layoutDelay = 0;

						//If it's masonry then delay the reveal transition by a second to allow the items to be positioned
						if( isMasonry ){
							layoutDelay = 1000;
							//Initiate the smashotope layout initially
							$self.find('#sbi_images').smashotope('layout');
						}

						//Re-initiate the smashotope layout multiple times
						setTimeout(function() {
							$self.find('#sbi_images').smashotope('layout');

							//Loop through items and remove class to reveal them after they've been laid out
							var time = 10;
							$self.find('.sbi_transition').each(function() {
								var $sbi_item_transition_el = jQuery(this);
								setTimeout( function(){
									$sbi_item_transition_el.removeClass('sbi_transition');
								}, time)
								time += 10;
							});
						}, layoutDelay);

						//Re-initiate the smashotope layout multiple times
						setTimeout(function() {
							$self.find('#sbi_images').smashotope('layout');
						}, 1500);
						setTimeout(function() {
							$self.find('#sbi_images').smashotope('layout');
						}, 2000);
					}

					if ($self.find('.sbi_carousel')) {
						setTimeout(function() {
							var time = 10;
							$self.find('.sbi_transition').each(function() {
								var $sbi_item_transition_el = jQuery(this);
								setTimeout( function(){
									$sbi_item_transition_el.removeClass('sbi_transition');
								}, time)
								time += 10;
							});

						}, 100);

					}
				}, 500);

				if(modMode.status === true) {
					if(!modMode.$self.hasClass('sbi_mod_merged')) {
						modMode.setOriginalPosition();
						modMode.resizeFeed();
					}
					setTimeout(function () {
						modMode.$self.find('.sbi_item .sbi_photo').each(function () {
							if (!jQuery(this).hasClass('sbi_mod_changed')) {
								jQuery(this).on('click',function (e) {
									modMode.changeClickEvent(jQuery(this), e);
								});
								jQuery(this).addClass('sbi_mod_changed');
							}
						});
						setTimeout(function () {
							modMode.addModSettingsHtml();
							if (!modMode.$self.find('.sbi_mod_submit_mod').hasClass('sbi_initialized')) {
								modMode.$self.find('.sbi_mod_submit_mod').on('click',function () {
									modMode.submitSelected();
								});
							}
							modMode.$self.find('.sbi_mod_submit_mod').addClass('sbi_initialized');
							modMode.$self.find('.sbi_hide_show_radio').on('click',function () {
								modMode.updateHideOrShow(jQuery(this).val());
								modMode.updateDisplay();
							});
							modMode.$self.find('.sbi_mod_block_user').each(function() {
								if(!jQuery(this).hasClass('sbi_mod_changed')) {
									jQuery(this).on('click',function () {
										modMode.updateBlockUser(jQuery(this));
										modMode.updateDisplay();
									});
									jQuery(this).addClass('sbi_mod_changed');
								}
							});
							modMode.$self.find('.sbi_close_mod').on('click',function () {
								modMode.closeMod();
							});
							modMode.replaceInfoHtml();
							// needed for random bug
							/*
                            jQuery('.sbi_item').each(function() {
                                jQuery(this).css('height',jQuery('.sbi_photo_wrap').innerHeight()+jQuery('.sbi_info').innerHeight());
                            });
                            */
							modMode.updateDisplay();
							modMode.$self.addClass('sbi_mod_merged');
							modMode.$self.find('.sbi_info').removeClass('sbi_info');
							modMode.initClickCopy();
							feed.afterResize();
							// here
						}, 600);

					}, 350);
				}

				if (feed.layout !== 'carousel' && typeof feed.settings.general.autoscroll !== 'undefined' && feed.settings.general.autoscroll !== false) {
					this.bindLoadMoreOnScroll();
				}

			};
		}

		var modMode = {
			status: false,
			usingDB: true,
			$self: jQuery('.sbi_moderation_mode'), // gets reassigned to current feed
			originalParent: jQuery('.sbi_moderation_mode').parent(),
			hideOrShow: 'hide',
			dbHidePhotos: [],
			dbBlockUsers: [],
			dbWhiteList: [],
			whiteListIndex: '',
			selectedHide: [], // image ids that are selected
			selectedShow: [],
			selectedUsers: [],
			isPermanent: false,
			isPermanentDb: false,

			setStatus: function (status) {
				this.status = status;
			},
			setPermanent: function (permanent, permanentDb) {
				this.isPermanent = typeof permanent !== 'undefined' ? true : false;
				this.isPermanentDb = typeof permanentDb !== 'undefined' ? true : false;
			},
			setUsingDB: function (usingDB) {
				this.usingDB = usingDB;
			},
			setSelf: function ($self) {
				if ($self.hasClass('sbi')) {
					this.$self = $self;
				} else {
					this.$self = $self.closest('.sbi');
				}
			},
			setOriginalPosition: function () {
				this.originalParent= this.$self.parent();
			},
			updateHideOrShow: function (hideOrShow) {
				this.hideOrShow = hideOrShow;
				modMode.afterTypeChange(hideOrShow);
			},
			afterTypeChange: function (hideOrShow) {
				jQuery('.sbi_mod_mode_type_select_wrap_box').removeClass('sbi_mod_mode_selected');

				if (hideOrShow === 'show') {
					jQuery('#sbi_mod_permanent_toggle').closest('.sbi_mod_row').slideDown();
					if (jQuery('#sbi_mod_permanent_toggle').is(':checked') || modMode.isPermanentDb) {
						jQuery('#sb_mod_is_permanent_warning').slideDown();
					}
					jQuery('#sbi_hs_show').closest('.sbi_mod_mode_type_select_wrap_box').addClass('sbi_mod_mode_selected');
				} else {
					jQuery('#sbi_mod_permanent_toggle').closest('.sbi_mod_row').slideUp();
					jQuery('#sb_mod_is_permanent_warning').slideUp();
					jQuery('#sbi_hide_show').closest('.sbi_mod_mode_type_select_wrap_box').addClass('sbi_mod_mode_selected');
				}
			},
			mergeDBAndSelected: function () {
				if(!this.$self.hasClass('sbi_mod_merged')) {
					// remove any empty array elements
					for (var i = 0; i < modMode.dbHidePhotos.length; i++) {
						if (modMode.dbHidePhotos[i] == '') {
							modMode.dbHidePhotos.splice(i, 1);
						}
					}
					// add id to array if unique
					for (var i = 0; i < modMode.dbHidePhotos.length; i++) {
						if (modMode.selectedHide.indexOf(modMode.dbHidePhotos[i].replace('sbi_', '')) == -1) {
							modMode.selectedHide.push(modMode.dbHidePhotos[i].replace('sbi_', ''));
						}
					}
					// remove any empty array elements for show
					for (var i = 0; i < modMode.dbWhiteList.length; i++) {
						if (modMode.dbWhiteList[i] == '') {
							modMode.dbWhiteList.splice(i, 1);
						}
					}
					// add id to array if unique
					for (var i = 0; i < modMode.dbWhiteList.length; i++) {
						if (modMode.selectedShow.indexOf(modMode.dbWhiteList[i].replace('sbi_', '')) == -1) {
							modMode.selectedShow.push(modMode.dbWhiteList[i].replace('sbi_', ''));
						}
					}
					// remove any empty array elements
					for (var i = 0; i < modMode.dbBlockUsers.length; i++) {
						if (modMode.dbBlockUsers[i] == '') {
							modMode.dbBlockUsers.splice(i, 1)
						}
					}
					// add blocked user to array if unique
					for (var i = 0; i < modMode.dbBlockUsers.length; i++) {
						if (modMode.selectedUsers.indexOf(modMode.dbBlockUsers[i]) == -1) {
							modMode.selectedUsers.push(modMode.dbBlockUsers[i]);
						}
					}
				}

			},
			setWhiteListData: function(listNum, ids) {
				this.whiteListIndex = listNum;
				this.dbWhiteList = ids;
			},
			updateBlockUser: function(checkbox) { //sbi_mod_block_user
				var user = checkbox.val();
				if (checkbox.is(':checked')) {
					if (modMode.selectedUsers.indexOf(user) < 0) {
						modMode.selectedUsers.push(user);
					}
				} else {
					modMode.selectedUsers.splice(modMode.selectedUsers.indexOf(user), 1);
				}
			},
			addModSettingsHtml: function () {
				if(!this.$self.find('.sbi_mod_mode_wrapper').length) {
					var sbi_submit_mod_settings_btn = '<a href="javascript:void(0);" class="sbi_mod_submit_mod sbi-fb-hd-btn sbi-csz-btn-save sb-btn-orange sb-button-standard"><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">' +
							'<path fill-rule="evenodd" clip-rule="evenodd" d="M5.58058 8.36133L13.5355 0.406383L15.3033 2.17415L5.58058 11.8969L0.277281 6.59357L2.04505 4.8258L5.58058 8.36133Z" fill="white"/>' +
							'</svg> Save Changes</a>',
						sbi_permanent_cache_warning = '',
						sbi_is_permanent_att = '';
					if( modMode.isPermanent ) {
						if( modMode.isPermanentDb ) {
							sbi_is_permanent_att = ' checked';
						}

						sbi_permanent_cache_warning = '<div id="sb_mod_is_permanent_warning" class="sbi_mod_new_white_list sbi_warning" style="display: block;">' +
							'<p><span><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Important.</span> This feed is permanent. Uncheck the setting above and remove the shortcode setting <strong>permanent=true</strong> before updating your white list.</p>' +
							'</div>';
					}
					modMode.$self.find('> div').wrapAll('<div class="sbi_mod_mode_feed_wrap" />');
					modMode.$self.find('.sbi_mod_mode_feed_wrap').before('<div class="sbi_mod_mode_toolbar">' +
						'<a href="javascript:void(0);" class="sbi_close_mod sb-button sb-button-standard sbi-fb-hd-btn sb-btn-grey"><svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<path d="M5.27203 0.94L4.33203 0L0.332031 4L4.33203 8L5.27203 7.06L2.2187 4L5.27203 0.94Z" fill="#141B38"/>' +
						'</svg> <span>Exit Moderation Mode</span></a>' +
						'<span class="sbi_mod_mode_heading">Moderate Your Feed</span>' +
						'<div class="sbi-fb-header-right"><a data-icon="left" href="https://smashballoon.com/doc/guide-to-moderation-mode/?instagram" class="sbi-fb-hd-btn sb-btn-grey sb-button-standard sb-button" target="_blank" rel="noopener"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="sb"><path d="M8.16797 14.0001H9.83464V12.3334H8.16797V14.0001ZM9.0013 0.666748C4.4013 0.666748 0.667969 4.40008 0.667969 9.00008C0.667969 13.6001 4.4013 17.3334 9.0013 17.3334C13.6013 17.3334 17.3346 13.6001 17.3346 9.00008C17.3346 4.40008 13.6013 0.666748 9.0013 0.666748ZM9.0013 15.6667C5.3263 15.6667 2.33464 12.6751 2.33464 9.00008C2.33464 5.32508 5.3263 2.33341 9.0013 2.33341C12.6763 2.33341 15.668 5.32508 15.668 9.00008C15.668 12.6751 12.6763 15.6667 9.0013 15.6667ZM9.0013 4.00008C7.15964 4.00008 5.66797 5.49175 5.66797 7.33342H7.33464C7.33464 6.41675 8.08464 5.66675 9.0013 5.66675C9.91797 5.66675 10.668 6.41675 10.668 7.33342C10.668 9.00008 8.16797 8.79175 8.16797 11.5001H9.83464C9.83464 9.62508 12.3346 9.41675 12.3346 7.33342C12.3346 5.49175 10.843 4.00008 9.0013 4.00008Z" fill="#141B38"></path></svg> <span>Help</span></a></div>' +
						'</div>'
					);
					modMode.$self.find('.sbi_mod_mode_feed_wrap').wrap('<div class="sbi_mod_mode_customizer" />');
					modMode.$self.find('.sbi_mod_mode_customizer').prepend('<div class="sbi_mod_mode_sidebar">' +
						'<div class="sbi_mode_mode_sidebar_section sbi_mode_mode_border">' +
						'<span class="sbi_mod_mode_heading">Select Moderation Mode</span>' +

						'<div class="sbi_mod_mode_type_select_wrap sbi_mod_mode_sidebar_subsection">' +

						'<div class="sbi_mod_mode_type_select_wrap_box">'+
						'<input id="sbi_hs_show" name="sbi_hide_show" type="radio" value="show" class="sbi_hide_show_radio"> <label for="sbi_hs_show">Show Selected Posts<span>Only show the posts you select and hide the rest</span></label>' +
						'</div>' +
						'<div class="sbi_mod_mode_type_select_wrap_box">'+
						'<input id="sbi_hide_show" name="sbi_hide_show" type="radio" value="hide" class="sbi_hide_show_radio" checked> <label for="sbi_hide_show">Hide Selected Posts<span>Hide selected posts and show the rest</span></label>' +
						'</div>' +

						'</div>' +
						'<div class="sbi_mod_mode_sidebar_subsection sbi_mod_mode_flex_row"><input id="sbi_mod_permanent_toggle" name="sbi_mod_permanent_toggle" type="checkbox" value="1" '+sbi_is_permanent_att+'><label for="sbi_mod_permanent_toggle">This is a permanent allow list and never needs to update</label></div>' +
						'<div class="sbi_mod_mode_sidebar_subsection sbi_mod_mode_flex_row sbi_mod_mode_tooltip">' +
						'<svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<path d="M4 19C4 19.55 4.45 20 5 20H9C9.55 20 10 19.55 10 19V18H4V19ZM7 0C3.14 0 0 3.14 0 7C0 9.38 1.19 11.47 3 12.74V15C3 15.55 3.45 16 4 16H10C10.55 16 11 15.55 11 15V12.74C12.81 11.47 14 9.38 14 7C14 3.14 10.86 0 7 0ZM9.85 11.1L9 11.7V14H5V11.7L4.15 11.1C3.48749 10.6407 2.94594 10.0279 2.57155 9.314C2.19717 8.60006 2.00107 7.80615 2 7C2 4.24 4.24 2 7 2C9.76 2 12 4.24 12 7C12 8.63 11.2 10.16 9.85 11.1Z" fill="#663D00"/>' +
						'</svg>' +
						'<span>Click on an image to select or deselect a post</span>' +
						'</div>' +

						'</div>' +
						'<div class="sbi_mode_mode_sidebar_section">' +
						'<div class="sbi_mod_mode_sidebar_subsection sbi_mod_mode_flex_row">' +
						'<input id="sbi_mod_id_toggle" name="sbi_mod_id_toggle" type="checkbox" value="show" class=""> <label for="sbi_mod_id_toggle">Show post ID under image</label>' +
						'</div>' +
						'</div>' +
						'<div class="sbi_mode_mode_sidebar_section">' +

						sbi_submit_mod_settings_btn +

						sbi_permanent_cache_warning + '</div></div>');
					if(this.whiteListIndex !== '') {
						modMode.$self.find('#sbi_hs_show').prop("checked", true);
						modMode.hideOrShow = 'show';
					}
					modMode.updateHideOrShow(modMode.hideOrShow);
				}
				//Add the save notice to the body and fade it in/out when settings saved in Ajax callback
				jQuery('body').append('<p class="sbi_mod_saved"><i class="fa fa-check"></i> Saved</p>');
			},
			addModHtml: function (user,id) {
				var html = '';

				html =
					'<div class="sbi_mod">' +
					'<span class="sbi_mod_user sbi_mod_id"><input type="text" value="' + id + '" readonly></span>' +
					'</div>';

				return html;
			},
			toggleID: function(clicked) {
				if (clicked.is(':checked')) {
					jQuery('.sbi_mod_id_toggle').prop('checked',true);
					jQuery('.sbi_mod_id').show();
				} else {
					jQuery('.sbi_mod_id_toggle').prop('checked',false);
					jQuery('.sbi_mod_id').hide();
				}
			},
			initClickCopy: function () {
				jQuery('.sbi_mod_user input').on('click',function() {
					jQuery(this).trigger('select');
				});
				jQuery('#sbi_mod_id_toggle').on('click',function() {
					modMode.toggleID(jQuery(this));
				});
				modMode.toggleID(jQuery('#sbi_mod_id_toggle').first());
			},
			closeMod: function() {
				var url = window.location.href;
				if (url.indexOf('sbi_moderation_mode=true') > -1) {
					url = url.replace('?sbi_moderation_mode=true', '');
					url = url.replace('&sbi_moderation_mode=true', '');
				}
				if (url.indexOf('sbi_moderation_index=') > -1) {
					url = url.split('&sbi_moderation_index=')[0];
				}
				window.location.href = url;
			},
			resizeFeed: function () {
				modMode.$self.closest('body').css('position','relative').prepend(modMode.$self);
			},
			replaceInfoHtml: function () {
				var mod = modMode.$self.find('.sbi_mod');
				mod.each(function() {
					jQuery(this).closest('.sbi_item').find('.sbi_info').html(jQuery(this));
					jQuery(this).children().css('font-size','14px');
				});
			},
			styleImage: function (image, hideOrShow) {
				if (hideOrShow == 'hide') {
					image.append('<span class="sbi_mod_post_status sbi_mod_exclude"><i class="fa fa-times"></i></span>').css('outline','3px solid #e5593d');
				} else {
					image.append('<span class="sbi_mod_post_status sbi_mod_include"><i class="fa fa-check"></i></span>').css('outline','3px solid #4e9c2b');
				}
			},
			changeClickEvent: function (item, e) {
				e.preventDefault();
				var id = item.closest('.sbi_item').attr('id').replace('sbi_', ''),
					user =  '';
				if (modMode.hideOrShow === 'hide') {
					if (modMode.selectedUsers.indexOf(user) === -1) {
						if (modMode.selectedHide.indexOf(id) > -1) {
							modMode.selectedHide.splice(modMode.selectedHide.indexOf(id), 1);
						} else {
							modMode.selectedHide.push(id);
						}
					}
				} else {
					if (modMode.selectedShow.indexOf(id) > -1) {
						modMode.selectedShow.splice(modMode.selectedShow.indexOf(id), 1);
					} else {
						modMode.selectedShow.push(id);
					}
				}

				modMode.updateDisplay(modMode.$self);

			},
			updateDisplay: function () {
				// clear off all hide/show styling
				modMode.$self.find('.sbi_photo').css('outline','').find('.sbi_mod_post_status').remove();
				// get the blocked users and start looping through items to compare
				var blockedUsers = modMode.selectedUsers;
				modMode.$self.find('.sbi_item').each( function() {
					var user =  jQuery(this).find('.sbi_mod_user').text(),
						image = jQuery(this).find('.sbi_photo');
					// if the user who posted this image is blocked
					if (blockedUsers.indexOf(user) > -1) {
						// add the hide styling
						modMode.styleImage(image, 'hide');
						// check the block user box
						image.closest('.sbi_item').find('.sbi_mod_block_user').prop('checked', true);
					} else {
						// user is not blocked, uncheck box
						image.closest('.sbi_item').find('.sbi_mod_block_user').prop('checked', false);
						// compare id to ids in relevant array
						var id = jQuery(this).attr('id').replace('sbi_', ''),
							idPlusSbi = 'sbi_'+id;
						if (modMode.hideOrShow === 'hide') {
							if (modMode.selectedHide.indexOf(id) > -1 || modMode.selectedHide.indexOf(idPlusSbi) > -1) {
								modMode.styleImage(image, 'hide');
							}
						} else {
							if (modMode.selectedShow.indexOf(id) > -1 || modMode.selectedShow.indexOf(idPlusSbi) > -1) {
								modMode.styleImage(image, 'show');
							}
						}
					}
				});
				sbSVGify(modMode.$self);
			},
			ajaxSubmit: function () {
				var $self = modMode.$self;
				var locatorNonce = '',
					postid = 0;
				if ( typeof $self.attr( 'data-locatornonce' ) !== 'undefined' ) {
					locatorNonce = $self.attr( 'data-locatornonce' );
				}
				if ( typeof $self.attr( 'data-postid' ) !== 'undefined' ) {
					postid = $self.attr( 'data-postid' );
				}
				modMode.$self.find('.sbi_mod_submit_mod').next('span').remove();
				modMode.$self.fadeTo( "fast", 0.3 ).find('.sbi_mod_submit_mod').attr('disabled','true');
				if (modMode.hideOrShow === 'hide') {
					modMode.$self.find('.sbi_mod_new_white_list').hide();
					var submittedData = {
						ids: modMode.selectedHide,
						blocked_users: modMode.selectedUsers,
						action: 'sbi_update_mod_mode_settings',
						locator_nonce: locatorNonce,
						post_id: postid,
						atts: $self.attr('data-shortcode-atts')
					};
					jQuery.ajax({
						url: sbiajaxurl,
						type: 'post',
						data: submittedData,
						success: function (data) {
							setTimeout(function() {
								modMode.$self.fadeTo(500, 1);
								modMode.$self.find('.sbi_mod_submit_mod').prop('disabled',false);
							}, 500);
							jQuery('.sbi_mod_saved').fadeIn();
							setTimeout(function() { jQuery('.sbi_mod_saved').fadeOut(); }, 3000);
						}
					}); // ajax
				} else {
					var submittedData = {
						ids: modMode.selectedShow,
						db_index: modMode.whiteListIndex,
						blocked_users: modMode.selectedUsers,
						permanent: jQuery('#sbi_mod_permanent_toggle').is(':checked'),
						action: 'sbi_update_mod_mode_white_list',
						locator_nonce: locatorNonce,
						post_id: postid,
						atts: $self.attr('data-shortcode-atts')
					};
					jQuery.ajax({
						url: sbiajaxurl,
						type: 'post',
						data: submittedData,
						success: function (data) {
							if (data.length) {
								modMode.$self.find('.sbi_mod_new_white_list').remove();
								modMode.$self.find('.sbi_mod_submit_mod').after(
									'<div class="sbi_mod_mode_sidebar_subsection sbi_mod_mode_flex_row sbi_mod_mode_tooltip">' +
									'<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99935 0.666504C4.39935 0.666504 0.666016 4.39984 0.666016 8.99984C0.666016 13.5998 4.39935 17.3332 8.99935 17.3332C13.5993 17.3332 17.3327 13.5998 17.3327 8.99984C17.3327 4.39984 13.5993 0.666504 8.99935 0.666504ZM9.83268 13.1665H8.16602V11.4998H9.83268V13.1665ZM9.83268 9.83317H8.16602V4.83317H9.83268V9.83317Z" fill="#995C00"></path></svg>'+

									'<div class="sbi_mod_mode_text"><div>Please use this shortcode to apply your white list:</div>' +
									'<code>[instagram-feed <span style="font-weight: bold;">whitelist="'+data+'"</span>]</code></div>' +
									'</div>'
								);
								modMode.whiteListIndex = data;
							}
							setTimeout(function() {
								modMode.$self.find('.sbi_mod_new_white_list').show();
								modMode.$self.css( 'opacity', 1 );
								modMode.$self.find('.sbi_mod_submit_mod').prop('disabled',true);
							}, 500);
							jQuery('.sbi_mod_saved').fadeIn();
							setTimeout(function() { jQuery('.sbi_mod_saved').fadeOut(); }, 3000);
						}
					}); // ajax
				}
			},
			showOnPageSubmit: function () {
				var $self = modMode.$self;
				var locatorNonce = '',
					postid = 0;
				if ( typeof $self.attr( 'data-locatornonce' ) !== 'undefined' ) {
					locatorNonce = $self.attr( 'data-locatornonce' );
				}
				if ( typeof $self.attr( 'data-postid' ) !== 'undefined' ) {
					postid = $self.attr( 'data-postid' );
				}
				modMode.$self.find('.sbi_mod_submit_mod').next('span').remove();
				modMode.$self.find('.sbi_mod_submit_mod').attr('disabled','true');
				if (modMode.hideOrShow === 'hide') {
					modMode.$self.find('.sbi_mod_new_white_list').hide();
					var submittedData = {
						ids: modMode.selectedHide,
						blocked_users: modMode.selectedUsers,
						action: 'sbi_update_mod_mode_settings',
						locator_nonce: locatorNonce,
						post_id: postid,
						atts: $self.attr('data-shortcode-atts')
					};
					if (submittedData.ids.length || submittedData.blocked_users.length) {
						var idsString = submittedData.ids.join(', '),
							blockedUsersString = submittedData.blocked_users.join(', ');
						modMode.$self.find('.sbi_mod_new_white_list').remove();
						modMode.$self.find('.sbi_mod_submit_mod').after(
							'<div class="sbi_mod_new_white_list" style="display: block;">' +
							'<p><span><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Important.</span> Please use this in your <strong>sb_instagram_hide_photos</strong> setting</p>' +
							'<code><strong>'+idsString+'</strong></code>' +
							'</div>' +
							'<div class="sbi_mod_new_white_list" style="display: block;">' +
							'<p><span><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Important.</span> Please use this in your <strong>sb_instagram_block_users</strong> setting</p>' +
							'<code><strong>'+blockedUsersString+'</strong></code>' +
							'</div>'
						);
					}
					modMode.$self.find('.sbi_mod_new_white_list').show();
					modMode.$self.find('.sbi_mod_submit_mod').prop('disabled',false);
				} else {
					var submittedData = {
						ids: modMode.selectedShow,
						db_index: modMode.whiteListIndex,
						blocked_users: modMode.selectedUsers,
						action: 'sbi_update_mod_mode_white_list',
						locator_nonce: locatorNonce,
						post_id: postid,
						atts: $self.attr('data-shortcode-atts')
					};
					if (submittedData.ids.length || submittedData.blocked_users.length) {
						var idsString = submittedData.ids.join(', '),
							blockedUsersString = submittedData.blocked_users.join(', ');
						modMode.$self.find('.sbi_mod_new_white_list').remove();
						modMode.$self.find('.sbi_mod_submit_mod').after(
							'<div class="sbi_mod_new_white_list" style="display: block;">' +
							'<p><span><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Important.</span> Please use this in your <strong>sbiWhiteListIds</strong> setting</p>' +
							'<code><strong>'+idsString+'</strong></code>' +
							'</div>' +
							'<div class="sbi_mod_new_white_list" style="display: block;">' +
							'<p><span><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Important.</span> Please use this in your <strong>sb_instagram_block_users</strong> setting</p>' +
							'<code><strong>'+blockedUsersString+'</strong></code>' +
							'</div>'
						);
					}
					modMode.$self.find('.sbi_mod_new_white_list').show();
					modMode.$self.find('.sbi_mod_submit_mod').prop('disabled',false);
				}
			},
			submitSelected: function () {
				if (modMode.usingDB) {
					modMode.ajaxSubmit();
				} else {
					modMode.showOnPageSubmit();
				}
			}
		};

		SbiFeedPro.prototype = Object.create(SbiFeed.prototype);

		window.sbi_init = function() {
			window.sbi = new Sbi();
			window.sbi.createPage( window.sbi.createFeeds, {whenFeedsCreated: window.sbi.afterFeedsCreated});
		};

		function sbiGetNewFeed(feed, index, feedOptions) {
			return new SbiFeedPro(feed, index, feedOptions);
		}

		function sbiAjax(submitData, onSuccess) {
			$.ajax({
				url: sbiajaxurl,
				type: 'post',
				data: submitData,
				success: onSuccess
			});
		}

		function sbiCmplzGetCookie(cname) {
			var name = cname + "="; //Create the cookie name variable with cookie name concatenate with = sign
			var cArr = window.document.cookie.split(';'); //Create cookie array by split the cookie by ';'

			//Loop through the cookies and return the cookie value if it find the cookie name
			for (var i = 0; i < cArr.length; i++) {
				var c = cArr[i].trim();
				//If the name is the cookie string at position 0, we found the cookie and return the cookie value
				if (c.indexOf(name) == 0)
					return c.substring(name.length, c.length);
			}

			return "";
		}

		function getFilteredCaptionText(captionText) {
			var emojis = captionText.match(/<img[^>]*>/g);
			if (emojis) {
				// Replace emojis with their alt text
				emojis.forEach(function(emoji, index) {
					var alt = emoji.match(/alt="([^"]+)"/)[1];
					captionText = captionText.replace(emoji, alt);
					emojis[index] = alt;
				});
			}
			return captionText;
		}

		function getCaptionShortLength(captionText, textLimit) {
			var shortText = captionText.substring(0, textLimit);
			if (shortText.length === captionText.length) {
				return shortText;
			}

			// if the last character is a incomplete < tag, remove it
			if (shortText.charAt(shortText.length - 1) === '<') {
				shortText = shortText.substring(0, shortText.length - 1);
			}

			var noBRs = captionText.replace(/<br>/g, "    "),
				shortTextnoBrs = shortText.replace(/<br>/g, "    "),
				shortTextPlusOne = noBRs.substring(0, textLimit + 1),
				shortTextPlusOneLastChar = shortTextPlusOne.charAt(shortTextPlusOne.length - 1),
				lastWhiteSpace = shortTextnoBrs.lastIndexOf(' ');

			if ( lastWhiteSpace > 0 && shortTextPlusOneLastChar !== ' ' ) {
				shortText = shortText.substring(0, lastWhiteSpace);
			}
			return shortText;
		};


	})(jQuery);

	jQuery(document).ready(function($) {
		if (typeof window.sb_instagram_js_options === 'undefined') {
			window.sb_instagram_js_options = {
				font_method: "svg",
				resized_url: location.protocol + '//' + window.location.hostname + "/wp-content/uploads/sb-instagram-feed-images/",
				placeholder: location.protocol + '//' + window.location.hostname + "/wp-content/plugins/instagram-feed/img/placeholder.png",
				br_adjust: ""
			};
		}
		if (typeof window.sb_instagram_js_options.resized_url !== 'undefined' && window.sb_instagram_js_options.resized_url.indexOf(location.protocol) === -1) {
			if (location.protocol === 'http:') {
				window.sb_instagram_js_options.resized_url = window.sb_instagram_js_options.resized_url.replace('https:','http:');
			} else {
				window.sb_instagram_js_options.resized_url = window.sb_instagram_js_options.resized_url.replace('http:','https:');
			}
		}
		sbi_init();

		// Cookie Notice by dFactory
		$('#cookie-notice a').on('click',function() {
			setTimeout(function() {
				$.each(window.sbi.feeds,function(index){
					window.sbi.feeds[ index ].afterConsentToggled();
				});
			},1000);
		});

		// Cookie Notice by dFactory
		$('#cookie-law-info-bar a').on('click',function() {
			setTimeout(function() {
				$.each(window.sbi.feeds,function(index){
					window.sbi.feeds[ index ].afterConsentToggled();
				});
			},1000);
		});

		// GDPR Cookie Consent by WebToffee
		$('.cli-user-preference-checkbox, .cky-notice button').on('click',function(){
			setTimeout(function() {
				$.each(window.sbi.feeds,function(index){
					window.sbi.feeds[ index ].checkConsent();
					window.sbi.feeds[ index ].afterConsentToggled();
				});
			},1000);
		});

		// Cookiebot
		$(window).on('CookiebotOnAccept', function (event) {
			$.each(window.sbi.feeds,function(index){
				window.sbi.feeds[ index ].settings.consentGiven = true;
				window.sbi.feeds[ index ].afterConsentToggled();
			});
		});

		// Complianz by Really Simple Plugins
		$('.cmplz-btn').on('click', function() {
			if ( typeof cmplz_accepted_categories === 'function' ) {
				setTimeout(function() {
					var accepted = cmplz_accepted_categories();
					if ( accepted.indexOf('marketing') > -1 ) {
						$.each(window.sbi.feeds,function(index){
							window.sbi.feeds[ index ].settings.consentGiven = true;
							window.sbi.feeds[ index ].afterConsentToggled();
						});
					}
				},1000);
			}
		});

		// Complianz by Really Simple Plugins
		$(document).on('cmplzAcceptAll', function (event) {
			$.each(window.sbi.feeds,function(index){
				window.sbi.feeds[ index ].settings.consentGiven = true;
				window.sbi.feeds[ index ].afterConsentToggled();
			});
		});

		// Complianz by Really Simple Plugins
		$(document).on('cmplzRevoke', function (event) {
			$.each(window.sbi.feeds,function(index){
				window.sbi.feeds[ index ].settings.consentGiven = false;
				window.sbi.feeds[ index ].afterConsentToggled();
			});
		});

		// Complianz by Really Simple Plugins
		$(document).on('cmplzEnableScripts', function (event) {
			if ( event.detail === 'marketing' ) {
				$.each(window.sbi.feeds,function(index){
					window.sbi.feeds[ index ].settings.consentGiven = true;
					window.sbi.feeds[ index ].afterConsentToggled();
				});
			}
		});

		// Borlabs Cookie by Borlabs
		$(document).on('borlabs-cookie-consent-saved', function (event) {
			$.each(window.sbi.feeds,function(index){
				window.sbi.feeds[ index ].settings.consentGiven = false;
				window.sbi.feeds[ index ].afterConsentToggled();
			});
		});

		// Real Cookie Banner by Devowl.io
		if (typeof window.consentApi !== 'undefined') {
			window.consentApi?.consent("smash-balloon-social-photo-feed").then(() => {
				try {
					// applies full features to feed
					$.each(window.sbi.feeds,function(index){
						window.sbi.feeds[ index ].settings.consentGiven = true;
						window.sbi.feeds[ index ].afterConsentToggled();
					});
				}
				catch (error) {
					// do nothing
				}
			});
		}

		$('.moove-gdpr-infobar-allow-all').on('click',function() {
			setTimeout(function() {
				$.each(window.sbi.feeds,function(index){
					window.sbi.feeds[ index ].afterConsentToggled();
				});
			},1000);
		});

		// hide notice on click and send ajax request to backend
		$('#sbi-frce-hide-license-error').on('click',function() {
			$('#sbi-fr-ce-license-error').slideUp();
			jQuery.ajax({
				url: sbyOptions.adminAjaxUrl,
				type: 'post',
				data: {
					action: 'sbi_hide_frontend_license_error',
					nonce: sbyOptions.nonce
				},
				success: function(msg){
					console.log(msg);
				}
			});
		})


		// WPConsent
		window.addEventListener('wpconsent_consent_saved', function(event) {
			$.each(window.sbi.feeds, function (index) {
				window.sbi.feeds[index].afterConsentToggled();
			});
		});

		window.addEventListener('wpconsent_consent_updated', function(event) {
			$.each(window.sbi.feeds, function (index) {
				window.sbi.feeds[index].afterConsentToggled();
			});
		});
	});

} // if sbi_js_exists
