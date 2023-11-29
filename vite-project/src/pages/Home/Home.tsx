// HomePage.tsx
import React from 'react';
import './Home.css'

const HomePage: React.FC = () => {
  return (
    <section id="Portifolio" className="main-home">
      <div className='div_home'>
        <h2 className='h2_meu_nome'>Olá! me Chamo Antony Mateus Schmitt</h2>
        <p className='p_sobre_min'>Nessa página irei falar um pouco sobre min, e como essas tecnologias me ajudaram no trabalho!</p>
      </div>
      <div className='div_text'>
        <p>Atualmente estou atuando com Analista de Qualidade ( Junior QA Analyst ) na empressa Calçados Beira Rio, minhas atividades nesse cargo
          vão de analise de cenarios de testes, execução de cenarios de testes, implementação de processo de qualidade de software e programas, automações de testes
          e entre outras coisas.
        </p>
        <p>Saber essas tecnologias me ajudou a indentificar erros em processos, ser capaz de indentificar metodologias usadas e implementadas,
          ser capaz de realizar uma boa analise, e executar automoções.
        </p>
      </div>
      <div className='div_home'>
        <p className='p_sobre_min'>Abaixo um pequeno exembro com cada tecnologia</p>
      </div>
    </section>
  );
};

export default HomePage;
