'use client'
import { SearchManufacturerProps } from '@/types'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useState, Fragment } from 'react'
import { manufacturers } from '@/constants'

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
    const [query, setQuery] = useState('')
    const filteredManufacturers = 
        query === '' 
            ?manufacturers
            : manufacturers.filter((item)=>(
                item
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            ))
  return (
    <div className="search-manufacturer">
        <Combobox>
            <div className='relative w-full'>
                <ComboboxButton className="absolute top-[14px]">
                    <Image src="/car-logo.svg" alt='car logo' width={20} height={20} className='ml-4'/>
                </ComboboxButton>
                <ComboboxInput 
                    className="search-manufacturer__input" 
                    placeholder='Volkswagen' 
                    displayValue={(manufacture:string)=>manufacturer}
                    onChange={(e)=> setQuery(e.target.value)}
                    />
                    <Transition 
                        as={Fragment} 
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={()=> setQuery('')}
                        >
                            <ComboboxOptions>
                                {
                                    filteredManufacturers.map((item)=>(
                                        <ComboboxOption value={item} key={item} className={({active})=>
                                            `search-manufacturer__option ${active ? 'bg-blue-500 text-white' 
                                                : 'bg-gray-100 text-gray-900'}`}
                                                >
                                                    {({ selected, active }) => (
                                                        <>
                                                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                            {item}
                                                        </span>
                                                        {/* Show an active blue background color if the option is selected */}
                                                        {selected ? (
                                                            <span 
                                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white"
                                                                    : "text-pribg-primary-purple"}`}
                                                            ></span>) 
                                                        : null}
                                                        </>
                                                    )}
                                        </ComboboxOption>
                                    )
                                ) }
                            </ComboboxOptions>
                    </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer