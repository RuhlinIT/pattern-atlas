import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const cobol = {
  language: "cobol",
  code: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. TASK-ADAPTER.

       DATA DIVISION.
       WORKING-STORAGE SECTION.

       01 EXTERNAL-TASK.
          05 EXT-ID       PIC X(10).
          05 EXT-DESC     PIC X(40).
          05 EXT-COMPLETE PIC 9.

       01 TASK.
          05 TASK-ID          PIC X(10).
          05 TASK-DESCRIPTION PIC X(40).
          05 TASK-COMPLETED   PIC X.

       01 TASK-COUNT PIC 9 VALUE 2.
       01 TASK-INDEX PIC 9 VALUE 1.

       PROCEDURE DIVISION.
           PERFORM LOAD-FIRST-TASK
           PERFORM ADAPT-TASK
           PERFORM DISPLAY-TASK

           PERFORM LOAD-SECOND-TASK
           PERFORM ADAPT-TASK
           PERFORM DISPLAY-TASK

           STOP RUN.

       LOAD-FIRST-TASK.
           MOVE "1" TO EXT-ID
           MOVE "Finish report" TO EXT-DESC
           MOVE 1 TO EXT-COMPLETE.

       LOAD-SECOND-TASK.
           MOVE "2" TO EXT-ID
           MOVE "Call client" TO EXT-DESC
           MOVE 0 TO EXT-COMPLETE.

       ADAPT-TASK.
           MOVE EXT-ID TO TASK-ID
           MOVE EXT-DESC TO TASK-DESCRIPTION

           IF EXT-COMPLETE = 1
               MOVE "Y" TO TASK-COMPLETED
           ELSE
               MOVE "N" TO TASK-COMPLETED
           END-IF.

       DISPLAY-TASK.
           DISPLAY "ID: " TASK-ID
           DISPLAY "DESCRIPTION: " TASK-DESCRIPTION

           IF TASK-COMPLETED = "Y"
               DISPLAY "STATUS: COMPLETED"
           ELSE
               DISPLAY "STATUS: PENDING"
           END-IF.
`,
} satisfies PatternLanguageExample;