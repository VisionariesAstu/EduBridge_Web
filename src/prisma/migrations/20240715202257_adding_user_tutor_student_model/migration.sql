-- CreateTable
CREATE TABLE "User" (
    "UserID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Role" TEXT NOT NULL,
    "Verified" BOOLEAN NOT NULL,
    "BackgroundCheckStatus" BOOLEAN,
    "JoinDate" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Student" (
    "StudentID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "UserID" INTEGER NOT NULL,
    "ParentID" INTEGER NOT NULL,
    "GradeLevel" TEXT NOT NULL,
    CONSTRAINT "Student_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User" ("UserID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tutor" (
    "TutorID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "UserID" INTEGER NOT NULL,
    "Subjects" TEXT NOT NULL,
    "Availability" TEXT NOT NULL,
    "HourlyRate" REAL NOT NULL,
    CONSTRAINT "Tutor_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User" ("UserID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_UserID_key" ON "Student"("UserID");

-- CreateIndex
CREATE UNIQUE INDEX "Tutor_UserID_key" ON "Tutor"("UserID");
