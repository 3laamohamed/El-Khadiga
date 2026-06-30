<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> قائمة الحجوزات </title>

</head>
<body>
<div style="  margin: 50px">
    <div>
        <div style="float: right; width: 30%;text-align: right;" align="right">
            <p class="orderid" style="margin: 10px; float:left; font-size: 12px"><strong>
                    {{$user->name ??''}}</strong></p>
            <p class="orderid" style="margin:2.5px; float:left; font-size: 14px">{{$user->mobile}}</p>
            <p class="orderid" style="margin: 2.5px; float:left; font-size: 14px">{{$user->email}}</p>

        </div>
        <div style="float: right; width: 40%;text-align: center;" align="center">
            <div>
{{--                <img width="100" height="100" src="'/uploads/' + {{$restaurantPeriod->image}}" alt="logo" class="logo-default"/>--}}
                <p class="orderid" style="margin: 5px; float:left; font-size: 19px">قائمة الحجوزات </p>
            </div>
        </div>


        <div style="clear: both; margin: 0pt; padding: 0pt; "></div>
    </div>
    <hr>
    <br>

    <br>
    <div>
        <div style="clear: both; margin: 0pt; padding: 0pt; "></div>
    </div>

    <table style=" direction:rtl; text-align:right ;width: 100%;border-collapse:collapse; margin-bottom: 50px"
           border="1">
        <thead>
        <tr style="background-color: rgba(220,220,220,0.63)">
            <th style=" text-align: right;padding: 5px ">##</th>
            <th style=" text-align: right;padding: 5px ">اسم صاحب الحجز</th>
            <th style=" text-align: right;padding: 5px ">رقم صاحب الحجز</th>
            <th style=" text-align: right;padding: 5px ">عدد األشخاص</th>
            <th style=" text-align: right;padding: 5px ">تاريخ الحجز</th>
            <th style=" text-align: right;padding: 5px "> وقت الحجز</th>
            <th style=" text-align: right;padding: 5px "> اسم المتجر</th>
        </tr>
        </thead>
        <tbody>
            @foreach($reservations as $key=> $item)
            <tr>
                <td style=" width: 10%;padding: 5px ">{{ ++$key }}</td>
                <td style=" width: 10%;padding: 5px ">{{ $item->name ?? 'لايوجد' }}</td>
                <td style=" width: 10%;padding: 5px ">{{ $item->mobile ?? 'لايوجد' }}</td>
                <td style=" width: 10%;padding: 5px ">{{ $item->count_people ?? 'لايوجد' }}</td>
                <td style=" width: 10%;padding: 5px ">{{ $item->reservation_date ?? 'لايوجد'}}</td>
                <td style=" width: 10%;padding: 5px ">{{ $item->reservation_time ?? 'لايوجد'}}</td>
                <td style=" width: 10%;padding: 5px ">{{ $item->shop->name ?? 'لايوجد' }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
</div>
</body>
</html>
