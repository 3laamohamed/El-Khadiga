<table cellspacing="0">
    <tr>
        <th class="p-5">##</th>
        <th class="p-5">اسم صاحب الحجز</th>
        <th class="p-5">رقم صاحب الحجز</th>
        <th class="p-5">عدد األشخاص</th>
        <th class="p-5">تاريخ الحجز</th>
        <th class="p-5"> وقت الحجز</th>
        <th class="p-5"> اسم المتجر</th>
    </tr>

    @foreach($reservations as  $key =>$reservation )
        <tr>
            <td>{{ ++$key }}</td>
            <td>{{ $reservation->name ?? 'لايوجد' }}</td>
            <td>{{ $reservation->mobile ?? 'لايوجد' }}</td>
            <td>{{ $reservation->count_people ?? 'لايوجد' }}</td>
            <td>{{ $reservation->reservation_date }}</td>
            <td>{{ $reservation->reservation_time}}</td>
            <td>{{ $reservation->shop->name ?? 'لايوجد' }}</td>



        </tr>
    @endforeach
</table>
