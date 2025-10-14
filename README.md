# Imobiliária Azes - Frontend

Uma réplica moderna e responsiva do website da Imobiliária Azes, desenvolvida com HTML, CSS e JavaScript puro.

## 🏠 Sobre o Projeto

Este projeto é uma recriação do website [imobiliariaazes.com.br](https://imobiliariaazes.com.br/) com foco em:
- Design moderno e responsivo
- Performance otimizada
- Experiência do usuário aprimorada
- Código limpo e bem estruturado

## 🚀 Características

### Design e Layout
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Moderno**: Gradientes, sombras e animações suaves
- **Acessível**: Navegação por teclado e foco visível
- **Performance**: Imagens otimizadas e carregamento lazy

### Funcionalidades
- **Navegação móvel**: Menu hamburger funcional
- **Busca de imóveis**: Formulário com filtros avançados
- **Categorias**: Cards interativos para diferentes tipos de propriedades
- **Propriedades**: Grid responsivo com informações detalhadas
- **Integração WhatsApp**: Links diretos para contato
- **Animações**: Scroll suave e animações de entrada

### Seções
1. **Header**: Navegação fixa com menu responsivo
2. **Hero**: Seção principal com call-to-action
3. **Busca**: Formulário avançado de pesquisa
4. **Categorias**: Destaques para diferentes tipos de imóveis
5. **Propriedades**: Listings de venda e aluguel
6. **Sobre**: Informações da empresa
7. **Contato**: Integração com WhatsApp e redes sociais
8. **Footer**: Links e informações da empresa

## 📁 Estrutura do Projeto

```
azes_agent/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interativo
└── README.md           # Este arquivo
```

## 🛠️ Como Executar

### Método 1: Abrir diretamente
1. Baixe ou clone os arquivos
2. Abra o arquivo `index.html` em qualquer navegador web

### Método 2: Servidor local (recomendado)
```bash
# Se você tem Python instalado
cd azes_agent
python -m http.server 8000

# Ou com Node.js e npx
npx serve .

# Acesse: http://localhost:8000
```

### Método 3: VS Code Live Server
1. Instale a extensão "Live Server" no VS Code
2. Clique com o botão direito em `index.html`
3. Selecione "Open with Live Server"

## 🎨 Personalização

### Cores
As cores principais estão definidas no CSS e podem ser facilmente alteradas:

```css
/* Cores principais */
--primary-blue: #2563eb;
--whatsapp-green: #25d366;
--gradient-start: #667eea;
--gradient-end: #764ba2;
```

### Conteúdo
- **Textos**: Edite diretamente no `index.html`
- **Imagens**: Substitua as URLs das imagens do Unsplash
- **Contato**: Atualize o número do WhatsApp e informações de contato

### Funcionalidades
- **Cidades e Bairros**: Modifique o objeto `neighborhoods` no `script.js`
- **Tipos de Imóveis**: Edite as opções nos métodos de `handleTabChange`
- **Propriedades**: Adicione novos cards na seção de propriedades

## 📱 Responsividade

O website é totalmente responsivo com breakpoints em:
- **Desktop**: > 768px
- **Tablet**: 768px - 480px  
- **Mobile**: < 480px

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Flexbox, Grid, Animações
- **JavaScript ES6+**: Interatividade moderna
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia (Inter)
- **Unsplash**: Imagens de placeholder

## 🌐 Funcionalidades JavaScript

- **Menu Mobile**: Toggle do menu hambúrguer
- **Tabs de Busca**: Alternância entre Comprar/Alugar/Rural
- **Dependência Cidade/Bairro**: Atualização automática de opções
- **Validação de Formulário**: Verificação de valores mínimo/máximo
- **Scroll Suave**: Navegação entre seções
- **Animações**: Intersection Observer para animações
- **WhatsApp**: Integração com mensagens personalizadas

## 📞 Integração WhatsApp

O website inclui integração completa com WhatsApp:
- Botões diretos para diferentes tipos de consulta
- Mensagens personalizadas baseadas no contexto
- Número configurável: `(51) 98124-6634`

## 🔍 SEO e Performance

- Meta tags configuradas
- Imagens otimizadas
- Carregamento lazy de imagens
- CSS e JS minificáveis
- Estrutura HTML semântica

## 🚀 Próximos Passos

Para um website completo de produção, considere adicionar:

1. **Backend Integration**
   - API para busca de propriedades
   - Sistema de gerenciamento de conteúdo
   - Banco de dados de imóveis

2. **Funcionalidades Avançadas**
   - Filtros de busca mais complexos
   - Mapas interativos
   - Tour virtual dos imóveis
   - Sistema de favoritos

3. **Otimizações**
   - Compressão de imagens
   - Minificação de CSS/JS
   - CDN para assets
   - Service Workers para cache

4. **Analytics e Monitoramento**
   - Google Analytics
   - Pixel do Facebook
   - Monitoramento de erros

## 📄 Licença

Este projeto é uma demonstração educacional baseada no website público da Imobiliária Azes.

## 👨‍💻 Desenvolvimento

Desenvolvido como uma recriação moderna do website original, com foco em melhores práticas de desenvolvimento web e experiência do usuário.

---

**Contato**: Para dúvidas sobre este projeto, entre em contato através do GitHub.