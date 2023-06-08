<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OLA extends Model
{
    use HasFactory;

    protected $guarded = [
        'id'
    ];

    protected $fillable = [
        'student_id',
        "sending_institution_name",
        "sending_institution_responsible",
        "sending_institution_contact",
        "sending_institution_faculty",
        "receiving_institution_name",
        "receiving_institution_responsible",
        "receiving_institution_contact",
        "receiving_institution_faculty",
    ];

    public function cours()
    {
        return $this->belongsToMany(Cours::class, 'o_l_a_cours', 'o_l_a_id', 'cours_id');
    }
}
