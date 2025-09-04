# Malha Rodoviária (meta.csv) — Rotas OSRM

Pronto para publicar no GitHub Pages.

## Publicação
1. Suba **todos os arquivos desta pasta** na **raiz** do repositório (incluindo `.nojekyll` e `meta.csv`).
2. Em **Settings → Pages**, escolha a branch (`main`) e a pasta `/root`.
3. A URL do Pages ficará ativa logo após o push (force um Ctrl+F5).

## Como funciona
- Lê `meta.csv`, supõe colunas:
  - `Rodovia`
  - `Km Inicial`
  - `Lat e Long km Inicial` (ex.: `-23.153115, -47.257589`)
  - `Km Final`
  - `Lat e Long km final`
- Para cada trecho, traça a rota real via **OSRM** (perfil `driving`) e **cacheia** no `localStorage`.
- Layer Control: “Malha Rodoviária (meta.csv)”.
- Checkbox no canto: **Usar rota real (OSRM)** → desmarcar volta a **linhas retas** (fallback).

## Observações
- O servidor público OSRM é de melhor esforço (pode aplicar limites). Para muitos trechos, o carregamento inicial pode levar alguns segundos.
- Se preferir **sem chamadas externas**, gere as polylines antes (posso te entregar um `rotas.geojson` estático).

