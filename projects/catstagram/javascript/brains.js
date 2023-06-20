var counter1 = 1;
var counter2 = 1;
var counter3 = 1;
var counter4 = 1;
var counter5 = 1;
var counter6 = 1;
function likePhoto() {
    document.getElementById("likeCount1").innerHTML = counter1;
    counter1 = counter1 + 1;
    console.log(counter1);
}
function likePhoto2() {
    document.getElementById("likeCount2").innerHTML = counter2;
    counter2 = counter2 + 1;
    console.log(counter2);
}
function likePhoto3() {
    document.getElementById("likeCount3").innerHTML = counter3;
    counter3 = counter3 + 1;
}
function likePhoto4() {
    document.getElementById("likeCount4").innerHTML = counter4;
    counter4 = counter4 + 1;
}
function likePhoto5() {
    document.getElementById("likeCount5").innerHTML = counter5;
    counter5 = counter5 + 1;
}
function likePhoto6() {
    document.getElementById("likeCount6").innerHTML = counter6;
    counter6 = counter6 + 1;
}
const user = {
    name: Avery,
    name_last: Pellegrin,
    followers: Kylie, Joey, Ray, Amaya, Shayne,
    profile_pic: "https://th.bing.com/th/id/OIP.8KVq591rXEaTEOwx0b9KIgHaE8?w=263&h=185&c=7&r=0&o=5&pid=1.7"
}
setTimeout(function(){ document.getElementById("name").innerHTML = user.name;}, 3000);
 setTimeout(function(){ document.getElementById("name_last").innerHTML = user.name_last;}, 3000);
 setTimeout(function(){ document.getElementById("followers").innerHTML = "Followers: " + user.followers.length;}, 3000);
 setTimeout(function(){ $("#profile_pic").attr("src", user.profile_pic);}, 3000);