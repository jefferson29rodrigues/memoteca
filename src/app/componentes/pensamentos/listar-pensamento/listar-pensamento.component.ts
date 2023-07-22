import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      id: '1',
      conteudo: 'Aprendendo Angular',
      autoria: 'Jeff',
      modelo: 'modelo1'
    },
    {
      id: '2',
      conteudo: 'Aprendendo .NET, Aprendendo Java, Aprendendo Angular,Aprendendo .NET, Aprendendo Java, Aprendendo AngularAprendendo .NET, Aprendendo Java, Aprendendo AngularAprendendo .NET, Aprendendo Java, Aprendendo AngularAprendendo .NET, Aprendendo Java, Aprendendo AngularAprendendo .NET, Aprendendo Java, Aprendendo Angular,',
      autoria: 'Jeff',
      modelo: 'modelo2'
    },
    {
      id: '3',
      conteudo: 'Aprendendo Java',
      autoria: 'Jeff',
      modelo: 'modelo3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
