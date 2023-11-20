-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Leilao" (
    "produto" TEXT NOT NULL,
    "datalimite" TEXT,
    "preco" TEXT,
    "dono" TEXT NOT NULL,
    "donoId" TEXT NOT NULL,
    "listadelances" TEXT NOT NULL,
    CONSTRAINT "Leilao_authorId_fkey" FOREIGN KEY ("donoId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Lance" (
    "leilao" TEXT NOT NULL PRIMARY KEY,
    "comprador" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    CONSTRAINT "Lance_produto_fkey" FOREIGN KEY ("leilao") REFERENCES "Leilao" ("produto") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_donoId_fkey" FOREIGN KEY ("donoId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
