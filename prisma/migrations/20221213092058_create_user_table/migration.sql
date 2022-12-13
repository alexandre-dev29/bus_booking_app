-- CreateTable
CREATE TABLE "Users" (
    "id_user" TEXT NOT NULL,
    "full_name" VARCHAR(60) NOT NULL,
    "phoneNumber" VARCHAR(20) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "refreshToken" TEXT,
    "photoUrl" VARCHAR(100) NOT NULL,
    "isPhoneConfirmed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id_user")
);
