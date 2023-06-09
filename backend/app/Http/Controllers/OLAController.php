<?php

namespace App\Http\Controllers;

use App\Models\OLA;
use Illuminate\Http\Request;

class OLAController extends Controller
{
    /**
     * Display a listing of the OLAs.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $olas = OLA::all();

        return response()->json(['olas' => $olas]);
    }

    /**
     * Store a newly created OLA in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $ola = new OLA();
        $ola->student_id = $request->input('student_id');
        $ola->sending_institution_name = $request->input('sending_institution_name');
        $ola->sending_institution_responsible = $request->input('sending_institution_responsible');
        $ola->sending_institution_contact = $request->input('sending_institution_contact');
        $ola->sending_institution_faculty = $request->input('sending_institution_faculty');
        $ola->receiving_institution_name = $request->input('receiving_institution_name');
        $ola->receiving_institution_responsible = $request->input('receiving_institution_responsible');
        $ola->receiving_institution_contact = $request->input('receiving_institution_contact');
        $ola->receiving_institution_faculty = $request->input('receiving_institution_faculty');
        $ola->save();

        return response()->json(['message' => 'OLA created successfully', 'ola' => $ola], 201);
    }

    /**
     * Display the specified OLA.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $ola = OLA::with('cours')->findOrFail($id);

        return response()->json(['ola' => $ola]);
    }

    /**
     * Get all OLAs of a specific student.
     *
     * @param  int  $studentId
     * @return \Illuminate\Http\JsonResponse
     */
    public function getOLAsByStudent($studentId)
    {
        $olas = OLA::with('cours')->where('student_id', $studentId)->get();

        return response()->json(['olas' => $olas]);
    }

    /**
     * Update the specified OLA in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $ola = OLA::findOrFail($id);
        $ola->student_id = $request->input('student_id');
        $ola->sending_institution_name = $request->input('sending_institution_name');
        $ola->sending_institution_responsible = $request->input('sending_institution_responsible');
        $ola->sending_institution_contact = $request->input('sending_institution_contact');
        $ola->sending_institution_faculty = $request->input('sending_institution_faculty');
        $ola->receiving_institution_name = $request->input('receiving_institution_name');
        $ola->receiving_institution_responsible = $request->input('receiving_institution_responsible');
        $ola->save();

        return response()->json(['message' => 'OLA updated successfully', 'ola' => $ola]);
    }

    /**
     * Remove the specified OLA from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $ola = OLA::findOrFail($id);
        $ola->delete();

        return response()->json(['message' => 'OLA deleted successfully']);
    }
}
