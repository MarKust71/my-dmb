-- Zmiana nazwy kolumny "date" na "dateStart" w tabeli "Event"
ALTER TABLE "Event" RENAME COLUMN "date" TO "dateStart";

-- Dodanie opcjonalnej kolumny "dateEnd" (NULL dla wydarzeń jednodniowych)
ALTER TABLE "Event" ADD COLUMN "dateEnd" TEXT;
