### Tipos de parametros

Formas enviar informações para o servidor:
```
-  Query params: filtros e paginação.
-  Route params: identificar recursos
-  Request body: conteudo (JSON))
```

### Pacotes

> Em uso
```
-   uuidv4
```

### Middleware

> Ativar

```
1 - app.use(middleware)
2 - app.use("/", middleware)
3 - app.get("/", middleware, (req, res) => {})

Uma rota é um exemplo de ***middleware***.
```

> Instruir o Express a interpretar o Request Body como JSON
```
app.use(express.json());
```

> Interromper fluxo
```
Ao usar o return, o fluxo da request é interrompido
```