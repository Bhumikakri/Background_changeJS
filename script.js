let button = document.getElementById("btn");

let colorArray =["rgb(93, 138, 168)","url('https://wallpapercave.com/wp/9KxfB3a.jpg')","linear-gradient(red, yellow)","rgb(240, 248, 255)","url('https://www.hdwallpapers.in/download/pink_cosmos_flowers-2560x1440.jpg')",
"linear-gradient(lime, yellow)","rgb(153, 102, 204)","url('https://th.bing.com/th/id/R.abf9acdc0d7abfa94d948b27f62ef8b0?rik=U8QszC%2br7McjjA&riu=http%3a%2f%2f3.bp.blogspot.com%2f--hg7ewPqTuI%2fUCXocpg1W3I%2fAAAAAAAAAKM%2f4d3kb5H3tmQ%2fs1600%2fbeautiful%2bflower%2bwallpaper%2b(11).jpg&ehk=aeyuzlfDcS%2b%2fIHRkEz1EE02pR7WxtbapIsGkJc0VTTc%3d&risl=&pid=ImgRaw&r=0')"
,"rgb(255, 153, 102)"," rgb(2,0,36)"," rgb(0, 255, 200)","url('https://wallpapercave.com/wp/9KxfB3a.jpg')"," rgb(247, 0, 255)","rgb(255, 166, 0)","rgb(255, 0, 0)",
"rgb(0, 255, 0)","rgb(250, 0, 255)","rgb(0, 0, 255)","rgb(245, 240, 0)","rgb(255, 251, 0)","rgb(0, 255, 191);","rgb(255, 0, 234)","linear-gradient(#fcb045,#1dfdab)","rgb(179, 255, 0)","rgb(255, 102, 0)",
"rgb(195, 0, 255)","rgb(255, 0, 128)","rgb(155, 0, 108)"," rgb(105, 105, 118)","rgb(0, 0, 0)","rgb(105, 0, 0)"," rgb(105, 102, 0)",
"rgb(255, 255, 255)","rgb(205, 205, 255)","rgb(255, 132, 132)","linear-gradient(red, blue,green)","linear-gradient(orange, gray)","linear-gradient(blue, red)","rgb(0, 255, 136)","linear-gradient(	#ff033e, #915c83, #f4c2c2)","rgb(222, 184, 135)"]

let i=0;

button.addEventListener("click", () => {
    // document.body.style.background = colorArray;
    if (i == colorArray.length) {
        i = 0;
      }
      document.body.style.background = colorArray[i];
      i++;
        button.classList.add("button");

    setTimeout(() => {
        button.classList.remove("button");
    },500);
})