// Here You can type your custom JavaScript...

setInterval(() => {
  $(".ant-radio-button-wrapper")[0].click(() => {});
}, 2000);

let interval = setInterval(() => {
  let vid = $("body > div:nth-child(8) > div > div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div > div > div.col-md-3.col-lg-3 > div:nth-child(1) > div > div > video");
  // vid.attr("__pip__", "true");
  // vid.attr("playbackrate", "1.5");
  let speed = document.querySelector('body > div:nth-child(8) > div > div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div > div > div.col-md-3.col-lg-3 > div:nth-child(1) > div > div > video').playbackRate = 1.5;
  let pip = document.querySelector('body > div:nth-child(8) > div > div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div > div > div.col-md-3.col-lg-3 > div:nth-child(1) > div > div > video').requestPictureInPicture();
  // console.log(speed);
  console.log(pip);
  // vid[0].load();
  // vid[0].play();
  
  pip.then(() => {
    // console.log("speed");
    // pip;
    // clearInterval(interval);
  });
}, 100);

// $(document).on("keydown", (e) => {
//   // e.preventDefault();
//   if(e.ctrlKey && e.keyCode == 80){
//       // ctrl + p
//       document.querySelector('body > div:nth-child(8) > div > div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div > div > div.col-md-3.col-lg-3 > div:nth-child(1) > div > div > video').requestPictureInPicture();
//     }
// })

// let copy = setInterval(() => {
//   let copyClicked = false;
//   document.querySelector("body > div:nth-child(8) > div > div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div > div > div.col-md-3.col-lg-3 > div:nth-child(2) > div:nth-child(3) > button").click(() => {
//     clearInterval(copy);
//   })
// }, 1000);

// let violence = setInterval(() => {
//   if(document.querySelector("body > div:nth-child(8) > div > div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div > div > div.col-md-7.col-lg-7 > div:nth-child(2) > div > div.d-flex.text-center.contentCard.my-2 > div > div.d-flex.flex-wrap > div > div.d-flex.flex-wrap > div:nth-child(1)")").click(() => {})){
//     clearInterval(violence);
//   }
// }, 1000};

$(document).keydown(function (e) {

  if (e.ctrlKey && e.keyCode == 13) {
    // Ctrl + Enter pressed
    document.querySelector("body > div:nth-child(8) > div > div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div > div > div.col-md-3.col-lg-3 > div.d-flex.row > div:nth-child(3) > button").click(() => {
      //
    });
  }
});
let i = 1;
$(document).keydown(function(e){
    if (e.keyCode == 39) { 
      // right arrow
      if(i>3) i = 0;
      $(".ant-menu-item-group-list>li")[i].click(()=>{});
      i++;
      // return false;
    }
});

$(document).keydown(function (e) {
  if (e.ctrlKey && e.keyCode == 67) {
    // ctrl + c
    document.querySelector("body > div:nth-child(8) > div > div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div > div > div.col-md-3.col-lg-3 > div:nth-child(2) > div:nth-child(3) > button").click(() => {
      // clearInterval(copy);
    })
  }
});



