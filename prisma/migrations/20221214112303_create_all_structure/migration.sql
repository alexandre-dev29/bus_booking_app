-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SuperAdmin', 'User', 'Admin');

-- CreateEnum
CREATE TYPE "PaymentMode" AS ENUM ('AirtelMoney', 'Mpesa', 'OrangeMoney', 'AfricelMoney');

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'User';

-- CreateTable
CREATE TABLE "Admin" (
    "adminId" TEXT NOT NULL,
    "fullName" VARCHAR(60) NOT NULL,
    "phoneNumber" VARCHAR(20) NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "refreshToken" TEXT,
    "photoUrl" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'Admin',

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("adminId")
);

-- CreateTable
CREATE TABLE "BusType" (
    "busTypeId" TEXT NOT NULL,
    "typeName" VARCHAR(100) NOT NULL,
    "capacity" INTEGER NOT NULL,
    "numberRow" INTEGER NOT NULL,
    "columnRow" INTEGER NOT NULL,
    "lastRowPlaces" INTEGER NOT NULL,
    "withToilet" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BusType_pkey" PRIMARY KEY ("busTypeId")
);

-- CreateTable
CREATE TABLE "Bus" (
    "busId" TEXT NOT NULL,
    "busName" VARCHAR(100) NOT NULL,
    "busTypeId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bus_pkey" PRIMARY KEY ("busId")
);

-- CreateTable
CREATE TABLE "Town" (
    "townId" TEXT NOT NULL,
    "townName" VARCHAR(100) NOT NULL,
    "provice" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Town_pkey" PRIMARY KEY ("townId")
);

-- CreateTable
CREATE TABLE "TransportLine" (
    "transportLineId" TEXT NOT NULL,
    "townDepart" TEXT NOT NULL,
    "townArrival" TEXT NOT NULL,
    "distance" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "TransportLine_pkey" PRIMARY KEY ("transportLineId")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "reservationId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "scheduleId" TEXT NOT NULL,
    "dateOfReservation" DATE NOT NULL,
    "rowNumber" INTEGER NOT NULL,
    "columnNumber" INTEGER NOT NULL,
    "placeNumber" INTEGER NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("reservationId")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "scheduleId" TEXT NOT NULL,
    "transportLineId" TEXT NOT NULL,
    "hourDepart" TIMESTAMP(3) NOT NULL,
    "hourArrival" TIMESTAMP(3) NOT NULL,
    "hourEmbarquing" TIMESTAMP(3) NOT NULL,
    "isPaid" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("scheduleId")
);

-- CreateTable
CREATE TABLE "Payment" (
    "paymentId" TEXT NOT NULL,
    "reservationId" TEXT NOT NULL,
    "datePayment" TIMESTAMP(3) NOT NULL,
    "amount" TIMESTAMP(3) NOT NULL,
    "isPaid" BOOLEAN NOT NULL,
    "paymentMode" "PaymentMode" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("paymentId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bus_busTypeId_key" ON "Bus"("busTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "TransportLine_townDepart_key" ON "TransportLine"("townDepart");

-- CreateIndex
CREATE UNIQUE INDEX "TransportLine_townArrival_key" ON "TransportLine"("townArrival");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_userId_key" ON "Reservation"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_scheduleId_key" ON "Reservation"("scheduleId");

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_transportLineId_key" ON "Schedule"("transportLineId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_reservationId_key" ON "Payment"("reservationId");

-- AddForeignKey
ALTER TABLE "Bus" ADD CONSTRAINT "Bus_busTypeId_fkey" FOREIGN KEY ("busTypeId") REFERENCES "BusType"("busTypeId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransportLine" ADD CONSTRAINT "TransportLine_townDepart_fkey" FOREIGN KEY ("townDepart") REFERENCES "Town"("townId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransportLine" ADD CONSTRAINT "TransportLine_townArrival_fkey" FOREIGN KEY ("townArrival") REFERENCES "Town"("townId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("scheduleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_transportLineId_fkey" FOREIGN KEY ("transportLineId") REFERENCES "TransportLine"("transportLineId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("reservationId") ON DELETE RESTRICT ON UPDATE CASCADE;
