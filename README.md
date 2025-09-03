# Site — Malha Rodoviária a partir de meta.csv

Pronto para usar no GitHub Pages.

## Como publicar
1. Crie um repositório novo (ou limpe o existente).
2. Faça upload **destes arquivos** na raiz do repositório:
   - `index.html`
   - `meta.csv`
   - `.nojekyll` (evita processamento do Jekyll)
3. No GitHub, acesse **Settings → Pages** e selecione a branch (geralmente `main`) e a pasta `/root`.
4. Acesse a URL do Pages. Se já existir um Pages para esse repo, basta dar **Commit/Push** e forçar reload (Ctrl+F5).

## Estrutura do CSV
O código espera os nomes de coluna:
- `Rodovia`
- `Km Inicial`
- `Lat e Long km Inicial` (ex.: `-23.153115, -47.257589`)
- `Km Final`
- `Lat e Long km final`

Valores decimais com vírgula (ex.: `35,700`) são aceitos.

## Observações
- As cores são estáveis por rodovia.
- A camada chama **“Malha Rodoviária (meta.csv)”** no Layer Control.
- Se precisar renomear o CSV ou mover de pasta, ajuste o `fetch('./meta.csv', { cache: 'no-store' })` no `index.html`.
