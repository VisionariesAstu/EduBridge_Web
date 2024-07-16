/*
  Warnings:

  - Added the required column `ApplicationLetter` to the `JobApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HourlyRate` to the `JobPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TotalHours` to the `JobPost` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Contract" (
    "ContractID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "JobApplicationID" INTEGER NOT NULL,
    "JobPostID" INTEGER NOT NULL,
    CONSTRAINT "Contract_JobPostID_fkey" FOREIGN KEY ("JobPostID") REFERENCES "JobPost" ("JobPostID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Contract_JobApplicationID_fkey" FOREIGN KEY ("JobApplicationID") REFERENCES "JobApplication" ("JobApplicationID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Payment" (
    "PaymentID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ContractID" INTEGER NOT NULL,
    "Amount" REAL NOT NULL,
    "PaymentDate" DATETIME NOT NULL,
    CONSTRAINT "Payment_ContractID_fkey" FOREIGN KEY ("ContractID") REFERENCES "Contract" ("ContractID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ContractSession" (
    "SessionID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ContractID" INTEGER NOT NULL,
    "TutorID" INTEGER NOT NULL,
    "ScheduledDate" DATETIME NOT NULL,
    "StartTime" DATETIME NOT NULL,
    "EndTime" DATETIME NOT NULL,
    "Status" TEXT NOT NULL,
    CONSTRAINT "ContractSession_ContractID_fkey" FOREIGN KEY ("ContractID") REFERENCES "Contract" ("ContractID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ContractSession_TutorID_fkey" FOREIGN KEY ("TutorID") REFERENCES "Tutor" ("TutorID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Report" (
    "ReportID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "SessionID" INTEGER NOT NULL,
    "StudentID" INTEGER NOT NULL,
    "TutorID" INTEGER NOT NULL,
    "ReportDetails" TEXT NOT NULL,
    "ReportDate" DATETIME NOT NULL,
    CONSTRAINT "Report_SessionID_fkey" FOREIGN KEY ("SessionID") REFERENCES "ContractSession" ("SessionID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Report_StudentID_fkey" FOREIGN KEY ("StudentID") REFERENCES "Student" ("StudentID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Report_TutorID_fkey" FOREIGN KEY ("TutorID") REFERENCES "Tutor" ("TutorID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JobApplication" (
    "JobApplicationID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "JobPostID" INTEGER NOT NULL,
    "TutorID" INTEGER NOT NULL,
    "ApplicationLetter" TEXT NOT NULL,
    "ApplicationDate" DATETIME NOT NULL,
    "Status" TEXT NOT NULL,
    CONSTRAINT "JobApplication_JobPostID_fkey" FOREIGN KEY ("JobPostID") REFERENCES "JobPost" ("JobPostID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "JobApplication_TutorID_fkey" FOREIGN KEY ("TutorID") REFERENCES "Tutor" ("TutorID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_JobApplication" ("ApplicationDate", "JobApplicationID", "JobPostID", "Status", "TutorID") SELECT "ApplicationDate", "JobApplicationID", "JobPostID", "Status", "TutorID" FROM "JobApplication";
DROP TABLE "JobApplication";
ALTER TABLE "new_JobApplication" RENAME TO "JobApplication";
CREATE TABLE "new_JobPost" (
    "JobPostID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "StudentID" INTEGER NOT NULL,
    "SubjectID" INTEGER NOT NULL,
    "Description" TEXT NOT NULL,
    "PostedDate" DATETIME NOT NULL,
    "Status" TEXT NOT NULL,
    "HourlyRate" REAL NOT NULL,
    "TotalHours" INTEGER NOT NULL,
    CONSTRAINT "JobPost_StudentID_fkey" FOREIGN KEY ("StudentID") REFERENCES "Student" ("StudentID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_JobPost" ("Description", "JobPostID", "PostedDate", "Status", "StudentID", "SubjectID") SELECT "Description", "JobPostID", "PostedDate", "Status", "StudentID", "SubjectID" FROM "JobPost";
DROP TABLE "JobPost";
ALTER TABLE "new_JobPost" RENAME TO "JobPost";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Contract_JobApplicationID_key" ON "Contract"("JobApplicationID");

-- CreateIndex
CREATE UNIQUE INDEX "Contract_JobPostID_key" ON "Contract"("JobPostID");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_ContractID_key" ON "Payment"("ContractID");

-- CreateIndex
CREATE UNIQUE INDEX "ContractSession_ContractID_key" ON "ContractSession"("ContractID");

-- CreateIndex
CREATE UNIQUE INDEX "ContractSession_TutorID_key" ON "ContractSession"("TutorID");

-- CreateIndex
CREATE UNIQUE INDEX "Report_TutorID_key" ON "Report"("TutorID");
