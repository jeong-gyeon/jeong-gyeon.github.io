$(function () {
    var $setElem = $('.switch'),
        pcName = '_pc',
        spName = '_sp',
        replaceWidth = 641;
    $setElem.each(function () {
        var $this = $(this);

        function imgSize() {
            if (window.innerWidth > replaceWidth) {
                $this.attr('src', $this.attr('src').replace(spName, pcName)).css({
                    visibility: 'visible'
                });
            } else {
                $this.attr('src', $this.attr('src').replace(pcName, spName)).css({
                    visibility: 'visible'
                });
            }
        }
        $(window).resize(function () {
            imgSize();
        });
        imgSize();
    });
});

$(document).ready(function () {
  $("label").click(function () {
    $(".logo").toggleClass("logo-invert");
  });
});

$(document).ready(function () {
  var docWidth1 = $(document).width() - 32; // 문서 가로값
  var docWidth2 = $(document).width() - 32; // 문서 가로값
  var docWidth3 = $(document).width() - 32; // 문서 가로값
  var docWidth4 = $(document).width() - 32; // 문서 가로값
  var docWidth5 = $(document).width() - 32; // 문서 가로값
  var docWidth6 = $(document).width() - 32; // 문서 가로값
  var docHeight1 = $(document).height() - 32; // 문서 세로값
  var docHeight2 = $(document).height() - 32; // 문서 세로값
  var docHeight3 = $(document).height() - 32; // 문서 세로값
  var docHeight4 = $(document).height() - 32; // 문서 세로값
  var docHeight5 = $(document).height() - 32; // 문서 세로값
  var docHeight6 = $(document).height() - 32; // 문서 세로값
  // 설정값

  var maxRox1 = 0; // random offset x 최대값
  var maxRox2 = 0; // random offset x 최대값
  var maxRox3 = 0; // random offset x 최대값
  var maxRox4 = 0; // random offset x 최대값
  var maxRox5 = 0; // random offset x 최대값
  var maxRox6 = 0; // random offset x 최대값
  var maxRoh1 = 0; // random offset y 최대값
  var maxRoh2 = 0; // random offset y 최대값
  var maxRoh3 = 0; // random offset y 최대값
  var maxRoh4 = 0; // random offset y 최대값
  var maxRoh5 = 0; // random offset y 최대값
  var maxRoh6 = 0; // random offset y 최대값
  var minRox1 = 0; // random offset x 최소값
  var minRox2 = 0; // random offset x 최소값
  var minRox3 = 0; // random offset x 최소값
  var minRox4 = 0; // random offset x 최소값
  var minRox5 = 0; // random offset x 최소값
  var minRox6 = 0; // random offset x 최소값
  var minRoh1 = 0; // random offset y 최소값
  var minRoh2 = 0; // random offset y 최소값
  var minRoh3 = 0; // random offset y 최소값
  var minRoh4 = 0; // random offset y 최소값
  var minRoh5 = 0; // random offset y 최소값
  var minRoh6 = 0; // random offset y 최소값
  var imgWidth = 209; // 이미지 가로 크기
  var imgHeight = 111; // 이미지 세로 크기

  var imgPath1 = new Array();
  var imgPath2 = new Array();
  var imgPath3 = new Array();
  var imgPath4 = new Array();
  var imgPath5 = new Array();
  var imgPath6 = new Array();

  imgPath1.push("../images/circle.png");
  imgPath2.push("../images/firework.png");
  imgPath3.push("../images/firework.png");
  imgPath4.push("../images/pie.png");
  imgPath5.push("../images/as.png");
  imgPath6.push("../images/pie.png");

  var rox1 = Math.floor(Math.random() * docWidth1 + 1) - 0;
  var rox2 = Math.floor(Math.random() * docWidth2 + 1) - 0;
  var rox3 = Math.floor(Math.random() * docWidth3 + 1) - 0;
  var rox4 = Math.floor(Math.random() * docWidth4 + 1) - 0;
  var rox5 = Math.floor(Math.random() * docWidth5 + 1) - 0;
  var rox6 = Math.floor(Math.random() * docWidth6 + 1) - 0;

  var roh1 = Math.floor(Math.random() * docHeight1 + 1) - 0;
  var roh2 = Math.floor(Math.random() * docHeight2 + 1) - 0;
  var roh3 = Math.floor(Math.random() * docHeight3 + 1) - 0;
  var roh4 = Math.floor(Math.random() * docHeight4 + 1) - 0;
  var roh5 = Math.floor(Math.random() * docHeight5 + 1) - 0;
  var roh6 = Math.floor(Math.random() * docHeight6 + 1) - 0;

  // offset이 화면 밖으로 넘어가지 않도록


  if (rox1 + imgWidth > docWidth1) {
    rox1 = docWidth1 - imgWidth;
  } else if (rox1 - imgWidth < 0) {
    rox1 = 0;
  }
  if (rox2 + imgWidth > docWidth2) {
    rox2 = docWidth2 - imgWidth;
  } else if (rox2 - imgWidth < 0) {
    rox2 = 0;
  }
  if (rox3 + imgWidth > docWidth3) {
    rox3 = docWidth3 - imgWidth;
  } else if (rox3 - imgWidth < 0) {
    rox3 = 0;
  }
  if (rox4 + imgWidth > docWidth4) {
    rox4 = docWidth4 - imgWidth;
  } else if (rox4 - imgWidth < 0) {
    rox4 = 0;
  }
  if (rox5 + imgWidth > docWidth5) {
    rox5 = docWidth5 - imgWidth;
  } else if (rox5 - imgWidth < 0) {
    rox5 = 0;
  }
  if (rox6 + imgWidth > docWidth6) {
    rox6 = docWidth6 - imgWidth;
  } else if (rox6 - imgWidth < 0) {
    rox6 = 0;
  }

  if (roh1 + imgHeight > docHeight1) {
    roh1 = docHeight1 - imgHeight;
  } else if (roh1 - imgHeight < 0) {
    roh1 = 0;
  }
  if (roh2 + imgHeight > docHeight2) {
    roh2 = docHeight2 - imgHeight;
  } else if (roh2 - imgHeight < 0) {
    roh2 = 0;
  }
  if (roh3 + imgHeight > docHeight3) {
    roh3 = docHeight3 - imgHeight;
  } else if (roh3 - imgHeight < 0) {
    roh3 = 0;
  }
  if (roh4 + imgHeight > docHeight4) {
    roh4 = docHeight4 - imgHeight;
  } else if (roh4 - imgHeight < 0) {
    roh4 = 0;
  }
  if (roh5 + imgHeight > docHeight5) {
    roh5 = docHeight5 - imgHeight;
  } else if (roh5 - imgHeight < 0) {
    roh5 = 0;
  }
  if (roh6 + imgHeight > docHeight6) {
    roh6 = docHeight6 - imgHeight;
  } else if (roh6 - imgHeight < 0) {
    roh6 = 0;
  }

  if (rox1 < minRox1 && minRox1 != 0) {
    rox1 = minRox1;
  } else if (rox1 > maxRox1 && maxRox1 != 0) {
    rox1 = maxRox1;
  }
  if (rox2 < minRox2 && minRox2 != 0) {
    rox2 = minRox2;
  } else if (rox2 > maxRox2 && maxRox2 != 0) {
    rox2 = maxRox2;
  }
  if (rox3 < minRox3 && minRox3 != 0) {
    rox3 = minRox3;
  } else if (rox3 > maxRox3 && maxRox3 != 0) {
    rox3 = maxRox3;
  }
  if (rox4 < minRox4 && minRox4 != 0) {
    rox4 = minRox4;
  } else if (rox4 > maxRox4 && maxRox4 != 0) {
    rox4 = maxRox4;
  }
  if (rox5 < minRox5 && minRox5 != 0) {
    rox5 = minRox5;
  } else if (rox5 > maxRox5 && maxRox5 != 0) {
    rox5 = maxRox5;
  }
  if (rox6 < minRox6 && minRox6 != 0) {
    rox6 = minRox6;
  } else if (rox6 > maxRox6 && maxRox6 != 0) {
    rox6 = maxRox6;
  }

  if (roh1 < minRoh1 && minRoh1 != 0) {
    roh1 = minRoh1;
  } else if (roh1 > maxRoh1 && maxRoh1 != 0) {
    roh1 = maxRoh1;
  }
  if (roh2 < minRoh2 && minRoh2 != 0) {
    roh2 = minRoh2;
  } else if (roh2 > maxRoh2 && maxRoh2 != 0) {
    roh2 = maxRoh2;
  }
  if (roh3 < minRoh3 && minRoh3 != 0) {
    roh3 = minRoh3;
  } else if (roh3 > maxRoh3 && maxRoh3 != 0) {
    roh3 = maxRoh3;
  }
  if (roh4 < minRoh4 && minRoh4 != 0) {
    roh4 = minRoh4;
  } else if (roh4 > maxRoh4 && maxRoh4 != 0) {
    roh4 = maxRoh4;
  }
  if (roh5 < minRoh5 && minRoh5 != 0) {
    roh5 = minRoh5;
  } else if (roh5 > maxRoh5 && maxRoh5 != 0) {
    roh5 = maxRoh5;
  }
  if (roh6 < minRoh6 && minRoh6 != 0) {
    roh6 = minRoh6;
  } else if (roh6 > maxRoh6 && maxRoh6 != 0) {
    roh6 = maxRoh6;
  }

  var randNum1 = Math.floor(Math.random() * imgPath1.length);
  var randNum2 = Math.floor(Math.random() * imgPath2.length);
  var randNum3 = Math.floor(Math.random() * imgPath3.length);
  var randNum4 = Math.floor(Math.random() * imgPath4.length);
  var randNum5 = Math.floor(Math.random() * imgPath5.length);
  var randNum6 = Math.floor(Math.random() * imgPath6.length);
  var imgPath1 = imgPath1[randNum1];
  var imgPath2 = imgPath2[randNum2];
  var imgPath3 = imgPath3[randNum3];
  var imgPath4 = imgPath4[randNum4];
  var imgPath5 = imgPath5[randNum5];
  var imgPath6 = imgPath6[randNum6];

  var html1 =
    "<img src='" +
    imgPath1 +
    "' style='position: absolute; left:" +
    rox1 +
    "px; top:" +
    roh1 +
    "px; z-index:0;' class='preview' />";
  var html2 =
    "<img src='" +
    imgPath2 +
    "' style='position: absolute; left:" +
    rox2 +
    "px; top:" +
    roh2 +
    "px; z-index:0;' class='preview' />";
  var html3 =
    "<img src='" +
    imgPath3 +
    "' style='position: absolute; left:" +
    rox3 +
    "px; top:" +
    roh3 +
    "px; z-index:0;' class='preview' />";
  var html4 =
    "<img src='" +
    imgPath4 +
    "' style='position: absolute; left:" +
    rox4 +
    "px; top:" +
    roh4 +
    "px; z-index:0;' class='preview' />";
  var html5 =
    "<img src='" +
    imgPath5 +
    "' style='position: absolute; left:" +
    rox5 +
    "px; top:" +
    roh5 +
    "px; z-index:0;' class='preview' />";
  var html6 =
    "<img src='" +
    imgPath6 +
    "' style='position: absolute; left:" +
    rox6 +
    "px; top:" +
    roh6 +
    "px; z-index:0;' class='preview' />";

  $("body").prepend(html1);
  $("body").prepend(html2);
  $("body").prepend(html3);
  $("body").prepend(html4);
  $("body").prepend(html5);
  $("body").prepend(html6);
});
