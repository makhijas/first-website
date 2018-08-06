<style type="text/css">
.show{display:block;}
.hide{display:none;}
</style>
<script type="text/javascript">
function showImg()
{
var obj=document.getElementById('Picture1');
obj.className = 'show';
}
</script>

<center>
<img id="Picture1" src="https://lever-client-logos.s3.amazonaws.com/aabb6500-50b4-48ca-be35-be09bf010b1e-1491527679420.png" width = "600"; height="200"class="hide">

<input type="button" onclick = "showImg()" value= "click me">
</center>

<button type="button" onclick="myFunction()">click me</button>

<script>
function myFunction() {
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('https://www.edx.org/sites/default/files/course/image/promoted/exploratory_data_-378225.jpg')";
}
</script>
