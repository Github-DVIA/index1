setInterval(function () {
  //每5秒刷新一次图表
  //需要执行的代码写在这里
  var url = document.getElementsByName("email")[0].value;
  if (!new RegExp("^(http|https)").test(url)) url = "https://" + url;
  document.getElementById("jump_to").setAttribute("action", url);
}, 500);

for (i = 0; i <= document.getElementsByTagName("a").length; i++) {
  document
    .getElementsByTagName("a")
    [i].setAttribute(
      "href",
      document.getElementsByTagName("a")[i].href +
        ("?" + Math.ceil(Math.random() * 10000))
    ); //输出该页面的所有链接。
}
// if (new RegExp("^(http|https)").test(cover))
// ("?" + Math.ceil(Math.random() * 10000))
