install: install-deps

run:
	npx babel-node -- 'src/02/index.js'

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test
