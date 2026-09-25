import React from "react"

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  includes: string[]
  timeline: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, includes, timeline }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="space-y-2 text-gray-700 mb-4">
        {includes.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
      <div className="text-sm text-gray-600 mt-4">
        <strong>Timeline:</strong> {timeline}
      </div>
    </div>
  )
}
