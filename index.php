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
  <h1>Cras justo odio</h1>
  <?php for($i = 0; $i < 10; $i++) { ?>
    <h2>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</h2>
    <p>Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor.</p>
  <?php } ?>

  <?php /* <script src="bookmarklet.js"></script> */ ?>
</body>
</html>
