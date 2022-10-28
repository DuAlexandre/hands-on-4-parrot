<a id='ancora'></a>
# Projeto Parrot API/Server - Gama Academy - XP 44 🚀

<br><br>

- [Sobre a Gama Academy](#ancora1) <br>
- [Sobre o Gama Experience](#ancora2) <br>
- [Sobre o Projeto](#ancora3) <br>
- [Competências Desenvolvidas](#ancora4) <br>
- [Entregável](#ancora5) <br>
- [Execução](#ancora7) <br>
- [Documentação da API](#ancora8) <br>
- [Colaboradores](#ancora9)

<br><br>


<a id="ancora1"></a>
## Sobre a Gama Academy 🏫

<br>

Empresa de educação que prepara talentos para o mercado digital. Em seus programas educacionais, as pessoas participantes enfrentam desafios reais, se conectam com empresas digitais, recebem mentorias de profissionais que estão mandando bem em suas áreas e, ainda têm a oportunidade de ensinar e aprender com a nossa comunidade visando o emprego, transição de carreira e o life long learning.

<br>

<a id="ancora2"></a>
## Sobre o Gama Experience 👨🏽‍💻

<br>

É um curso com duração de 6 meses, com o objetivo de formar os melhores juniores do mercado, nas áreas de Desenvolvimento Web e Designers UX/UI! A primeira versão do curso foi lançada pela Gama Academy em 2016 e já empregou mais de 3.000 pessoas.  A versão atual contém mais de 810 horas de aulas, desafios e mentorias, com foco na  empregabilidade de nossos estudantes!

<br>

<a id="ancora3"></a>
## Sobre o Projeto ✔️

<br>

A rede social Parrot é um sistema white label (ou seja, um sistema modelo criado por uma empresa que pode ser reutilizado por outras, apenas modificando informações como logo e marca) do qual condomínios podem contratar para incentivar a interação entre os moradores. A plataforma permite que os usuários façam publicações que ficam visíveis para toda comunidade.

<br>

<a id="ancora4"></a>
## Competências Desenvolvidas 📝

<br>

* TypeScript;
* NodeJS;
* Sequelize;
* MySQL;
* JWT;
* Jest;
* Arquitetura Limpa;
* Implementação de princípios SOLID;
* Testes Automatizados;

<br>

<a id="ancora5"></a>
## Entregável 📋

<br>

1. Criação de banco de dados via migrations com uso de seeders para popular o banco. ✔️
<br><br>
2. API Rest com CRUD para usuários e publicações. ✔️
<br><br>
3. Autenticação de usuário. ✔️
<br><br>
4. Implementar Princípios SOLID na arquitetura. ✔️
<br><br>
5. Testes automatizados. ✔️

<br>

<a id="ancora7"></a>
## Execução 💻

<br>

1. Clone este repositório remoto em seu equipamento:
```
git clone git@github.com:DuAlexandre/hands-on-4-parrot.git
```
2. Execute o comando para instalação dos node_modules:
```
npm install
```
3. Renomeie o arquivo ".env.example" para ".env" e digite as credenciais do seu banco de dados MySQL:
```
DB_HOST=
DB_PORT=
DB_USER=
DB_PASS=
DB_NAME=

SECRET_KEY=

Obs: O campo DB_NAME deverá se chamar parrot;
     O campo SECRET_KEY deverá receber uma chave de segurança criada por você.
```
4. Execute o comando para criação do diretório "dist":
```
tsc
```
5. Execute o comando para criação do banco de dados "parrot" na sua máquina, via migrations:
```
npx sequelize db:create
```
6. Execute o comando para criação das tabelas "users" e "posts" no banco de dados, via migrations:
```
npx sequelize db:migrate
```
7. Execute o comando para popular o banco de dados com usuários e postagens, via seeders:
```
npx sequelize db:seed:all
```
8. Execute o programa:
```
npm run debug
```

<br>

<a id="ancora8"></a>
## Documentação 📝

<br>

Para documentação da API - Parrot, acesse este link: [Documentação API - Parrot](https://dualexandre.github.io/parrot-documentation/)


<br>



<a id="ancora9"></a>
## Colaboradores 🤝

Projeto desenvolvido por:

<table>
  <tr>
    <td align="center">
      <a target="_blank" href="https://www.linkedin.com/in/eduardo-quaresimin-santos-brazilian-%E2%80%93-italian-citizenship-838220182/">
        <img src="https://avatars.githubusercontent.com/u/109425683?v=4" width="100px;" alt=""/><br>
        <sub>
          <b>Eduardo Quaresimin</b>
          <p>Back-End</p>
        </sub>
      </a>
    </td>
    <td align="center">
      <a target="_blank" href="https://www.linkedin.com/in/eduardo-alexandre025/">
        <img src="https://avatars.githubusercontent.com/u/95940707?s=96&v=4" width="100px;" alt=""/><br>
        <sub>
          <b>Eduardo Alexandre</b>
           <p>Back-End</p>
        </sub>
      </a>
    </td>
    <td align="center">
      <a target="_blank" href="https://www.linkedin.com/in/johnnatan-gomes-b0363584/">
        <img src="https://avatars.githubusercontent.com/u/109382819?v=4" width="100px;" alt=""/><br>
        <sub>
          <b>Johnnatan Rodrigues</b>
           <p>Front-End</p>
        </sub>
      </a>
    </td>
    <td align="center">
      <a target="_blank" href="https://www.linkedin.com/in/keuwey/">
        <img src="https://avatars.githubusercontent.com/u/73517606?v=4" width="100px;" alt=""/><br>
        <sub>
          <b>Kevin Halley</b>
           <p>Front-End</p>
        </sub>
      </a>
    </td>
    <td align="center">
      <a target="_blank" href="https://www.linkedin.com/in/laura-santos-766862244/">
        <img src="https://avatars.githubusercontent.com/u/104779345?v=4" width="100px;" alt=""/><br>
        <sub>
          <b>Laura Santos</b>
           <p>Front-End</p>
        </sub>
      </a>
    </td>
  </tr>
</table>

<br><br>

[Voltar ao Topo](#ancora)