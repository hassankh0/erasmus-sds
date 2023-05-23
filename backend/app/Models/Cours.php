<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cours extends Model
{
    use HasFactory;

    protected $guarded = [
        'id'
    ];

    protected $fillable = [
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

    public function olas()
    {
        return $this->belongsToMany(OLAModel::class, 'o_l_a_cours', 'cours_id', 'o_l_a_id');
    }


    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
