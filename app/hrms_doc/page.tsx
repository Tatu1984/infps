'use client';

import React, { useState } from 'react';

export default function HRMSDocPage() {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadWord = async () => {
    try {
      setDownloading(true);
      const response = await fetch('/api/hrms_doc/download');

      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'HRMS_Documentation.docx';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading:', error);
      alert('Failed to download document');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Download Button - Fixed at top */}
      <div className="sticky top-0 z-50 bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">HRMS System Documentation</h1>
          <button
            onClick={handleDownloadWord}
            disabled={downloading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {downloading ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Downloading...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download as Word
              </>
            )}
          </button>
        </div>
      </div>

      {/* Documentation Content */}
      <div className="max-w-7xl mx-auto">
        <style jsx global>{`
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          h1 {
            color: #2563eb;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 10px;
            font-size: 2.5em;
          }
          h2 {
            color: #1e40af;
            border-bottom: 2px solid #93c5fd;
            padding-bottom: 8px;
            margin-top: 40px;
            font-size: 2em;
          }
          h3 {
            color: #1e3a8a;
            margin-top: 30px;
            font-size: 1.5em;
          }
          h4 {
            color: #1e293b;
            margin-top: 20px;
            font-size: 1.2em;
          }
          .toc {
            background: #f1f5f9;
            padding: 20px;
            border-radius: 8px;
            margin: 30px 0;
          }
          .toc h2 {
            margin-top: 0;
            border: none;
          }
          .toc ul {
            list-style: none;
            padding-left: 0;
          }
          .toc li {
            margin: 8px 0;
          }
          .toc a {
            color: #2563eb;
            text-decoration: none;
            font-weight: 500;
          }
          .toc a:hover {
            text-decoration: underline;
          }
          code {
            background: #f1f5f9;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
          }
          pre {
            background: #1e293b;
            color: #e2e8f0;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            line-height: 1.5;
          }
          pre code {
            background: transparent;
            color: inherit;
            padding: 0;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background: white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          th {
            background: #2563eb;
            color: white;
            padding: 12px;
            text-align: left;
          }
          td {
            padding: 12px;
            border-bottom: 1px solid #e2e8f0;
          }
          tr:hover {
            background: #f8fafc;
          }
          .warning {
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
          }
          .info {
            background: #dbeafe;
            border-left: 4px solid #2563eb;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
          }
          .success {
            background: #d1fae5;
            border-left: 4px solid #10b981;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
          }
          .feature-list {
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
          }
          .feature-list li {
            margin: 8px 0;
          }
          .diagram {
            background: #f8fafc;
            border: 2px solid #cbd5e1;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            white-space: pre;
            overflow-x: auto;
          }
          .flow-box {
            border: 2px solid #2563eb;
            padding: 10px 20px;
            margin: 10px 0;
            border-radius: 6px;
            background: white;
          }
          .flow-arrow {
            text-align: center;
            color: #2563eb;
            font-size: 1.5em;
            margin: 5px 0;
          }
          a {
            color: #2563eb;
          }
          .doc-content {
            padding: 40px;
          }
        `}</style>

        <div className="doc-content" dangerouslySetInnerHTML={{ __html: `
<h1>HRMS System - Complete Documentation</h1>

<div class="toc">
    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#system-overview">1. System Overview</a></li>
        <li><a href="#technology-stack">2. Technology Stack</a></li>
        <li><a href="#architecture">3. Architecture</a></li>
        <li><a href="#database-schema">4. Database Schema</a></li>
        <li><a href="#authentication">5. Authentication & Authorization</a></li>
        <li><a href="#core-modules">6. Core Modules</a></li>
        <li><a href="#api-endpoints">7. API Endpoints</a></li>
        <li><a href="#system-flows">8. System Flows</a></li>
        <li><a href="#deployment">9. Deployment Guide</a></li>
        <li><a href="#development">10. Development Guide</a></li>
    </ul>
</div>

<h2 id="system-overview">1. System Overview</h2>

<table>
    <tr>
        <td><strong>Project Name</strong></td>
        <td>HRMS (Human Resource Management System)</td>
    </tr>
    <tr>
        <td><strong>Organization</strong></td>
        <td>Infiniti Tech Partners</td>
    </tr>
    <tr>
        <td><strong>Version</strong></td>
        <td>1.0.0</td>
    </tr>
    <tr>
        <td><strong>Platform</strong></td>
        <td>Web Application (Next.js 15.5.6)</td>
    </tr>
</table>

<h3>Purpose</h3>
<p>A comprehensive HRMS solution for managing employees, attendance, payroll, projects, sales, and company operations.</p>

<h3>Key Features</h3>
<div class="feature-list">
    <ul>
        <li>✅ Employee Management (CRUD operations, KYC documents, bank details)</li>
        <li>✅ Real-time Attendance Tracking with Activity Heartbeat Monitoring</li>
        <li>✅ Employee Status Dashboard (Active/Idle/Away/Offline)</li>
        <li>✅ Automated Payroll Processing</li>
        <li>✅ Project & Task Management</li>
        <li>✅ Sales CRM (Leads, Sales tracking)</li>
        <li>✅ Leave Management</li>
        <li>✅ HR Documents & Policies</li>
        <li>✅ Accounts & Invoicing</li>
        <li>✅ Internal Messaging System</li>
        <li>✅ Reports & Analytics</li>
        <li>✅ Integrations (Azure DevOps, Asana, Confluence)</li>
    </ul>
</div>

<h2 id="technology-stack">2. Technology Stack</h2>

<h3>Frontend</h3>
<table>
    <tr>
        <th>Technology</th>
        <th>Version/Details</th>
    </tr>
    <tr>
        <td>Framework</td>
        <td>Next.js 15.5.6 (App Router)</td>
    </tr>
    <tr>
        <td>Language</td>
        <td>TypeScript</td>
    </tr>
    <tr>
        <td>UI Library</td>
        <td>React 18</td>
    </tr>
    <tr>
        <td>Styling</td>
        <td>Tailwind CSS</td>
    </tr>
    <tr>
        <td>Components</td>
        <td>shadcn/ui (Radix UI primitives)</td>
    </tr>
    <tr>
        <td>Icons</td>
        <td>Lucide React</td>
    </tr>
    <tr>
        <td>Date Handling</td>
        <td>date-fns</td>
    </tr>
</table>

<h3>Backend</h3>
<table>
    <tr>
        <th>Technology</th>
        <th>Version/Details</th>
    </tr>
    <tr>
        <td>Runtime</td>
        <td>Node.js</td>
    </tr>
    <tr>
        <td>Framework</td>
        <td>Next.js API Routes (App Router)</td>
    </tr>
    <tr>
        <td>Authentication</td>
        <td>JWT (jose library)</td>
    </tr>
    <tr>
        <td>Password Hashing</td>
        <td>bcryptjs</td>
    </tr>
</table>

<h3>Database</h3>
<table>
    <tr>
        <th>Technology</th>
        <th>Version/Details</th>
    </tr>
    <tr>
        <td>Database</td>
        <td>PostgreSQL (Neon Cloud)</td>
    </tr>
    <tr>
        <td>ORM</td>
        <td>Prisma 6.18.0</td>
    </tr>
    <tr>
        <td>Connection</td>
        <td>Serverless (Neon)</td>
    </tr>
</table>

<h3>Deployment</h3>
<table>
    <tr>
        <th>Platform</th>
        <th>Environment</th>
    </tr>
    <tr>
        <td>Vercel</td>
        <td>Production</td>
    </tr>
</table>

<h2 id="architecture">3. Architecture</h2>

<h3>System Architecture Diagram</h3>
<div class="diagram">
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Admin UI   │  │ Employee UI  │  │  Manager UI  │          │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘          │
│         │                 │                  │                   │
└─────────┼─────────────────┼──────────────────┼───────────────────┘
          │                 │                  │
          └─────────────────┴──────────────────┘
                            │
┌───────────────────────────┼───────────────────────────────────────┐
│                   APPLICATION LAYER (Next.js)                     │
│  ┌────────────────────────┴────────────────────────┐             │
│  │         Server Components (SSR)                 │             │
│  │  • Authentication Check                         │             │
│  │  • Data Fetching                                │             │
│  │  • Role-based Access Control                    │             │
│  └────────────────────────┬────────────────────────┘             │
│                           │                                       │
│  ┌────────────────────────┴────────────────────────┐             │
│  │         Client Components                       │             │
│  │  • Interactive UI                               │             │
│  │  • Activity Heartbeat Tracker                   │             │
│  │  • Real-time Status Updates                     │             │
│  └────────────────────────┬────────────────────────┘             │
│                           │                                       │
│  ┌────────────────────────┴────────────────────────┐             │
│  │         API Routes (REST)                       │             │
│  │  • /api/attendance                              │             │
│  │  • /api/attendance/heartbeat                    │             │
│  │  • /api/employee-status                         │             │
│  │  • /api/employees                               │             │
│  │  • /api/payroll                                 │             │
│  │  • /api/projects                                │             │
│  │  • /api/sales                                   │             │
│  │  • /api/auth                                    │             │
│  └────────────────────────┬────────────────────────┘             │
└───────────────────────────┼───────────────────────────────────────┘
                            │
┌───────────────────────────┼───────────────────────────────────────┐
│                   DATA LAYER (Prisma ORM)                         │
│  ┌────────────────────────┴────────────────────────┐             │
│  │         Prisma Client                           │             │
│  │  • Type-safe Database Queries                   │             │
│  │  • Schema Migrations                            │             │
│  │  • Connection Pooling                           │             │
│  └────────────────────────┬────────────────────────┘             │
└───────────────────────────┼───────────────────────────────────────┘
                            │
┌───────────────────────────┼───────────────────────────────────────┐
│                   DATABASE LAYER (PostgreSQL)                     │
│  ┌────────────────────────┴────────────────────────┐             │
│  │         Neon PostgreSQL Database                │             │
│  │  • 30+ Tables                                   │             │
│  │  • Relational Data                              │             │
│  │  • Indexes & Constraints                        │             │
│  └─────────────────────────────────────────────────┘             │
└───────────────────────────────────────────────────────────────────┘
</div>

<h3>Folder Structure</h3>
<pre><code>hrms1/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
├── src/
│   ├── app/
│   │   ├── (admin)/admin/     # Admin routes (protected)
│   │   ├── (employee)/employee/ # Employee routes (protected)
│   │   ├── (manager)/manager/ # Manager routes (protected)
│   │   ├── api/               # API routes
│   │   │   ├── attendance/
│   │   │   │   ├── route.ts   # Main attendance API
│   │   │   │   └── heartbeat/route.ts # Heartbeat tracking
│   │   │   ├── employee-status/route.ts
│   │   │   ├── employees/route.ts
│   │   │   ├── payroll/route.ts
│   │   │   ├── auth/
│   │   │   └── ...
│   │   ├── login/
│   │   └── layout.tsx
│   ├── components/
│   │   ├── admin/             # Admin components
│   │   ├── employee/          # Employee components
│   │   │   ├── ActivityHeartbeat.tsx
│   │   │   └── AttendanceControls.tsx
│   │   ├── shared/            # Shared components
│   │   │   ├── sidebar.tsx
│   │   │   └── navbar.tsx
│   │   └── ui/                # shadcn UI components
│   ├── lib/
│   │   ├── auth.ts            # Authentication utilities
│   │   ├── db.ts              # Prisma client
│   │   └── utils.ts           # Helper functions
│   └── types/
│       └── index.ts           # TypeScript types
├── public/                    # Static assets
├── .env                       # Environment variables
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── package.json               # Dependencies
</code></pre>

<h2 id="database-schema">4. Database Schema</h2>

<h3>Core Tables</h3>

<h4>User</h4>
<table>
    <tr>
        <th>Purpose</th>
        <td colspan="3">Authentication and user accounts</td>
    </tr>
    <tr>
        <th>Key Fields</th>
        <td>id, email, username, password, role, employeeId</td>
    </tr>
    <tr>
        <th>Relations</th>
        <td>One-to-One with Employee</td>
    </tr>
</table>

<h4>Employee</h4>
<table>
    <tr>
        <th>Purpose</th>
        <td>Employee master data</td>
    </tr>
    <tr>
        <th>Key Fields</th>
        <td>id, employeeId, name, email, salary, department, designation</td>
    </tr>
    <tr>
        <th>Relations</th>
        <td>
            • One-to-One with User<br>
            • One-to-Many with Attendance, Leave, Payroll, Tasks
        </td>
    </tr>
</table>

<h4>Attendance</h4>
<table>
    <tr>
        <th>Purpose</th>
        <td>Daily attendance tracking</td>
    </tr>
    <tr>
        <th>Key Fields</th>
        <td>id, employeeId, date, punchIn, punchOut, totalHours, breakDuration, idleTime, status</td>
    </tr>
    <tr>
        <th>Relations</th>
        <td>
            • Many-to-One with Employee<br>
            • One-to-Many with ActivityLog
        </td>
    </tr>
</table>

<h4>ActivityLog</h4>
<table>
    <tr>
        <th>Purpose</th>
        <td>Track employee activity heartbeats</td>
    </tr>
    <tr>
        <th>Key Fields</th>
        <td>id, attendanceId, timestamp, active</td>
    </tr>
    <tr>
        <th>Relations</th>
        <td>Many-to-One with Attendance</td>
    </tr>
</table>

<h4>Payroll</h4>
<table>
    <tr>
        <th>Purpose</th>
        <td>Monthly salary processing</td>
    </tr>
    <tr>
        <th>Key Fields</th>
        <td>id, employeeId, month, year, basicSalary, netSalary, totalDeductions, status</td>
    </tr>
</table>

<h4>Project</h4>
<table>
    <tr>
        <th>Purpose</th>
        <td>Project management</td>
    </tr>
    <tr>
        <th>Key Fields</th>
        <td>id, projectId, name, status, budget, milestones</td>
    </tr>
</table>

<h4>Task</h4>
<table>
    <tr>
        <th>Purpose</th>
        <td>Task assignment and tracking</td>
    </tr>
    <tr>
        <th>Key Fields</th>
        <td>id, projectId, assignedTo, title, status, priority</td>
    </tr>
</table>

<h4>Lead & Sale</h4>
<table>
    <tr>
        <th>Purpose</th>
        <td>CRM and sales tracking</td>
    </tr>
    <tr>
        <th>Key Fields</th>
        <td>Lead number, company details, status, conversion tracking</td>
    </tr>
</table>

<h4>Leave</h4>
<table>
    <tr>
        <th>Purpose</th>
        <td>Leave management</td>
    </tr>
    <tr>
        <th>Key Fields</th>
        <td>id, employeeId, leaveType, startDate, endDate, status</td>
    </tr>
</table>

<div class="info">
    <strong>Complete Schema Reference:</strong> See <code>prisma/schema.prisma</code> for full schema with 30+ tables.
</div>

<h2 id="authentication">5. Authentication & Authorization</h2>

<h3>Authentication Flow</h3>

<div class="flow-box">
    <strong>Step 1:</strong> User enters credentials
</div>
<div class="flow-arrow">↓</div>
<div class="flow-box">
    <strong>Step 2:</strong> POST /api/auth/login
</div>
<div class="flow-arrow">↓</div>
<div class="flow-box">
    <strong>Step 3:</strong> Validate username/password with database<br>
    Check User.password (bcrypt hash)
</div>
<div class="flow-arrow">↓</div>
<div class="flow-box">
    <strong>Step 4:</strong> Generate JWT token with payload:<br>
    { userId, email, role, employeeId, name }
</div>
<div class="flow-arrow">↓</div>
<div class="flow-box">
    <strong>Step 5:</strong> Set HTTP-only cookie: "session"<br>
    • Expires: 7 days<br>
    • Secure: true (production)<br>
    • SameSite: lax
</div>
<div class="flow-arrow">↓</div>
<div class="flow-box">
    <strong>Step 6:</strong> Redirect based on role:<br>
    • ADMIN → /admin/dashboard<br>
    • EMPLOYEE → /employee/dashboard<br>
    • MANAGER → /manager/dashboard
</div>

<h3>Role-Based Access Control (RBAC)</h3>
<table>
    <tr>
        <th>Role</th>
        <th>Access Level</th>
    </tr>
    <tr>
        <td>ADMIN</td>
        <td>Full system access (all modules)</td>
    </tr>
    <tr>
        <td>MANAGER</td>
        <td>Team management, attendance editing, reports</td>
    </tr>
    <tr>
        <td>EMPLOYEE</td>
        <td>Personal dashboard, attendance, tasks, leaves</td>
    </tr>
</table>

<div class="page-break"></div>

<h2>Support & Contact</h2>

<table>
    <tr>
        <th>Property</th>
        <th>Value</th>
    </tr>
    <tr>
        <td>Developer</td>
        <td>Sudipto Mitra</td>
    </tr>
    <tr>
        <td>Organization</td>
        <td>Infiniti Tech Partners</td>
    </tr>
    <tr>
        <td>Project Start</td>
        <td>November 2024</td>
    </tr>
    <tr>
        <td>Current Version</td>
        <td>1.0.0</td>
    </tr>
</table>

<hr>

<p style="text-align: center; margin-top: 50px; color: #64748b;">
    <strong>End of Documentation</strong><br>
    Generated: November 2024<br>
    HRMS System v1.0.0 - Infiniti Tech Partners
</p>
        ` }} />
      </div>
    </div>
  );
}
