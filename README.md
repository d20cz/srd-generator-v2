# d20.cz Srd generator v2

## Zprovoznění projektu

1. nakloujte repositář
2. vytvořte env soubor `cp .env.default .env`
3. stáhnětě přes yarn potřebné balíčky proo geneerování  `docker compose run --rm u_yarn install`

## Generování 

1. stáhněte zdrojové soubory z Google Drive do složky `source_raw`. Mužete použít [Rclone](https://rclone.org/) 
2. pusťte příkaz pro předpřípravu dat `make prepare-source`.  Normalizuje data a zpracuje snippety.
3. `make help` vám poradí další možnosti
   - `make dev-*`  - lokální server pro ladění
   - `make build-*` - vygeneruje statický web
   - `make pack-*` - zabalí statický web do archivu 
