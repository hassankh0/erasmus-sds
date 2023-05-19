@extends('layouts.email')

@section('content')
    <p>Dear {{ $username }},</p>

    <p>We are writing to inform you that your password has been successfully reset. Your new password is:</p>

    <p><strong>{{ $newPassword }}</strong></p>

    <p>Please keep this password confidential and do not share it with anyone.</p>

    <p>If you did not request a password reset, please contact our support team immediately so that we can investigate the matter.</p>

    <p>Thank you for using our services.</p>

    <p>Best regards,<br> - CES - </p>
@endsection
