window.baselineGridViewer = window.baselineGridViewer || {};
var BaselineGridViewer = (function () {
    function BaselineGridViewer(colors) {
        if (colors === void 0) { colors = { gap: "rgba(255,0,0,0)", ruler: "rgba(255,0,0,0.5)" }; }
        this.colors = {
            gap: "rgba(255,0,0,0)",
            ruler: "rgba(255,0,0,0.5)"
        };
        this.ids = {
            controller: "baseline-grid-controller",
            viewer: "baseline-grid-viewer",
            style: "baseline-grid-stylesheet"
        };
        this.interval = 12;
        this.attachHandlers = function () {
            var base = this, input = document.getElementById(this.ids.controller).getElementsByTagName("input")[0], removeLink = document.getElementById(this.ids.controller).getElementsByTagName("a")[0];
            input.addEventListener("change", function () {
                base.addGradient();
            });
            removeLink.addEventListener("click", function () {
                base.remove();
            });
        };
        this.toggleBaselineGridViewer = function () {
            if (document.getElementById(this.ids.controller) === null) {
                this.append();
            }
            else {
                this.remove();
            }
        };
        this.colors = colors;
        this.toggleBaselineGridViewer();
        this.attachHandlers();
    }
    BaselineGridViewer.prototype.append = function () {
        var controllerHMTL = "<div id='" + this.ids.controller + "'><strong>Baseline grid</strong> &mdash; <label>Interval: <input name='bsg-interval' type='number' min='0' max='24' step='2' value='" + this.interval + "' /> <span>px</span></label><a href='javascript:;'>Close</a></div>", viewerHTML = "<div id='" + this.ids.viewer + "'></div>", html = document.body.innerHTML;
        document.body.innerHTML = controllerHMTL + html + viewerHTML;
        var height = 46, stylesheet = "<style id='" + this.ids.style + "'>#" + this.ids.controller + ",#" + this.ids.viewer + "{z-index:999999;}#" + this.ids.controller + "{position:relative;box-sizing:border-box;background:#eee;padding:10px;font:15px/1.6 Arial,sans-serif;height:" + height + "px;}#" + this.ids.controller + " label{display:inline;font-size:inherit;}#" + this.ids.controller + " input{box-shadow:none;font-size:inherit;}#" + this.ids.controller + " a{float:right;}#" + this.ids.controller + " span{color:#999;font-size:80%;}#" + this.ids.viewer + "{position:absolute;top:" + height + "px;left:0;width:100%;height:" + document.body.clientHeight + "px;}</style>";
        document.head.innerHTML += stylesheet;
        this.addGradient();
    };
    BaselineGridViewer.prototype.remove = function () {
        for (var id in this.ids) {
            if (this.ids.hasOwnProperty(id)) {
                var el = document.getElementById(this.ids[id]);
                el.parentNode.removeChild(el);
            }
        }
    };
    BaselineGridViewer.prototype.addGradient = function () {
        var el = document.getElementById(this.ids.viewer), interval = parseInt(document.getElementById(this.ids.controller).getElementsByTagName("input")[0].value), baselineGrid = "repeating-linear-gradient(180deg, " + this.colors.gap + ", " + this.colors.gap + " " + (interval - 1) + "px, " + this.colors.ruler + " " + interval + "px)";
        el.style.backgroundImage = baselineGrid;
        el.style.backgroundSize = "100% " + interval + "px";
    };
    return BaselineGridViewer;
})();
var baseline = new BaselineGridViewer();
