### Описание

Проект "Игры разума"

Содержит 5 консольных мини-игр:

- brain-even - предлагает определить, является ли число четным;
- brain-calc - предлагает посчитать результат арифм. операции двух чисел;
- brain-gcd - предлагает найти наибольший общий делитель числа;
- brain-progression - предлагает найти недостающее число в арифм. прогрессии;
- brain-prime - предлагает определить, является ли число простым.

### Подготовка к работе

#### Установка зависимостей

```
make install // если не сработает, то можно исползовать npm install
```

#### Публикация пакета

```
make publish
sudo npm link
```

### Запуск

#### 1 способ (действует без публикации пакета)

```
make brain-even
```

#### 2 способ (действует после публикации пакета)

```
make publish
sudo npm link
```

### Hexlet tests and linter status:

[![Actions Status](https://github.com/AnsGit/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/AnsGit/frontend-project-44/actions)

<a href="https://codeclimate.com/github/AnsGit/frontend-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/fbb16bc55a36d15ddbfb/maintainability" /></a>
