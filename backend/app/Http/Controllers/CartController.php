<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // All Cart
        $carts = Cart::all();

        // Return Json Response
        return response()->json([
            'carts' => $carts
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            // Check if the combination already exists in the database
            $existingCart = Cart::where('student_id', $request->input('student_id'))
                ->where('cours_id', $request->input('cours_id'))
                ->first();

            if ($existingCart) {
                // Return error response for duplicated combination
                return response()->json([
                    'message' => "The combination of student ID and course ID already exists."
                ], 400);
            }

            // Create Cart
            Cart::create($request->all());

            // Return Json Response
            return response()->json([
                'message' => "Cart successfully created."
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
    public function show(Cart $cart)
    {
        // Cart Detail
        $cartDetail = Cart::find($cart->id);
        if (!$cartDetail) {
            return response()->json([
                'message' => 'Cart Not Found.'
            ], 404);
        }

        // Return Json Response
        return response()->json([
            'cart' => $cartDetail
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        // Cart Detail
        $cartToDelete = Cart::find($cart->id);
        if (!$cartToDelete) {
            return response()->json([
                'message' => 'Cart Not Found.'
            ], 404);
        }

        // Delete Cart
        $cartToDelete->delete();

        // Return Json Response
        return response()->json([
            'message' => "Cart successfully deleted."
        ], 200);
    }

    public function destroyByStudentId($studentId)
    {
        // Find all carts of the student
        $carts = Cart::where('student_id', $studentId)->get();

        if ($carts->isEmpty()) {
            return response()->json([
                'message' => 'No carts found for the specified student ID.'
            ], 404);
        }

        // Delete all carts
        Cart::where('student_id', $studentId)->delete();

        return response()->json([
            'message' => 'All carts of the student successfully deleted.'
        ], 200);
    }
}
