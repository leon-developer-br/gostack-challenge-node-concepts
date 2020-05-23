Tipos de parametros

São formas de o cliente enviar informacoes para o servidor

-   Query params: filtros e paginação.
-   Route params: identificar recursos
-   Request body: conteudo (JSON))

Pacotes

-   express
-   uuidv4

/\*
_\*\* Instruir o Express a interpretar o Request Body como JSON
_/
app.use(express.json());

Middleware

ativar via app.use(middleware)

na rota app.get("/", middlware, (req, res) => {})

usando use e rota app.use("/", middleware)


ao usar o return, o fluxo da request é interrompido