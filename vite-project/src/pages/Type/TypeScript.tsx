import React, { useState } from 'react';
import './TypeScript.css';

const TypeScriptPage: React.FC = () => {
  const [code, setCode] = useState(` // Exemplo de código TypeScript

// Definição da função para calcular a área de um retângulo
function calcularAreaRetangulo(base: number, altura: number): number {
  return base * altura;
}

// Utilização da função para calcular a área de um retângulo com base 5 e altura 10
const baseRetangulo = 5;
const alturaRetangulo = 10;
const areaRetangulo = calcularAreaRetangulo(baseRetangulo, alturaRetangulo);

console.log(\`A área do retângulo é: \${areaRetangulo}\`);
`);

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  return (
    <section id="TypeScript" className="main-type">
      <div>
        <h2 className="title_type">TypeScript</h2>
        <p className="sobre_type">O TypeScript é fundamental no desenvolvimento 
        moderno devido à sua tipagem estática, que detecta erros antes da execução, 
        promovendo códigos mais robustos e de fácil manutenção. 
        Sua integração com o ecossistema JavaScript facilita a compatibilidade com bibliotecas existentes, 
        permitindo uma migração gradual. Oferecendo refatoração segura, produtividade e documentação automática, 
        o TypeScript promove colaboração eficiente em projetos grandes, além de garantir código mais legível e seguro, reduzindo bugs relacionados a tipos.</p>
        
        <div className="code-panel">
          <pre>
            <code>{code}</code>
          </pre>
        </div>
        <textarea
          value={code}
          onChange={handleCodeChange}
          rows={10}
          cols={50}
          className="code-textarea"
        />
      </div>
    </section>
  );
};

export default TypeScriptPage;
