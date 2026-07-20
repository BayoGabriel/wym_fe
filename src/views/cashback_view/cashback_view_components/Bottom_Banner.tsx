import Link from 'next/link'
import { AppleStore, PlayStore } from '../../../assets'
import Image from 'next/image'

interface Bottom_Banner_Props {
    sectionColor: {
        container: string,
        innerContent?: string
    }
    flexItem?:boolean
    title: string
    subText?: string
}

const Bottom_Banner = ({sectionColor,flexItem,title,subText}:Bottom_Banner_Props) => {
  return (
    <section className={`${sectionColor.container} py-[15vh]`}>
        <div className={`max-w-screen-2lg 3xl:max-w-xlg w-[95%] rounded-lg  mx-auto text-white py-[0.5rem] px-8 xmd:px-16 flex items-center gap-3 xmd:gap-5 ${flexItem && 'xmd:flex-row xmd:justify-between xmd:text-start'} flex-col justify-center text-center ${sectionColor.innerContent}`}>
            <div className='flex-1'>
                <h5 className={`text-[60px] md:text-[66px] max-md:leading-[72px] leading-[64px] w-[70%] font-aeonik font-[800] ${flexItem ? 'mx-0' : 'mx-auto'}`}>{title}</h5>
                <p className={`lg:text-lg text-[12px] mt-4 xmd:mt-6 xmd:w-[80%] ${flexItem ? 'mx-0' : 'mx-auto'}`}>{subText}</p>
            </div>
            <div className='flex'>
                <Link
                href={`/auth/login`}
                target="_blank"
                className=""
                >
                <Image
                    className="block"
                    src={AppleStore}
                    alt="download image"
                />
                </Link>
                <Link
                href={`/auth/login`}
                target="_blank"
                className="pl-4 lg:mt-0 "
                >
                <Image
                    className={""}
                    src={PlayStore}
                    alt="download image"
                />
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Bottom_Banner