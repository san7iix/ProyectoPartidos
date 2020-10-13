<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Login Routes...

Route::get('login', 'App\Http\Controllers\Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'App\Http\Controllers\Auth\LoginController@login');


// Logout Routes...

Route::post('logout', 'App\Http\Controllers\Auth\LoginController@logout')->name('logout');


// Registration Routes...

Route::get('register', 'App\Http\Controllers\Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'App\Http\Controllers\Auth\RegisterController@register');


//Reset Password Routes

Route::get('password/reset', 'App\Http\Controllers\Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'App\Http\Controllers\Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'App\Http\Controllers\Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'App\Http\Controllers\Auth\ResetPasswordController@reset')->name('password.update');


// Confirm Password Routes
Route::get('password/confirm', 'App\Http\Controllers\Auth\ConfirmPasswordController@showConfirmForm')->name('password.confirm');
Route::post('password/confirm', 'App\Http\Controllers\Auth\ConfirmPasswordController@confirm');

//Email Verification Routes

Route::get('email/verify', 'App\Http\Controllers\Auth\VerificationController@show')->name('verification.notice');
Route::get('email/verify/{id}/{hash}', 'App\Http\Controllers\Auth\VerificationController@verify')->name('verification.verify');
Route::post('email/resend', 'App\Http\Controllers\Auth\VerificationController@resend')->name('verification.resend');


//Admin routes

Route::group(['prefix' => 'admin'], function () {

    //User routes

    Route::group(['prefix' => 'user'], function () {

        Route::get('/', 'App\Http\Controllers\AdminController@index')->name('admin.index');

        Route::post('create', 'App\Http\Controllers\AdminController@store')->name('user.create');

        Route::get('show/{id}', 'App\Http\Controllers\AdminController@show')->name('user.show');

        Route::put('update/{id}', 'App\Http\Controllers\AdminController@update')->name('user.update');

        Route::get('delete/{id}', 'App\Http\Controllers\AdminController@destroy')->name('user.delete');
    });
    Route::group(['prefix' => 'place'], function () {

        Route::get('/', 'App\Http\Controllers\PlaceController@index')->name('place.index');

        Route::post('create', 'App\Http\Controllers\PlaceController@store')->name('place.create');

        Route::get('show/{id}', 'App\Http\Controllers\PlaceController@show')->name('place.show');

        Route::put('update/{id}', 'App\Http\Controllers\PlaceController@update')->name('place.update');

        Route::get('delete/{id}', 'App\Http\Controllers\PlaceController@destroy')->name('place.delete');
    });

    Route::group(['prefix' => 'team'], function () {

        Route::get('/', 'App\Http\Controllers\TeamController@index')->name('team.index');

        Route::post('create', 'App\Http\Controllers\TeamController@store')->name('team.create');

        Route::get('show/{id}', 'App\Http\Controllers\TeamController@show')->name('team.show');

        Route::put('update/{id}', 'App\Http\Controllers\TeamController@update')->name('team.update');

        Route::get('delete/{id}', 'App\Http\Controllers\TeamController@destroy')->name('team.delete');
    });
});


//User routes
Route::group(['prefix' => 'user'], function () {
    Route::post('create', 'App\Http\Controllers\UserController@store')->name('user.create');

    Route::get('show/{id}', 'App\Http\Controllers\UserController@show')->name('user.show');

    Route::put('update/{id}', 'App\Http\Controllers\UserController@update')->name('user.update');

    Route::get('delete/{id}', 'App\Http\Controllers\UserController@destroy')->name('user.delete');
});



Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
