<html>
<head>
<title>Iam kingkong</title>
<style>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #000000;
}

li {
    float: left;
    border-right:1px solid #bbb;
}

li:last-child {
    border-right: none;
}

li a {
    display: block;
    color: blue;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: #111;
}

.active {
    background-color: #808000;
}

</style>
</head>
<body>
<h1> BELAJAR HTML </h1>

<ul>
  <li><a class="active" href="file:///E:/Tugas/co.html" target= #news">Home</a></li>
  <li><a href="https://www.w3schools.com/html/html_links.asp" target="_blank">HTML</a></li>
  <li><a href="https://www.w3schools.com/css/default.asp" target="_blank">CSS</a></li>
  <li><a href="https://www.w3schools.com/js/default.asp" target="_blank">JavaScript</a></li>
  <li style="float:right"><a href="#about">About</a></li>
</ul>


</body>
</html>