# Calculadora de Consumo de Orçamento

> Esse projeto nasceu como uma otimização de fluxo de trabalho em uma das empresas onde atuei, onde se fazia o cálculo e o texto de consumo sobre uma compra dentro de um orçamento, que levava cerca de 5 minutos para um processo que poderia ser agilizado, o que agilizou meu trabalho.
<br>
<img width="1920" height="684" alt="tela-preenchido" src="https://github.com/user-attachments/assets/1d00e0f4-dbc4-43aa-ae2b-27865d7b9705" />

# Funcionalidades

<img width="1920" height="684" alt="tela-padrao" src="https://github.com/user-attachments/assets/cd525b30-819a-4b56-90b8-f4a2e5b55940" />

Através de valores como: 

- Orçamento do Projeto
- Valor Disponível
- Valor da Compra

O sistema realiza o cálculo de consumo e retorna uma lista de informações que será utilizado tanto na geração do texto de consumo quanto na criação do gráfico de pizza, útil para visualização dos resultados

<img width="1920" height="684" alt="tela-internacional" src="https://github.com/user-attachments/assets/26a3c037-c1de-44cd-9bf4-6409741fe1dd" />

# Ferramentas Utilizadas

A projeto foi desenvolvido utilizando **JavaScript** puro e utilizando as seguintes APIs no processo:

<table>
    <tr>
      <td align="center">
        <a href="https://apexcharts.com/" title="ApexCharts">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdRcks1ADIbjdUIV9-NjNDVj9WTtli4LA5dodhlPyRHI1KEC-mVtwJYQ&s=10" width="100px;" alt="Logo do ApexCharts"/><br>
        </a>
      </td>
      <td align="center">
        Apex Charts
      </td>
      <td align="center">
        Criação de Charts
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://frankfurter.dev/" title="Frankfurter">
          <img src="https://frankfurter.dev/images/logo-dark.png?v=1789375239" width="100px;" alt="Logo do Frankfurter API"/><br>
        </a>
      </td>
      <td align="center">
        Frankfurter API
      </td>
      <td align="center">
        Conversor de Moedas
      </td>
    </tr>

</table>

## Ajustes e Melhorias

- [x] Renderização de gráfico de pizza através do ApexCharts
- [x] Criação automática de texto de porcentagem consumida do orçamento
- [x] Conversão para moedas estrangeiras em tempo real através de uma API
- [ ] Formatação em tempo real do valor em dinheiro digitado pelo usuário
- [ ] Gerenciamento de alíquotas
- [ ] Histórico de compras por projeto
