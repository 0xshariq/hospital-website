"use client";
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight, Frown, Meh, Smile } from 'lucide-react'

type FeedbackType = 'Feedback' | 'Complaint'
type PatientType = 'In Patient' | 'Out Patient'
type Rating = 'Bad' | 'Poor' | 'Average' | 'Good' | 'Excellent'

export default function FeedbackForm() {
  const [location, setLocation] = useState('')
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('Feedback')
  const [patientType, setPatientType] = useState<PatientType>('Out Patient')
  const [overallExperience, setOverallExperience] = useState<Rating>('Average')
  const [doctorCommunication, setDoctorCommunication] = useState<Rating>('Average')
  const [nursingCare, setNursingCare] = useState<Rating>('Average')
  const [recommendService, setRecommendService] = useState<'Yes' | 'No'>('Yes')
  const [additionalComments, setAdditionalComments] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [patientId, setPatientId] = useState('')
  const [incidentDate, setIncidentDate] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted')
  }

  const handleReset = () => {
    setLocation('')
    setFeedbackType('Feedback')
    setPatientType('Out Patient')
    setOverallExperience('Average')
    setDoctorCommunication('Average')
    setNursingCare('Average')
    setRecommendService('Yes')
    setAdditionalComments('')
    setName('')
    setEmail('')
    setPhone('')
    setPatientId('')
    setIncidentDate('')
  }

  const RatingScale = ({ value, onChange }: { value: Rating, onChange: (rating: Rating) => void }) => (
    <div className="flex space-x-4">
      {(['Bad', 'Poor', 'Average', 'Good', 'Excellent'] as Rating[]).map((rating) => (
        <button
          key={rating}
          type="button"
          onClick={() => onChange(rating)}
          className={`flex flex-col items-center transition-colors duration-300 ${value === rating ? 'text-blue-600' : 'text-gray-400'}`}
        >
          {rating === 'Bad' && <Frown className="w-6 h-6" />}
          {rating === 'Poor' && <Frown className="w-6 h-6" />}
          {rating === 'Average' && <Meh className="w-6 h-6" />}
          {rating === 'Good' && <Smile className="w-6 h-6" />}
          {rating === 'Excellent' && <Smile className="w-6 h-6" />}
          <span className="text-sm">{rating}</span>
        </button>
      ))}
    </div>
  )

  return (
    <div className={`min-h-screen bg-gray-100 py-12 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-800 text-white py-4 px-6">
          <h1 className="text-2xl font-bold">Feedback</h1>
          <nav className="text-sm breadcrumbs">
            <ul className="flex items-center space-x-2">
              <li><Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">Home</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li>Feedback</li>
            </ul>
          </nav>
        </div>
        <div className="p-6">
          <p className="mb-6 text-gray-600">
            We aim to provide a professional, friendly and efficient service to all our patients. However, if you have any concerns about any aspect of our service, please let us know. We would be happy to hear from you, and always strive to improve and enhance our service to you. Please ask for the Centre Manager in the first instance who will be happy to help. In the majority of cases, concerns can be resolved quite easily. We also have a suggestion box for you to post your suggestion anonymously if you wish or fill the below online form.
          </p>
          <form onSubmit={handleSubmit} onReset={handleReset} className="space-y-6">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Choose your location for which you want to give feedback</label>
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors duration-300"
              >
                <option value="">Select a location</option>
                <option value="Extra Care Medical Center" selected>Extra Care Medical Center</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-700">Please choose your feedback type</span>
              <div className="mt-2 space-x-4">
                {(['Feedback', 'Complaint'] as FeedbackType[]).map((type) => (
                  <label key={type} className="inline-flex items-center">
                    <input
                      type="radio"
                      value={type}
                      checked={feedbackType === type}
                      onChange={() => setFeedbackType(type)}
                      className="form-radio text-blue-600 transition-colors duration-300"
                    />
                    <span className="ml-2">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            {feedbackType === 'Complaint' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="date"
                    value={incidentDate}
                    onChange={(e) => setIncidentDate(e.target.value)}
                    placeholder="Incident Date*"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors duration-300"
                    required
                  />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name of Complainant*"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors duration-300"
                    required
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone*"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors duration-300"
                    required
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email*"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors duration-300"
                    required
                  />
                </div>
                <textarea
                  value={additionalComments}
                  onChange={(e) => setAdditionalComments(e.target.value)}
                  placeholder="Write here*"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors duration-300"
                  required
                ></textarea>
              </div>
            )}
            {feedbackType === 'Feedback' && (
              <div className="animate-fadeIn">
                <div>
                  <span className="block text-sm font-medium text-gray-700">I am providing feedback as a</span>
                  <div className="mt-2 space-x-4">
                    {(['In Patient', 'Out Patient'] as PatientType[]).map((type) => (
                      <label key={type} className="inline-flex items-center">
                        <input
                          type="radio"
                          value={type}
                          checked={patientType === type}
                          onChange={() => setPatientType(type)}
                          className="form-radio text-blue-600 transition-colors duration-300"
                        />
                        <span className="ml-2">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-700">1. My overall experience was</span>
                  <RatingScale value={overallExperience} onChange={setOverallExperience} />
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-700">2. Doctor communication and treatment was</span>
                  <RatingScale value={doctorCommunication} onChange={setDoctorCommunication} />
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-700">3. Nursing care was</span>
                  <RatingScale value={nursingCare} onChange={setNursingCare} />
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-700">4. Would you like to use or recommend our service again?</span>
                  <div className="mt-2 space-x-4">
                    {(['Yes', 'No'] as const).map((option) => (
                      <label key={option} className="inline-flex items-center">
                        <input
                          type="radio"
                          value={option}
                          checked={recommendService === option}
                          onChange={() => setRecommendService(option)}
                          className="form-radio text-blue-600 transition-colors duration-300"
                        />
                        <span className="ml-2">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="comments" className="block text-sm font-medium text-gray-700">5. Do you have any additional comments or praises you would like to make?</label>
                  <textarea
                    id="comments"
                    value={additionalComments}
                    onChange={(e) => setAdditionalComments(e.target.value)}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors duration-300"
                    placeholder="Write here"
                  ></textarea>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700">Leave your details</h3>
                  <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name*"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors duration-300"
                      required
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email*"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors duration-300"
                      required
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone*"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors duration-300"
                      required
                    />
                    <input
                      type="text"
                      value={patientId}
                      onChange={(e) => setPatientId(e.target.value)}
                      placeholder="Patient Id"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors duration-300"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-between space-x-4">
              <button
                type="submit"
                className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
              >
                Submit
              </button>
              <button
                type="reset"
                className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}