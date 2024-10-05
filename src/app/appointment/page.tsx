"use client";

import { useState, useEffect } from "react";
import { Calendar, User, Phone, MessageSquare } from "lucide-react";
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
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [availableDoctors, setAvailableDoctors] = useState<string[]>([]);
  const [bookedSlots, setBookedSlots] = useState<Record<string, string[]>>({
    cardiology: [],
    dental: [],
    "internal medicine": [],
  });

  const departments = ["Cardiology", "Dental", "Internal Medicine"];
  const doctorsByDepartment = {
    cardiology: ["Dr. Mohammad Rafiq Yassin"],
    dental: ["Dr. Abeer Khan"],
    "internal medicine": ["Dr. Mohammad Rafiq Yassin"],
  };
  const allTimes = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  // Effect to update available doctors when the department changes
  useEffect(() => {
    if (department) {
      setAvailableDoctors(
        doctorsByDepartment[department as keyof typeof doctorsByDepartment] || []
      );
      setDoctor(""); // Reset selected doctor when department changes
      setTime(""); // Reset selected time when department changes
    } else {
      setAvailableDoctors([]);
    }
  }, [department]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add the selected time slot to booked slots for the specific department
    setBookedSlots((prevBookedSlots) => ({
      ...prevBookedSlots,
      [department]: [
        ...prevBookedSlots[department as keyof typeof prevBookedSlots],
        time,
      ],
    }));

    // Prepare the WhatsApp message
    const whatsappMessage = `New Appointment:\nDepartment: ${department}\nDoctor: ${doctor}\nDate: ${date}\nTime: ${time}\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/971585855829?text=${encodedMessage}`, "_blank");

    // Reset form fields after submission
    handleClear();
  };

  const handleClear = () => {
    setDepartment("");
    setDoctor("");
    setDate("");
    setTime("");
    setName("");
    setPhone("");
    setMessage("");
  };

  // Filter out booked time slots for the selected department
  const availableTimes = allTimes.filter(
    (t) => !bookedSlots[department as keyof typeof bookedSlots]?.includes(t)
  );

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
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="department"
                    className="text-sm font-medium text-gray-700"
                  >
                    Department <span className="text-red-500">*</span>
                  </label>
                  <Select
                    value={department}
                    onValueChange={setDepartment}
                    required
                  >
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Select Department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept.toLowerCase()}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="doctor"
                    className="text-sm font-medium text-gray-700"
                  >
                    Doctor <span className="text-red-500">*</span>
                  </label>
                  <Select value={doctor} onValueChange={setDoctor} required>
                    <SelectTrigger id="doctor" disabled={!department}>
                      <SelectValue placeholder="Select Doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableDoctors.map((doc) => (
                        <SelectItem
                          key={doc}
                          value={doc.toLowerCase().replace(/\s+/g, "-")}
                        >
                          {doc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="date"
                    className="text-sm font-medium text-gray-700"
                  >
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
                    <Calendar
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="time"
                    className="text-sm font-medium text-gray-700"
                  >
                    Time <span className="text-red-500">*</span>
                  </label>
                  <Select value={time} onValueChange={setTime} required>
                    <SelectTrigger id="time" disabled={!department}>
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
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10"
                    placeholder="Enter your name"
                    required
                  />
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-10"
                    placeholder="Enter your phone number"
                    required
                  />
                  <Phone
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Additional Message
                </label>
                <div className="relative">
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="pl-10 pt-2"
                    placeholder="Any additional information..."
                    rows={4}
                  />
                  <MessageSquare
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <Button variant="outline" type="reset">
                  Clear
                </Button>
                <Button type="submit">Book Appointment</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
