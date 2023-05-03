@extends('layouts.email')

@section('content')
    <p>Hello,</p>

    <p>You recently requested to reset your password. To complete the process, please use the following code:</p>

    <h2>{{ $code }}</h2>

    <p>If you did not request a password reset, please ignore this email.</p>

    <p>Thank you,</p>

    <p>The {{ config('app.name') }} Team</p>
@endsection
