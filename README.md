<h1>Virtual Aquarium</h1>

<h2>Descrição do Projeto</h2>
<p>O <strong>Virtual Aquarium</strong> é uma aplicação interativa que permite aos usuários adicionar e gerenciar peixes em um aquário virtual. Os usuários podem adicionar peixes personalizados, alimentá-los e removê-los quando necessário. A animação dos peixes é gerada através de classes que controlam seu comportamento no aquário.</p>

<h2>Tecnologias Utilizadas</h2>
<ul>
    <li><strong>Vue.js</strong>: Framework JavaScript para a construção de interfaces de usuário.</li>
    <li><strong>HTML5</strong>: Estruturação da interface do usuário.</li>
    <li><strong>CSS3</strong>: Estilização da aplicação e animações.</li>
    <li><strong>JavaScript</strong>: Lógica do aplicativo.</li>
</ul>

<h2>Estrutura do Projeto</h2>
<pre>
<code>
/src
  ├── components
  │   ├── AquariumSec.vue
  │   ├── Fish.js
  │   └── ... (outros componentes)
  ├── App.vue
  ├── main.js
  └── ... (outros arquivos)
</code>
</pre>

<h2>Classes e Métodos</h2>

<h3>Classe <code>Fish</code></h3>
<p>A classe <code>Fish</code> é responsável por representar um peixe no aquário. Os principais métodos e propriedades incluem:</p>

<ul>
    <li><strong>Propriedades:</strong>
        <ul>
            <li><code>name</code>: Nome do peixe.</li>
            <li><code>image</code>: Imagem do peixe.</li>
            <li><code>animation</code>: Nome da animação do peixe.</li>
            <li><code>timer</code>: Contador que controla o tempo que o peixe está no aquário.</li>
            <li><code>timerInterval</code>: Intervalo de tempo para atualização do contador.</li>
        </ul>
    </li>
    <li><strong>Métodos:</strong>
        <ul>
            <li><code>startTimer()</code>: Inicia o timer do peixe.</li>
            <li><code>feed()</code>: Reinicia o timer ao alimentar o peixe.</li>
        </ul>
    </li>
</ul>

<h3>Componente <code>AquariumSec.vue</code></h3>
<p>Este componente é responsável pela exibição do aquário e a lógica associada aos peixes.</p>

<ul>
    <li><strong>Propriedades:</strong>
        <ul>
            <li><code>aquarium</code>: Recebe um array de peixes para serem exibidos.</li>
        </ul>
    </li>
    <li><strong>Métodos:</strong>
        <ul>
            <li><code>mounted()</code>: Inicia o timer de cada peixe quando o componente é montado.</li>
            <li><code>removeFish(fish)</code>: Remove um peixe do aquário.</li>
            <li><code>beforeUnmount()</code>: Limpa o intervalo do timer ao desmontar o componente.</li>
        </ul>
    </li>
</ul>

<h2>Como Rodar o Projeto</h2>

<h3>Pré-requisitos</h3>
<p>Antes de rodar o projeto, você precisará ter o Node.js e o npm (ou yarn) instalados na sua máquina.</p>

<h3>Passos para Execução</h3>
<ol>
    <li><strong>Clone o repositório:</strong>
        <pre><code>git clone https://github.com/lpereira1025/Virtual-Aquarium.git
cd Virtual-Aquarium</code></pre>
    </li>
    <li><strong>Instale as dependências:</strong>
        <pre><code>npm install</code></pre>
        <p>ou, se você estiver usando o yarn:</p>
        <pre><code>yarn install</code></pre>
    </li>
    <li><strong>Inicie o servidor de desenvolvimento:</strong>
        <pre><code>npm run serve</code></pre>
        <p>ou, se você estiver usando o yarn:</p>
        <pre><code>yarn serve</code></pre>
    </li>
    <li><strong>Acesse o aplicativo:</strong>
        <p>Abra seu navegador e vá para <code>http://localhost:8080</code> (ou a porta que o terminal indicar).</p>
    </li>
</ol>

<h2>Licença</h2>
<p>Este projeto está licenciado sob a <a href="LICENSE">MIT License</a>.</p>
