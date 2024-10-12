"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AppointmentForm() {
  const [doctor, setDoctor] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [copyMessage, setCopyMessage] = useState(false); // State to track if the message is copied

  // List of doctors with their specializations
  const doctors = [
    { name: "Dr. Mohammad Rafiq Yassin", specializations: ["Cardiology", "Internal Medicine"] },
    { name: "Dr. Abeer Khan", specializations: ["Dental"] },
  ];

  // List of available time slots
  const allTimes = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "05:00 PM",
    "06:00 PM",
  ];

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the WhatsApp message
    const whatsappMessage = `New Appointment:\nDoctor: ${doctor}\nSpecialization: ${specialization}\nDate: ${date}\nTime: ${time}\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;

    // Copy the message to clipboard
    try {
        await navigator.clipboard.writeText(whatsappMessage);
        setCopyMessage(true); // Show copy message to the user
    } catch (err) {
        console.error("Failed to copy: ", err);
    }

    // Add the selected time slot to booked slots
    setBookedSlots((prev) => [...prev, time]);

    // Send the message via WhatsApp API
    try {
        const response = await fetch('https://api.whatsapp.com/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Uncomment if using OAuth
            },
            body: JSON.stringify({
                to: '971585855829', // Your WhatsApp number
                text: whatsappMessage,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        // Handle successful message sending if necessary
        console.log('Message sent successfully');
    } catch (error) {
        console.error('Error sending message:', error);
    }

    // Reset form fields after submission
    handleClear();
};


  // Clear form fields
  const handleClear = () => {
    setDoctor("");
    setSpecialization("");
    setDate("");
    setTime("");
    setName("");
    setPhone("");
    setMessage("");
    setCopyMessage(false); // Reset copy message state
  };

  // Filter out booked time slots
  const availableTimes = allTimes.filter((t) => !bookedSlots.includes(t));

  // Get specializations of the selected doctor
  const selectedDoctor = doctors.find(doc => doc.name === doctor);
  const availableSpecializations = selectedDoctor ? selectedDoctor.specializations : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">
              Extra Care Medical Center
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Book Your Appointment
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Doctor Selection */}
              <div className="space-y-2">
                <label htmlFor="doctor" className="text-sm font-medium text-gray-700">
                  Doctor <span className="text-red-500">*</span>
                </label>
                <Select value={doctor} onValueChange={setDoctor} required>
                  <SelectTrigger id="doctor">
                    <SelectValue placeholder="Select Doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    {doctors.map((doc) => (
                      <SelectItem key={doc.name} value={doc.name}>
                        {doc.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Specialization Selection */}
              {doctor && availableSpecializations.length > 0 && (
                <div className="space-y-2">
                  <label htmlFor="specialization" className="text-sm font-medium text-gray-700">
                    Specialization <span className="text-red-500">*</span>
                  </label>
                  <Select value={specialization} onValueChange={setSpecialization} required>
                    <SelectTrigger id="specialization">
                      <SelectValue placeholder="Select Specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableSpecializations.map((spec) => (
                        <SelectItem key={spec} value={spec}>
                          {spec}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Date Input */}
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium text-gray-700">
                  Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="pl-10"
                    required
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>

              {/* Time Selection */}
              <div className="space-y-2">
                <label htmlFor="time" className="text-sm font-medium text-gray-700">
                  Time <span className="text-red-500">*</span>
                </label>
                <Select value={time} onValueChange={setTime} required>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Select Time" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTimes.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* User Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Phone Number Input */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Additional Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Additional Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Any additional information..."
                  rows={4}
                />
              </div>

              {/* Form Submission Buttons */}
              <div className="flex justify-end space-x-4">
                <Button variant="outline" type="reset" onClick={handleClear}>
                  Clear
                </Button>
                <Button type="submit">Book Appointment</Button>
              </div>
            </form>

            {/* Copy Confirmation Message */}
            {copyMessage && (
              <div className="mt-4 text-green-600">
                The appointment details have been copied to your clipboard. Please paste the text into WhatsApp.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
