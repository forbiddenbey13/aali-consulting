"use client";

import React from "react";
import Link from "next/link";

type Item = {
  id: string;
  kind: "folder" | "pdf" | "audio";
  name: string;
  modifiedAt: string; // display-ready
  access: string;
  starred?: boolean;
};

const items: Item[] = [
  {
    id: "1",
    kind: "folder",
    name: "Goa memories",
    modifiedAt: "26/11/2019 8:02 pm",
    access: "Only you",
  },
  {
    id: "2",
    kind: "folder",
    name: "Income tax filing (AY 2021)",
    modifiedAt: "26/11/2019 8:02 pm",
    access: "Only you",
  },
  {
    id: "3",
    kind: "audio",
    name: "21 Savage Drake - Middle of the ocean.mp3",
    modifiedAt: "26/11/2019 8:02 pm",
    access: "Only you",
  },
  {
    id: "4",
    kind: "audio",
    name: "Kid Cudi - Soundtrack to my life.mp3",
    modifiedAt: "26/11/2019 8:02 pm",
    access: "Only you",
  },
  {
    id: "5",
    kind: "audio",
    name: "Audio recording #4151.mp3",
    modifiedAt: "26/11/2019 8:02 pm",
    access: "Only you",
  },
  {
    id: "6",
    kind: "pdf",
    name: "Invoice for web design.pdf",
    modifiedAt: "26/11/2019 8:02 pm",
    access: "Only you",
  },
];

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="grid h-8 w-8 place-items-center rounded-lg bg-sky-600 text-white">
      <span className="font-bold">A</span>
    </div>
    <span className="font-semibold tracking-tight">AALIConsulting</span>
  </div>
);

const FileIcon: React.FC<{ kind: Item["kind"]; className?: string }> = ({ kind, className }) => {
  if (kind === "folder")
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
      </svg>
    );
  if (kind === "pdf")
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <text x="9" y="16" fontSize="6" fill="currentColor">PDF</text>
      </svg>
    );
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 19V6l12 6-12 7z" />
      <rect x="3" y="5" width="3" height="14" />
    </svg>
  );
};

const ToolbarButton: React.FC<{ label: string; icon?: React.ReactNode; caret?: boolean }>=({ label, icon, caret }) => (
  <button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm transition hover:bg-slate-50">
    {icon}
    <span>{label}</span>
    {caret && (
      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"/></svg>
    )}
  </button>
);

export default function DocumentsDashboard() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link href="#" className="text-slate-600 hover:text-slate-900">Documents</Link>
            <Link href="#" className="text-slate-600 hover:text-slate-900">Dashboards</Link>
            <Link href="#" className="text-slate-600 hover:text-slate-900">Financial Trends</Link>
            <Link href="#" className="text-slate-600 hover:text-slate-900">Messages</Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6 py-8">
        {/* Sidebar */}
        <aside className="col-span-12 hidden rounded-lg border bg-slate-50 p-4 md:col-span-3 md:block lg:col-span-2">
          <nav className="text-sm text-slate-700">
            <ul className="space-y-1">
              <li><Link href="#" className="flex items-center rounded-md px-2 py-2 hover:bg-white">Home</Link></li>
              <li><Link href="#" className="flex items-center rounded-md px-2 py-2 hover:bg-white">All files</Link></li>
              <li><Link href="#" className="flex items-center rounded-md px-2 py-2 hover:bg-white">Recents</Link></li>
              <li><Link href="#" className="flex items-center rounded-md px-2 py-2 hover:bg-white">Starred</Link></li>
              <li><Link href="#" className="flex items-center rounded-md px-2 py-2 hover:bg-white">Shared</Link></li>
            </ul>
          </nav>
        </aside>

        {/* Main */}
        <section className="col-span-12 md:col-span-9 lg:col-span-10">
          <div className="pb-6">
            <h1 className="text-3xl font-semibold tracking-tight">Welcome back, Muhammad.</h1>
            <p className="mt-1 text-slate-500">Ready to upload your tax documents for 2024?</p>
          </div>

          {/* Toolbar */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <ToolbarButton label="Upload" caret icon={<svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v12"/><path d="M7 8l5-5 5 5"/><path d="M5 21h14"/></svg>} />
            <ToolbarButton label="Create" caret icon={<svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14"/><path d="M5 12h14"/></svg>} />
            <ToolbarButton label="Organize" caret icon={<svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h18M3 12h18M3 17h18"/></svg>} />
            <ToolbarButton label="More" caret icon={<svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>} />
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-lg border">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="w-2/5 px-4 py-3 text-left font-medium text-slate-600">Name <span className="inline-block align-middle text-slate-400">↑</span></th>
                  <th className="w-1/5 px-4 py-3 text-left font-medium text-slate-600">Modified</th>
                  <th className="w-1/5 px-4 py-3 text-left font-medium text-slate-600">Who can access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className={`grid h-6 w-6 place-items-center text-slate-600 ${item.kind === "folder" ? "" : ""}`}>
                          <FileIcon kind={item.kind} className="h-5 w-5" />
                        </div>
                        <span className="truncate font-medium text-slate-800">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{item.modifiedAt}</td>
                    <td className="px-4 py-3 text-slate-600">{item.access}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-slate-500">Privacy &amp; legal</div>
      </footer>
    </div>
  );
}
