install:#Установка зависимостей
		npm ci

link: #Генерация ссылки
		npm link

publish: #Установка publish
		npm publish --dry-run

lint:
		npx eslint .

build: # сборка в директорию dist
		npm run build

serve: # сборка в браузере без сохранения в директорию dist
		npm run dev