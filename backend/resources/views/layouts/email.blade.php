<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config('app.name') }}</title>
</head>
<body>
    <div style="margin: 0 auto; max-width: 600px;">
        <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%;">
            <tr>
                <td style="background-color: #f8f8f8; padding: 20px;">
                    <img src="{{ asset('images/logo.png') }}" alt="{{ config('app.name') }}" style="height: 50px;">
                </td>
            </tr>
            <tr>
                <td style="padding: 20px;">
                    @yield('content')
                </td>
            </tr>
            <tr>
                <td style="background-color: #f8f8f8; padding: 20px;">
                    &copy; {{ date('Y') }} {{ config('app.name') }}. All rights reserved.
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
