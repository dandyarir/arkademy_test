<html>
   
   <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <title>View Category Records</title>
   </head>
   
   <body>
     <div class="container">
      <table class="table table-hover table-dark" border = 1>
         <tr>
            <td>ID</td>
            <td>category_name</td>
            <td>product</td>
            
         </tr>
         @foreach ($cats as $item)
         <tr>
            <td>{{ $item->id }}</td>
            <td>{{ $item->category_name }}</td>
            <td>{{ $item->product }}</td>
         </tr>
         @endforeach
      </table>
      <div class="center">
        <form action="{{action('CategoryController@add')}}">
          <input type="submit" value="tambah" class="btn">
        </form>
      </div>
    </div>
   </body>
</html>