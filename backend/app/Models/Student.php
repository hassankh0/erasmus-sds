<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $guarded = [
        'id'
    ];

    protected $fillable = [
        'firstname',
        'lastname',
        'username',
        'email',
        'nationality',
        'phone',
        'password'
    ];

    public function cart()
    {
        return $this->hasOne(Cart::class);
    }

    public function olas()
    {
        return $this->asMany(OLA::class);
    }

    public function courses()
    {
        return $this->belongsToMany(Cours::class, 'carts', 'student_id', 'cours_id');
    }
}
