# SmartGovAI - AI-Powered e-Governance Automation

A modern, full-stack web application that revolutionizes government citizen services through AI automation. Built with React, Cloud, and AI-powered chatbot support.

## ✨ Features

### Core Functionality
- **Service Application Form**: Citizens can apply for:
  - Birth Certificate
  - Domicile Certificate
  - Income Certificate
- **Document Upload**: Secure file upload for supporting documents
- **AI Chatbot**: 24/7 intelligent assistant powered by Lovable AI (Google Gemini)
- **Real-time Tracking**: Live application status updates
- **Email Notifications**: Automatic confirmation emails

### Technical Features
- 🎨 Modern, responsive UI with Tailwind CSS
- 🔒 Secure backend with Row Level Security (RLS)
- ☁️ Cloud storage for document management
- 🤖 AI-powered query resolution
- 📱 Mobile-first responsive design
- ⚡ Real-time updates with Supabase subscriptions

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful component library
- **Vite** - Lightning-fast build tool

### Backend (Lovable Cloud)
- **Lovable Cloud** - Fully managed backend
- **PostgreSQL** - Robust database
- **Edge Functions** - Serverless API endpoints
- **Cloud Storage** - Document management
- **Real-time Subscriptions** - Live data updates

### AI Integration
- **Lovable AI Gateway** - Pre-configured AI access
- **Google Gemini 2.5 Flash** - Fast, intelligent responses
- No API keys required - fully integrated

## 📋 Prerequisites

- Node.js 18+ and npm
- Lovable account (for deployment)

## 🏗️ Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd smartgovai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:8080`

## 🗄️ Database Schema

### Applications Table
```sql
- id (UUID, Primary Key)
- name (TEXT, Required)
- email (TEXT, Required)
- service_type (TEXT, Required) - Birth/Domicile/Income Certificate
- document_url (TEXT, Optional)
- status (TEXT) - Pending/Under Review/Approved/Rejected
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### Storage Buckets
- **documents**: Public bucket for supporting documents

## 🔐 Security

- **Row Level Security (RLS)**: All tables protected
- **Public access policies**: Configured for citizen self-service
- **Secure file uploads**: Validated and scoped storage access
- **CORS enabled**: Secure cross-origin requests
  
## 📱 Usage

### For Citizens

1. **Apply for Service**
   - Fill in your name and email
   - Select the certificate type
   - Upload supporting document (optional)
   - Submit application

2. **Get AI Assistance**
   - Ask questions about required documents
   - Get information on processing times
   - Learn about eligibility criteria

3. **Track Applications**
   - View all submitted applications
   - Check real-time status updates
   - Receive email confirmations




Perfect for showcasing full-stack development skills!

---

**Built with Lovable** - Where ideas become apps in minutes
