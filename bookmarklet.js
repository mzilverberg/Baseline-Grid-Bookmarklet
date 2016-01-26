window.baselineGridViewer = window.baselineGridViewer || {};
var BaselineGridViewer = (function () {
    function BaselineGridViewer() {
        this.ids = {
            controller: "baseline-grid-controller",
            viewer: "baseline-grid-viewer",
            style: "baseline-grid-stylesheet"
        };
        this.interval = 12;
        this.toggleBaselineGridViewer = function () {
            if (document.getElementById(this.ids.controller) === null) {
                this.append();
            }
            else {
                this.remove();
            }
        };
        this.toggleBaselineGridViewer();
    }
    BaselineGridViewer.prototype.append = function () {
        var controllerHMTL = "<div id='" + this.ids.controller + "'><label>Interval: <input name='bsg-interval' type='number' min='0' max='24' value='" + this.interval + "' /></label></div>", viewerHTML = "<div id='" + this.ids.viewer + "'></div>", html = document.body.innerHTML;
        document.body.innerHTML = controllerHMTL + html + viewerHTML;
        var stylesheet = "<style id='" + this.ids.style + "'>#" + this.ids.viewer + "{position:absolute;top:28px;left:0;width:100%;height:" + document.body.clientHeight + "px;}#" + this.ids.viewer + ":after{display:block;content:'';position:absolute;top:0;left:0;z-index:9999;width:100%;height:100%;}</style>";
        document.head.innerHTML += stylesheet;
        this.addGradient(document.getElementById(this.ids.viewer));
    };
    BaselineGridViewer.prototype.remove = function () {
        for (var id in this.ids) {
            if (this.ids.hasOwnProperty(id)) {
                console.log(document.getElementById(this.ids[id]));
            }
        }
    };
    BaselineGridViewer.prototype.addGradient = function (el) {
        var interval = document.getElementById(this.ids.controller).getElementsByTagName("input")[0].value, prefixes = " -webkit- -moz-", gradient = "linear-gradient(to bottom, transparent " + (interval - 1) + "px, rgba(0,0,0,0.5) " + interval + "px);", test = prefixes.split(" ").join(gradient);
        console.log(test);
        el.style.backgroundImage = gradient;
        console.log(el);
    };
    return BaselineGridViewer;
})();
var baseline = new BaselineGridViewer();
