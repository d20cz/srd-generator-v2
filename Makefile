# defaultní přílaz
.DEFAULT_GOAL := help

# aby nedošlo k problemu kdyby existoval soubor stejného názvu
.PHONY: sync help

sync: ## Stažení dat z google drive
	rclone sync srdsource: source_raw/ -P

prepare-source: ## očištění a přenos dat
	docker-compose run --rm  preparedata

dev-fatesrd: ## dev server fatesrd
	docker-compose up fatesrd

build-fatesrd: ## build fatesrd
	docker-compose run --rm --entrypoint "yarn srd:build" fatesrd

dev-dnd5esrd: ## dev server dnd5esrd
	docker-compose up dnd5esrd

build-dnd5esrd: ## build dnd5esrd
	docker-compose run --rm --entrypoint "yarn srd:build" dnd5esrd

pack-dnd5esrd: ## Pack dnd5esrd
	docker-compose run --rm pack dnd5esrd

pack-fatesrd: ## Pack fatesrd
	docker-compose run --rm pack fatesrd

build: build-fatesrd build-dnd5esrd ## build all

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'