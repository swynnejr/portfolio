import React from 'react'
import Image from 'next/image'


function StudioLogo(props: any) {
  const {renderDefault, title } = props;

  return (
    <div className="flex items-center justify-center">
            <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/86032768?v=4"
              width={50}
              height={50}
              alt="Picture of Sam"
            />
            {/* {renderDefault && <>{props.renderDefault(props)}</>} */}
          </div>
  )
}

export default StudioLogo