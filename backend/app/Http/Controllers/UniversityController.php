<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\University;

class UniversityController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // All Universities
        $universities = University::all();

        // Return Json Response
        return response()->json([
            'universities' => $universities
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            // Create University
            University::create($request->all());

            // Return Json Response
            return response()->json([
                'message' => "University successfully created."
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
    public function show(University $university)
    {
        // University Detail
        $universityDetail = University::find($university->id);
        if (!$universityDetail) {
            return response()->json([
                'message' => 'University Not Found.'
            ], 404);
        }

        // Return Json Response
        return response()->json([
            'university' => $universityDetail
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, University $university)
    {
        try {
            // Find University
            $universityToUpdate = University::find($university->id);
            if (!$universityToUpdate) {
                return response()->json([
                    'message' => 'University Not Found.'
                ], 404);
            }

            $universityToUpdate->name = $request->name;
            $universityToUpdate->country = $request->country;
            $universityToUpdate->city = $request->city;
            $universityToUpdate->website = $request->website;
            $universityToUpdate->phone = $request->phone;

            // Update University
            $universityToUpdate->save();

            // Return Json Response
            return response()->json([
                'message' => "University successfully updated."
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
    public function destroy(University $university)
    {
        // University Detail
        $universityToDelete = University::find($university->id);
        if (!$universityToDelete) {
            return response()->json([
                'message' => 'University Not Found.'
            ], 404);
        }

        // Delete University
        $universityToDelete->delete();

        // Return Json Response
        return response()->json([
            'message' => "University successfully deleted."
        ], 200);
    }
}
