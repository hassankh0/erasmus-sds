<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OLACours extends Model
{
    use HasFactory;

    protected $fillable = ['o_l_a_id', 'cours_id'];

}
