'use client'

import { appStore } from '@/store/store'
import { useState } from 'react'
import IndiaMap from 'react-svgmap-india'
import JapanMap from 'react-svgmap-japan'
import USAMap from 'react-svgmap-usa'

export default function MapComponent() {
    const [state, setState] = useState('')
    const country = appStore((state: any) => state.country)
    console.log(state)
    console.log(country)

    const getComponent = () => {
        switch (country) {
            case 'india':
                return IndiaMap
            case 'usa':
                return USAMap
            case 'japan':
                return JapanMap
            default:
                return IndiaMap
        }
    }
    const Component = getComponent()

    return (
        <div className='w-[50%] flex item-center justify-center'>
            <Component
                onClick={(s: string) => setState(s)}
                size='500px'
                mapColor='#111111'
                strokeColor='#ffffff'
                hoverColor='#ffffff'
            />
        </div>
    )
}
