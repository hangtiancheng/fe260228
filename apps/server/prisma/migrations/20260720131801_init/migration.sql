CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT NOT NULL,
    "address" TEXT,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "bio" TEXT,
    "isTimingTask" BOOLEAN NOT NULL DEFAULT false,
    "timingTaskTime" TEXT DEFAULT '00:00:00',
    "wordNumber" INTEGER NOT NULL DEFAULT 0,
    "dayNumber" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastLoginAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "WordBookRecord" (
    "id" TEXT NOT NULL,
    "wordId" TEXT NOT NULL,
    "isMaster" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "WordBookRecord_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "WordBook" (
    "id" TEXT NOT NULL,
    "word" TEXT NOT NULL,
    "phonetic" TEXT,
    "definition" TEXT,
    "translation" TEXT,
    "pos" TEXT,
    "collins" TEXT,
    "oxford" TEXT,
    "tag" TEXT,
    "bnc" TEXT,
    "frq" TEXT,
    "exchange" TEXT,
    "gk" BOOLEAN,
    "zk" BOOLEAN,
    "gre" BOOLEAN,
    "toefl" BOOLEAN,
    "ielts" BOOLEAN,
    "cet6" BOOLEAN,
    "cet4" BOOLEAN,
    "ky" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WordBook_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "description" TEXT,
    "teacher" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Visitor" (
    "id" TEXT NOT NULL,
    "anonymousId" TEXT NOT NULL,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "browser" TEXT,
    "os" TEXT,
    "device" TEXT,

    CONSTRAINT "Visitor_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "PageView" (
    "id" TEXT NOT NULL,
    "visitorId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "referrer" TEXT,
    "path" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PageView_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "TrackEvent" (
    "id" TEXT NOT NULL,
    "visitorId" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "payload" JSONB,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrackEvent_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "PerformanceEntry" (
    "id" TEXT NOT NULL,
    "visitorId" TEXT NOT NULL,
    "fp" DOUBLE PRECISION,
    "fcp" DOUBLE PRECISION,
    "lcp" DOUBLE PRECISION,
    "inp" DOUBLE PRECISION,
    "cls" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PerformanceEntry_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ErrorEntry" (
    "id" TEXT NOT NULL,
    "visitorId" TEXT NOT NULL,
    "error" TEXT NOT NULL,
    "message" TEXT,
    "stack" TEXT,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ErrorEntry_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

CREATE UNIQUE INDEX "WordBookRecord_userId_wordId_key" ON "WordBookRecord"("userId", "wordId");

CREATE INDEX "WordBook_word_idx" ON "WordBook"("word");

CREATE INDEX "WordBook_tag_idx" ON "WordBook"("tag");

CREATE INDEX "WordBook_word_tag_idx" ON "WordBook"("word", "tag");

CREATE UNIQUE INDEX "Visitor_anonymousId_key" ON "Visitor"("anonymousId");

CREATE INDEX "Visitor_userId_idx" ON "Visitor"("userId");

CREATE INDEX "Visitor_anonymousId_idx" ON "Visitor"("anonymousId");

CREATE INDEX "PageView_visitorId_createdAt_idx" ON "PageView"("visitorId", "createdAt");

CREATE INDEX "PageView_path_createdAt_idx" ON "PageView"("path", "createdAt");

CREATE INDEX "TrackEvent_visitorId_createdAt_idx" ON "TrackEvent"("visitorId", "createdAt");

CREATE INDEX "TrackEvent_event_createdAt_idx" ON "TrackEvent"("event", "createdAt");

CREATE INDEX "PerformanceEntry_fp_createdAt_idx" ON "PerformanceEntry"("fp", "createdAt");

CREATE INDEX "PerformanceEntry_fcp_createdAt_idx" ON "PerformanceEntry"("fcp", "createdAt");

CREATE INDEX "PerformanceEntry_lcp_createdAt_idx" ON "PerformanceEntry"("lcp", "createdAt");

CREATE INDEX "PerformanceEntry_inp_createdAt_idx" ON "PerformanceEntry"("inp", "createdAt");

CREATE INDEX "PerformanceEntry_cls_createdAt_idx" ON "PerformanceEntry"("cls", "createdAt");

CREATE INDEX "PerformanceEntry_fp_fcp_lcp_inp_cls_createdAt_idx" ON "PerformanceEntry"("fp", "fcp", "lcp", "inp", "cls", "createdAt");

CREATE INDEX "ErrorEntry_visitorId_createdAt_idx" ON "ErrorEntry"("visitorId", "createdAt");

CREATE INDEX "ErrorEntry_error_createdAt_idx" ON "ErrorEntry"("error", "createdAt");

ALTER TABLE "WordBookRecord" ADD CONSTRAINT "WordBookRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "WordBookRecord" ADD CONSTRAINT "WordBookRecord_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "WordBook"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Visitor" ADD CONSTRAINT "Visitor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "PageView" ADD CONSTRAINT "PageView_visitorId_fkey" FOREIGN KEY ("visitorId") REFERENCES "Visitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "TrackEvent" ADD CONSTRAINT "TrackEvent_visitorId_fkey" FOREIGN KEY ("visitorId") REFERENCES "Visitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "PerformanceEntry" ADD CONSTRAINT "PerformanceEntry_visitorId_fkey" FOREIGN KEY ("visitorId") REFERENCES "Visitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ErrorEntry" ADD CONSTRAINT "ErrorEntry_visitorId_fkey" FOREIGN KEY ("visitorId") REFERENCES "Visitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
