// console.log('Hello World!');
// console.log('Hello World!');
// console.log('Hello World!');
// console.log('Hello World!');
// console.log('Hello World!');
// console.log('Hello World!');
// let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
// for(let index = 0;index <=10; index++ ){
//     console.log(arr[index])
// }
// for (let a = 1;a <= 10;a++){
//     let ans = a * 2
//     console.log("2", "x", a, "=", ans )
// }
// for (let i = 0; i < 3; i++) {
//     console.log("Parent Loop", i)
//     break;
//     for (let j = 0; j < 4; j++) {
//         console.log("Child Loop", j)
//     }
// }
// First time - parent loop
// let videos = ["video1", "video2", "video3", "video4", "video5"];
// // console.log(videos.length) // 5
// for  (let i = 0; i < videos.length; i++){
//     console.log(videos[i])
// }
// let video1Title = "video1"
// let video1Description = "video 1 description"
// let video1Image = "https://image.com"
var video1 = {
    title: "video1",
    description: "video 1 description",
    image: "https://image.com"
};
var videos = [
    {
        title: "video1",
        description: "video 1 description",
        image: "https://image.com"
    },
    {
        title: "video2",
        description: "video 2 description",
        image: "https://image.com"
    },
    {
        title: "video2",
        image: "https://image.com"
    },
];
for (var i = 0; i < videos.length; i++) {
    console.log(videos[i].description);
}
// for(let i=0; i<2; i++){
//     console.log(videos[i].title)
// }
// for (let i = 0; i< videos.length; i++){
//     console.log(videos[i].title)
// }
