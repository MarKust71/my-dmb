-- CreateTable
CREATE TABLE "MraContext" (
    "id" TEXT NOT NULL,
    "contextId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MraContext_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MraApplication" (
    "id" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "city" TEXT,
    "address" TEXT,
    "birthDate" TIMESTAMP(3),
    "height" INTEGER,
    "weigth" INTEGER,
    "consent" TIMESTAMP(3),
    "contextId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MraApplication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MraContext_contextId_key" ON "MraContext"("contextId");

-- CreateIndex
CREATE UNIQUE INDEX "MraApplication_email_contextId_key" ON "MraApplication"("email", "contextId");

-- AddForeignKey
ALTER TABLE "MraApplication" ADD CONSTRAINT "MraApplication_contextId_fkey" FOREIGN KEY ("contextId") REFERENCES "MraContext"("id") ON DELETE CASCADE ON UPDATE CASCADE;
