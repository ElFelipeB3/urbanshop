import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MainContent() {
  return (
    <main className="flex-1 p-6">
      <div className="max-w-4xl">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="text-orange-400 text-sm font-bold mb-2">WELCOME TO THE OFFICIAL</div>
          <h2 className="text-4xl font-bold text-white mb-4">UrbanBuilders Server</h2>
          <p className="text-gray-300 mb-4">Welcome to UrbanBuilders - A premium theme for Tebex Webstore.</p>
          <p className="text-gray-300 mb-6">
            This is the place for you to enhance your Server experience. We offer ranks, Mystery Boxes, Building
            Materials, City Plots, and more. You can choose the product category in the site navigation at the top or by
            clicking on the category list above.
          </p>
          <p className="text-gray-400 text-sm mb-8">All payments are handled and secured by Tebex.</p>
        </div>

        {/* Help & Support */}
        <Card className="bg-gray-800/90 border-gray-700 mb-6">
          <CardHeader>
            <CardTitle className="text-orange-400 text-lg font-bold flex items-center">🛠️ HELP & SUPPORT</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">
              We have an active and passionate Staff Team which is always happy to help you or answer your questions!
            </p>
            <p className="text-gray-300">
              The quickest way to ask questions or seek help with minor issues is to{" "}
              <span className="text-orange-400">join our Discord Server</span>.
            </p>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">🎮 Discord server</Button>
          </CardContent>
        </Card>

        {/* Policy Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Refund Policy */}
          <Card className="bg-gray-800/90 border-gray-700">
            <CardHeader>
              <CardTitle className="text-orange-400 text-lg font-bold flex items-center">⚠️ REFUND POLICY</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm mb-4">
                All payments are <span className="text-red-400">final</span> and{" "}
                <span className="text-red-400">non-refundable</span>. Attempting a chargeback or opening a PayPal
                dispute will result in <span className="text-red-400">permanent</span> and{" "}
                <span className="text-red-400">irreversible banishment</span> from all of our servers, and other stores.
              </p>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">📋 Terms & Conditions</Button>
            </CardContent>
          </Card>

          {/* Privacy Policy */}
          <Card className="bg-gray-800/90 border-gray-700">
            <CardHeader>
              <CardTitle className="text-orange-400 text-lg font-bold flex items-center">🔒 PRIVACY POLICY</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm mb-4">
                All information that is required on this webstore is <span className="text-green-400">not shared</span>{" "}
                with any other third parties and is stored <span className="text-green-400">securely</span>. All
                payments are processed via SSL enabled gateways and ensure that your payment details are secure.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">🔒 Privacy Policy</Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>Copyright © 2024 UrbanBuilders Server, All Rights Reserved.</p>
          <p>We are not affiliated with Mojang AB.</p>
        </div>
      </div>
    </main>
  )
}
