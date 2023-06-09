<?php

use App\Http\Controllers\CoursController;
use App\Http\Controllers\UniversityController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentCoursesController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ForgetPasswordController;
use App\Http\Controllers\OLAController;
use App\Http\Controllers\OLACoursController;
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

    Route::get('/students', [StudentController::class, "index"]); // List Students
    Route::post('/students', [StudentController::class, "store"]); // Create Student
    Route::get('/students/{student}', [StudentController::class, "show"]); // Detail of Student
    Route::put('/students/{student}', [StudentController::class, "update"]); // Update Student
    Route::delete('/students/{student}', [StudentController::class, "destroy"]); // Delete Student

    Route::post('/auth',[AuthController::class, "store"]);// Login Student
    Route::post('/register', [StudentController::class, "store"]); // Create Student

    Route::get('/courses/student/{student}',[StudentCoursesController::class, "show"]); // List courses in student cart
    Route::delete('/courses/student/{studentId}/{courseId}', [StudentCoursesController::class, "delete"]); // delete a course in student cart

    Route::get('/comment', [CommentController::class, "index"]); // List Students

    Route::get('/commentreported', [CommentController::class, "indexReported"]); // List Students
    Route::post('/comments', [CommentController::class, "store"]); // Create Student
    Route::get('/comment/{comment}', [CommentController::class, "show"]); // Detail of Student
    Route::put('/comment/{comment}', [CommentController::class, "update"]); // Update Student
    Route::delete('/comment/{comment}', [CommentController::class, "destroy"]); // Delete Student
    Route::put('/comment/{comment}/mark-as-unreported', [CommentController::class, "markAsUnreported"]);
    Route::put('/comment/{comment}/mark-as-reported', [CommentController::class, "markAsreported"]);

    Route::post('/forgetpwd',[ForgetPasswordController::class,"store"]);


    Route::get('olas', [OLAController::class, 'index']);
    Route::post('olas', [OLAController::class, 'store']);
    Route::get('olas/{id}', [OLAController::class, 'show']);
    Route::put('olas/{id}', [OLAController::class, 'update']);
    Route::delete('olas/{id}', [OLAController::class, 'destroy']);
    Route::get('students/{studentId}/olas', [OLAController::class, 'getOLAsByStudent']);


    Route::post('/ola_cours', [OLACoursController::class, 'store']);
    Route::delete('/ola_cours/{id}', [OLACoursController::class, 'destroy']);

    Route::delete('/carts/student/{studentId}', [CartController::class, 'destroyByStudentId']);

});
