# defaultní přílaz
.DEFAULT_GOAL := help

# aby nedošlo k problemu kdyby existoval soubor stejného názvu
.PHONY: sync help pack build

sync: ## Stažení dat z google drive
	rclone sync srdsource: source_raw/ -P

prepare-source: ## očištění a přenos dat
	docker-compose run --rm  preparedata

dev-fatesrd: ## dev server fatesrd
	docker-compose up fatesrd

dev-dnd5esrd: ## dev server dnd5esrd
	docker-compose up dnd5esrd

dev-awsrd: ## dev server awsrd
	docker-compose up awsrd

dev-drd2srd: ## dev server drd2srd
	docker-compose up drd2srd

dev-srd: ## dev server srd
	docker-compose up srd

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

pack-dnd5esrd: ## Pack dnd5esrd
	docker-compose run --rm pack dnd5esrd

pack-fatesrd: ## Pack fatesrd
	docker-compose run --rm pack fatesrd

pack-awsrd: ## Pack awsrd
	docker-compose run --rm pack awsrd

pack-drd2srd: ## Pack drd2srd
	docker-compose run --rm pack drd2srd

pack-srd: ## Pack srd
	docker-compose run --rm pack srd

build: build-fatesrd build-dnd5esrd build-awsrd build-drd2srd ## build all

pack: pack-fatesrd pack-dnd5esrd pack-awsrd pack-drd2srd ## pack all

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'