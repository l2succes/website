import React from "react"

export const SkillsSection: React.FC = () => {
  return (
    <>
      <div className="flex flex-1 border-y border-x-black my-10"></div>
      <div className="font-demibold text-4xl leading-normal my-20 mx-4">Skills & Technologies</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 mx-4">
        <div>
          <h3 className="text-xl font-semibold mb-4">Engineering</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Full-stack development</li>
            <li>• React, Next.js, TypeScript</li>
            <li>• Node.js, Python, Go</li>
            <li>• AWS, Docker, Kubernetes</li>
            <li>• Database design & optimization</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Design & Product</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• User experience design</li>
            <li>• Product strategy & roadmap</li>
            <li>• Figma, Adobe Creative Suite</li>
            <li>• Design systems & prototyping</li>
            <li>• User research & testing</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Entrepreneurship</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Startup strategy & execution</li>
            <li>• Fundraising & investor relations</li>
            <li>• Team building & leadership</li>
            <li>• Product-market fit discovery</li>
            <li>• Growth hacking & analytics</li>
          </ul>
        </div>
      </div>
    </>
  )
}
