import { Header } from "@/components/Header";
import { ServiceForm } from "@/components/ServiceForm";
import { AIChatbot } from "@/components/AIChatbot";
import { NotificationsPanel } from "@/components/NotificationsPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-[var(--gradient-hero)]">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Streamline Your Government Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of e-Governance with AI-powered automation. Submit applications,
            get instant support, and track your certificates in real-time.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Service Form */}
          <div className="lg:col-span-1">
            <ServiceForm />
          </div>

          {/* AI Chatbot */}
          <div className="lg:col-span-1">
            <AIChatbot />
          </div>

          {/* Notifications */}
          <div className="lg:col-span-1">
            <NotificationsPanel />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-card shadow-[var(--shadow-soft)]">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Fast Processing</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered automation reduces processing time by up to 70%
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card shadow-[var(--shadow-soft)]">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Secure & Verified</h3>
            <p className="text-sm text-muted-foreground">
              Bank-level encryption ensures your documents are always protected
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card shadow-[var(--shadow-soft)]">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-accent-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
            <p className="text-sm text-muted-foreground">
              AI assistant available round the clock to answer your queries
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t mt-16 py-6 bg-card">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 SmartGovAI. Empowering citizens through AI-driven governance.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
