PRONTO PARA PUBLICAR (GitHub Pages)
------------------------------------
Conteúdo:
- index.html               -> carrega rápido; usa rotas.geojson (estático).
- rotas.geojson            -> gerado a partir do seu meta.csv (retas). Substitua depois pela versão refinada (OSRM).
- rc_simplificado.geojson  -> vazio por padrão (placebo). Se quiser fundo leve, gere um GeoJSON e substitua.
- RC_*.zip (se presentes)  -> fallback: se rc_simplificado.geojson estiver vazio, a página carrega esses shapefiles.
- sw.js                    -> cache simples para abrir mais rápido depois.
- .nojekyll                -> necessário no GitHub Pages.

Como publicar:
1) Envie todos os arquivos para a raiz do seu repositório (branch main).
2) Ative GitHub Pages (Settings > Pages > Source: Deploy from a branch > Branch: main / root).
3) Abra a URL do Pages.

Dica de velocidade máxima:
- Clique no botão "Recalcular rotas com OSRM" no site, depois clique em "Baixar rotas.geojson".
- Substitua o arquivo do repositório pelo baixado. O site passa a abrir praticamente instantâneo.

Fundo leve (recomendado):
- Converta seus shapefiles para um único rc_simplificado.geojson (via mapshaper) e substitua o arquivo.
