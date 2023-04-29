<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cours extends Model
{
    use HasFactory;

    protected $guarded =[
        'id'
    ];

    protected $fillable=[
        'name',
        'code',
        'description',
        'credits',
        'instructor'
    ];

    public function students()
    {
        return $this->belongsToMany(Student::class, 'cart', 'cours_id', 'student_id');
    }
}
