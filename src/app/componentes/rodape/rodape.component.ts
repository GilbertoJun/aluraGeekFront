import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [],
  template: `
   <footer class="center">
      <div class="formularo-rodape center">
        <div class="container">
          <div>
            <img src="/assets/logo.png">
          </div>

          <nav>
            <ul class="list-style-none text-decoration-none d-flex flex-column weight-500">
              <li><a href="#">Quem somos nós</a></li>
              <li><a href="#">Política de privacidade</a></li>
              <li><a href="#">Programa fidelidade</a></li>
              <li><a href="#">Nossas lojas</a></li>
              <li><a href="#">Quero ser franqueado</a></li>
              <li><a href="#">Anuncie aqui</a></li>
            </ul>
          </nav>

          <form id="formContato" class="d-flex flex-column form">
            <label class="weight-700">Fale conosco</label>
            <div class="input">
              <label class="weight-400 font-12">Nome</label>
              <input class="color-464646 weight-400 font-16" name="" type="text" maxlength="100"/>
            </div>
            <textarea class="weight-400 font-16" name="" id="" cols="30" rows="10" placeholder="Escreva sua mensagem"></textarea>
            <button type="submit" class="botaoazul">Enviar mensagem</button>
          </form>
        </div>
      </div>
      <div class="center rodape">
        <span class="weight-500 font-16">Desenvolvido por Gilberto e Nathan</span>
        <span class="weight-500 font-16 color-464646">2024</span>
      </div>
   </footer>
  `,
  styleUrl: './rodape.component.css'
})
export class RodapeComponent {

}
