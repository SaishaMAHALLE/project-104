Webcam.set({
    width:365, 
    height:295,
    image_format:"png",
    png_quality:90

});

camera = document.getElementById("camera");

Webcam.attach("camera");

function capture() {
    Webcam.snap(
        function(data_uri){
            document.getElementById("captured_img").innerHTML='<img id="result" src="'+data_uri+'"/>';
        }
    );

}


console.log("ml5 Version- " , ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PHSy6r_t9/model.json', model_loaded);

function model_loaded() {
    console.log("model got loaded");
}


