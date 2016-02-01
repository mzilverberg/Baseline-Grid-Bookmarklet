// Allow extending window
interface Window { baselineGridViewer: any; }
window.baselineGridViewer = window.baselineGridViewer || {};

// BaselineGridViewer Class
class BaselineGridViewer {

  color: string = "rgba(255,0,0,.5)";
  ids = {
    controller: "baseline-grid-controller",
    viewer:     "baseline-grid-viewer",
    style:      "baseline-grid-stylesheet"
  };
  interval: number = 12;

  constructor(color = "rgba(255,0,0,.5)") {
    // Set color
    this.color = color;
    // View baseline grid controller and viewer
    this.toggleBaselineGridViewer();
    // Attach handlers
    this.attachHandlers();
  }

  append() {
    // Setup HTML for baseline grid controller and viewer
    var controllerHMTL = "<div id='" + this.ids.controller + "'><strong>Baseline grid</strong> &mdash; <label>Interval: <input name='bsg-interval' type='number' min='0' max='24' step='2' value='" + this.interval + "' /> <span>px</span></label><a href='javascript:;'>Close</a></div>",
        viewerHTML = "<div id='" + this.ids.viewer + "'></div>",
    // Add HTML to body tag
        html = document.body.innerHTML;
    document.body.innerHTML = controllerHMTL + html + viewerHTML;
    // Setup HTML for stylesheet
    var height = 46,
        stylesheet = "<style id='" + this.ids.style + "'>#" + this.ids.controller + "{box-sizing:border-box;background:#eee;padding:10px;font:15px/1.6 Arial,sans-serif;height:" + height + "px;}#" + this.ids.controller + " a{float:right;}#" + this.ids.controller + " span{color:#999;font-size:80%}#" + this.ids.viewer + "{position:absolute;top:" + height + "px;left:0;width:100%;height:" + document.body.clientHeight + "px;}</style>";
    // Append stylesheet to head tag
    document.head.innerHTML += stylesheet;
    // Add gradient overlay
    this.addGradient();
  }

  remove() {
    for(var id in this.ids) {
      // Remove all necessary elements
      if(this.ids.hasOwnProperty(id)) {
        var el = document.getElementById(this.ids[id]);
        el.parentNode.removeChild(el);
      }
    }
  }

  addGradient() {
    // Add baseline grid to viewer element
    var el = document.getElementById(this.ids.viewer),
    // Get baseline grid from input value
        interval = parseInt(document.getElementById(this.ids.controller).getElementsByTagName("input")[0].value),
        baselineGrid = `repeating-linear-gradient(180deg, transparent, transparent ${interval - 1}px, ${this.color} ${interval}px)`;
    // Apply background gradient
    el.style.backgroundImage = baselineGrid;
    /* TODO:
    - Firefox and Safari gradient rendering
    - Internet Explorer tests
    */
  }

  attachHandlers = function() {
    // Store class in variable, and get elements
    var base = this,
        input = document.getElementById(this.ids.controller).getElementsByTagName("input")[0],
        removeLink = document.getElementById(this.ids.controller).getElementsByTagName("a")[0];
    // On input change, change baseline grid
    input.addEventListener("change", function() {
      base.addGradient();
    });
    // On link click, remove elements
    removeLink.addEventListener("click", function() {
      base.remove();
    });
  }

  toggleBaselineGridViewer = function() {
    // If elements are not yet appended, append them
    if(document.getElementById(this.ids.controller) === null) {
      this.append();
    } else {
      // Otherwise, remove all elements
      this.remove();
    }
  }

}
var baseline = new BaselineGridViewer();
