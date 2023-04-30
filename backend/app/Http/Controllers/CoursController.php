<?php

namespace App\Http\Controllers;

use App\Http\Requests\CoursStoreRequest;
use App\Models\Cours;
use Illuminate\Http\Request;

class CoursController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // All Cours
        $courses = Cours::all();

        // Return Json Response
        return response()->json([
            'courses' => $courses
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CoursStoreRequest $request)
    {
        try {
            // Create Cours
            Cours::create($request->all());

            // Return Json Response
            return response()->json([
                'message' => "Cours successfully created."
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
    public function show(Cours $cours)
    {
        // Cours Detail
        $coursDetail = Cours::with('comments')->find($cours->id);
        if (!$coursDetail) {
            return response()->json([
                'message' => 'Cours Not Found.'
            ], 404);
        }

        // Return Json Response
        return response()->json([
            'cours' => $coursDetail
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CoursStoreRequest $request, Cours $cours)
    {
        try {
            // Find Cours
            $coursToUpdate = Cours::find($cours->id);
            if (!$coursToUpdate) {
                return response()->json([
                    'message' => 'Cours Not Found.'
                ], 404);
            }

            $coursToUpdate->name = $request->name;
            $coursToUpdate->credits = $request->credits;
            $coursToUpdate->description = $request->description;
            $coursToUpdate->code = $request->code;
            $coursToUpdate->instructor = $request->instructor;

            // Update Cours
            $coursToUpdate->save();

            // Return Json Response
            return response()->json([
                'message' => "Cours successfully updated."
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
    public function destroy(Cours $cours)
    {
        // Cours Detail
        $coursToDelete = Cours::find($cours->id);
        if (!$coursToDelete) {
            return response()->json([
                'message' => 'Cours Not Found.'
            ], 404);
        }

        // Delete Cours
        $coursToDelete->delete();

        // Return Json Response
        return response()->json([
            'message' => "Cours successfully deleted."
        ], 200);
    }
}
