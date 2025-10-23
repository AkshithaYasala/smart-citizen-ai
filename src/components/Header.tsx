import { Shield } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">SmartGovAI</h1>
            <p className="text-sm text-primary-foreground/90">AI-Powered e-Governance Automation</p>
          </div>
        </div>
      </div>
    </header>
  );
};
