import MapComponent from '@/components/MapComponent'
import Metadata from '@/components/Metadata'
import { Spotlight } from '@/components/ui/Spotlight'

export default function Home() {

    return (
        <main className='flex w-full h-full absolute p-10 justify-center items-center'>
            <Spotlight
                className='-top-40 left-0 md:left-60 md:-top-20'
                fill='white'
            />
            <MapComponent />
            <Metadata />
        </main>
    )
}
