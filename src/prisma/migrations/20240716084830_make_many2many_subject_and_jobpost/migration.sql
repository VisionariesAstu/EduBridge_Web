-- CreateTable
CREATE TABLE "_JobPostToSubject" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_JobPostToSubject_A_fkey" FOREIGN KEY ("A") REFERENCES "JobPost" ("JobPostID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_JobPostToSubject_B_fkey" FOREIGN KEY ("B") REFERENCES "Subject" ("SubjectID") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JobPost" (
    "JobPostID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "StudentID" INTEGER NOT NULL,
    "SubjectID" INTEGER NOT NULL,
    "Description" TEXT NOT NULL,
    "PostedDate" DATETIME NOT NULL,
    "Status" TEXT NOT NULL,
    CONSTRAINT "JobPost_StudentID_fkey" FOREIGN KEY ("StudentID") REFERENCES "Student" ("StudentID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_JobPost" ("Description", "JobPostID", "PostedDate", "Status", "StudentID", "SubjectID") SELECT "Description", "JobPostID", "PostedDate", "Status", "StudentID", "SubjectID" FROM "JobPost";
DROP TABLE "JobPost";
ALTER TABLE "new_JobPost" RENAME TO "JobPost";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_JobPostToSubject_AB_unique" ON "_JobPostToSubject"("A", "B");

-- CreateIndex
CREATE INDEX "_JobPostToSubject_B_index" ON "_JobPostToSubject"("B");
