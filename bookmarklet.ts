// Allow extending window
interface Window { baselineGridViewer: any; }
window.baselineGridViewer = window.baselineGridViewer || {};

// BaselineGridViewer Class
class BaselineGridViewer {

  ids = {
    controller: "baseline-grid-controller",
    viewer:     "baseline-grid-viewer",
    style:      "baseline-grid-stylesheet"
  };
  interval: number = 12;

  constructor() {
    // View baseline grid controller and viewer
    this.toggleBaselineGridViewer();
  }

  append() {
    // Setup HTML for baseline grid controller and viewer
    var controllerHMTL = "<div id='" + this.ids.controller + "'><label>Interval: <input name='bsg-interval' type='number' min='0' max='24' value='" + this.interval + "' /></label></div>",
        viewerHTML = "<div id='" + this.ids.viewer + "'></div>",
    // Add HTML to body tag
        html = document.body.innerHTML;
    document.body.innerHTML = controllerHMTL + html + viewerHTML;
    // Setup HTML for stylesheet
    var stylesheet = "<style id='" + this.ids.style + "'>#" + this.ids.viewer + "{position:absolute;top:37px;left:0;width:100%;height:" + document.body.clientHeight + "px;background-repeat:repeat;}</style>";
    // Append stylesheet to head tag
    document.head.innerHTML += stylesheet;
    // Add gradient overlay
    this.addGradient(document.getElementById(this.ids.viewer));
  }

  remove() {
    for(var id in this.ids) {
      if(this.ids.hasOwnProperty(id)) {
        console.log(document.getElementById(this.ids[id]));
      }
    }
  }

  addGradient(el) {
    /**
    - FUNCTIE ADDSTYLESHEETS
    - FUNCTIE SETGRADIENT
    - FUNCTIE REMOVESTYLESHEETS
    **/
    var interval = parseInt(document.getElementById(this.ids.controller).getElementsByTagName("input")[0].value),
        bgImage = `linear-gradient(to bottom, transparent ${interval - 1}px, rgba(0,0,0,0.5) ${interval}px);`,
        bgSize = `100% ${interval}px`;

    // gradient = `-webkit-linear-gradient(to bottom, transparent ${interval - 1}px, rgba(0,0,0,0.5) ${interval}px);`;
    /*
    console.log(gradient);
    //console.log(test);
    el.style.background = gradient;
    // el.style.backgroundSize = "100% " + interval + "px";
    */
    var string = `<style>#${el.id}{background-image:${bgImage};background-size:${bgSize}}</style>`;
    console.log(string);
    document.head.innerHTML += string;
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
// window.baselineGridViewer = window.baselineGridViewer || baseline;

/*
(function(document, window) {

  function baselineGridViewer() {
    (window.baselineGridViewer = function() {
      // Story body and its HTML in variables
      var body = document.body,
          html = body.innerHTML,
          interval = 12,
          ids = {
            controller: "baseline-grid-controller",
            viewer:     "baseline-grid-viewer",
            style:      "baseline-grid-stylesheet"
          },
      // Prepend baseline grid controller and append viewer
          controllerHMTL = "<div id='" + ids.controller + "'><label>Interval: <input name='bsg-interval' type='number' min='0' max='24' value='" + interval + "' /></label></div>",
          viewerHTML = "<div id='" + ids.viewer + "'></div>";
          body.innerHTML = controllerHMTL + html + viewerHTML;
      // Store new elements in variables
      var controller = document.getElementById(ids.controller),
          viewer = document.getElementById(ids.viewer),
          input = controller.getElementsByTagName("input")[0],
      // Append stylesheet
          stylesheet = "<style id='" + ids.style + "'>#" + ids.viewer + "{position:absolute;top:0;left:0;width:100%;height:" + body.clientHeight + "px;}#" + ids.viewer + ":after{display:block;content:'';position:absolute;top:0;left:0;z-index:9999;width:100%;height:100%;}</style>";
      document.head.innerHTML += stylesheet;
      // Append gradient to viewer
      viewer.style.backgroundImage = "linear-gradient(to bottom, transparent " + (input.value - 1) + "px, rgba(0,0,0,0.5) " + input.value + "px)";
    })();
  };
  baselineGridViewer();

})(this.document, this);
*/
/*
.vertical-grid{
  position:relative
}
.vertical-grid:after{
  display:block;
  content:"";
  position:absolute;
  top:0;
  left:0;
  z-index:1000;
  width:100%;
  height:100%;
  background-image:-webkit-linear-gradient(top, transparent 11px, rgba(0,0,0,0.5) 12px);
  background-image:-o-linear-gradient(top, transparent 11px, rgba(0,0,0,0.5) 12px);
  background-image:linear-gradient(to bottom, transparent 11px, rgba(0,0,0,0.5) 12px);
  background-repeat:repeat-x;
  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=0);
  background-size:100% 12px;
  background-repeat:repeat-y
}
*/
