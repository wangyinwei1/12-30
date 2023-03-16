// var mt=$('.xf').offset().top;

// $(window).scroll(function() {
//    if($(window).scrollTop()>mt){

//        $('.xf').css("position","fixed");
//      }else{

//    $('.xf').css("position","unset");
//      }

//   });
var deviceWidth =
  document.documentElement.clientWidth > 750
    ? 750
    : document.documentElement.clientWidth
document.documentElement.style.fontSize = deviceWidth / 7.5 + "px"
$(window).resize(function () {
  var deviceWidth =
    document.documentElement.clientWidth > 750
      ? 750
      : document.documentElement.clientWidth
  document.documentElement.style.fontSize = deviceWidth / 7.5 + "px"
})
$(".wapnav").click(function () {
  if ($(this).is(".open")) {
    $(this).removeClass("open")
    $(".navbox").css("display", "none")
  } else {
    $(this).addClass("open")
    $(".navbox").css("display", "flex")
  }
})
let page = 1
$(".more").click(function () {
  $.ajax({
    url: "/index",
    type: "post",
    data: { page: page },
    success: function (data) {
      if (data.code == 200) {
        let arr = data.data
        let html = ""
        for (var i = 0; i < arr.length; i++) {
          html += '<p class="p1">' + arr[i] + "</p>"
        }
        $("gzlist").append(html)
        page++
      }
    },
    error: function (error) {
      console.log(error)
    },
  })
})

// $.ajax({
//   url:'/index',
//   type:'post',
//   data:{email:email},
//   success:function(data){
//
//   },
//   error:function(error){
//     console.log(error)
//   }
// })

// //创建小方块的jquery对象

let oldtop = ""
let old_position_top = $(".xlbtnimg").position().top

function ts(e) {
  console.log(e)
  oldtop = e.pageY
}
function td(e) {
  let new_top = e.pageY
  var change_y = new_top - oldtop

  if (change_y < 0) {
    change_y = 0
  }
  let b = 50 + change_y

  let bottom = "calc(100% - " + b + "px)"

  $(".xlbox").css("bottom", bottom)
}
function te(e) {
  let new_top = e.pageY
  var change_y = new_top - oldtop
  if (change_y > 80) {
    let bottom = "0"

    $(".xlbox").css("bottom", bottom)
  }
}

$(".yy2").on("click", ".a1", function () {
  $(".openbox").css("display", "none")
  var title = $(this).find("span").html()
  var content = $("<div class='modal'></div>")
    .css("width", "1140px")
    .html($(this).find(".openbox .pt2").html())
  var d = dialog({
    title,
    content,
  })
  d.show()
})

$(".btn").on("click", function () {
  $(".openbox").css("display", "none")
  var title = $(this).find("span").html()
  var content = $(
    "<div class='submit-success'><div class='submit-img'></div><p class='submit-title'>提交成功!</p><p class='desc'>我们会在3个工作日之内联系您。</p></div>"
  )
  var d = dialog({
    content: content,
  })
  d.show()
  setTimeout(function () {
    d.close().remove()
  }, 1000)
})
