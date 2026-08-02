import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Approval workflow chain",
  code: `class Approver:
    def __init__(self):
        self._next = None

    def set_next(self, handler):
        self._next = handler
        return handler

    def handle(self, request):
        return self._next.handle(request) if self._next else None

class ManagerApproval(Approver):
    def handle(self, request):
        if request["amount"] <= 500:
            return "Manager approved the request."
        return super().handle(request)

class FinanceApproval(Approver):
    def handle(self, request):
        if request["amount"] <= 5000:
            return "Finance approved the request."
        return super().handle(request)

class ExecutiveApproval(Approver):
    def handle(self, request):
        return "Executive approved the request."

chain = ManagerApproval()
chain.set_next(FinanceApproval()).set_next(ExecutiveApproval())`,
  explanation:
    "An approval chain keeps each approval tier focused on its own policy threshold.",
};