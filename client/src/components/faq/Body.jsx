import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

export default function Body() {
  return (
    <div className="bg-white">
      <div className="p-6 mx-auto max-w-7xl sm:py-10 lg:px-8 lg:py-10">
        <div className="max-w-4xl mx-auto divide-y divide-gray-900/10">
          <dl className="space-y-3 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pb-6">
                <dt>
                  <DisclosureButton className="flex items-start justify-between w-full text-left text-gray-900 group">
                    <span className="font-semibold text-base/7">{faq.question}</span>
                    <span className="flex items-center ml-6 h-7">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="pr-12 mt-2">
                  <p className="text-gray-600 text-base/7">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
