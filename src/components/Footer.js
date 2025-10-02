import React from "react";
export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-6 py-6 text-center text-sm">
        © {new Date().getFullYear()} Muktar Bello.
      </div>
    </footer>
  );
}
