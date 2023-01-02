import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

// type Props = {}

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center p-5 justify-between">
        <Link href="/" className="text-[#F7AB0A] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A] mr-2" />
          Go to Website
        </Link>
        <h1 className="text-white">Sam Wynne Portfolio Blog</h1>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar