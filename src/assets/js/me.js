setInterval(function () {
  //每5秒刷新一次图表
  //需要执行的代码写在这里
  var url = document.getElementsByName("url")[0].value;
  document.getElementById("acess").setAttribute("onclick",  "location.href='" + url + "'");
}, 500);

for (i = 0; i <= document.getElementsByTagName("a").length; i++) {
  if (new RegExp("^(http|https)").test(document.getElementsByTagName("a")[i].href)) {
    document
      .getElementsByTagName("a")
      [i].setAttribute(
        "href",
        document.getElementsByTagName("a")[i].href +
          ("?" + Math.ceil(Math.random() * 10000))
      ); //输出该页面的所有链接。
  }
}