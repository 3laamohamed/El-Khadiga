@extends('email.master')

@section('title')
    وصلك طلب جديد
@endsection

@section('content')
    <p>
        مرحبا 
        <br/>
    </p>

    <h1>اسم العميل</h1>
    <br/>
        {{$name}}
    <br/>
    <h1> رقم الهاتف </h1>
    <br/>
        {{$phone}}
    <br/>
    <h1> الطلب </h1>
    <br/>
        {{$order}}
    <br/>
@endsection

