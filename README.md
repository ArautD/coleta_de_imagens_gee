# Script para Análise de Imagens Landsat 8 no Google Earth Engine

Este script foi desenvolvido para analisar imagens Landsat 8 no Google Earth Engine (GEE) dentro de uma região de interesse, com base em um intervalo de datas e uma geometria definida. As imagens coletadas foram difividas entre teste e treino. <br/>
As imagens de treino podem ser encontradas em: https://drive.google.com/drive/folders/1o8pYNUYthiJmWrKMQ4RkteXOGKCKQlTi?usp=sharing. <br/>
As imagens de teste podem ser encontradas em: https://drive.google.com/drive/folders/1_D5Onxg2JwQNhdwAq1wIHUuD0aiK0zLD?usp=drive_link. <br/>

## Descrição do Código

O código realiza as seguintes etapas principais:

1. **Definir o intervalo de datas**:  
   📅 O código usa as variáveis `dataInicio` e `dataFim` para definir o período de análise das imagens.

2. **Definir a Geometria da Região de Interesse**:  
   🌍 A variável `geometry` define uma linha (LineString) representando a região de interesse.

3. **Criação de uma Região de Alvo**:  
   📍 Uma região buffer de 2,5 km é gerada a partir da geometria fornecida.

4. **Geração de Pontos Aleatórios**:  
   🎲 O script cria pontos aleatórios dentro da região alvo, usados para recorte e visualização das imagens.

5. **Criação de um Retângulo (Tile) para Visualização**:  
   📐 A partir do ponto aleatório gerado, é criado um retângulo de 3 km de raio para a visualização da imagem.

6. **Processamento de Imagens Landsat 8**:  
   🌄 Para cada mês de um ano específico, o código filtra as imagens Landsat 8 dentro do período de datas e da região de interesse. As imagens são então processadas para realçar as bandas B6, B5 e B4.

7. **Visualização das Imagens**:  
   👀 A imagem processada é visualizada no mapa com ajustes de contraste (min, max) e parâmetros de opacidade e gama.

8. **Exportação das Imagens**:  
   📥 As imagens processadas para cada mês são exportadas para o Google Drive, com um nome baseado no índice do ponto aleatório e no mês.

## Dependências

- Google Earth Engine 🌐
- Acesso à API do Google Earth Engine 🔑
- Coleção de imagens Landsat 8 (landsat8_c2) 🌍

## Como Usar

1. **Configurar a região de interesse**:  
   ✏️ Modifique a variável `geometry` para refletir a área que você deseja analisar.

2. **Definir as datas de início e fim**:  
   🗓️ Altere as variáveis `dataInicio` e `dataFim` para o intervalo de datas desejado.

3. **Rodar o Script no Google Earth Engine**:  
   🚀 Importe este script para o seu ambiente do Google Earth Engine e execute-o para visualizar e exportar as imagens de satélite.

4. **Visualizar Resultados**:  
   🔍 As imagens processadas serão exibidas na interface do GEE e exportadas para o seu Google Drive, dentro da pasta `Marapanim`.
   
## Personalização

- **Geometria de Interesse**: 📍 Modifique a variável `geometry` para definir a região de interesse.
- **Intervalo de Datas**: 🗓️ Altere o intervalo de datas para cobrir o período de interesse.
- **Parâmetros de Visualização**: 🎨 Ajuste os parâmetros de visualização, como `min`, `max`, `opacity` e `gamma` para otimizar a visualização das imagens.
  
## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar PRs ou abrir issues.
