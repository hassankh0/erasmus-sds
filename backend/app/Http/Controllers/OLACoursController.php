<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OLACours;

class OLACoursController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'o_l_a_id' => 'required',
            'cours_id' => 'required',
        ]);

        $olaCours = OLACours::create($validatedData);

        return response()->json($olaCours, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $olaCours = OLACours::find($id);

        if (!$olaCours) {
            return response()->json(['message' => 'Cours not found'], 404);
        }

        $olaCours->delete();

        return response()->json(['message' => 'Cours deleted']);
    }
}
