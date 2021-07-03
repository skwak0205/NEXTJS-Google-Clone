import Image from 'next/image';

const Avatar = ({ className, url }) => {
  return (
    <Image
      className={`rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      src={url}
      width={40}
      height={40}
      alt='profile pic'
    />
  );
};

export default Avatar;
