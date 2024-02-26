'use client'

import { appStore } from '@/store/store'

export default function Metadata() {
    const updateCountry = appStore((state: any) => state.updateCountry)
    return (
        <div className='w-[50%] flex flex-col justify-center items-center'>
            Metadata
            <select id='countries' onClick={(e: any) => updateCountry(e.target.value)}>
                <option value='india'>India</option>
                <option value='usa'>USA</option>
                <option value='japan'>Japan</option>
            </select>
        </div>
    )
}
