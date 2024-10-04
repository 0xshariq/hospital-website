"use client"

import { useState, useEffect } from 'react';
import { Calendar, User, Phone, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AppointmentForm() {
  const [department, setDepartment] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [availableDoctors, setAvailableDoctors] = useState<string[]>([]);

  const departments = ["Cardiology", "Dental", "Internal Medicine"];
  const doctorsByDepartment = {
    cardiology: ["Dr. Mohammad Rafiq Yassin"],
    dental: ["Dr. Abeer Khan"],
    "internal medicine": ["Dr. Mohammad Rafiq Yassin"]
  };
  const times = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  useEffect(() => {
    if (department) {
      setAvailableDoctors(doctorsByDepartment[department as keyof typeof doctorsByDepartment] || []);
      setDoctor(''); // Reset selected doctor when department changes
    } else {
      setAvailableDoctors([]);
    }
  }, [department]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ department, doctor, date, time, name, phone, message });
  }

  const handleClear = () => {
    setDepartment('');
    setDoctor('');
    setDate('');
    setTime('');
    setName('');
    setPhone('');
    setMessage('');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">Healthcare</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Book Your Appointment</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="department" className="text-sm font-medium text-gray-700">Department</label>
                  <Select value={department} onValueChange={setDepartment}>
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Select Department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept.toLowerCase()}>{dept}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="doctor" className="text-sm font-medium text-gray-700">Doctor</label>
                  <Select value={doctor} onValueChange={setDoctor}>
                    <SelectTrigger id="doctor" disabled={!department}>
                      <SelectValue placeholder="Select Doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableDoctors.map((doc) => (
                        <SelectItem key={doc} value={doc.toLowerCase().replace(/\s+/g, '-')}>{doc}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-gray-700">Date</label>
                  <div className="relative">
                    <Input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="pl-10"
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium text-gray-700">Time</label>
                  <Select value={time} onValueChange={setTime}>
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Select Time" />
                    </SelectTrigger>
                    <SelectContent>
                      {times.map((t) => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                <div className="relative">
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10"
                    placeholder="Enter your name"
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                <div className="relative">
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-10"
                    placeholder="Enter your phone number"
                  />
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Additional Message</label>
                <div className="relative">
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="pl-10 pt-2"
                    placeholder="Any additional information..."
                    rows={4}
                  />
                  <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <Button variant="outline" type="button" onClick={handleClear}>
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