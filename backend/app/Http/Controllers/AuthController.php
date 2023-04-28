<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $student = Student::where('username', $request->username)
            ->where('password', $request->password)->first();
        if ($student) {
            session()->regenerate();

            return response()->json([
                'message' => "Login Successfully !",
                'student' => $student
            ], 200);
        }

        return response()->json([
            'message' => "Login Failed !",
        ], 203);
    }
}
