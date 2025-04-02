<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chamado extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome', 'titulo', 'categoria_id', 'descricao', 'prazo', 'situacao', 'data_criacao', 'data_solucao', 'data_conclusao'
    ];

    protected $dates = ['data_criacao', 'data_solucao', 'data_conclusao'];
}
