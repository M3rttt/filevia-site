"use client";

import { useMemo, useRef, useState } from "react";
import { CheckCircle2, File, FileArchive, FileImage, FileOutput, FilePlus2, FileText, LoaderCircle, Scissors, UploadCloud, X } from "lucide-react";

import type { ToolDefinition } from "@/lib/site-data";

type ToolWorkspaceProps = {
  tool: ToolDefinition;
};

type Status = "idle" | "processing" | "done";

export function ToolWorkspace({ tool }: ToolWorkspaceProps) {
  const iconMap = {
    merge: FilePlus2,
    split: Scissors,
    compress: FileArchive,
    pdfToWord: FileText,
    wordToPdf: FileOutput,
    imageToPdf: FileImage
  };
  const Icon = iconMap[tool.iconName];
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const previewLabel = useMemo(() => {
    if (status === "processing") {
      return `Running ${tool.shortTitle.toLowerCase()} preview...`;
    }

    if (status === "done") {
      return `${tool.output} preview ready`;
    }

    return "Preview will appear here";
  }, [status, tool.output, tool.shortTitle]);

  const assignFiles = (incoming: FileList | null) => {
    if (!incoming?.length) {
      return;
    }

    setFiles(Array.from(incoming));
    setStatus("idle");
  };

  const triggerFakeRun = () => {
    if (!files.length) {
      inputRef.current?.click();
      return;
    }

    setStatus("processing");
    window.setTimeout(() => {
      setStatus("done");
    }, 1200);
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <div className="glass-panel p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Workspace</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">{tool.title}</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
              Drop a file to simulate the full Filevia flow. The UI behaves like a live tool while staying frontend-only.
            </p>
          </div>
          <div className={`rounded-2xl bg-gradient-to-br ${tool.accent} p-3 text-white`}>
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <button
          type="button"
          className={`mt-6 flex min-h-[220px] w-full flex-col items-center justify-center rounded-[28px] border border-dashed px-6 py-8 text-center transition ${
            isDragging ? "border-accent bg-accent/10" : "border-white/15 bg-white/[0.03] hover:border-accent/40 hover:bg-white/[0.05]"
          }`}
          onClick={() => inputRef.current?.click()}
          onDragOver={(event) => {
            event.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(event) => {
            event.preventDefault();
            setIsDragging(false);
            assignFiles(event.dataTransfer.files);
          }}
        >
          <UploadCloud className="h-10 w-10 text-accent" />
          <p className="mt-4 text-lg font-semibold text-white">Drag and drop your file</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
            Accepts {tool.accepts}. Click to browse from your device and test the workflow.
          </p>
        </button>

        <input
          ref={inputRef}
          type="file"
          multiple={tool.slug === "merge" || tool.slug === "image-to-pdf"}
          accept={tool.accepts}
          className="hidden"
          onChange={(event) => assignFiles(event.target.files)}
        />

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" className="primary-button" onClick={triggerFakeRun}>
            {status === "processing" ? "Processing..." : tool.actionLabel}
          </button>
          <button
            type="button"
            className="secondary-button"
            onClick={() => {
              setFiles([]);
              setStatus("idle");
            }}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="glass-panel p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accentWarm">Preview</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{previewLabel}</h3>
          </div>
          {status === "done" ? <CheckCircle2 className="h-6 w-6 text-accent" /> : null}
        </div>

        <div className="mt-6 rounded-[28px] border border-white/10 bg-[#09131D] p-5">
          <div className="flex min-h-[210px] flex-col justify-between rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] p-5">
            <div>
              <div className="flex items-center gap-3">
                {status === "processing" ? (
                  <LoaderCircle className="h-5 w-5 animate-spin text-accent" />
                ) : (
                  <File className="h-5 w-5 text-accent" />
                )}
                <p className="text-sm font-semibold text-white">
                  {files.length ? `${files.length} file${files.length > 1 ? "s" : ""} selected` : "No files selected yet"}
                </p>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">
                {files.length
                  ? "This preview area stands in for the final processed result and keeps the page feeling product-ready."
                  : "Choose a file to see a realistic preview state, action summary, and output placeholder."}
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {files.length ? (
                files.map((file) => (
                  <div key={`${file.name}-${file.size}`} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-white">{file.name}</p>
                      <p className="mt-1 text-xs text-muted">{Math.max(1, Math.round(file.size / 1024))} KB</p>
                    </div>
                    <button
                      type="button"
                      className="rounded-full bg-white/5 p-2 text-muted transition hover:bg-white/10 hover:text-white"
                      onClick={() => {
                        setFiles((current) => current.filter((entry) => entry.name !== file.name || entry.size !== file.size));
                        setStatus("idle");
                      }}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-white/15 px-4 py-8 text-center text-sm text-muted">
                  Output preview placeholder
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {tool.stats.map((stat) => (
            <div key={stat} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-sm font-medium text-white">{stat}</p>
              <p className="mt-2 text-xs leading-5 text-muted">Part of the Filevia workflow preview for this tool page.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
