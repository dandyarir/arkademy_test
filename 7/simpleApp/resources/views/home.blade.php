<html>
   
   <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <title>View Category Records</title>
   </head>
   
   <body>
     <div class="container">
     <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>category_name</th>
            <th>product</th>
          </tr>
        </thead>
        <tbody>
          @foreach($datas as $data)
          <tr>
            <td>{{ $data->id }}</td>
            <td>{{ $data->name }}</td>
            <td>
            @foreach($data->product as $product)
                {{ $product->name }},
              @endforeach
            </td>
          </tr>
          @endforeach
        </tbody>
      </table>
      <div class="center">
        <form action="{{action('CategoryController@add')}}">
          <input type="submit" value="tambah" class="btn">
        </form>
      </div>
    </div>
   </body>
</html>