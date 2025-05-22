
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Facebook } from "lucide-react";

export default function MamaWolfBakery() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/mwkgyllg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert("Thank you! Your order has been submitted.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-700 to-cyan-700 text-white p-6">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold text-yellow-300 mb-2">Mama Wolf Bakery</h1>
        <p className="text-lg">A cozy home microbakery nestled in Northern Nevada</p>
      </header>
      {/* Content omitted here for brevity */}
    </div>
  );
}
