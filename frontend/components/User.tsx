import Image from 'next/image';
type props={
  name:string
  profile:string
}
const User = ({name,profile}:props) => {
  console.log("props",name,profile);
  return (
    <div className='flex items-center gap-3'>
      <Image className='rounded' src={profile} width={35} height={35} alt='user'/>
      <span className=''>{name}</span>
    </div>
  )
}

export default User
