function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });

    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Jvrxq-4dx/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}