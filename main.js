var camera = document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
Webcam.attach(camera);
function captureimage() {
    Webcam.snap(function (data_uri) {
        document.getElementById("output").innerHTML = '<img id="picture" src="' + data_uri + '">';
    })
}
console.log("ml5 version is = " + ml5.version);
var model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DCPPBTZdj/model.json",modelloaded);

function modelloaded(){
    console.log("model loaded");
}

function check(){
  var picture = document.getElementById("picture");
  model.classify(picture,gotresults);
}

function gotresults(error,results){
if (error) {
    console.log(error);
}
else{
    console.log(results);
    document.getElementById("object").innerHTML = results[0].label;
    document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}