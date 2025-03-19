# Projeto de Processo Seletivo - Buupe / eSapiens

Este projeto foi desenvolvido como parte do processo seletivo  da [Buupe](https://www.buupe.com/). O objetivo é demonstrar habilidades técnicas, boas práticas de desenvolvimento e a capacidade de criar uma aplicação moderna e funcional.

## 🚀 Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias e ferramentas:

- **Vite**: Um build tool rápido e moderno para desenvolvimento front-end.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Adiciona tipagem estática ao JavaScript, melhorando a segurança e a manutenção do código.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **Vitest**: Framework de testes rápido e moderno, compatível com Vite.
- **Jest**: Framework de testes para JavaScript, utilizado em conjunto com Vitest.
- **React Testing Library**: Biblioteca para testar componentes React de forma eficiente.
- **Vite PWA**: Plugin para transformar a aplicação em uma Progressive Web App (PWA).
- **Material UI (MUI)**: Biblioteca de componentes React baseada no Material Design.
- **React Icons**: Biblioteca de ícones para React.

---

### Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Git](https://git-scm.com/) (para clonar o repositório)

### Passo a Passo

1. **Clone o repositório**:
   Abra o terminal e execute o comando abaixo para clonar o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   
2. **Acesse a pasta do projeto**:
   Navegue até a pasta do projeto clonado:

   ```bash
   cd nome-do-repositorio

3. **Instale as dependências**:
   Utilize o npm ou yarn para instalar as dependências do projeto:

   ```bash
   npm install
   
4. **Execute o projeto**:
   Inicie o servidor de desenvolvimento com o comando:

   ```bash
   npm run dev

## Organização de Pastas

    src/ - Contém os arquivos fonte do projeto.
      ├── assets/ - Arquivos estáticos (imagens, ícones, etc.)
      ├── components/ - Componentes reutilizáveis da aplicação
      ├── context/ - Contextos do React para gerenciamento de estado global
      ├── hooks/ - Arquivos relacionados à criação de hooks personalizados.
      ├── mock/ - Dados mockados para testes ou desenvolvimento
      ├── styles/ - Estilos globais e configurações de temas
      ├── types/ - Tipos TypeScript (interfaces, tipos globais, etc.)
      ├── utils/ - Funções utilitárias e helpers

## Padronização de Commits e Criação de Branches

Para manter um histórico de commits limpo e organizado, bem como facilitar o acompanhamento das mudanças realizadas no projeto, seguimos as seguintes diretrizes para commits.

### Commits

- **Padrão do Commit**: Cada commit deve seguir o seguinte padrão:
  `feat: Implementando novo botão na tela de login`

Onde:

- `feat`: é o tipo de commit indicando uma nova funcionalidade.
- `Implementando novo botão na tela de login`: é uma mensagem descritiva que resume as mudanças realizadas no commit. Tente ser claro e conciso, descrevendo o que foi feito sem incluir detalhes desnecessários.

#### Commit types

Os tipos de commit usados nesse projeto são baseados na convenção [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

- **feat**: Indica a adição de uma nova funcionalidade ao projeto. Este tipo de commit é utilizado quando uma nova funcionalidade é implementada.

- **fix**: Indica a correção de um bug ou problema no código. Esse tipo de commit é utilizado quando uma correção é aplicada para resolver um problema existente.

- **chore**: Indica alterações em tarefas de manutenção, configuração ou outras tarefas não diretamente relacionadas à funcionalidade principal do projeto.

- **refactor**: Indica a refatoração do código, ou seja, alterações no código que não alteram seu comportamento externo, mas melhoram sua estrutura, legibilidade ou eficiência.

- **docs**: Indica alterações na documentação do projeto, como atualizações no README, em comentários de código ou em outras formas de documentação relacionadas ao projeto.

- **style**: Indica mudanças no estilo do código, como formatação, espaçamento, ou renomeação de variáveis, sem alterar seu comportamento.

- **test**: Indica adições ou modificações nos testes do projeto. Esse tipo de commit é utilizado quando novos testes são adicionados, existentes são melhorados ou há alterações relacionadas à infraestrutura de testes.

Essas práticas ajudam a manter um histórico de commits consistente e informativo, facilitando o entendimento das alterações realizadas ao longo do tempo.

## 🎨 Estilização

O projeto utiliza duas abordagens de estilização para garantir uma experiência visual consistente e moderna: **Tailwind CSS** e **Material UI (MUI)**. Abaixo estão os detalhes de como cada uma foi aplicada:

### Tailwind CSS

O [Tailwind CSS](https://tailwindcss.com/) foi utilizado como principal ferramenta de estilização, oferecendo uma abordagem utilitária para criar interfaces responsivas e customizáveis.

#### Características:
- **Classes utilitárias**: Estilização diretamente no HTML, com classes como `bg-primary`, `text-white`, `p-4`, etc.
- **Responsividade**: Uso de prefixos como `sm:`, `md:`, `lg:` para criar designs responsivos.
- **Customização**: Configuração de temas e cores personalizadas no arquivo `tailwind.config.js`.

#### Exemplo de Uso:
```tsx
<div className="bg-white p-4 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-primary">Título</h2>
  <p className="text-gray-600">Descrição do conteúdo.</p>
</div>
```

### Material UI (MUI)

O [Material UI](https://mui.com/) foi utilizado para componentes prontos e estilizados, seguindo o Material Design. Ele complementa o Tailwind CSS em casos onde componentes complexos ou pré-estilizados são necessários.

#### Características:
- **Componentes prontos**: Botões, inputs, modais, drawers, etc.
- **Temas personalizáveis**: Configuração de temas globais no arquivo `ThemeProvider.ts`.
- **Integração com Tailwind**: Uso conjunto com classes do Tailwind para estilização adicional.

#### Exemplo de Uso:
```tsx
import { Button } from "@mui/material";

<Button variant="contained" color="primary" className="mt-4">
  Clique aqui
</Button>
```

## 🚀 Deploy

O projeto foi implantado utilizando a plataforma [Vercel](https://vercel.com/), que oferece uma integração simples e eficiente para aplicações front-end modernas.

### Como o Deploy foi Realizado

1. **Integração com GitHub**:
    - O repositório do projeto foi conectado diretamente à Vercel, permitindo deploys automáticos sempre que novas alterações são enviadas para a branch `main`.

2. **Configuração Automática**:
    - A Vercel detectou automaticamente que o projeto utiliza Vite e configurou o build e o deploy sem a necessidade de intervenção manual.

3. **Build e Publicação**:
    - O comando `npm run build` foi executado automaticamente pela Vercel para gerar os arquivos de produção.
    - Após o build, a aplicação foi publicada e ficou acessível através de um link único.

### Link do Projeto no Ar

A aplicação está disponível no seguinte link:  
👉 [https://buupe-tech-test.vercel.app/](https://buupe-tech-test.vercel.app/)

### Vantagens do Uso da Vercel

- **Deploys contínuos**: Integração direta com o GitHub para deploys automáticos.
- **Performance**: Otimizações automáticas para garantir carregamento rápido.
- **Escalabilidade**: Infraestrutura robusta para suportar tráfego variável.
- **Facilidade de uso**: Configuração simples e intuitiva.

---