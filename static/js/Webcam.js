<!DOCTYPE html>
<html lang="en">
<head>
  <title>getUserMedia Example</title>
  <meta charset="UTF-8"/>
<script>
  window.addEventListener("load", function() {
        var camera = document.getElementById("camera");
        var play = document.getElementById("play");
        var pause = document.getElementById("pause");
        var stop = document.getElementById("stop");
        var constraints = {audio:true, video:true};

        function success(stream) {
          camera.src = stream;
          camera.play();
          disableButtons(true, false, false);
        }

        function failure(error) {
          alert(JSON.stringify(error));
        }

        function disableButtons(disPlay, disPause, disStop) {
          play.disabled = disPlay;
          pause.disabled = disPause;
          stop.disabled = disStop;
        }

        disableButtons(true, true, true);

        if (navigator.getUserMedia)
          navigator.getUserMedia(constraints, success, failure);
        else
          alert("Your browser does not support getUserMedia()");

        play.addEventListener("click", function() {
          disableButtons(true, false, false);
          camera.play();
        }, false);

        pause.addEventListener("click", function() {
          disableButtons(false, true, false);
          camera.pause();
        }, false);

        stop.addEventListener("click", function() {
          disableButtons(true, true, true);
          camera.pause();
          camera.src = "";
        }, false);
      }, false);
    </script>
  </head>
  <body>
    <button id="play">Play</button>
    <button id="pause">Pause</button>
    <button id="stop">Stop</button>
    <br />
    <video id="camera"></video>
  </body>
  </html>
