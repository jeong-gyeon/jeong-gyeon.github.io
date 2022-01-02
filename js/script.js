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
