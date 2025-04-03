<?php

namespace App\Http\Controllers;

use App\Models\Chamado;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ChamadoController extends Controller
{
    public function index()
    {
        return response()->json(['message' => 'ChamadoController funcionando!']);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required|string',
            'titulo' => 'required|string',
            'categoria_id' => 'required|exists:categorias,id',
            'descricao' => 'required|string',
            'prazo' => 'required|date',
        ]);

        $chamado = Chamado::create([
            'nome' => $request->nome,
            'titulo' => $request->titulo,
            'categoria_id' => $request->categoria_id,
            'descricao' => $request->descricao,
            'prazo' => $request->prazo,
            'situacao' => 'NOVO',
            'data_criacao' => now(),
            'data_solucao' => now()->addDays(3),
        ]);

        return response()->json($chamado, 201);
    }


    public function show($id)
    {
        return response()->json(Chamado::findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $chamado = Chamado::findOrFail($id);

        if ($request->situacao === 'FINALIZADO') {
            $chamado->data_conclusao = now();
        }

        $chamado->situacao = $request->situacao;
        $chamado->save();

        return response()->json($chamado, 200);
    }

    public function destroy($id)
    {
        $chamado = Chamado::findOrFail($id);
        $chamado->delete();

        return response()->json(['message' => 'Chamado excluído com sucesso'], 200);
    }
}
