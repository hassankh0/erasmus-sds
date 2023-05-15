<?php

namespace App\Http\Controllers;

use App\Mail\ForgetPasswordEmail;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ForgetPasswordController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $email = $request->email;
            $user = Student::where('email', $request->email)->first();

            if (!$user) {
                return response()->json(['message' => 'Student not found'], 404);
            }

            $code = "password";
            $user->password = $code;

            $user->save();

            Mail::to($email)->send(new ForgetPasswordEmail($user->username,$code));

            return response()->json([
                'message' => "Password Successfully changed!"
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something really wrong!"
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
