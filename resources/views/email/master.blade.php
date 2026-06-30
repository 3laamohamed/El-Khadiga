<!doctype html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> @yield('title')</title>
</head>
<body style="background-color: #f5f5f5; padding: 20px 0;">
<div style="max-width: 600px; margin: 0 auto; padding: 15px 0; text-align: center; background-color: #fff; color: #000;">
{{--    <img src="{{$message->embed(public_path().'/easyFood/assets/img/EasyFoodLogo.jpg')}}"--}}
{{--         alt style="width: 100px; height: 100px;" data-auto-embed="attachment">--}}
    <br/>

    @yield('content')
</div>
</body>
</html>
