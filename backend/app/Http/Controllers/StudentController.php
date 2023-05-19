<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Student;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // All Student
        $students = Student::all();

        // Return Json Response
        return response()->json([
            'students' => $students
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            // Create Student
            Student::create($request->all());

            // Return Json Response
            return response()->json([
                'message' => "Student successfully created."
            ], 201);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        // Student Detail
        $studentDetail = Student::find($student->id);
        if (!$studentDetail) {
            return response()->json([
                'message' => 'Student Not Found.'
            ], 404);
        }

        // Return Json Response
        return response()->json([
            'student' => $studentDetail
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        try {
            // Find Student
            $studentToUpdate = Student::find($student->id);
            if (!$studentToUpdate) {
                return response()->json([
                    'message' => 'Student Not Found.'
                ], 404);
            }

            $studentToUpdate->firstname = $request->firstname;
            $studentToUpdate->lastname = $request->lastname;
            $studentToUpdate->username = $request->username;
            $studentToUpdate->email = $request->email;
            $studentToUpdate->nationality = $request->nationality;
            $studentToUpdate->phone = $request->phone;
            $studentToUpdate->password = $request->password;

            // Update Student
            $studentToUpdate->save();

            // Return Json Response
            return response()->json([
                'message' => "Student successfully updated."
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!",
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        // Student Detail
        $studentToDelete = Student::find($student->id);
        if (!$studentToDelete) {
            return response()->json([
                'message' => 'Student Not Found.'
            ], 404);
        }

        // Delete Student
        $studentToDelete->delete();

        // Return Json Response
        return response()->json([
            'message' => "Student successfully deleted."
        ], 200);
    }
}
