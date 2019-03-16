<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Tambah Category</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <script src="main.js"></script>
</head>
<body>
    <div>
        <a href="{{action('CategoryController@index')}}">home</a>
    </div>
    <div class="wrapper">
        <div class="container">
            <form method="post" action>
                <label>Name Category: </label>
                <input type="text" class="form-control" name="cat_name">
                <input type="submit" value="simpan" class="btn">
            </form>
        </div>
    </div>
</body>
</html>