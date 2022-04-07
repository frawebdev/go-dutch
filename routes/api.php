<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Api\RoomController;
use App\Http\Controllers\Api\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//public routes
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);

//protected routes
Route::group(['middleware' => ['auth:sanctum']], function() {
    //users
    Route::get('/user', function(Request $request) {
        return $request->user();
    });
    Route::get('/users', [UserController::class, 'index']);
    Route::put('/user/{id}', [UserController::class, 'update']);
    Route::post('/logout', [UserController::class, 'logout']);
    //rooms
    Route::get('/rooms/{id}', [RoomController::class, 'index']);
    Route::get('/room/{id}', [RoomController::class, 'show']);
    Route::get('/room-users/{id}', [RoomController::class, 'room_users']);
    Route::post('/store', [RoomController::class, 'store']);
});



