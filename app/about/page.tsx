import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-center text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          Learn about our firm's history, values, and commitment to providing
          exceptional legal services.
        </p>
      </div>
    </div>
  );
}
