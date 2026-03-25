"use client";

import { useState } from "react";
import PageNav from "@/components/sip/PageNav";

type FormData = {
  schoolName: string;
  county: string;
  subCounty: string;
  priority: string;
  activity: string;
  budget: string;
  outcome: string;
};

const initialForm: FormData = {
  schoolName: "",
  county: "",
  subCounty: "",
  priority: "",
  activity: "",
  budget: "",
  outcome: "",
};

export default function DemoPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [refNum] = useState(() => "SIP-2025-00" + Math.floor(Math.random() * 900 + 100));

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setForm(initialForm);
    setStep(1);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-blue-50 px-8 md:px-16 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-blue-100 text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✅</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">SIP Successfully Submitted!</h2>
            <p className="text-gray-500 mb-6 text-sm">Your School Improvement Plan has been received.</p>

            <div className="bg-blue-50 rounded-xl p-5 mb-6 text-left space-y-2">
              {[
                ["Reference Number", refNum],
                ["School", form.schoolName || "Demo School"],
                ["Submitted", new Date().toLocaleString()],
                ["Status", "Submitted – Awaiting SCDE Review"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between text-sm">
                  <span className="text-gray-500">{label}:</span>
                  <span className={`font-medium ${label === "Status" ? "text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-full text-xs" : "text-gray-800"}`}>{value}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-4 text-left mb-6 text-sm text-gray-600 space-y-1">
              <p className="font-semibold text-gray-700 mb-2">System Actions Triggered:</p>
              <p>⚡ Unique reference number generated</p>
              <p>⚡ Submission timestamp recorded</p>
              <p>⚡ SCDE notification sent</p>
              <p>⚡ SIP forwarded to Sub-County Director</p>
            </div>

            <button onClick={handleReset} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors text-sm">
              Start New Demo
            </button>
          </div>
          <PageNav current="/demo" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 px-8 md:px-16 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Interactive Demo</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">SIP Submission Form</h1>
          <p className="text-gray-500 mt-3 text-sm">
            Experience how a Head of Institution fills out and submits the School Improvement Plan.
          </p>
        </div>

        {/* Step progress */}
        <div className="flex items-center gap-0 mb-8">
          {["School Profile", "Improvement Plan", "Review & Submit"].map((label, i) => (
            <div key={i} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step > i + 1 ? "bg-green-500 text-white" : step === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"}`}>
                  {step > i + 1 ? "✓" : i + 1}
                </div>
                <span className={`text-xs mt-1 font-medium text-center ${step === i + 1 ? "text-blue-600" : "text-gray-400"}`}>{label}</span>
              </div>
              {i < 2 && <div className={`w-full h-0.5 mb-4 ${step > i + 1 ? "bg-green-400" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 mb-8">
          {step === 1 && (
            <div className="space-y-5">
              <h3 className="font-bold text-gray-800 text-lg mb-4">School Profile Information</h3>
              {(
                [
                  { field: "schoolName", label: "School Name", placeholder: "e.g. Nairobi Primary School" },
                  { field: "county", label: "County", placeholder: "e.g. Nairobi" },
                  { field: "subCounty", label: "Sub-County", placeholder: "e.g. Westlands" },
                ] as { field: keyof FormData; label: string; placeholder: string }[]
              ).map(({ field, label, placeholder }) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  <input
                    type="text"
                    value={form[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    placeholder={placeholder}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                </div>
              ))}
              <button onClick={() => setStep(2)} className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                Continue →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h3 className="font-bold text-gray-800 text-lg mb-4">Improvement Plan Details</h3>
              {(
                [
                  { field: "priority", label: "Improvement Priority", placeholder: "e.g. Improve literacy rates in Grade 4" },
                  { field: "activity", label: "Planned Activity", placeholder: "e.g. Purchase reading books and train teachers" },
                  { field: "outcome", label: "Expected Outcome", placeholder: "e.g. 80% of Grade 4 pupils reading at grade level" },
                ] as { field: keyof FormData; label: string; placeholder: string }[]
              ).map(({ field, label, placeholder }) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  <input
                    type="text"
                    value={form[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    placeholder={placeholder}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Budget (KES)</label>
                <input
                  type="number"
                  value={form.budget}
                  onChange={(e) => handleChange("budget", e.target.value)}
                  placeholder="e.g. 150000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors">← Back</button>
                <button onClick={() => setStep(3)} className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">Review →</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <h3 className="font-bold text-gray-800 text-lg mb-4">Review &amp; Submit</h3>
              <div className="bg-gray-50 rounded-xl p-5 space-y-3">
                {[
                  { label: "School", value: form.schoolName || "—" },
                  { label: "County", value: form.county || "—" },
                  { label: "Sub-County", value: form.subCounty || "—" },
                  { label: "Priority", value: form.priority || "—" },
                  { label: "Activity", value: form.activity || "—" },
                  { label: "Budget", value: form.budget ? `KES ${Number(form.budget).toLocaleString()}` : "—" },
                  { label: "Outcome", value: form.outcome || "—" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-gray-500">{label}:</span>
                    <span className="font-medium text-gray-800 text-right max-w-xs">{value}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-sm text-blue-700 flex items-start gap-2">
                <span className="flex-shrink-0">ℹ️</span>
                <span>By submitting, you confirm all information is accurate and BOM approval documents have been uploaded.</span>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(2)} className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors">← Back</button>
                <button onClick={() => setSubmitted(true)} className="flex-1 bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition-colors">Submit SIP ✓</button>
              </div>
            </div>
          )}
        </div>

        <PageNav current="/demo" />
      </div>
    </div>
  );
}
