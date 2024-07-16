-- CreateTable
CREATE TABLE "Parent" (
    "ParentID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "UserID" INTEGER NOT NULL,
    CONSTRAINT "Parent_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User" ("UserID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Student" (
    "StudentID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "UserID" INTEGER NOT NULL,
    "ParentID" INTEGER NOT NULL,
    "GradeLevel" TEXT NOT NULL,
    CONSTRAINT "Student_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User" ("UserID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Student_ParentID_fkey" FOREIGN KEY ("ParentID") REFERENCES "Parent" ("ParentID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Student" ("GradeLevel", "ParentID", "StudentID", "UserID") SELECT "GradeLevel", "ParentID", "StudentID", "UserID" FROM "Student";
DROP TABLE "Student";
ALTER TABLE "new_Student" RENAME TO "Student";
CREATE UNIQUE INDEX "Student_UserID_key" ON "Student"("UserID");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Parent_UserID_key" ON "Parent"("UserID");
