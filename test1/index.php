<?
define("BASE_URL","/backbone/");
?>
<html>
<head>
<title>test1</title>
<script type='text/javascript' src='<?=BASE_URL?>/jquery-2.0.3.min.js'></script>
<script type='text/javascript' src='<?=BASE_URL?>/underscore-min.js'></script>
<script type='text/javascript' src='<?=BASE_URL?>/backbone-min.js'></script>
<script type='text/javascript' src='<?=BASE_URL?>/test1/script.js'></script>
<link type='text/css' rel='stylesheet' href='<?=BASE_URL?>/test1/style.css' />
</head>
<body>

<script type="text/template" id="test">
	<a href="#test1"><%=field1%></a>
	<a href="#test2"><%=field2%></a>
	<a href="#test3"><%=field3%></a>		
</script>

<script type="text/template" id="test2">
	<span><input type="text" value="<%=text%>" style=" text-align: center;  text-align: center; width: <%=width%>px; "></span>
</script>

<script type="text/template" id="test3">
	asd
</script>	
</body>
</html>
