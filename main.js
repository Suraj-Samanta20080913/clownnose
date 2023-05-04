x=0;
y=0;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/J7TRNC0R/Clown-Nose-PNG-Pic-removebg-preview.png');
}
function setup(){
        canvas= createCanvas(300,300);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(300,300);
        video.hide();
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose',gotPoses);
}
function take_snapshot(){
save ('Filtered_Image.png');
}
function modelLoaded(){
    console.log('PoseNet Has Been Initialized');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        x= results[0].pose.nose.x;
        y= results[0].pose.nose.y;
        console.log("nose x ="+ results[0].pose.nose.x);
        console.log("nose y ="+ results[0].pose.nose.y);
    }
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,x-15,y-10,30,30);
    }
