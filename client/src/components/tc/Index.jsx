import React from 'react'
import ErrorPage from '../errorpage/ErrorPage'

export default function Index() {
  return (
    <>
      <div className="px-6 py-6 border-b border-[#3F72AF] bg-[#112D4E] sm:flex sm:items-center sm:justify-between sm:px-8 lg:px-10 shadow-lg">
        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-semibold text-white sm:truncate">Terms & Conditions</h1>
        </div>
      </div>
      <div className="px-4 mt-6 sm:px-6 lg:px-8">
        <div className="px-4 mt-6 sm:px-6 lg:px-8">
          <div className="px-6 py-16 rounded-lg shadow-md bg-gray-50 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Terms & Conditions</h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Welcome to <span className="font-semibold text-indigo-600">Intrepid.Expert</span>. These terms outline the rules and regulations for using our platform.
              </p>
            </div>

            <div className="max-w-5xl mx-auto mt-10 space-y-8 text-lg text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900">1. Account Registration</h2>
                <ul className="pl-6 mt-2 space-y-2 list-disc">
                  <li>Users must be at least 21 years old to register.</li>
                  <li>Each phone number can only be linked to one account.</li>
                  <li>Re-binding the same wallet to multiple accounts is prohibited.</li>
                  <li>Keep account credentials confidential; unauthorized access is not the platform's liability.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900">2. Platform Usage</h2>
                <ul className="pl-6 mt-2 space-y-2 list-disc">
                  <li>The system randomly allocates Travel Journeys, and once allocated, changes, cancellations, or abandonment of Travel Journeys are strictly prohibited.</li>
                  <li>Any inappropriate use of the account will result in legal action.</li>
                  <li>Users must comply with all applicable laws and regulations when using the platform.</li>
                  <li>The platform may require additional verification steps, such as identity verification or address verification, before allowing users to use certain features.</li>
                  <li>The platform reserves the right to terminate or suspend user accounts at any time, with or without cause.</li>
                  <li>Users must provide accurate and up-to-date information when registering an account and using the platform.</li>
                  <li>Users shall not engage in any fraudulent activity, including the creation of multiple accounts or manipulation of the system to receive more than the permitted quantity of Travel Journeys.</li>
                  <li>Users must not share their account information, including login credentials and withdrawal codes, with anyone else.</li>
                  <li>The platform reserves the right to restrict or terminate a user's access to certain features or services if the user violates any of the terms and conditions.</li>
                  <li>Users must agree to receive communications from the Platform, including messages and notifications regarding their accounts and Travel Journeys.</li>
                  <li>When completing the account daily Travel Journeys, users can contact live support to claim $1-1000.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900">3. Travel Journeys</h2>
                <ul className="pl-6 mt-2 space-y-2 list-disc">
                  <li>Ensure that all Travel Journeys are completed before you can withdraw or reset your account.</li>
                  <li>Accounts with a balance of less than 50 cannot be assigned a Travel Journey. Ensure that you have a balance of at least 50 before accepting any Travel Journeys.</li>
                  <li>Travel Journeys must be completed within one day of acceptance. If unable to complete within one day, inform customer service immediately.</li>
                  <li>Each Daily Travel Journey may contain 0-3 set Ultimate Journeys.</li>
                  <li>Each Ultimate package may contain 1-3 Journeys.</li>
                  <li>All exchange rates will follow the regulations of the platform's financial department, and there will be different exchange rates every minute.</li>
                  <li>An upgrade on Member Tier Level will reward Ultimate Journeys.</li>
                  <li>Any delay in completion must be approved by the Merchant. The platform will calculate the amount of the delay fee to be paid according to the delay fee given by the Merchant. Please contact Customer Service for more information.</li>
                  <li>Failure to complete the assigned Travel Journey within the given time frame will result in the account being permanently frozen, and the amount in the account may not be withdrawn.</li>
                  <li>Accounts can only be deleted when they are completed and have a 0 balance.</li>
                  <li>Each account has the possibility to get a reset assigned order bonus.</li>
                  <li>Each of the 16 assigned Travel Journeys may include random Ultimate Journeys.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900">4. Withdrawal</h2>
                <ul className="pl-6 mt-2 space-y-2 list-disc">
                  <li>Withdrawal of salary can only be submitted after all assigned Travel Journeys have been completed.</li>
                  <li>You can withdraw your earned funds on the platform, subject to certain conditions.</li>
                  <li>All daily Travel Journeys must be assigned before the account is withdrawn or reset.</li>
                  <li>Before proceeding with withdrawal, ensure that you have bound your withdrawal address on the platform.</li>
                  <li>Withdraw your funds on the menu page "Withdrawal" interface. Click the "Withdrawal" button and input the amount you want to withdraw and your Withdrawal pin to proceed with withdrawal.</li>
                  <li>The Withdrawal duration is within 20 minutes, and the withdrawal time is the same as the platform's operating time.</li>
                  <li>Withdrawals can only be applied if the credit score is 100. If it is less than 100, please contact live support for details.</li>
                  <li>New users must verify KYC on their own account before proceeding with withdrawal.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900">5. Liability and Disputes</h2>
                <p className="mt-2 text-gray-700">This section of the terms is important and you should read it carefully.</p>
                <ul className="pl-6 mt-2 space-y-2 list-disc">
                  <li>The Platform is not responsible for any loss or damage arising from the use of the Platform or any assigned Travel Journeys.</li>
                  <li>Users are responsible for ensuring that their accounts contain the funds required to complete any assigned Travel Journeys they accept.</li>
                  <li>The Platform is not responsible for any loss of funds due to the User's failure to complete the assigned Travel Journeys or due to unauthorized access to the User's account.</li>
                  <li>The platform reserves the right to investigate and take appropriate action against any user suspected of engaging in fraudulent activity.</li>
                  <li>The platform may collect and use personal information in accordance with its privacy policy.</li>
                  <li>Only one wallet can be used to transfer funds from one account, and the wallet address must be the same as the account withdrawal address.</li>
                  <li>Each account will have one opportunity to activate the reserve fund per daily assigned Travel Journey.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900">6. Modifications and Termination</h2>
                <ul className="pl-6 mt-2 space-y-2 list-disc">
                  <li>The platform reserves the right to modify or update the terms and conditions at any time without prior notice. It is the user's responsibility to review the terms periodically.</li>
                  <li>The platform may terminate or suspend user accounts at any time, with or without cause.</li>
                  <li>The platform may charge fees for certain services or features, and users will be notified of any such fees before they are incurred.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900">7.4. Business Losses</h2>
                <ul className="pl-6 mt-2 space-y-2 list-disc">
                  <li>Loss of profits, sales or contracts;</li>
                  <li>Loss of income or revenue;</li>
                  <li>Loss of business opportunity or goodwill or reputation; or</li>
                  <li>Wasted management or office time.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900">8. Governing Law and Jurisdiction</h2>
                <ul className="pl-6 mt-2 space-y-2 list-disc">
                  <li>This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction where Intrepid.Expert is registered.</li>
                  <li>Any disputes arising from this Agreement shall be resolved by the courts of the jurisdiction where Intrepid.Expert is registered.</li>
                </ul>
              </section>

              <footer className="mt-6 text-sm text-gray-600">
                <p>Dear member, kindly read carefully for our Rules Description, thank you for your cooperation.</p>
                <p className="mt-2">2025 Business IntrepidTravel Expert Ltd. All rights reserved.</p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
