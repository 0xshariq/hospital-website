import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function AppointmentButton() {
  return (
    <div className='w-full h-40 flex flex-row justify-center items-center mt-0 bg-purple-200'>
        <Link href="/appointment" passHref>
      <Button
        className="
          bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
        "
      >
        Book Your Appointment
      </Button>
    </Link>
    </div>
  )
}