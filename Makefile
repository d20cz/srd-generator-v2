include .env

# defaultní přílaz
.DEFAULT_GOAL := help

# aby nedošlo k problemu kdyby existoval soubor stejného názvu
.PHONY: sync help pack build

sync: ## Stažení dat z google drive
	rclone sync srdsource: source_raw/ -P

prepare-source: ## očištění a přenos dat
	docker-compose run --rm  preparedata

dev-fatesrd: cache-clear  ## dev server fatesrd
	docker-compose up fatesrd

dev-dnd5esrd: cache-clear ## dev server dnd5esrd
	docker-compose up dnd5esrd

dev-awsrd: cache-clear ## dev server awsrd
	docker-compose up awsrd

dev-drd2srd: cache-clear ## dev server drd2srd
	docker-compose up drd2srd

dev-srd: cache-clear ## dev server srd
	docker-compose up srd

dev-sr6srd: cache-clear ## dev server sr6srd
	docker-compose up sr6srd

build-fatesrd: ## build fatesrd
	docker-compose run --rm --entrypoint "yarn srd:build" fatesrd

build-dnd5esrd: ## build dnd5esrd
	docker-compose run --rm --entrypoint "yarn srd:build" dnd5esrd

build-awsrd: ## build awsrd
	docker-compose run --rm --entrypoint "yarn srd:build" awsrd

build-drd2srd: ## build drd2srd
	docker-compose run --rm --entrypoint "yarn srd:build" drd2srd

build-srd: ## build srd
	docker-compose run --rm --entrypoint "yarn srd:build" srd

build-sr6srd: ## build sr6srd
	docker-compose run --rm --entrypoint "yarn srd:build" sr6srd

pack-dnd5esrd: ## Pack dnd5esrd
	docker-compose run --rm pack dnd5esrd DEPLOY_VERSION_DND5ESRD

pack-fatesrd: ## Pack fatesrd
	docker-compose run --rm pack fatesrd DEPLOY_VERSION_FATESRD

pack-awsrd: ## Pack awsrd
	docker-compose run --rm pack awsrd DEPLOY_VERSION_AWSRD

pack-drd2srd: ## Pack drd2srd
	docker-compose run --rm pack drd2srd DEPLOY_VERSION_DRD2SRD

pack-srd: ## Pack srd
	docker-compose run --rm pack srd DEPLOY_VERSION_SRD

pack-sr6srd: ## Pack sr6srd
	docker-compose run --rm pack sr6srd DEPLOY_VERSION_SR6SRD

build: build-fatesrd build-dnd5esrd build-awsrd build-drd2srd build-srd build-sr6srd ## build all

pack: pack-fatesrd pack-dnd5esrd pack-awsrd pack-drd2srd pack-srd pack-sr6srd ## pack all

down:
	docker-compose down

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

init-dir: ## Inicializace adresáře
	mkdir -p source_raw
	mkdir -p builds

cache-clear:
	docker-compose run --rm u_cache_clear

upload-dnd5esrd: ## upload live dnd5esrd
	rclone copy builds/dnd5esrd-${DEPLOY_VERSION_DND5ESRD}.zip deployment-d20-cz: --progress

upload-fatesrd: ## upload live fatesrd
	rclone copy builds/fatesrd-${DEPLOY_VERSION_FATESRD}.zip deployment-d20-cz: --progress

upload-awsrd: ## upload live awsrd
	rclone copy builds/awsrd-${DEPLOY_VERSION_AWSRD}.zip deployment-d20-cz: --progress

upload-drd2srd: ## upload live drd2srd
	rclone copy builds/drd2srd-${DEPLOY_VERSION_DRD2SRD}.zip deployment-d20-cz: --progress

upload-srd: ## upload live srd
	rclone copy builds/srd-${DEPLOY_VERSION_SRD}.zip deployment-d20-cz: --progress

upload-sr6srd: ## upload live sr6srd
	rclone copy builds/sr6srd-${DEPLOY_VERSION_SR6SRD}.zip deployment-d20-cz: --progress

upload: upload-dnd5esrd upload-fatesrd upload-awsrd upload-drd2srd upload-srd upload-sr6srd ## upload live all