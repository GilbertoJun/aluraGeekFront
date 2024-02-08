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
            <ul class="list-style-none text-decoration-none d-flex flex-collumn">
              <li><a href="#">Quem somos nós</a></li>
              <li><a href="#">Política de privacidade</a></li>
              <li><a href="#">Programa fidelidade</a></li>
              <li><a href="#">Nossas lojas</a></li>
              <li><a href="#">Quero ser franqueado</a></li>
              <li><a href="#">Anuncie aqui</a></li>
            </ul>
          </nav>

          <form id="formContato" class="d-flex flex-collumn form">
            Fale conosco
            <input name="" type="text" placeholder="Nathan é bocó" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Escreva sua mensagem"></textarea>
            <button type="submit" class="botaoazul">Enviar mensagem</button>
          </form>
        </div>
      </div>
      <div class=""></div>
   </footer>
  `,
  styleUrl: './rodape.component.css'
})
export class RodapeComponent {

}
