<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CoursController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['cors'])->group(function () {
    Route::get('/cours', [CoursController::class, "index"]); // List Courses
    Route::post('/cours', [CoursController::class, "store"]); // Create Cours
    Route::get('/cours/{cours}', [CoursController::class, "show"]); // Detail of Cours
    Route::put('/cours/{cours}', [CoursController::class, "update"]); // Update Cours
    Route::delete('/cours/{cours}', [CoursController::class, "destroy"]); // Delete Cours
});
