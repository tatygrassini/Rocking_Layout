
var rockwell = { src: ' rockwell.swf' };


sIFR.activate(rockwell);


sIFR.replace(rockwell, {
  selector: 'h3.flash', 'h4.flash',
  css: '.sIFR-root { background-color: #191919; color: #e18610; font-size: 30px; text-transform: uppercase; margin-bottom: 9px;}'
});
