'use client';
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
    return (
        <form
            className="flex-1 bg-muted rounded-lg p-8 shadow-md flex flex-col gap-4"
            onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const email = (form.elements[0] as HTMLInputElement).value;
                const subject = (form.elements[1] as HTMLInputElement).value;
                const message = (form.elements[3] as HTMLTextAreaElement).value;
                try {
                    const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email, subject, message }),
                    });
                    if (res.ok) {
                        alert("Message sent successfully!");
                        form.reset();
                    } else {
                        alert("Failed to send message.");
                    }
                } catch (err) {
                    alert("Failed to send message.");
                }
            }}
        >
            <Input type="email" placeholder="Email" required />
            <Input type="text" placeholder="Subject" required />
            <Input type="file" />
            <textarea className="rounded-md border border-border p-2 min-h-[100px]" placeholder="Type your message" required />
            <Button type="submit" className="mt-2 bg-purple-500 hover:bg-purple-600">Send Message</Button>
        </form>
    );
} 