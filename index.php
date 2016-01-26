<!DOCTYPE html>
<html class="no-js" lang="nl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Baseline Grid Bookmarklet test</title>
  <!-- CSS -->
  <style>
  html,
  body {
    margin: 0;
    padding: 0;
  }
  iframe {
    border: 0 none;
    width: 100vw;
    height: 100vh;
  }
  </style>
</head>

<body>

  <?php /* <a href="javascript:<?php echo file_get_contents("bookmarklet.js"); ?>">Test</a> */ ?>
  <a href="javascript:(function(){if(window.baselineGridViewer!==undefined){var baseline=new BaselineGridViewer();}else{document.body.appendChild(document.createElement('script')).src='bookmarklet.js';}})();">Test append script</a>
  <iframe src="https://www.smashingmagazine.com/2015/11/web-development-reading-list-edge-big-rig-staying-relevant/"></iframe>

  <?php /* <script src="bookmarklet.js"></script> */ ?>
</body>
</html>
