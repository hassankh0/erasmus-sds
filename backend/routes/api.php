<?php

use App\Http\Controllers\CoursController;
use App\Http\Controllers\UniversityController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\CartController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware(['cors'])->group(function () {
    Route::get('/cours', [CoursController::class, "index"]); // List Courses
    Route::post('/cours', [CoursController::class, "store"]); // Create Cours
    Route::get('/cours/{cours}', [CoursController::class, "show"]); // Detail of Cours
    Route::put('/cours/{cours}', [CoursController::class, "update"]); // Update Cours
    Route::delete('/cours/{cours}', [CoursController::class, "destroy"]); // Delete Cours

    Route::get('/universities', [UniversityController::class, "index"]); // List Universities
    Route::post('/universities', [UniversityController::class, "store"]); // Create University
    Route::get('/universities/{university}', [UniversityController::class, "show"]); // Detail of University
    Route::put('/universities/{university}', [UniversityController::class, "update"]); // Update University
    Route::delete('/universities/{university}', [UniversityController::class, "destroy"]); // Delete University

    Route::get('/carts', [CartController::class, "index"]); // List Carts
    Route::post('/carts', [CartController::class, "store"]); // Create Cart
    Route::get('/carts/{cart}', [CartController::class, "show"]); // Detail of Cart
    Route::delete('/carts/{cart}', [CartController::class, "destroy"]); // Delete Cart

    Route::get('/students', [StudentController::class, "index"]); // List Universities
    Route::post('/students', [StudentController::class, "store"]); // Create Student
    Route::get('/students/{student}', [StudentController::class, "show"]); // Detail of Student
    Route::put('/students/{student}', [StudentController::class, "update"]); // Update Student
    Route::delete('/students/{student}', [StudentController::class, "destroy"]); // Delete Student

});
