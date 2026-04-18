-- CreateTable
CREATE TABLE "MailerLiteSubscriber" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "mailerLiteId" TEXT NOT NULL,
    "dmbBusinessPlanAccessCode" TEXT,
    "dmbBusinessPlanAccessCodeValidFrom" TIMESTAMP(3),
    "dmbBusinessPlanAccessCodeValidTo" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MailerLiteSubscriber_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MailerLiteSubscriber_email_key" ON "MailerLiteSubscriber"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MailerLiteSubscriber_mailerLiteId_key" ON "MailerLiteSubscriber"("mailerLiteId");
