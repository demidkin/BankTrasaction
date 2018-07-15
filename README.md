# BankTransaction
Test task on the front-end development

1. Подключение репозитория  

```git
    git clone https://github.com/demidkin/BankTransaction.git
    cd ./BankTransaction
```

2. Установка зависимостей

```cmd
    npm install
```

3. Заупск API сервера (http://localhost:3000)

```cmd
    npm run api
```    

4. Запуск веб-сервра front-end

```npm
    npm start
``` 

Сборка webpack

    css:    ./dist/main.css
    js:     ./dist/main.js
    html:   ./dist/index.html

-------------------------------------------
### Исправления 15.07.2018 

#### dist в гите
    
    убрал через gitignor

#### Нельзя указывать версию библиотеки как последнюю, при этом будут безконтрольные обновления, которые могут приводит к ошибкам работы
    
    Указал версию пакетов через "~"

#### Могу перейти на страницу авторизации, регистрации уже после авторизации
    
    Добавил для /login и /signup PrivateRoute

#### Импорты должны быть от корня проекта, а не относительно файла
    
    done, с помощью path.resolve

####  state => ({ store: state } - так делать нельзя, это означает, что данный компонент зависит от всего, что есть в store, хотя это совсем не так
    
    done

#### src/components/login.component.js:27 - выставляется значение state, которого не было при инициализации

    done, добавил в конструктор

#### src/components/login.component.js:32 - не кажется ли, что токен штука глобальная и должна не локально выставлятся, а через redux?

    done

#### src/components/login.component.js:34 - все actions Должны быть там, ручного type быть не должно

    done

#### Везде идёт странная логика, загрузка банков и их сохранение в store - идёт в компонентах, чего явно быть не должно

    done, обновление при удалении или добавлени транзакций через actions

#### src/components/transaction-add.component.js:30 - это вообще что? 0_о

    done, сделал модальное окно

#### Зачем везде отплавять userId и token, это по сути одно и то же

    done, используем только token

#### src/components/transaction-add.component.js - две компоненты в одном файле

    done

#### Дублирвоание алгоритма загрузки банков в разных компонентах

    done, банки грузим один раз, транзакции обновлем при добавлении или удалении

#### На странице вывода списка транзакций Банки и трназакции грузятся последовтаельно, а должны параллельно

    done

#### id банка и индекс в массиве - не одно и то же, сделайте чтобы все id были > 100

    done