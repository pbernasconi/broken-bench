STORYBOOK=node_modules/.bin/storybook
NEXT=node_modules/.bin/next
STORYBOOK_PORT=6006
TSC=node_modules/.bin/tsc

.PHONY: setup
setup: setup-dependencies build-ts

.PHONY: watch
watch:
	$(NEXT)

.PHONY: watch-ts
watch-ts:
	$(TSC) -b -w

.PHONY: build
build: build-ts
	$(NEXT) build

.PHONY: lint
lint:

.PHONY: lint-no-fix
lint-no-fix:

.PHONY: test
test:

.PHONY: start
start:
	$(NEXT) start

.PHONY: setup-dependencies
setup-dependencies:
	yarn install

.PHONY: build-ts
build-ts:
	$(TSC) -b
