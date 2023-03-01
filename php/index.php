<!DOCTYPE html>
<html lang="ko" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
  <h1>WEB</h1>
  <ul>
    <li><a href="index.php?id=HTML">HTML</a></li>
    <li><a href="index.php?id=CSS">CSS</a></li>
    <li><a href="index.php?id=JavaScript">JavaScript</a></li>
  </ul>
  <h2>
    <?=$_GET['id'];?>
  </h2>
<?=file_get_contents('data/'.$_GET['id']);?>
  </body>
</html>
