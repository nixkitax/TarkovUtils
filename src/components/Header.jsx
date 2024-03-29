import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  CurrencyRupeeIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Logo from './Logo'


const products = [
  { name: 'escapefromtarkov', description: 'escapefromtarkov.fandom.com', href: 'https://escapefromtarkov.fandom.com/wiki/Escape_from_Tarkov_Wiki', icon: ChartPieIcon },
  { name: 'tarkov.dev', description: 'Doc of tarkorv\'s Api', href: 'https://tarkov.dev/api/', icon: CursorArrowRaysIcon },
  { name: 'Tarkov\'s API playground', description: 'Come here to test Tarkov\'s API', href: 'https://api.tarkov.dev/', icon: FingerPrintIcon },
  { name: 'GraphQL Foundation Resources', description: 'Doc of GraphQL', href: 'https://graphql.org/learn/', icon: SquaresPlusIcon },
  { name: 'Tarkov Changes', description: 'Patches of Tarkov', href: 'https://tarkov-changes.com/', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'GitHub of Tarkov API', href: 'https://github.com/the-hideout/tarkov-api', icon: PlayCircleIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="flex flex-row items-center justify-between top-0 left-0 right-0 z-50 border-2 border-yellow-200/35"
      style={{ background: 'linear-gradient(to top right, rgba(45,45,35,.75), rgba(6,13,12,.95))' }}>
      <div className="ml-4 mt-4 mb-2">
        <a href="/">
          <Logo />
        </a>
      </div>
      <nav className="flex max-w-7xl p-6 lg:px-8 mr-10 mt-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Nixkita</span>
          </a>
        </div>
        <div className="flex lg:hidden ">
          <button
            type="button"
            className=" w-fit inline-flex  rounded-md p-2.5 text-gray-700 ml-auto"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-10 w-10 text-white" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <span className='text-xl text-white'> Wiki </span>
              <ChevronDownIcon className="h-7 w-7 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute z-50 mt-3 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                style={{
                  left: `calc(50% - min(50vw, 400px))`,
                  width: `min(100vw, 800px)`,
                }}
              >                <div className="p-4 ">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 text-white"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>


          <a href="https://tarkov-market.com/" className="text-sm font-semibold leading-6 text-gray-900">
            <span className='text-xl text-white'> About </span>
          </a>
          <a href="/Login" className="text-sm font-semibold leading-6 text-gray-900">
            <span className='text-xl text-white'> Log in </span>
          </a>
        </Popover.Group>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">nixkitax</span>
              <CurrencyRupeeIcon className='h-10 w-10' aria-hidden="true" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-black" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 mt-10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Wiki
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/Maps"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Maps
                </a>
                <a
                  href="/Marketplace"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="https://main--nixkita.netlify.app"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  whoami
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/Login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header >

  )
}