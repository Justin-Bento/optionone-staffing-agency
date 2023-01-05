import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQs', href: '/faqs' },
]

export default function Appbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <div className="shadow">
        <div className="wrapper">
          <nav className="flex items-center justify-between h-9" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image className="h-8" src={"/next.svg"} alt="Option One Staffing Agency Logo" width={96} height={96} />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <HiMenu className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="type-body-1"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Sign Up
              </a>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel
              htmlFocus={true}
              className="fixed inset-0 z-10 overflow-y-auto bg-white wrapper lg:hidden"
            >
              <div className="flex items-center justify-between h-10">
                <div className="flex">
                  <Link href="/" className="">
                    <span className="sr-only">Your Company</span>
                    <Image className="h-8" src={"/next.svg"} alt="Option One Staffing Agency Logo" width={96} height={96} />
                  </Link>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <HiX className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="flow-root mt-6">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="py-6 space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 -mx-3 rounded-lg type-body-1 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </>
  );
}
