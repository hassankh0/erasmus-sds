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
}
