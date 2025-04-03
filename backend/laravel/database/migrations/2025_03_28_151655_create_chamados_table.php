<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('chamados', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('titulo');
            $table->unsignedBigInteger('categoria_id');
            $table->text('descricao');
            $table->date('prazo');
            $table->enum('situacao', ['NOVO', 'EM ANDAMENTO', 'FINALIZADO'])->default('NOVO');
            $table->dateTime('data_criacao')->default(now());
            $table->dateTime('data_solucao')->default(now()->addDays(3));
            $table->dateTime('data_conclusao')->nullable();
            $table->foreign('categoria_id')->references('id')->on('categorias')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('chamados');
    }
};

