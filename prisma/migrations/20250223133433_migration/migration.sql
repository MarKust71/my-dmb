-- CreateTable
CREATE TABLE "MailerLiteSubscriber" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "mailerLiteId" TEXT NOT NULL,
    "dmbBusinessPlanAccessCode" TEXT,
    "dmbBusinessPlanAccessCodeValidFrom" DATETIME,
    "dmbBusinessPlanAccessCodeValidTo" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "MailerLiteSubscriber_email_key" ON "MailerLiteSubscriber"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MailerLiteSubscriber_mailerLiteId_key" ON "MailerLiteSubscriber"("mailerLiteId");
