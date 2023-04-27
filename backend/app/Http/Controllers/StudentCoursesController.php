<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Student;
use App\Models\Cours;
use Illuminate\Http\Request;

class StudentCoursesController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($student)
    {
        $student = Student::with('courses')->find($student);
        $courses = $student->courses;
        // All Cours
        // $courses = Cours::all();

        // Return Json Response
        return response()->json([
            'courses' => $courses
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cours $cours)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cours $cours)
    {
        //
    }
}
